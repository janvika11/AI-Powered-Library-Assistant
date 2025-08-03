
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useAssistant } from '@/context/AssistantContext';

const AssistantFloatingButton: React.FC = () => {
  const { isAssistantActive, activateAssistant, deactivateAssistant, isListening, transcript } = useAssistant();

  const toggleAssistant = () => {
    if (isAssistantActive) {
      deactivateAssistant();
    } else {
      activateAssistant();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isAssistantActive && transcript && (
        <div className="bg-white p-3 rounded-lg shadow-lg mb-4 max-w-xs">
          <p className="text-sm">{transcript}</p>
        </div>
      )}
      
      <Button
        onClick={toggleAssistant}
        size="lg"
        className={`rounded-full shadow-lg h-14 w-14 p-0 ${
          isAssistantActive ? 'bg-red-500 hover:bg-red-600' : 'bg-library-accent hover:bg-library-accent/90'
        } ${isAssistantActive && isListening ? 'animate-pulse-slow' : ''}`}
      >
        {isAssistantActive ? (
          <MicOff className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default AssistantFloatingButton;
