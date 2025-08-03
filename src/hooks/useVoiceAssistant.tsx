
import { useState, useEffect, useCallback, useRef } from 'react';
import { toast } from 'sonner';

// Add TypeScript declarations for the Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

// Define WebkitSpeechRecognition for TypeScript
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

// Add the global declarations
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface VoiceAssistantOptions {
  onResult?: (result: string) => void;
  onError?: (error: string) => void;
  onListening?: (isListening: boolean) => void;
}

interface UseVoiceAssistantReturn {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  isSpeaking: boolean;
  speak: (text: string) => void;
  stopSpeaking: () => void;
}

export const useVoiceAssistant = (options?: VoiceAssistantOptions): UseVoiceAssistantReturn => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for browser support
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognitionConstructor();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';
      } else {
        console.warn('Speech recognition not supported in this browser');
      }

      if ('speechSynthesis' in window) {
        synthRef.current = window.speechSynthesis;
      } else {
        console.warn('Speech synthesis not supported in this browser');
      }
    }

    // Cleanup
    return () => {
      stopListening();
      stopSpeaking();
    };
  }, []);

  // Configure speech recognition events
  useEffect(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    const onResult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(' ');
      
      setTranscript(transcript);
      
      if (event.results[0].isFinal && options?.onResult) {
        options.onResult(transcript);
      }
    };

    const onError = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      if (options?.onError) {
        options.onError(event.error);
      }
      if (options?.onListening) {
        options.onListening(false);
      }
    };

    const onEnd = () => {
      setIsListening(false);
      if (options?.onListening) {
        options.onListening(false);
      }
    };

    recognition.onresult = onResult;
    recognition.onerror = onError;
    recognition.onend = onEnd;

    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
    };
  }, [options]);

  // Start listening
  const startListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      toast.error('Speech recognition is not supported in your browser');
      return;
    }

    try {
      recognition.start();
      setIsListening(true);
      setTranscript('');
      if (options?.onListening) {
        options.onListening(true);
      }
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      if (options?.onError) {
        options.onError('Failed to start speech recognition');
      }
    }
  }, [options]);

  // Stop listening
  const stopListening = useCallback(() => {
    const recognition = recognitionRef.current;
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
      if (options?.onListening) {
        options.onListening(false);
      }
    }
  }, [isListening, options]);

  // Speak text
  const speak = useCallback((text: string) => {
    const synth = synthRef.current;
    if (!synth) {
      toast.error('Speech synthesis is not supported in your browser');
      return;
    }

    // Stop any previous speech
    stopSpeaking();

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Set language and voice (if available)
    utterance.lang = 'en-US';
    
    // Try to find a good voice
    const voices = synth.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Google') || voice.name.includes('Female') ||
      voice.name.includes('US English')
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    synth.speak(utterance);
  }, []);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    const synth = synthRef.current;
    if (synth) {
      synth.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    isSpeaking,
    speak,
    stopSpeaking,
  };
};
