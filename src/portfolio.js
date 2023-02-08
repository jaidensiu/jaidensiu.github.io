// import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jaidensiu.github.io/',
  title: 'Jaiden Siu',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  // photo is for photo at the top of webpage with me
  // photo: aboutpic,
  name: 'Jaiden',
  role: '',
  description:
    'Welcome to my personal website portfolio! I\'m currently a third year Biomedical Engineering student specializing in Computer Science at the University of British Columbia (UBC) interested in Software Engineering and Data Science. Outside of school and work, you will often find me working out, swimming, programming, or playing the piano. I\'m currently looking for 4 to 16 months of co-op (or internship) opportunities starting May 2023.',
  resume: 'https://drive.google.com/file/d/1XGPMNBmxCoQTMqLFa2birsHK9xzrHEFu/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
    github: 'https://github.com/jaidensiu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Travel Planner Mobile App',
    description:
      'Description to be added.',
    stack: ['Express', 'Node', 'JavaScript', 'Java', 'XML', 'Figma', 'Android Studio', 'VS Code', 'MySQL', 'Postman'],
    sourceCode: 'https://github.com/jaidensiu/nwHacks-2023',
    livePreview: 'https://devpost.com/software/xplore-g1thmo',
  },
  {
    name: 'Personal Website',
    description:
      'My personal website portfolio (this website) that I design and deploy onto GitHub Pages to document projects, learning experiences, and skills. This website is a medium for me to showcase my skills and allow for people on the internet to learn more about me. Through this long-term project, I have learned about many software engineering topics such as version control systems, package managers, software architectural patterns, and UI/UX design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub Pages', 'npm', 'VS Code'],
    sourceCode: 'https://github.com/jaidensiu/jaidensiu.github.io',
    livePreview: 'https://jaidensiu.github.io/',
  },
  {
    name: 'Tic Tac Toe Console Game',
    description:
      'A fun project that involves an intelligent system where I implement an undefeatable Tic Tac Toe AI using the Minimax algorithm, which is a type of adversial search algorithm commonly used in AI and game theory. In a game of Tic Tac Toe displayed on a Pygame window, the AI is optimized to never lose as it searches for the optimal move for itself via the Minimax algorithm, hence it will always wins or tie against another player.',
    stack: ['Python', 'Pygame', 'VS Code'],
    sourceCode: 'https://github.com/jaidensiu/Tic-Tac-Toe-AI',
    livePreview: '',
  },
  {
    name: 'Java Graph Interface',
    description:
      'A CPEN 221 project all about graphs and traversal algorithms where I implement a graph interface to mutate and compute graph properties. I used adjacency matrix and adjacency list representations to abstract a graph and implemented graph traversal algorithms such as depth-first search, breadth-first search, Dijkstra\'s algorithm, and Kruskal\'s algorithm. This project ramped up my ability to work with graphs.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo','JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Search Term Recommendation System',
    description:
      'A CPEN 221 project all about the basic notions of natural language processing. I implemented a parsing algorithm that uses regular expressions and string manipulations to store n-grams obtained from text files of reviews. The n-grams helped determine biological gender bias and mapped to weighted recommendations for text autocompletion.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo', 'JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Cell Simulation and Automata',
    description:
      'A cellular automata all about visualizing cell interactions on a GUI which is commonly used for guiding therapeutics and deriving diagnostic insights when practicing medicine. I designed various classes that encapsulated high-level features of common biological cells to derive a set of unique operations for a particular cell type. This project is a great example how relevant computer science is in medicine and illuminated many object-oriented programming concepts.',
    stack: ['Java', 'Abstract Window Toolkit (AWT)', 'IntelliJ'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Microfluidic Characterization Device',
    description:
      'A BMEG 257 design project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also produced design history files according to FDA guidelines that are used for medical device development. Overall, we modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and designed Arduino sketch software to control the actuation of physical components such as servo motors.',
    stack: ['Arduino', 'SolidWorks', 'MultiSim'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Autonomous Robotic Claw',
    description:
      'An APSC 101 design project that introduces fundamental engineering design concepts from rapid-protyping to iterative design processes. I designed a pulley system that geometrically optimized the claw to open and close, wrote Arduino sketch software to automate the claw, pinned electronics such as a sonar sensor and servo motor, and modeled claw actuation in SolidWorks. My design of the cardboard robotic claw was able to sense and pick up items from almonds to soup cans over an obstacle. This project was a highlight of my first year of engineering at UBC.',
    stack: ['Arduino', 'SolidWorks'],
    sourceCode: 'https://github.com/jaidensiu/Autonomous-Robotic-Claw',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, the skills section won't show up
  'Java', // languages
  'Python',
  'C',
  'C++',
  'MATLAB',
  'JavaScript',
  'HTML',
  'CSS',
  'XML',
  'SQL',
  'React', // frameworks and libraries
  'Express',
  'Node',
  'JUnit',
  'Tkinter',
  'NumPy',
  'Matplotlib',
  'Flask',
  'SQLite',
  'Pygame',
  'Git', // tools
  'Gradle',
  'npm',
  'VS Code',
  'Android Studio',
  'MySQL Workbench',
  'Postman',
  'IntelliJ',
  'JaCoCo',
  'Linux',
  'Figma',
]

const courses = [
  {
    name: 'BMEG 220 Circuits and Electromagnetics',
    description:
      'BMEG 220 is combined with MATH 264 Vector Calculus to illuminate electromagnetic concepts and also introduces mathematical abstraction of electrical circuits via circuit analysis. Simulation software such as MultiSim and MATLAB are also introduced. This is a fast-paced two-in-one course that serves to lay the theoretical foundation for one to start conceptualizing medical instrumentation. Overall, a challenging course that evolved my ability to analyze circuits and apply mathematics to electromagnetics.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=220',
  },
  {
    name: 'BMEG 320 Systems and Control',
    description:
      'Current course.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=320',
  },
  {
    name: 'BMEG 321 Biomedical Instrumentation',
    description:
      'Current course.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=321',
  },
  {
    name: 'BMEG 371 Transport Phenomena',
    description:
      'BMEG 371 is a fun and interesting course that is meant to equip one with many mathematical tools to model biological systems (and other cool things). Topics discussed include transport of molecules, Brownian motion, diffusion-limited chemical rates, optimal transport, entropic regularization, Navier-Stokes equations, mass transport, and developmental stochastic processes. This course matured my mathematical abilities and introduced me to some advanced concepts in mathematics I once would have been intimidated of.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=BMEG&course=371',
  },
  {
    name: 'COMR 473 Business Finance',
    description:
      'COMR 473 is an introductory course in finance that overviews the corporate financial system. This course introduces concepts such as time value of money, long-term securities like bonds, risky securities like stocks, and processes in which returns and values of assets relate to eachother. It was interesting to see the theory of this course apply to capital allocation decisions and in determining the capital structure of a firm. Overall, an eye-opening course that applies simple mathematical and statistical ideas to model concepts in the world of finance.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=COMR&course=473',
  },
  {
    name: 'CPEN 221 Software Construction',
    description:
      'CPEN 221 is a fabled course at UBC that covers many of the first principles when it comes to designing software systems. The course covers core topics such as static checking, data abstractions, procedural specifications, testing, exceptions, mutability, abstract data types, subtypes, recursive types, streams, grammars, regular expressions, concurrency, and parallelism. Beyond the core topics, one is exposed to fundamental data structures and algorithms, a taste of algorithmic analysis, design patterns, random testing, formal verification, and dynamic programming. This course has really changed the way I view software and taught me so much about designing resilient systems.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPEN&course=221',
  },
  {
    name: 'CPSC 221 Data Structures and Algorithms',
    description:
      'Current course.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=221',
  },
  {
    name: 'ELEC 221 Signals and Systems',
    description:
      'ELEC 221 introduces many abstract concepts relating to the processing and analysis of signals and systems, a vast topic that has many applications across the engineering sciences. Topics include convolution, Fourier series, filtering, Fourier transforms, sampling, communication systems, modulation, Laplace transforms, Z-transforms, and feedback systems. Computational tools such as Python and NumPy are also introduced. Altogether, this course challenged and equipped me with the set of tools in the modeling of systems and the processing of signals that encapsulate audio and images.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=ELEC&course=221',
  },
  {
    name: 'MATH 220 Mathematical Proof',
    description:
      'MATH 220 introduces lots of formal mathematical ideas and constructs that are inherent in domains that leverage advanced mathematics. Topics that are introduced challenges one to think very pedantically hence taught me to be very detail-oriented and formalize constructs with clarity. This has allowed me to carry such way of thinking to other courses such as BMEG 371 and CPEN 221. One is exposed to mathematical thinking, logic, and rigorously proving mathematical statements. This course challenged my first principles thinking and really shifted my perspective on mathematics.',
    stack: [],
    sourceCode: '',
    livePreview: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=220',
  },
]

const contact = {
  // email is optional - if left empty, contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, projects, skills, courses, contact }
