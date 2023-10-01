import aboutpic from "./components/Access/pic_of_me.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jaidensiu.github.io/',
  title: 'Jaiden Siu',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  // photo is for photo at the top of webpage with me
  photo: aboutpic,
  name: 'Jaiden',
  role: 'Software Developer Co-op @ Avanti • BME + CS @ UBC',
  description:
    'I\'m a Biomedical Engineering student at UBC with an avid interest in entrepreneurship and technology pertaining to software engineering, machine learning, and bioinformatics. Currently, I am building upon my software engineering skills by working at Avanti as a Software Developer Co-op. Outside of my professional endeavours, I enjoy working out at the gym, training calisthenics, swimming, and playing the piano.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
    github: 'https://github.com/jaidensiu',
  },
}

const experiences = [
  {
    name: 'Avanti Software Inc.',
    description:
      'Currently a Software Developer Co-op working on Mobile Development team building HCM software for mobile applications.',
    stack: ['Kotlin', 'Jetpack Compose', 'JUnit', 'Mockito', 'Swift', 'SwiftUI', 'Android Stutdio', 'Xcode', 'Postman'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Global Relay Communications Inc.',
    description:
      'Previously a Software Development Engineer in Test Co-op on the Android Development team working on software test automation.',
    stack: ['Espresso', 'JUnit', 'Jira', 'Confluence', 'Jenkins', 'Docker', 'Java', 'Kotlin', 'BitBucket', 'Firebase Crashlytics', 'Postman', 'Android Studio'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'UBC Biomedical Engineering Student Team',
    description:
      'Previously a Software Engineer on the Neurotechnology team and the Sports Medicine team.',
    stack: ['Python', 'C#', 'Unity', 'JavaScript', 'MERN Stack', 'REST APIs', 'Git', 'Unity ML Agents', 'Tkinter', 'Postman'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'UBC Biomedical Engineering Undergraduate Student Association',
    description:
      'Currently the VP Academic Coordinator on the BME undergraduate student council. Previously the Third Year Representative.',
    stack: [''],
    sourceCode: '',
    livePreview: '',
  },
]

const projects = [
  {
    name: 'Rental Bike Usage Prediction',
    description:
      'This project involved applying machine learning and statistical models to forecast bike rental demand using weather, hourly rentals, and date data for bike rental supply stability. I conducted exploratory data analysis (EDA) by visualizing the dataset via scatter plots to summarize the data and relation between different features. To apply models to the dataset, I employed a linear and mutiple linear regression model to best fit a line for the number of bikes dependent on temperature. I also used a vanilla neural network to fit a curve against the data. To evaluate the models, I used metrics such a mean squared error (MSE) to quantify prediction accuracy. The findings of this project allows for ensuring a stable supply of rental bikes.',
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 'Google Colab'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Handwritten Digit Recognition System',
    description:
      'This project was inspired by a Nintendo DS game called Brain Age that I used to play as a child. In this game, one of the particular minigames is a timed challenge where you write out answers to 20 randomized arithmetic questions onto the DS console\'s touchscreen in sequence. To mimic the digit recognition system in the DS console, I decided to create a convolutional neural network using max pooling that would be trained with the MNIST dataset. To test the digit recognition system, I developed a Pygame module that would allow a user to write a digit for the system to recognize the digit.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Pygame', 'VS Code', 'Git'],
    sourceCode: 'https://github.com/jaidensiu/Digit-Recognition-System',
    livePreview: '',
  },
  {
    name: 'Question-Answering System',
    description:
      'Current research and development within artificial intelligence and natural language processing is producing human-interactable systems including chatbots and question-answering systems such as ChatGPT and IBM Watson, respectively. This project focuses on developing a question-answering system that performs two tasks: document retrieval and passage retrieval. Overall, this intelligent system determines the most relevant documents using tf-idf ranking. Then the system extracts the most relevant sentences using idf and a query term density (keyword) measure to provide an answer to a question.',
    stack: ['Python', 'NLTK', 'VS Code', 'Git'],
    sourceCode: 'https://github.com/jaidensiu/Question-Answering-System',
    livePreview: '',
  },
  {
    name: 'Traffic Sign Classifier',
    description:
      'This project focuses on developing a convolutional neural network using TensorFlow to classify road signs correctly based on a dataset of road sign images. Such task is important in the development of autonomous vehicles with computer vision for the vehicle to gain an understanding of its environment. To do so, a labeled dataset of images catagorized by their type, the German Traffic Sign Recognition Benchmark (GTSRB) dataset, that contains thousand of images of 43 different kinds of road signs is used to train and validate the model.',
    stack: ['Python', 'TensorFlow', 'Keras', 'VS Code', 'Git'],
    sourceCode: 'https://github.com/jaidensiu/Traffic-Sign-Classifier',
    livePreview: '',
  },
  {
    name: 'Travel Planner Mobile App',
    description:
      'This is a nwHacks 2023 hackathon project where my team and I built an Android mobile application to reduce the information overload experienced on travel sites. I was involved in implementing a REST API to save user profile data using Sequelize, MySQL, Express.js, and Node.js. I tested the API endpoints using MySQL Workbench and Postman to verify SQL CRUD operations. The UI/UX components was designed and emulated in Android Studio which was written in Java and XML.',
    stack: ['Express', 'Node', 'JavaScript', 'Java', 'XML', 'Figma', 'Android Studio', 'VS Code', 'MySQL', 'Postman', 'Git'],
    sourceCode: 'https://github.com/jaidensiu/nwHacks-2023',
    livePreview: 'https://devpost.com/software/xplore-g1thmo',
  },
  {
    name: 'Tic Tac Toe AI',
    description:
      'A fun project that involves an intelligent system where I implement an undefeatable Tic Tac Toe AI using the Minimax algorithm, which is a type of adversial search algorithm commonly used in AI and game theory. In a game of Tic Tac Toe displayed on a Pygame window, the AI is optimized to never lose as it searches for the optimal move for itself via the Minimax algorithm, hence it will always wins or tie against another player.',
    stack: ['Python', 'Pygame', 'PyCharm', 'VS Code', 'Git'],
    sourceCode: 'https://github.com/jaidensiu/Tic-Tac-Toe-AI',
    livePreview: '',
  },
  // {
  //   name: 'Client-Server Twitter Interactions Bot',
  //   description:
  //     'This project involved building a messaging and content curation mechanism in Java through the Twitter API for user content interaction. The implementation supported a multithreaded client-server architecture based on a publish-subscribe model for data sharing between the users and the API. I created automated JUnit test suites that achieved 90% line coverage and 85% branch coverage visualized on JaCoCo.',
  //   stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo','JUnit', 'Twitter API', 'Git'],
  //   sourceCode: '',
  //   livePreview: '',
  // },
  // {
  //   name: 'Search Term Recommendation System',
  //   description:
  //     'A project all about the basic notions of natural language processing. I implemented a parsing algorithm that uses regular expressions and string manipulations to store n-grams obtained from text files of reviews. The n-grams helped determine biological gender bias in reviews and mapped weighted recommendations for text autocompletion. For sentiment analysis of the reviews, a bag-of-words model, Naive Bayes classifier, and Laplacian smoothing was used.',
  //   stack: ['Java', 'Gradle', 'IntelliJ', 'JaCoCo', 'JUnit', 'Git'],
  //   sourceCode: '',
  //   livePreview: '',
  // },
  // {
  //   name: 'Cell Simulation and Automata',
  //   description:
  //     'A cellular automata all about visualizing cell interactions on a GUI which is commonly used for guiding therapeutics and deriving diagnostic insights when practicing medicine. I designed various classes that encapsulated high-level features of common biological cells to derive a set of unique operations for a particular cell type. This project is a great example how relevant computer science is in medicine and illuminated many object-oriented programming concepts.',
  //   stack: ['Java', 'Abstract Window Toolkit (AWT)', 'IntelliJ', 'Git'],
  //   sourceCode: '',
  //   livePreview: '',
  // },
  // {
  //   name: 'Microfluidic Characterization Device',
  //   description:
  //     'A design project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also produced design history files according to FDA guidelines that are used for medical device development. Overall, we modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and designed Arduino sketch software to control the actuation of physical components such as servo motors.',
  //   stack: ['C++', 'Arduino', 'SolidWorks', 'MultiSim'],
  //   sourceCode: '',
  //   livePreview: '',
  // },
  {
    name: 'Autonomous Robotic Claw',
    description:
      'A design project that introduces fundamental engineering design concepts from rapid-protyping to iterative design processes. I designed a pulley system that geometrically optimized the claw to open and close, wrote Arduino sketch software to automate the claw, pinned electronics such as a sonar sensor and servo motor, and modeled claw actuation in SolidWorks. My design of the cardboard robotic claw was able to sense and pick up items from almonds to soup cans over an obstacle. This project was a highlight of my first year of engineering at UBC.',
    stack: ['C++', 'Arduino', 'SolidWorks'],
    sourceCode: 'https://github.com/jaidensiu/Autonomous-Robotic-Claw',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, the skills section won't show up
  'Java', // Languages
  'Kotlin',
  'Python',
  'C',
  'C++',
  'MATLAB',
  'JavaScript',
  'R',
  'Swift',
  'HTML',
  'CSS',
  'SQL',
  'React', // Frameworks and Libraries
  'Express',
  'Node',
  'JUnit',
  'Espresso',
  'Jetpack Compose',
  'Mockito',
  'JEST',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  'ggplot2',
  'NumPy',
  'Scikit-learn',
  'TensorFlow',
  'Keras',
  'Flask',
  'SQLite',
  'MySQL',
  'MongoDB',
  'Git', // Tools
  'Bash',
  'Postman',
  'Docker',
  'Jenkins',
  'Figma',
  'Jira',
  'VS Code', // IDEs
  'Android Studio',
  'Xcode',
  'RStudio',
  'PyCharm',
  'IntelliJ',
  'JupyterLab'
]

const courses = [
  'Data Structures and Algorithms', // Computing
  'Software Construction',
  'Artificial Intelligence',
  'Machine Learning',
  'Bioinformatics',
  'Web Development',
  'Probability and Statistics', // Statistics
  'Control Systems', // Engineering
  'Circuit Analysis',
  'Signals Processing',
  'Biomechanics',
  'Medical Instrumentation',
  'Business Finance', // Commerce
  'Financial Accounting',
  'Marketing Management',
]

const contact = {
  // email is optional - if left empty, contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, experiences, projects, skills, courses, contact }
