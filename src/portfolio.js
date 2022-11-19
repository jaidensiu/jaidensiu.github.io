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
  role: 'Aspiring Engineer',
  description:
    'UBC Biomedical Engineering Co-op Student who loves mathematics, computer science, and the intersection of business and technology.',
  resume: 'https://drive.google.com/file/d/1cn70AwxVaB66qTCee8dvBSdD1yMSZZ67/view?usp=sharing',
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
      'A  UBC CPEN 221 all about graphs and its algorithms. From designing adjacency matrix and list representations to leveraging novel graph traversal algorithms, this project certainly taught me a lot about graphs. This project was done in Java with development tools such as Gradle, IntelliJ and JaCoCo.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo','JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'n-grams, Autocompletion, and Gender Bias',
    description:
      'A UBC CPEN 221 all about basic notions of natural language processing (and good software engineering practices, of course). I was involved with implementing parsing algorithms using regular expressions to construct n-grams obtained from large data sets containing texts.',
    stack: ['Java', 'Gradle', 'IntelliJ', 'JUnit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Cell Simulation and Automata',
    description:
      'A cellular automata all about visualizing cell interactions on a GUI which is commonly used for guiding therapeutics and deriving diagnostic insights when practicing medicine and research. This project is a great exhibition of the power that software systems can be utilized in medicine.',
    stack: ['Java', 'Java AWT'],
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
  'Tkinter'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, projects, skills, contact }
