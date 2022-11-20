import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jaidensiu.github.io/',
  title: 'Jaiden Siu',
}

const about = {
  // photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Jaiden',
  role: '',
  description:
    'UBC Biomedical Engineering Co-op Student who loves mathematics, computer science, and the intersection of business and technology.',
  resume: 'https://drive.google.com/file/d/19azWSCzzhBw15kNODEO5mqRXKzf_df9Q/view?usp=sharing',
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
      'A  UBC CPEN 221 project all about graphs and traversal algorithms. From implementing adjacency matrix and adjacency list representations of graphs to leveraging novel graph traversal algorithms (DFS, BFS, Dijkstra`s, Kruskal`s), this project certainly taught me a lot about graphs. This project was done in Java with development tools such as Gradle, IntelliJ and JaCoCo.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo','JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'n-grams, Autocompletion, and Gender Bias',
    description:
      'A UBC CPEN 221 project all about the basic notions of natural language processing (and good software engineering practices, of course). I was heavily involved with implementing parsing algorithms using regular expressions and string manipulations to construct n-grams obtained from large data sets containing texts.',
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
      'A UBC BMEG 257 design project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also learned to produce design history files according to FDA guidelines that are used for medical device development. We modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and designed software for the Arduino to control the electromechanical actuatuation of physical components such as servo motors.',
    stack: ['Arduino', 'SolidWorks', 'C++', 'MultiSim'],
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
  'Vim',
  'JavaScript',
  'Matplotlib',
  'Tkinter',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, projects, skills, contact }
