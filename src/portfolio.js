import homepic from "./components/Access/pic_of_me.jpg"
import aboutpic from "./components/Access/gopher_banner.gif"

const header = {
  homepage: '/',
  title: 'Jaiden Siu'
}

const home = {
  photo: homepic,
  name: 'Jaiden',
  role: 'SWE Intern @ Dialpad • BME + CS @ UBC',
  description: 'Passionate about engineering and computer science.',
  contact: {
    // resume: '/resume',
    github: 'https://github.com/jaidensiu',
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
    email: 'siujaiden@gmail.com'
  }
}

const about = {
  photo: aboutpic,
  facts: [
    'Currently building with Kotlin',
    'Currently learning Mandarin Chinese',
    'Currently one of the Co-Presidents for UBC BMEUSA',
    'I like to eat eggs',
    'I train calisthenics',
    'I play the piano',
    'I used to be a competitive swimmer (aka swammer)'
  ]
}

const experiences = [
  {
    companyLink: "https://www.dialpad.com/",
    company: 'Dialpad',
    role: 'Software Engineer Intern',
    date: 'Jan 2025 - Present',
    stack: ['Kotlin', 'Kotlin Multiplatform', 'Jetpack Compose', 'Retrofit', 'Room', 'SQLite', 'Dagger']
  },
  {
    companyLink: "https://www.intuit.com/ca/",
    company: 'Intuit',
    role: 'Software Engineer Intern',
    date: 'Sep 2024 - Dec 2024',
    // description: 'Knowledge Driven Systems / Dynamic Experiences Team',
    stack: ['Kotlin', 'Swift', 'TypeScript', 'Jetpack Compose', 'SwiftUI', 'React.js', 'JUnit', 'XCTest', 'Jest', 'Applitools Eyes']
  },
  {
    companyLink: "https://ca.formswim.com/",
    company: 'FORM',
    role: 'Software Developer Co-op',
    date: 'May 2024 - Aug 2024',
    // description: 'Mobile Engineering Team',
    stack: ['Kotlin', 'Jetpack Compose', 'RxJava', 'OkHttp', 'Protocol Buffers', 'Bluetooth Low Energy (BLE)', 'Jenkins', 'AWS', 'Firebase']
  },
  {
    companyLink: "https://www.avanti.ca/",
    company: 'Avanti',
    role: 'Software Developer Co-op',
    date: 'Sep 2023 - Apr 2024',
    // description: 'Mobile Development Team',
    stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Room', 'SQLite', 'Dagger', 'Hilt', 'JUnit', 'Mockito', 'Firebase']
  },
  {
    companyLink: "https://www.globalrelay.com/",
    company: 'Global Relay',
    role: 'Software Development Engineer in Test Co-op',
    date: 'May 2023 - Aug 2023',
    // description: 'Android Development Team',
    stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Jenkins', 'Docker']
  }
]

const projects = [
  {
    name: 'Red Squid Dead Squid - Winner at nwHacks 2025',
    description: 'Built \'Red Light, Green Light\' from Netflix\'s Squid Game with Kotlin Multiplatform and a computer vision robotic doll',
    stack: ['Kotlin', 'Python', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'Koin', 'Coil', 'Raspberry Pi', 'Figma'],
    github: 'https://github.com/jaidensiu/red-squid-dead-squid'
  },
  {
    name: 'Eggpedia',
    description: 'An Android and iOS mobile app that teaches you all about different egg recipes',
    stack: ['Kotlin', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Room', 'SQLite', 'Ktor', 'Koin', 'Coil'],
    github: 'https://github.com/jaidensiu/eggpedia'
  },
  {
    name: 'Banking Service',
    description: 'A banking web service for secure account management, balance tracking, and money transfers',
    stack: ['Go', 'Gin', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GitHub Actions', 'Kubernetes'],
    github: 'https://github.com/jaidensiu/banking-service'
  },
  {
    name: 'UBC AeroDesign - Engineering Design Team',
    description: 'Building ground station software for a plane that features a data visualization dashboard with plane controls',
    stack: ['Kotlin', 'Java', 'Compose Multiplatform', 'Redis', 'JUnit', 'Mockito', 'Docker', 'Raspberry Pi'],
    website: 'https://www.ubcaerodesign.com/'
  },
  {
    name: 'Messaging and Chatbot Service',
    description: 'A real-time messaging and LLM chatbot backend service',
    stack: ['Go', 'Gin', 'PostgreSQL', 'Gorilla WebSocket', 'Cohere', 'Docker'],
    github: 'https://github.com/jaidensiu/messaging-and-chatbot-service'
  },
  {
    name: 'World Countries App',
    description: 'An Android app that displays country details and shows a selected country on a map',
    stack: ['Kotlin', 'GraphQL', 'Jetpack Compose', 'Apollo Kotlin', 'JUnit', 'Mockito', 'Hilt', 'GitHub Actions'],
    github: 'https://github.com/jaidensiu/world-countries-app'
  },
  {
    name: 'Noodle Doodle - Winner at nwHacks 2024',
    description: 'An iOS app and IoT device that autonomously cooks a bowl of noodles',
    stack: ['Swift', 'SwiftUI', 'Alamofire', 'Python', 'Flask', 'Raspberry Pi', 'pigpio'],
    github: 'https://github.com/jaidensiu/noodle-doodle',
    livePreview: 'https://devpost.com/software/noodle-doodle'
  },
  {
    name: 'Accura Plastering Website - Freelance Project',
    description: 'Developed and deployed a website for a local business',
    stack: ['TypeScript', 'Next.js', 'React.js', 'GitHub Actions', 'Vercel'],
    website: 'https://www.accuraplastering.com/'
  },
  // {
  //     name: 'UBC Multifaceted Innovations in NeuroTechnology',
  //     // description: String().concat(
  //     //     'Worked on some cool engineering projects for neuroscience-based applications'
  //     //     // 'Contributed to software development for an award-winning neurotechnology engineering design team',
  //     //     // 'Built a data-intensive web application that visualizes a user’s attentiveness state from an EEG headset\n',
  //     //     // 'Developed a REST API using Express.js to manage routes, and Node.js and Mongoose ODM to define models\n',
  //     //     // 'Reduced MongoDB query execution times by more than 50% through effective indexing strategies for caching\n',
  //     //     // 'Verified API endpoints to ensure backend reliability and performance using Postman and MongoDB Compass',
  //     //     // 'Developed a Tkinter-based GUI facilitating EEG headset data transmission via BLE for signal processing'
  //     // ),
  //     stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Axios']
  // },
  // {
  //     name: 'Movie Review Web App',
  //     // description: String().concat(
  //     //     // 'Developed a web app so users can give their opinions about a movie and watch trailers',
  //     //     // 'Built a REST API using Spring Boot and Java to facilitate API calls for JSON movie data stored in MongoDB\n',
  //     //     // 'Implemented the UI with React.js and Bootstrap that manages Axios HTTP requests to add and read reviews'
  //     // ),
  //     stack: ['Java', 'Spring Boot', 'MongoDB', 'React.js', 'Bootstrap', 'Axios'],
  //     github: 'https://github.com/jaidensiu/Movie-Review-App'
  // }
]

const blogs = [
  {
    name: 'How to Write a Great Resume',
    description: 'A guide on how to write a great resume for students and budding industry professionals.',
    date: 'Under construction...',
    link: '/blogs/resume-guide'
  },
  {
    name: 'UBC BMEG Technical Electives Guide',
    description: 'A guide for choosing your technical electives in BMEG.',
    date: 'April 2, 2024',
    link: '/blogs/bmeg-electives-guide'
  }
]

// const notes = [
//     {
//         name: 'Go Programming',
//         description: 'My notes for the Go Programming Language.',
//         date: 'June 26, 2024',
//         link: '/notes/go-programming'
//     }
// ]

export { header, home, about, experiences, projects, blogs }