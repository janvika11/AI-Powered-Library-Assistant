
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, CheckCheck, Mail } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLibrary } from '@/context/LibraryContext';
import { useToast } from '@/hooks/use-toast';

const NotificationsPage = () => {
  const { userEmail, setUserEmail } = useLibrary();
  const [tempEmail, setTempEmail] = useState(userEmail || '');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [dueDateReminders, setDueDateReminders] = useState(true);
  const [newArrivalsNotifications, setNewArrivalsNotifications] = useState(false);
  const { toast } = useToast();

  const handleEmailUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setUserEmail(tempEmail);
    
    toast({
      title: "Email updated",
      description: "Your notification email has been updated.",
      duration: 3000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Bell className="mr-2 text-blue-400" />
          <span className="text-blue-400">Notification</span>
          <span className="text-black"> Settings</span>
        </h1>
        <p className="text-muted-foreground">
          Manage how and when you receive updates about your library activity
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Mail className="mr-2 h-5 w-5" />
          Email Notifications
        </h2>

        <form onSubmit={handleEmailUpdate} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address for notifications</Label>
            <div className="flex gap-2 mt-1">
              <Input 
                id="email"
                type="email" 
                value={tempEmail} 
                onChange={(e) => setTempEmail(e.target.value)}
                placeholder="your@email.com" 
                required
                className="flex-1"
              />
              <Button type="submit">Update</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              We'll send notifications to this email address
            </p>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-toggle" className="font-medium">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive all library notifications via email
              </p>
            </div>
            <Switch 
              id="email-toggle" 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="due-toggle" className="font-medium">Due Date Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Get reminders 5, 4, 3, 2, and 1 day before your books are due
              </p>
            </div>
            <Switch 
              id="due-toggle" 
              checked={dueDateReminders} 
              onCheckedChange={setDueDateReminders} 
              disabled={!emailNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="arrival-toggle" className="font-medium">New Arrivals</Label>
              <p className="text-sm text-muted-foreground">
                Be notified when new books matching your interests arrive
              </p>
            </div>
            <Switch 
              id="arrival-toggle" 
              checked={newArrivalsNotifications} 
              onCheckedChange={setNewArrivalsNotifications}
              disabled={!emailNotifications}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-2 text-green-600">
          <CheckCheck className="h-5 w-5" />
          <p>Your notification preferences have been saved automatically</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
