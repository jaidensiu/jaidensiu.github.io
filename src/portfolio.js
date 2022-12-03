import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jaidensiu.github.io/',
  title: 'Jaiden Siu',
}

const about = {
  // photo is for photo at the top of webpage with me
  // photo: aboutpic
  // all the properties are optional - can be left empty or deleted
  name: 'Jaiden',
  role: '',
  description:
    'UBC Biomedical Engineering Student who is interested in mathematics, computer science, and the intersection of business and technology.',
  resume: 'https://drive.google.com/file/d/1UFj3vidKyJUOdRvIeK83f2IHrfKvlN3I/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
    github: 'https://github.com/jaidensiu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Graphs, Games, and Interplanetary Travel',
    description:
      'A CPEN 221 project all about graphs and traversal algorithms. From implementing adjacency matrix and adjacency list representations of graphs to leveraging novel graph traversal algorithms (DFS, BFS, Dijkstra`s, Kruskal`s), this project certainly taught me a lot about graphs. This project was done in Java with development tools such as Gradle, IntelliJ and JaCoCo.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo','JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'n-grams, Autocompletion, and Gender Bias',
    description:
      'A CPEN 221 project all about the basic notions of natural language processing (and good software engineering practices, of course). I was heavily involved with implementing parsing algorithms using regular expressions and string manipulations to construct n-grams obtained from large data sets containing texts.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Cell Simulation and Automata',
    description:
      'A cellular automata all about visualizing cell interactions on a GUI which is commonly used for guiding therapeutics and deriving diagnostic insights when practicing medicine and research. This project is a great example how relevant software systems are in medicine, and was fascinating to see the digitized cells interact on a GUI.',
    stack: ['Java', 'Abstract Window Toolkit (AWT)', 'IntelliJ'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Microfluidic Characterization Device',
    description:
      'A BMEG 257 design project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also learned to produce design history files according to FDA guidelines that are used for medical device development. We modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and designed software for the Arduino to control the actuation of physical components such as servo motors.',
    stack: ['Arduino', 'SolidWorks', 'C++', 'MultiSim'],
    sourceCode: '',
    livePreview: '',
  },
]

const courses = [
  {
    name: 'BMEG 220 Circuits and Electromagnetics',
    description:
      'Description to be added,',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'BMEG 371 Transport Phenomena',
    description:
      'Description to be added,',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'COMR 473 Business Finance',
    description:
      'Description to be added,',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'CPEN 221 Software Construction',
    description:
      'This course covers a lot of principles when it comes to constructing software, both from a theoretical and practical perspective. The course covers core topics such as static checking, data abstractions, procedural specifications, testing, exceptions, mutability, abstract data types, subtypes, recursive types, streams, grammars, regular expressions, concurrency, and parallelism. Beyond the core topics, one is exposed to fundamental data structures and algorithms, a taste of algorithmic analysis, and other topics such design patterns, cryptography, and formal verification. CPEN 221 was definitely a course I struggled in due to the constant demand of work needed to be put in and the highly abstract constructs that are delivered from a very fundamental level. All in all, this course has really changed the way I view software and I am beyond grateful to have had the opportunity to enroll in such a fantastic course filled with passionate individuals in the teaching team.',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'ELEC 221 Signals and Systems',
    description:
      'Description to be added.',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'MATH 220 Mathematical Proof',
    description:
      'Description to be added,',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'React',
  'Git',
  'Java',
  'C',
  'C++',
  'MATLAB',
  'Python',
  'Flask',
  'Linux',
  'NumPy',
  'React',
  'Matplotlib',
  'Tkinter',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, projects, courses, skills, contact }
