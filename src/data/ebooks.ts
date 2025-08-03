
export interface Ebook {
  id: string;
  title: string;
  author: string;
  link: string;
  category: string[];
  coverImage: string;
  chapters: any[];
}

export const ebooks: Ebook[] = [
  {
    id: "ebook-1",
    title: "Environmental Studies",
    author: "Poonia, MP; Sharma, SC",
    link: "https://books.google.com/books?q=Environmental+Studies+MP+Poonia+SC+Sharma",
    category: ["Environmental Science"],
    coverImage: "https://covers.openlibrary.org/b/title/Environmental-Studies-L.jpg",
    chapters: []
  },
  {
    id: "ebook-2",
    title: "Environmental Studies",
    author: "Rajagopalan",
    link: "https://books.google.com/books?q=Environmental+Studies+Rajagopalan",
    category: ["Environmental Science"],
    coverImage: "https://covers.openlibrary.org/b/title/Environmental-Studies-L.jpg",
    chapters: []
  },
  {
    id: "ebook-3",
    title: "Technical Communication",
    author: "Raman, Meenakshi; Sharma, Sangeeta",
    link: "https://books.google.com/books?q=Technical+Communication+Meenakshi+Raman+Sangeeta+Sharma",
    category: ["Communication Skills"],
    coverImage: "https://covers.openlibrary.org/b/title/Technical-Communication-L.jpg",
    chapters: []
  },
  {
    id: "ebook-4",
    title: "Communication Skills",
    author: "Kumar, Santhosh",
    link: "https://books.google.com/books?q=Communication+Skills+Santhosh+Kumar",
    category: ["Communication Skills"],
    coverImage: "https://covers.openlibrary.org/b/title/Communication-Skills-L.jpg",
    chapters: []
  },
  {
    id: "ebook-5",
    title: "Engineering Drawing",
    author: "Bhatt, N. D.",
    link: "https://books.google.com/books?q=Engineering+Drawing+N+D+Bhatt",
    category: ["Engineering Drawing"],
    coverImage: "https://covers.openlibrary.org/b/title/Engineering-Drawing-L.jpg",
    chapters: []
  },
  {
    id: "ebook-6",
    title: "Engineering Drawing",
    author: "Shah; Rana",
    link: "https://books.google.com/books?q=Engineering+Drawing+Shah+Rana",
    category: ["Engineering Drawing"],
    coverImage: "https://covers.openlibrary.org/b/title/Engineering-Drawing-L.jpg",
    chapters: []
  },
  {
    id: "ebook-7",
    title: "Engineering Chemistry",
    author: "Chawla, Shashi",
    link: "https://books.google.com/books?q=Engineering+Chemistry+Shashi+Chawla",
    category: ["Chemistry"],
    coverImage: "https://covers.openlibrary.org/b/title/Engineering-Chemistry-L.jpg",
    chapters: []
  },
  {
    id: "ebook-8",
    title: "Advanced Engineering Mathematics",
    author: "Kreyszig, Erwin",
    link: "https://books.google.com/books?q=Advanced+Engineering+Mathematics+Kreyszig",
    category: ["Mathematics"],
    coverImage: "https://covers.openlibrary.org/b/title/Advanced-Engineering-Mathematics-L.jpg",
    chapters: []
  },
  {
    id: "ebook-9",
    title: "Higher Engineering Mathematics",
    author: "Grewal, B. S.",
    link: "https://books.google.com/books?q=Higher+Engineering+Mathematics+B+S+Grewal",
    category: ["Mathematics"],
    coverImage: "https://covers.openlibrary.org/b/title/Higher-Engineering-Mathematics-L.jpg",
    chapters: []
  },
  {
    id: "ebook-10",
    title: "Probability and Statistics for Engineers and Scientists",
    author: "Ross, Sheldon M.",
    link: "https://books.google.com/books?q=Probability+and+Statistics+for+Engineers+and+Scientists+Sheldon+Ross",
    category: ["Mathematics", "Statistics"],
    coverImage: "https://covers.openlibrary.org/b/title/Probability-and-Statistics-for-Engineers-and-Scientists-L.jpg",
    chapters: []
  },
  {
    id: "ebook-11",
    title: "Numerical Methods for Engineers",
    author: "Chapra, Steven C.; Canale, Raymond P.",
    link: "https://books.google.com/books?q=Numerical+Methods+for+Engineers+Steven+Chapra+Raymond+Canale",
    category: ["Mathematics", "Numerical Methods"],
    coverImage: "https://covers.openlibrary.org/b/title/Numerical-Methods-for-Engineers-L.jpg",
    chapters: []
  },
  {
    id: "ebook-12",
    title: "Membrane Technology in Separation Science",
    author: "Purkait, Mihir K.; Singh, Randeep",
    link: "https://books.google.com/books?q=Membrane+Technology+in+Separation+Science+Mihir+K+Purkait+Randeep+Singh",
    category: ["Chemical Engineering", "Separation Processes"],
    coverImage: "https://covers.openlibrary.org/b/title/Membrane-Technology-in-Separation-Science-L.jpg",
    chapters: []
  },
  {
    id: "ebook-13",
    title: "Chemical Reaction Engineering",
    author: "Doraiswamy, L. K.",
    link: "https://books.google.com/books?q=Chemical+Reaction+Engineering+L+K+Doraiswamy",
    category: ["Chemical Engineering", "Reactor Engineering"],
    coverImage: "https://covers.openlibrary.org/b/title/Chemical-Reaction-Engineering-L.jpg",
    chapters: []
  },
  {
    id: "ebook-14",
    title: "Machine Learning",
    author: "Jain, V.K.",
    link: "https://books.google.com/books?q=Machine+Learning+V+K+Jain",
    category: ["Computer Science", "Machine Learning"],
    coverImage: "https://covers.openlibrary.org/b/title/Machine-Learning-L.jpg",
    chapters: []
  },
  {
    id: "ebook-15",
    title: "Data Science and Analytics",
    author: "Jain, V. K.",
    link: "https://books.google.com/books?q=Data+Science+and+Analytics+V+K+Jain",
    category: ["Computer Science", "Data Science"],
    coverImage: "https://covers.openlibrary.org/b/title/Data-Science-and-Analytics-L.jpg",
    chapters: []
  }
];
