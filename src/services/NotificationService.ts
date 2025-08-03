
import { Book } from '../context/LibraryContext';

// Helper function to determine if a notification should be sent
export const shouldSendNotification = (dueDate: string | Date): boolean => {
  const now = new Date();
  const dueDateObject = dueDate instanceof Date ? dueDate : new Date(dueDate);
  const daysDifference = Math.floor((dueDateObject.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  // Send notifications 5, 4, 3, 2, and 1 day before due date
  return daysDifference >= 1 && daysDifference <= 5;
};

// Function to send email notification (mock implementation)
export const sendEmailNotification = (userEmail: string, book: Book, daysRemaining: number): void => {
  // In a real application, this would call an API to send an email
  console.log(`Email notification sent to ${userEmail} for book "${book.title}" due in ${daysRemaining} days`);
};

// Check for books that need notifications
export const checkDueBooks = (userEmail: string, borrowedBooks: Book[]): void => {
  const now = new Date();
  
  borrowedBooks.forEach(book => {
    if (!book.dueDate) return;
    
    const dueDate = new Date(book.dueDate);
    const daysDifference = Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDifference >= 1 && daysDifference <= 5) {
      sendEmailNotification(userEmail, book, daysDifference);
    }
  });
};

export default {
  shouldSendNotification,
  sendEmailNotification,
  checkDueBooks
};
