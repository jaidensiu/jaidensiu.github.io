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
    'I\'m currently a student at the University of British Columbia studying Biomedical Engineering and Computer Science. I have an avid interest in entrepreneurship and technology pertaining to software engineering, data science, and bioinformatics. So far, I have experience with mobile development, web development, and software testing.',
  resume: 'https://drive.google.com/file/d/1kRbtdnIrpz4b0WgfL3cbeu8xqBdReFm-/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
    github: 'https://github.com/jaidensiu',
  },
}

const experiences = [
  {
    company: 'Avanti Software Inc.',
    role: 'Software Developer Co-op',
    date: 'Sep 2023 - Present',
    description: 
      String().concat(
        'Developing HR management app features for Android (Kotlin, Jetpack Compose) and iOS (Swift, SwiftUI)\n',
        'Building new features from scratch with modern design principles and tools (Google Maps, Dagger, Firebase)\n',
        'Implementing API calls within a repository pattern to enhance code modularity by isolating the data layer\n',
        'Writing unit tests with JUnit and Mockito for 100% line coverage to enhance code quality and performance\n',
        'Refactoring codebase to enhance code scalability by decoupling UI states and separating view model logic'
      ),
    stack: ['Kotlin', 'Jetpack Compose', 'JUnit', 'Mockito', 'Dagger', 'Git', 'Postman', 'Android Studio'],
    livePreview: 'https://www.avanti.ca/',
  },
  {
    company: 'Freelance Software Development',
    role: 'Freelance Software Engineer',
    date: 'Sep 2023 - Present',
    description:
      String().concat(
        'Working with local businesses to develop websites, define requirements, and establish project milestones\n',
        'Implementing websites in HTML, CSS, and JavaScript using Next.js and Redux for modern characteristics',
      ),
    stack: ['HTML', 'CSS', 'JavaScript', 'Redux.js', 'React.js', 'Next.js'],
    livePreview: '',
  },
  {
    company: 'Global Relay Communications Inc.',
    role: 'Software Development Engineer in Test Co-op',
    date: 'May 2023 - Aug 2023',
    description:
      String().concat(
        'Developed Espresso automation tests in Kotlin to reduce manual testing efforts of a messaging app by %25\n',
        'Resolved issues within a Docker CI pipeline leading to consistent and reliable build results in Jenkins\n',
        'Enhanced test software to achieve clearer log messages in Logcat streamlining development and fixes',
      ),
    stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Jenkins', 'Docker', 'Postman', 'Android Studio'],
    livePreview: 'https://www.globalrelay.com/',
  },
  {
    company: 'UBC Neurotechnology Design Team',
    role: 'Software Engineer',
    date: 'Mar 2022 - Aug 2023',
    description:
      String().concat(
        'Contributed to end-to-end software development for an award-winning engineering design team\n',
        'Implemented REST APIs for EEG data to visualize and model brain activity using Express.js and Node.js\n',
        'Verified API endpoints to ensure reliability and performance using Postman and MongoDB Compass\n',
        'Designed MondoDB database schemas using Mongoose to model users and brain signal measurements\n',
        'Developed a Tkinter-based GUI facilitating EEG headset data transmission via BLE for signal processing'
      ),
    stack: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Unity', 'Tkinter', 'Postman'],
    sourceCode: 'https://github.com/UBCMint',
    livePreview: 'https://ubcmint.github.io/',
  },
]

const projects = [
  {
    name: 'Rideshare Mobile App',
    description:
      String().concat(
        'Built a rideshare app using Kotlin, XML, and Jetpack Compose with chat messaging using Stream Chat SDK\n',
        'Authorized Firebase with Google Cloud Platform for session management and passenger/driver creation',
      ),
    stack: ['Kotlin', 'Jetpack Compose', 'Stream SDK', 'Firebase', 'Google Cloud Platform (GCP)', 'Android Studio'],
    sourceCode: 'https://github.com/jaidensiu/rideshare-app',
    livePreview: '',
  },
  {
    name: 'Email Client Web App',
    description:
      String().concat(
        'Developed an email client with key functionalities (composing, sending, receiving, replying, and archiving)\n',
        'Implemented a front-end with HTML, CSS, and JavaScript that makes API calls to send and receive emails\n',
        'Integrated a Django back-end with Python to facilitate API calls for modifying a SQLite database schema',
      ),
    stack: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'VS Code'],
    sourceCode: 'https://github.com/jaidensiu/email-client-app',
    livePreview: '',
  },
  {
    name: 'Travel Planner Mobile App',
    description:
      'This is a nwHacks 2023 hackathon project where my team and I built an Android mobile application to reduce the information overload experienced on travel sites. I was involved in implementing a REST API to save user profile data using Sequelize, MySQL, Express.js, and Node.js. I tested the API endpoints using MySQL Workbench and Postman to verify SQL CRUD operations. The UI/UX components were designed and emulated in Android Studio which was written in Java and XML.',
    stack: ['Express.js', 'Node.js', 'JavaScript', 'Java', 'XML', 'Android Studio', 'VS Code', 'MySQL', 'Postman'],
    sourceCode: 'https://github.com/jaidensiu/nwHacks-2023',
    livePreview: 'https://devpost.com/software/xplore-g1thmo',
  },
  {
    name: 'Handwritten Digit Classifier GUI',
    description:
      'This project was inspired by a Nintendo DS game called Brain Age that I used to play as a child. In this game, one of the particular minigames is a timed challenge where you write out answers to 20 randomized arithmetic questions onto the DS console\'s touchscreen in sequence. To mimic the digit recognition system in the DS console, I decided to create a convolutional neural network using max pooling that would be trained with the MNIST dataset. To test the digit recognition system, I developed a Pygame module that would allow a user to write a digit for the system to recognize the digit.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Pygame', 'VS Code'],
    sourceCode: 'https://github.com/jaidensiu/Digit-Recognition-System',
    livePreview: '',
  },
  {
    name: 'Rental Bike Usage Prediction',
    description:
      'This project involved applying machine learning and statistical models to forecast bike rental demand using weather, hourly rentals, and date data for bike rental supply stability. I conducted exploratory data analysis (EDA) by visualizing the dataset via scatter plots to summarize the data and relation between different features. To apply models to the dataset, I employed a linear and mutiple linear regression model to best fit a line for the number of bikes dependent on temperature. I also used a vanilla neural network to fit a curve against the data. To evaluate the models, I used metrics such a mean squared error (MSE) to quantify prediction accuracy. The findings of this project allows for ensuring a stable supply of rental bikes.',
    stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 'Google Colab'],
    sourceCode: '',
    livePreview: 'https://colab.research.google.com/drive/17NUwQiYhrxbHLSbDXd86RwJlmRIa-9wn?usp=sharing',
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
  // {
  //   name: 'Autonomous Robotic Claw',
  //   description:
  //     'An engineering design course project that introduces fundamental engineering design concepts from rapid-protyping to iterative design processes. I designed a pulley system that geometrically optimized the claw to open and close, wrote Arduino sketch software to automate the claw, pinned electronics such as a sonar sensor and servo motor, and modeled claw actuation in SolidWorks. My design of the cardboard robotic claw was able to sense and pick up items from almonds to soup cans over an obstacle. This project was a highlight of my first year of engineering at UBC.',
  //   stack: ['C++', 'Arduino', 'SolidWorks'],
  //   sourceCode: 'https://github.com/jaidensiu/Autonomous-Robotic-Claw',
  //   livePreview: '',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, the skills section won't show up
  // 'Java', // Languages
  // 'Kotlin',
  // 'Python',
  // 'C',
  // 'C++',
  // 'MATLAB',
  // 'JavaScript',
  // 'R',
  // 'Swift',
  // 'HTML',
  // 'CSS',
  // 'SQL',
  // 'Bash',
  // 'React.js', // Frameworks and Libraries
  // 'Express.js',
  // 'Node.js',
  // 'JUnit',
  // 'Espresso',
  // 'Jetpack Compose',
  // 'SwiftUI',
  // 'Mockito',
  // 'NumPy',
  // 'Matplotlib',
  // 'Seaborn',
  // 'ggplot2',
  // 'NumPy',
  // 'Scikit-learn',
  // 'TensorFlow',
  // 'Keras',
  // 'Flask',
  // 'Django',
  // 'SQLite',
  // 'MySQL',
  // 'MongoDB',
  // 'Git', // Tools
  // 'Postman',
  // 'Docker',
  // 'Jenkins',
  // 'Jira',
  // 'VS Code',
  // 'Android Studio',
  // 'Xcode',
  // 'RStudio',
  // 'PyCharm',
  // 'IntelliJ',
  // 'JupyterLab'
]

const courses = [
  // 'Data Structures and Algorithms', // Computing
  // 'Software Construction',
  // 'Artificial Intelligence',
  // 'Machine Learning',
  // 'Bioinformatics',
  // 'Web Development',
  // 'Probability and Statistics', // Statistics
  // 'Control Systems', // Engineering
  // 'Circuit Analysis',
  // 'Signals Processing',
  // 'Biomechanics',
  // 'Medical Instrumentation',
  // 'Business Finance', // Commerce
  // 'Financial Accounting',
  // 'Marketing Management',
]

const contact = {
  // email is optional - if left empty, contact section won't show up
  email: 'siujaiden@gmail.com',
}

export { header, about, experiences, projects, skills, courses, contact }
