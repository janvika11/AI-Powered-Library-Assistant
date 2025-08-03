export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: string[];
  rack: string;
  academicYear?: string;
  semester?: string;
  chapters: string[];
  copiesAvailable: number;
  isEbook?: boolean;
  link?: string;
}

export const books: Book[] = [
  // BSC301 – Mathematics – III
  {
    id: "BSC301-MATH3-1",
    title: "Advanced Engineering Mathematics",
    author: "Chandrika Prasad & Reena Garg",
    coverImage: "",
    category: ["Mathematics", "Engineering"],
    rack: "BSC301",
    academicYear: "",
    semester: "III",
    chapters: [
      "Unit I: Algebra, Vectors, and Geometry - Solution of Equations",
      "Unit I: Algebra, Vectors, and Geometry - Linear Algebra – Determinants, Matrices",
      "Unit I: Algebra, Vectors, and Geometry - Vector Algebra",
      "Unit I: Algebra, Vectors, and Geometry - Vector Calculus",
      "Unit I: Algebra, Vectors, and Geometry - Geometry of Lines and Planes",
      "Unit II: Calculus - Differential Calculus",
      "Unit II: Calculus - Integral Calculus",
      "Unit II: Calculus - Multiple Integrals",
      "Unit II: Calculus - Differential Equations",
      "Unit III: Complex Analysis and Transforms - Complex Numbers and Functions",
      "Unit III: Complex Analysis and Transforms - Laplace Transforms",
      "Unit III: Complex Analysis and Transforms - Fourier Series and Transforms",
      "Unit IV: Numerical Methods - Numerical Solutions of Equations",
      "Unit IV: Numerical Methods - Numerical Integration and Differentiation",
      "Unit IV: Numerical Methods - Numerical Solutions of Differential Equations",
      "Unit V: Probability and Statistics - Probability Theory",
      "Unit V: Probability and Statistics - Random Variables and Distributions",
      "Unit V: Probability and Statistics - Statistical Methods"
    ],
    copiesAvailable: 30
  },
  // BSC301 – Mathematics – III
  {
    id: "BSC301-MATH3-2",
    title: "Higher Engineering Mathematics",
    author: "Ramana B.V.",
    coverImage: "",
    category: ["Mathematics", "Engineering"],
    rack: "BSC301",
    academicYear: "",
    semester: "III",
    chapters: [
      "Part I: Preliminaries - Vector Algebra, Theory of Equations, Complex Numbers",
      "Part II: Differential and Integral Calculus - Differential Calculus",
      "Part II: Differential and Integral Calculus - Partial Differentiation",
      "Part II: Differential and Integral Calculus - Maxima and Minima",
      "Part II: Differential and Integral Calculus - Curve Tracing",
      "Part II: Differential and Integral Calculus - Integral Calculus: Applications",
      "Part II: Differential and Integral Calculus - Multiple Integrals",
      "Part III: Ordinary Differential Equations - First Order ODEs with Applications",
      "Part III: Ordinary Differential Equations - Second and Higher Order ODEs with Applications",
      "Part III: Ordinary Differential Equations - Series Solutions",
      "Part III: Ordinary Differential Equations - Special Functions",
      "Part III: Ordinary Differential Equations - Laplace Transform",
      "Part IV: Linear Algebra and Vector Calculus - Matrices",
      "Part IV: Linear Algebra and Vector Calculus - Eigenvalues and Eigenvectors",
      "Part IV: Linear Algebra and Vector Calculus - Vector Differential Calculus",
      "Part IV: Linear Algebra and Vector Calculus - Vector Integral Calculus",
      "Part V: Fourier Analysis and Partial Differential Equations - Fourier Series",
      "Part V: Fourier Analysis and Partial Differential Equations - Partial Differential Equations",
      "Part V: Fourier Analysis and Partial Differential Equations - Applications of PDEs",
      "Part V: Fourier Analysis and Partial Differential Equations - Fourier Integral and Fourier Transform",
      "Part V: Fourier Analysis and Partial Differential Equations - Finite Differences and Z-Transforms",
      "Part VI: Complex Analysis - Complex Functions",
      "Part VI: Complex Analysis - Complex Integration",
      "Part VI: Complex Analysis - Theory of Residues",
      "Part VI: Complex Analysis - Conformal Mapping",
      "Part VII: Probability and Statistics - Probability Theory",
      "Part VII: Probability and Statistics - Probability Distributions",
      "Part VII: Probability and Statistics - Sampling Distributions",
      "Part VII: Probability and Statistics - Inferences Concerning Means and Proportions",
      "Part VII: Probability and Statistics - Line & Curve Fitting, Correlation and Regression",
      "Part VII: Probability and Statistics - Joint Probability Distribution and Markov Chains",
      "Part VIII: Numerical Analysis - Numerical Analysis (General)",
      "Part VIII: Numerical Analysis - Numerical Solutions of Ordinary & Partial Differential Equations"
    ],
    copiesAvailable: 30
  },
  {
    id: "BSC301-MATH3-4",
    title: "Advanced Engineering Mathematics",
    author: "Sashtry",
    coverImage: "",
    category: ["Mathematics", "Engineering"],
    rack: "BSC301",
    academicYear: "",
    semester: "III",
    chapters: [
      "Partial Differential Equations",
      "Fourier, Mellin, and Z-Transforms",
      "Discrete Mathematics",
      "Calculus of Variations",
      "Tensor Analysis"
    ],
    copiesAvailable: 30
  },

  // SEMESTER IV
  // PCC-CS401 – Discrete Mathematics
  {
    id: "PCC-CS401-DISCRETE-1",
    title: "Discrete Mathematics and Its Applications",
    author: "Chakraborty & Sarkar",
    coverImage: "",
    category: ["Discrete Mathematics"],
    rack: "PCC-CS401",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS401-DISCRETE-2",
    title: "Discrete Structures",
    author: "S.B. Singh",
    coverImage: "",
    category: ["Discrete Mathematics"],
    rack: "PCC-CS401",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS401-DISCRETE-3",
    title: "Discrete Mathematics",
    author: "T. Veerarajan",
    coverImage: "",
    category: ["Discrete Mathematics"],
    rack: "PCC-CS401",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS402– Computer Organization & Architecture
  {
    id: "PCC-CS402-COA-1",
    title: "Computer Fundamentals Architecture and Organization",
    author: "B. Ram",
    coverImage: "",
    category: ["Computer Organization"],
    rack: "PCC-CS402",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS402-COA-2",
    title: "Computer Organization & Architecture",
    author: "Rajaraman",
    coverImage: "",
    category: ["Computer Organization"],
    rack: "PCC-CS402",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS403 – Operating Systems
  {
    id: "PCC-CS403-OS-1",
    title: "Operating Systems",
    author: "Ekta Walia",
    coverImage: "",
    category: ["Operating Systems"],
    rack: "PCC-CS403",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS403-OS-2",
    title: "Operating Systems A Concept-Based Approach",
    author: "Dhananjay M. Dhamdhere",
    coverImage: "",
    category: ["Operating Systems"],
    rack: "PCC-CS403",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS404– Design & Analysis of Algorithms
  {
    id: "PCC-CS404-DAA-1",
    title: "Design & Analysis of Algorithms",
    author: "S. Sridhar",
    coverImage: "",
    category: ["Algorithms"],
    rack: "PCC-CS404",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS404-DAA-2",
    title: "Design & Analysis of Algorithms",
    author: "Sharma",
    coverImage: "",
    category: ["Algorithms"],
    rack: "PCC-CS404",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // HSMC401 – Management – I
  {
    id: "HSMC401-MGMT-1",
    title: "A Textbook of Organizational Behaviour",
    author: "CB Gupta",
    coverImage: "",
    category: ["Management"],
    rack: "HSMC401",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "HSMC401-MGMT-2",
    title: "Organizational Behaviour",
    author: "LM Prasad",
    coverImage: "",
    category: ["Management"],
    rack: "HSMC401",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // MC – Environmental Sciences
  {
    id: "MC-ENVSCI-1",
    title: "Textbook of Environmental Studies",
    author: "Erach Bharucha",
    coverImage: "",
    category: ["Environmental Science"],
    rack: "MC",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "MC-ENVSCI-2",
    title: "Environmental Studies",
    author: "MP Poonia & SC Sharma",
    coverImage: "",
    category: ["Environmental Science"],
    rack: "MC",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "MC-ENVSCI-3",
    title: "Environmental Studies",
    author: "Rajagopalan",
    coverImage: "",
    category: ["Environmental Science"],
    rack: "MC",
    academicYear: "",
    semester: "IV",
    chapters: [],
    copiesAvailable: 30
  },

  // SEMESTER V
  // ESC501 – Signals and Systems
  {
    id: "ESC501-SIGNAL-1",
    title: "Signals and Systems",
    author: "A. Anand Kumar",
    coverImage: "",
    category: ["Signals and Systems"],
    rack: "ESC501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "ESC501-SIGNAL-2",
    title: "Signals and Systems",
    author: "Tarun Rawat",
    coverImage: "",
    category: ["Signals and Systems"],
    rack: "ESC501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "ESC501-SIGNAL-3",
    title: "Signals and Systems",
    author: "Rishabh Anand",
    coverImage: "",
    category: ["Signals and Systems"],
    rack: "ESC501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "ESC501-SIGNAL-4",
    title: "Signal Processing and Linear Systems",
    author: "B.P. Lathi",
    coverImage: "",
    category: ["Signals and Systems"],
    rack: "ESC501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "ESC501-SIGNAL-5",
    title: "Signals and Systems",
    author: "J. Nagrath, S. N. Sharan, R. Ranjan, S. Kumar",
    coverImage: "",
    category: ["Signals and Systems"],
    rack: "ESC501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS501- Database Management Systems
  {
    id: "PCC-CS501-DBMS-1",
    title: "Fundamental of Database Systems",
    author: "E. Ramez and Navathe",
    coverImage: "",
    category: ["Database Management Systems"],
    rack: "PCC-CS501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS501-DBMS-2",
    title: "Database Management Systems",
    author: "R.P. Mahapatra & Govind Verma",
    coverImage: "",
    category: ["Database Management Systems"],
    rack: "PCC-CS501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS501-DBMS-3",
    title: "Database Management Systems",
    author: "Raghurama Krishan",
    coverImage: "",
    category: ["Database Management Systems"],
    rack: "PCC-CS501",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS502 - Formal Language & Automata Theory
  {
    id: "PCC-CS502-FLAT-1",
    title: "Theory of Computer Science: Automata, Languages and Computation",
    author: "Mishra",
    coverImage: "",
    category: ["Automata Theory"],
    rack: "PCC-CS502",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS502-FLAT-2",
    title: "Theory of Computation",
    author: "RB Patel & Prem Nath",
    coverImage: "",
    category: ["Automata Theory"],
    rack: "PCC-CS502",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },

  // PCC-CS503 - Object Oriented Programming
  {
    id: "PCC-CS503-OOP-1",
    title: "Object Oriented Programming with C++",
    author: "Balaguruswamy",
    coverImage: "",
    category: ["Object Oriented Programming"],
    rack: "PCC-CS503",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS503-OOP-2",
    title: "Mastering Object-Oriented Programming with C++",
    author: "R.S. Salaria",
    coverImage: "",
    category: ["Object Oriented Programming"],
    rack: "PCC-CS503",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS503-OOP-3",
    title: "Programming with Java",
    author: "Balaguruswamy",
    coverImage: "",
    category: ["Java", "Object Oriented Programming"],
    rack: "PCC-CS503",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS503-OOP-4",
    title: "Object Oriented Programming in C++ and Java",
    author: "D. Samantha",
    coverImage: "",
    category: ["Object Oriented Programming"],
    rack: "PCC-CS503",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS503-OOP-5",
    title: "Internet and Java Programming",
    author: "Tanweer Alam",
    coverImage: "",
    category: ["Java", "Internet Programming"],
    rack: "PCC-CS503",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },

  // MC- Constitution of India
  {
    id: "MC-CONST-1",
    title: "Introduction to Constitution of India",
    author: "D.D. Basu",
    coverImage: "",
    category: ["Law", "Constitution"],
    rack: "MC",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "MC-CONST-2",
    title: "The Constitution of India",
    author: "P.M. Bhakshi",
    coverImage: "",
    category: ["Law", "Constitution"],
    rack: "MC",
    academicYear: "",
    semester: "V",
    chapters: [],
    copiesAvailable: 30
  },

  // SEMESTER VI
  // PCC-CS602 - Computer Networks
  {
    id: "PCC-CS602-NET-1",
    title: "Computer Networks",
    author: "M. Dave",
    coverImage: "",
    category: ["Computer Networks"],
    rack: "PCC-CS602",
    academicYear: "",
    semester: "VI",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PCC-CS602-NET-2",
    title: "An Engineering Approach to Computer Networking",
    author: "Keshav",
    coverImage: "",
    category: ["Computer Networks"],
    rack: "PCC-CS602",
    academicYear: "",
    semester: "VI",
    chapters: [],
    copiesAvailable: 30
  },

  // COMPUTER SCIENCE & ENGINEERING PG
  // SEMESTER I
  {
    id: "PG-CS-MATH-1",
    title: "Probability and Statistics with Reliability, Queuing, and Computer Science Applications",
    author: "K. Trivedi",
    coverImage: "",
    category: ["Mathematics", "Probability", "Statistics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-MATH-2",
    title: "Schaum's Outlines of Combinatorics",
    author: "V. Balakrishnan",
    coverImage: "",
    category: ["Combinatorics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-MATH-3",
    title: "The Practice of Business Statistics",
    author: "Manish Sharma & Amit Gupta",
    coverImage: "",
    category: ["Statistics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Data Structures
  {
    id: "PG-CS-DS-1",
    title: "Data Structures Using C",
    author: "E. Balaguruswamy",
    coverImage: "",
    category: ["Data Structures"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DS-2",
    title: "Expert Data Structures with C++",
    author: "R.B. Patel",
    coverImage: "",
    category: ["Data Structures"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DS-3",
    title: "Data Structures Through C",
    author: "Yashwant Kanetkar",
    coverImage: "",
    category: ["Data Structures"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Data Science
  {
    id: "PG-CS-DSCI-1",
    title: "Data Science & Analytics",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Data Science"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DSCI-2",
    title: "Business Analytics",
    author: "Dinesh Kumar",
    coverImage: "",
    category: ["Data Science", "Business Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Machine Learning
  {
    id: "PG-CS-ML-1",
    title: "Machine Learning",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Machine Learning"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-ML-2",
    title: "Artificial Intelligence & Machine Learning",
    author: "Vinod Chandra S.S.",
    coverImage: "",
    category: ["Machine Learning"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-ML-3",
    title: "Deep Learning",
    author: "Rajiv Chopra",
    coverImage: "",
    category: ["Machine Learning"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Research Methodology and IPR
  {
    id: "PG-CS-RM-1",
    title: "Research Methodology: A Step by Step Guide for Beginners",
    author: "Ranjit Kumar",
    coverImage: "",
    category: ["Research Methodology"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-RM-2",
    title: "Intellectual Property Rights Under WTO",
    author: "T. Ramappa",
    coverImage: "",
    category: ["IPR"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-RM-3",
    title: "Business Research Methods",
    author: "Gupta",
    coverImage: "",
    category: ["Research Methodology"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Ethical Hacking
  {
    id: "PG-CS-EHACK-1",
    title: "Hacking",
    author: "Harsh Bothra",
    coverImage: "",
    category: ["Ethical Hacking"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-EHACK-2",
    title: "The Unrevealed Secrets of Hacking and Cracking",
    author: "Prateek Shukla & Navneet Mehra",
    coverImage: "",
    category: ["Ethical Hacking"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-EHACK-3",
    title: "The Unofficial Guide to Ethical Hacking",
    author: "Ankit Fadia",
    coverImage: "",
    category: ["Ethical Hacking"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Introduction to Intelligent Systems
  {
    id: "PG-CS-AI-1",
    title: "Artificial Intelligence",
    author: "M.C. Trivedi",
    coverImage: "",
    category: ["Artificial Intelligence"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-AI-2",
    title: "Artificial Intelligence",
    author: "Rich, Knight, Shivshankar",
    coverImage: "",
    category: ["Artificial Intelligence"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-AI-3",
    title: "A First Course in Artificial Intelligence",
    author: "Deepak Khemani",
    coverImage: "",
    category: ["Artificial Intelligence"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  
  // Distributed Systems
  {
    id: "PG-CS-DISTSYS-1",
    title: "Distributed Operating Systems",
    author: "Pradeep K. Sinha",
    coverImage: "",
    category: ["Distributed Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DISTSYS-2",
    title: "Distributed Systems",
    author: "Ikvinderpal Singh",
    coverImage: "",
    category: ["Distributed Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Wireless and Mobile Networks
  {
    id: "PG-CS-MOBNET-1",
    title: "Mobile, Personal Communications Systems and Services",
    author: "Pandya Raj",
    coverImage: "",
    category: ["Mobile Networks"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-MOBNET-2",
    title: "Mobile Computing",
    author: "Talukdar",
    coverImage: "",
    category: ["Mobile Networks"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-MOBNET-3",
    title: "Mobile Computing",
    author: "Brijesh K. Gupta",
    coverImage: "",
    category: ["Mobile Networks"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Operating System Design
  {
    id: "PG-CS-OS-1",
    title: "Advanced Concepts in Operating Systems",
    author: "M. Singhal, N.G. Shivratri",
    coverImage: "",
    category: ["Operating Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-OS-2",
    title: "Operating Systems",
    author: "Ekta Walia",
    coverImage: "",
    category: ["Operating Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-OS-3",
    title: "Operating Systems",
    author: "Godbole",
    coverImage: "",
    category: ["Operating Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Cluster and Grid Computing
  {
    id: "PG-CS-GRID-1",
    title: "Grid Computing Models",
    author: "Janakiram",
    coverImage: "",
    category: ["Grid Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-GRID-2",
    title: "High Performance Cluster Computing",
    author: "Buyya",
    coverImage: "",
    category: ["Grid Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Wireless Access Technologies
  {
    id: "PG-CS-WIRELESS-1",
    title: "Wireless Communications",
    author: "Singal",
    coverImage: "",
    category: ["Wireless Communications"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WIRELESS-2",
    title: "Principles of Modern Wireless Communications Systems",
    author: "Jaganatham",
    coverImage: "",
    category: ["Wireless Communications"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Smart Sensors and Internet of Things
  {
    id: "PG-CS-IOT-1",
    title: "Internet of Things",
    author: "Jeeva Jose",
    coverImage: "",
    category: ["Internet of Things"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOT-2",
    title: "Internet of Things",
    author: "Raj Kamal",
    coverImage: "",
    category: ["Internet of Things"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOT-3",
    title: "Internet of Things",
    author: "Bahga",
    coverImage: "",
    category: ["Internet of Things"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Logic and Functional Programming
  {
    id: "PG-CS-LOGIC-1",
    title: "Logic and Prolog Programming",
    author: "Saroj Kaushik",
    coverImage: "",
    category: ["Logic Programming"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Recommender Systems
  {
    id: "PG-CS-REC-1",
    title: "Recommender Systems: The Textbook",
    author: "Charu C. Aggarwal",
    coverImage: "",
    category: ["Recommender Systems"],
    rack: "PG-CS",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // SOFT COMPUTING (SEMESTER II)
  {
    id: "PG-CS-SOFTCOMP-1",
    title: "Principles of Soft Computing",
    author: "Sivanandam & Deepa",
    coverImage: "",
    category: ["Soft Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-SOFTCOMP-2",
    title: "Neural Networks, Fuzzy Logic and Genetic Algorithms",
    author: "S. Rajasekaran & G.A. Vijayalakshmi Pai",
    coverImage: "",
    category: ["Soft Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // BIG DATA ANALYTICS (SEMESTER II)
  {
    id: "PG-CS-BIGDATA-1",
    title: "Big Data and Hadoop",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Big Data Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-BIGDATA-2",
    title: "Data Analytics",
    author: "Maheshwari",
    coverImage: "",
    category: ["Big Data Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-BIGDATA-3",
    title: "Data Science and Analytics",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Big Data Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Web Analytics and Development
  {
    id: "PG-CS-WEBANA-1",
    title: "Web Analytics: The Art of Online Accountability",
    author: "Avinash Kaushik",
    coverImage: "",
    category: ["Web Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WEBANA-2",
    title: "Web Technologies",
    author: "Godbole",
    coverImage: "",
    category: ["Web Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WEBANA-3",
    title: "Internet and Web Technologies",
    author: "Rajkamal",
    coverImage: "",
    category: ["Web Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Algorithms
  {
    id: "PG-CS-ALGO-1",
    title: "Design & Analysis of Algorithms",
    author: "Gajendra Sharma",
    coverImage: "",
    category: ["Algorithms"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-ALGO-2",
    title: "Algorithms Design and Analysis",
    author: "Udit Agarwal",
    coverImage: "",
    category: ["Algorithms"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Information Theory & Coding
  {
    id: "PG-CS-INFO-1",
    title: "Fundamentals in Information Theory and Coding",
    author: "Monica Borda",
    coverImage: "",
    category: ["Information Theory"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-INFO-2",
    title: "Communication Systems",
    author: "Singh & Sapre",
    coverImage: "",
    category: ["Information Theory"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-INFO-3",
    title: "Information Theory, Coding and Cryptography",
    author: "Bose",
    coverImage: "",
    category: ["Information Theory"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Biometrics
  {
    id: "PG-CS-BIO-1",
    title: "Introduction to Biometric",
    author: "Anil Jain, Karthik Nanda Kumar",
    coverImage: "",
    category: ["Biometrics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-BIO-2",
    title: "Handbook of Fingerprint Recognition",
    author: "A. K. Jain, S. Prabhakar",
    coverImage: "",
    category: ["Biometrics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Secure Software Design & Enterprise Computing
  {
    id: "PG-CS-SECURE-1",
    title: "SMAC: Digital Discipline Building Digital Enterprise",
    author: "Feroz Khan",
    coverImage: "",
    category: ["Enterprise Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-SECURE-2",
    title: "Enterprise Resource Planning: Text & Cases",
    author: "Rajesh Ray",
    coverImage: "",
    category: ["Enterprise Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Parallel Algorithms
  {
    id: "PG-CS-PARALLEL-1",
    title: "Data Structures and Algorithms",
    author: "Pai",
    coverImage: "",
    category: ["Parallel Algorithms"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-PARALLEL-2",
    title: "Data Structures using C",
    author: "R.S. Salaria",
    coverImage: "",
    category: ["Parallel Algorithms"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-PARALLEL-3",
    title: "Data Structures Through C",
    author: "Yashwant Kanetkar",
    coverImage: "",
    category: ["Parallel Algorithms"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // IoT Application and Communication Protocol
  {
    id: "PG-CS-IOTAPP-1",
    title: "Internet of Things",
    author: "Raj Kamal",
    coverImage: "",
    category: ["IoT Application"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOTAPP-2",
    title: "Internet of Things",
    author: "Jeeva Jose",
    coverImage: "",
    category: ["IoT Application"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOTAPP-3",
    title: "Internet of Things",
    author: "Bahga",
    coverImage: "",
    category: ["IoT Application"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Network Security
  {
    id: "PG-CS-SECURITY-1",
    title: "Cryptography and Network Security",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Network Security"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-SECURITY-2",
    title: "Cryptography and Network Security",
    author: "Atul Kahate",
    coverImage: "",
    category: ["Network Security"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Machine Learning
  {
    id: "PG-CS-AML-1",
    title: "Deep Learning",
    author: "Rajiv Chopra",
    coverImage: "",
    category: ["Machine Learning"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-AML-2",
    title: "Machine Learning",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Machine Learning"],
    rack: "PG-CS",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Cloud Computing
  {
    id: "PG-CS-CLOUD-1",
    title: "Cloud Computing",
    author: "Buyya",
    coverImage: "",
    category: ["Cloud Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-CLOUD-2",
    title: "Grid and Cloud Computing",
    author: "Janakiram",
    coverImage: "",
    category: ["Cloud Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Distributed Databases
  {
    id: "PG-CS-DD-1",
    title: "Distributed Database Systems",
    author: "Chanda Ray",
    coverImage: "",
    category: ["Distributed Databases"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DD-2",
    title: "Distributed Database Systems",
    author: "Saheed K. Rahimi",
    coverImage: "",
    category: ["Distributed Databases"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Business Analytics
  {
    id: "PG-CS-BA-1",
    title: "Business Analytics",
    author: "U. Dinesh Kumar",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-BA-2",
    title: "Business Analytics",
    author: "Krishnan, Bhambri & Chopra",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-BA-3",
    title: "Data Science and Analytics",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Industrial Safety
  {
    id: "PG-CS-IS-1",
    title: "Industrial Safety",
    author: "S.C. Sharma",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IS-2",
    title: "Maintenance Engineering",
    author: "H.P. Garg",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IS-3",
    title: "Industrial Safety and Environment",
    author: "A.K. Gupta",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Waste to Energy
  {
    id: "PG-CS-WTE-1",
    title: "Energy Technology",
    author: "O.P. Gupta",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WTE-2",
    title: "Biogas Technology - A Practical Hand Book",
    author: "K.C. Khandelwal, Mahdi",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WTE-3",
    title: "Waste to Resources",
    author: "TERI Press",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Data Warehousing & Mining
  {
    id: "PG-CS-DWM-1",
    title: "Introduction to Data Mining",
    author: "Vipin Kumar",
    coverImage: "",
    category: ["Data Warehousing", "Data Mining"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-DWM-2",
    title: "Data Mining & Warehousing",
    author: "Ikvinderpal Singh",
    coverImage: "",
    category: ["Data Warehousing", "Data Mining"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Web Search & Information Retrieval
  {
    id: "PG-CS-WEBSEARCH-1",
    title: "Mining the Web",
    author: "Chakrabarti",
    coverImage: "",
    category: ["Web Search", "Information Retrieval"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-WEBSEARCH-2",
    title: "Web Analytics",
    author: "Avinash Kaushik",
    coverImage: "",
    category: ["Web Search", "Information Retrieval"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Compiler for HPC
  {
    id: "PG-CS-COMPILER-1",
    title: "Principles of Compiler Design",
    author: "Raghavan",
    coverImage: "",
    category: ["Compiler Design"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-COMPILER-2",
    title: "Principles of Compiler Design",
    author: "A.V. Aho",
    coverImage: "",
    category: ["Compiler Design"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Optimization Techniques
  {
    id: "PG-CS-OPT-1",
    title: "Optimization Techniques",
    author: "C.B. Gupta",
    coverImage: "",
    category: ["Optimization Techniques"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-OPT-2",
    title: "Optimization Techniques",
    author: "Mohan & Deep",
    coverImage: "",
    category: ["Optimization Techniques"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Quantum Computing
  {
    id: "PG-CS-QUANTUM-1",
    title: "Elements of Quantum Mechanics",
    author: "Singh & Singh",
    coverImage: "",
    category: ["Quantum Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-QUANTUM-2",
    title: "Introduction to Quantum Computing",
    author: "C.T. Bhunia",
    coverImage: "",
    category: ["Quantum Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // DNA Computing
  {
    id: "PG-CS-DNA-1",
    title: "Recombinant DNA & Genetic Engineering",
    author: "Rajagopal",
    coverImage: "",
    category: ["DNA Computing"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // IoT and Smart Cities
  {
    id: "PG-CS-IOTCITIES-1",
    title: "Internet of Things",
    author: "Jeeva Jose",
    coverImage: "",
    category: ["IoT", "Smart Cities"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOTCITIES-2",
    title: "Internet of Things",
    author: "Raj Kamal",
    coverImage: "",
    category: ["IoT", "Smart Cities"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CS-IOTCITIES-3",
    title: "Internet of Things",
    author: "Bahga",
    coverImage: "",
    category: ["IoT", "Smart Cities"],
    rack: "PG-CS",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Irrigation and Drainage
  {
    id: "PG-CE-IRRIG-1",
    title: "Irrigation Engineering",
    author: "Asawa, G.L.",
    coverImage: "",
    category: ["Irrigation", "Drainage"],
    rack: "PG-CE",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-IRRIG-2",
    title: "Irrigation Water Management",
    author: "Majumdar, D.K.",
    coverImage: "",
    category: ["Irrigation", "Drainage"],
    rack: "PG-CE",
    academicYear: "",
    semester: "I",
    chapters: [],
    copiesAvailable: 30
  },

  // Emulation and Simulation Methodologies
  {
    id: "PG-EMUSIM-1",
    title: "Simulation Modeling and Analysis",
    author: "Averill M Law",
    coverImage: "",
    category: ["Simulation", "Modeling"],
    rack: "PG-EMUSIM",
    academicYear: "",
    semester: "",
    chapters: [],
    copiesAvailable: 30
  },

  // FEM in Structural Engineering
  {
    id: "PG-CE-FEM-1",
    title: "The Finite Element Method in Engineering",
    author: "Singiresu S. Rao",
    coverImage: "",
    category: ["Finite Element Method"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-FEM-2",
    title: "Introduction to Finite Elements in Engineering",
    author: "Chandrupatla T. R. and Belegundu A.D.",
    coverImage: "",
    category: ["Finite Element Method"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Structural Dynamics
  {
    id: "PG-CE-DYN-1",
    title: "Structural Dynamics and Introduction to Earthquake Engineering",
    author: "Chopra A. K.",
    coverImage: "",
    category: ["Structural Dynamics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-DYN-2",
    title: "Finite Element Methods and Computational Structural Dynamics",
    author: "Manish S",
    coverImage: "",
    category: ["Structural Dynamics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Steel Design
  {
    id: "PG-CE-STEEL-1",
    title: "Design of Steel Structures",
    author: "Subramaniam N.",
    coverImage: "",
    category: ["Steel Design"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-STEEL-2",
    title: "Design of Steel Structures - Vol. II",
    author: "Ramchandra",
    coverImage: "",
    category: ["Steel Design"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-STEEL-3",
    title: "Design of Steel Structures",
    author: "Arya A. S., Ajmani J. L.",
    coverImage: "",
    category: ["Steel Design"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of Formwork
  {
    id: "PG-CE-FORMWORK-1",
    title: "Formwork for Concrete Structures",
    author: "Kumar Neeraj Jha",
    coverImage: "",
    category: ["Formwork"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of High Rise Structures
  {
    id: "PG-CE-HIGHRISE-1",
    title: "Structural Analysis and Design of Tall Buildings",
    author: "Taranath B. S.",
    coverImage: "",
    category: ["High Rise Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-HIGHRISE-2",
    title: "Tall Chimneys",
    author: "Manohar S. N.",
    coverImage: "",
    category: ["High Rise Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of Masonry Structures
  {
    id: "PG-CE-MASONRY-1",
    title: "Design of Reinforced Masonry Structures",
    author: "Narendra Taly",
    coverImage: "",
    category: ["Masonry Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of Advanced Concrete Structures
  {
    id: "PG-CE-ADCONC-1",
    title: "Advanced Reinforced Concrete Design",
    author: "Varghese P. C.",
    coverImage: "",
    category: ["Concrete Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-ADCONC-2",
    title: "Advanced Reinforced Concrete Design",
    author: "Krishna Raju N.",
    coverImage: "",
    category: ["Concrete Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Design of Foundations
  {
    id: "PG-CE-FOUND-1",
    title: "Design of Reinforced Concrete Foundations",
    author: "Varghese P. C.",
    coverImage: "",
    category: ["Foundations"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Soil Structure Interaction
  {
    id: "PG-CE-SOIL-1",
    title: "Design of Foundation System- Principles & Practices",
    author: "Kurian N. P.",
    coverImage: "",
    category: ["Soil Structure"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-SOIL-2",
    title: "Numerical Methods in Geotechnical Engineering",
    author: "Desai C.S.",
    coverImage: "",
    category: ["Soil Structure"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of Industrial Structures
  {
    id: "PG-CE-INDSTRUCT-1",
    title: "Design of Steel Structures",
    author: "Punmia",
    coverImage: "",
    category: ["Industrial Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-INDSTRUCT-2",
    title: "Design of Steel Structures",
    author: "Subramaniam N.",
    coverImage: "",
    category: ["Industrial Structures"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Ground Water Engineering
  {
    id: "PG-CE-GW-1",
    title: "Elements of Water Pollution Control Engineering",
    author: "O. P. Gupta",
    coverImage: "",
    category: ["Ground Water Engineering"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-GW-2",
    title: "Ground Water",
    author: "H.M. Raghunath",
    coverImage: "",
    category: ["Ground Water Engineering"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Free Surface Flows
  {
    id: "PG-CE-FSF-1",
    title: "Open-Channel Flows",
    author: "Choudhary, M.H.",
    coverImage: "",
    category: ["Free Surface Flows"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-FSF-2",
    title: "Flow Through Open Channels",
    author: "Ranga Raju, K.G.",
    coverImage: "",
    category: ["Free Surface Flows"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-FSF-3",
    title: "Open Channel Flow",
    author: "Saiful Islam",
    coverImage: "",
    category: ["Free Surface Flows"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Computational Methods in Fluid Mechanics
  {
    id: "PG-CE-COMPFLUID-1",
    title: "Applied Hydraulic Transient",
    author: "Chaudhary, H. M.",
    coverImage: "",
    category: ["Computational Fluid Mechanics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-COMPFLUID-2",
    title: "Fluid Mechanics and Hydraulic Machines",
    author: "SS Rattan",
    coverImage: "",
    category: ["Computational Fluid Mechanics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Theory and Applications of GIS
  {
    id: "PG-CE-GIS-1",
    title: "Remote Sensing and GIS",
    author: "Ghosh, S.K. and Chandra, A.M.",
    coverImage: "",
    category: ["GIS"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // Advanced Numerical Analysis
  {
    id: "PG-CE-ANA-1",
    title: "Computer Oriented Numerical Methods",
    author: "R.S. Salaria",
    coverImage: "",
    category: ["Numerical Analysis"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-ANA-2",
    title: "Introductory Methods of Numerical Analysis",
    author: "S.S. Sastry",
    coverImage: "",
    category: ["Numerical Analysis"],
    rack: "PG-CE",
    academicYear: "",
    semester: "II",
    chapters: [],
    copiesAvailable: 30
  },

  // SEMESTER-III
  // Design of Prestressed Concrete Structures
  {
    id: "PG-CE-PRESTRESS-1",
    title: "Prestressed Concrete",
    author: "S.B. Vanakudre",
    coverImage: "",
    category: ["Prestressed Concrete"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-PRESTRESS-2",
    title: "Prestressed Concrete",
    author: "Krishnaraju N.",
    coverImage: "",
    category: ["Prestressed Concrete"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Analytical and Finite Element Analysis of Laminated Composite Plates
  {
    id: "PG-CE-LAMINATE-1",
    title: "Mechanics of Laminated Composites Plates and Shells",
    author: "Reddy J. N.",
    coverImage: "",
    category: ["Composite Plates"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Fracture Mechanics of Concrete Structures
  {
    id: "PG-CE-FRACTURE-1",
    title: "Fracture Mechanics",
    author: "Suryja Kuamar Maiti",
    coverImage: "",
    category: ["Fracture Mechanics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-FRACTURE-2",
    title: "Elements of Fracture Mechanics",
    author: "Prashant Kumar",
    coverImage: "",
    category: ["Fracture Mechanics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Design of Plates and Shells
  {
    id: "PG-CE-PLATESHELL-1",
    title: "Design and Construction of Concrete Shell Roofs",
    author: "Ramaswamy G. S.",
    coverImage: "",
    category: ["Plates and Shells"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-PLATESHELL-2",
    title: "Design of Reinforced Concrete Shells & Folded Plate",
    author: "Varghese P. C.",
    coverImage: "",
    category: ["Plates and Shells"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Business Analytics
  {
    id: "PG-CE-BA-1",
    title: "Business Analytics",
    author: "U. Dinesh Kumar",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-BA-2",
    title: "Business Analytics",
    author: "Krishnan, Bhambri & Chopra",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-BA-3",
    title: "Data Science and Analytics",
    author: "V.K. Jain",
    coverImage: "",
    category: ["Business Analytics"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Industrial Safety
  {
    id: "PG-CE-IS-1",
    title: "Industrial Safety",
    author: "S.C. Sharma",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-IS-2",
    title: "Maintenance Engineering",
    author: "H. P. Garg",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-IS-3",
    title: "Industrial Safety and Environment",
    author: "A.K.Gupta",
    coverImage: "",
    category: ["Industrial Safety"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Operations Research
  {
    id: "PG-CE-OR-1",
    title: "Introduction to Optimisation: Operations Research",
    author: "J.C. Pant",
    coverImage: "",
    category: ["Operations Research"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-OR-2",
    title: "Operations Research",
    author: "Pannerselvam",
    coverImage: "",
    category: ["Operations Research"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-OR-3",
    title: "Operation Research",
    author: "Iyer",
    coverImage: "",
    category: ["Operations Research"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Cost Management of Engineering Projects
  {
    id: "PG-CE-COST-1",
    title: "Principles & Practices of Cost Accounting",
    author: "Ashish K. Bhattacharya",
    coverImage: "",
    category: ["Cost Management"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-COST-2",
    title: "Quantitative Techniques in Management",
    author: "N.D. Vohra",
    coverImage: "",
    category: ["Cost Management"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-COST-3",
    title: "Estimation, Costing and Valuation",
    author: "Rangwala",
    coverImage: "",
    category: ["Cost Management"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Composite Materials
  {
    id: "PG-CE-COMP-1",
    title: "Composite Materials",
    author: "K.K. Chawla",
    coverImage: "",
    category: ["Composite Materials"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-COMP-2",
    title: "Composite Materials",
    author: "Balasubramaniam",
    coverImage: "",
    category: ["Composite Materials"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Waste to Energy
  {
    id: "PG-CE-WTE-1",
    title: "Energy Technology",
    author: "O.P. Gupta",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-WTE-2",
    title: "Biogas Technology - A Practical Hand Book",
    author: "K.C. Khandelwal, Mahdi",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-WTE-3",
    title: "Waste to Resources",
    author: "TERI Press",
    coverImage: "",
    category: ["Waste to Energy"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Computer Methods in Hydraulics and Hydrology
  {
    id: "PG-CE-CMHH-1",
    title: "Open-Channel Flow-2nd Edition",
    author: "Chaudhry M.H.",
    coverImage: "",
    category: ["Hydraulics", "Hydrology"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },
  {
    id: "PG-CE-CMHH-2",
    title: "Open Channel Flow",
    author: "Saiful Islam",
    coverImage: "",
    category: ["Hydraulics", "Hydrology"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  },

  // Stochastic Hydrology
  {
    id: "PG-CE-STOCH-1",
    title: "Stochastic Hydrology",
    author: "P.J.R. Reddy",
    coverImage: "",
    category: ["Stochastic Hydrology"],
    rack: "PG-CE",
    academicYear: "",
    semester: "III",
    chapters: [],
    copiesAvailable: 30
  }
];

// Helper functions
export const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  
  books.forEach(book => {
    book.category.forEach(category => {
      categoriesSet.add(category);
    });
  });
  
  return Array.from(categoriesSet).sort();
};

export const getAllAcademicYears = (): string[] => {
  const yearsSet = new Set<string>();
  
  books.forEach(book => {
    if (book.academicYear) {
      yearsSet.add(book.academicYear);
    }
  });
  
  return Array.from(yearsSet).sort();
};

export const getBookRecommendations = (bookId: string, count: number = 3): Book[] => {
  const book = books.find(b => b.id === bookId);
  if (!book) return [];
  
  // Get books in the same category
  const sameCategory = books
    .filter(b => 
      b.id !== bookId && 
      b.category.some(cat => book.category.includes(cat))
    );
  
  // If we don't have enough books from the same category, add some random ones
  if (sameCategory.length < count) {
    const remainingBooks = books.filter(b => 
      b.id !== bookId && 
      !sameCategory.some(cat => cat.id === b.id)
    );
    
    const randomBooks = remainingBooks
      .sort(() => 0.5 - Math.random())
      .slice(0, count - sameCategory.length);
    
    return [...sameCategory, ...randomBooks].slice(0, count);
  }
  
  // Return a random selection from the same category
  return sameCategory
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
