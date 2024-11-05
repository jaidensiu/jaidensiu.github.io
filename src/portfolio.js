import homepic from "./components/Access/pic_of_me.jpg"
import aboutpic from "./components/Access/gopher_banner.gif"

const header = {
    homepage: '/',
    title: 'Jaiden Siu',
}

const home = {
    photo: homepic,
    name: 'Jaiden',
    role: 'SWE Intern @ Intuit • BME + CS @ UBC',
    description: 'Interested in mobile computing, distributed systems, and artificial intelligence.',
    contact: {
        // resume: 'https://drive.google.com/file/d/1kRbtdnIrpz4b0WgfL3cbeu8xqBdReFm-/view?usp=sharing',
        github: 'https://github.com/jaidensiu',
        linkedin: 'https://www.linkedin.com/in/jaidensiu/',
        email: 'siujaiden@gmail.com'
    }
}

const about = {
    photo: aboutpic,
    facts: [
        'Currently learning Go (the programming language)',
        'Currently learning Mandarin Chinese',
        'Currently one of the Co-Presidents for UBC BMEUSA',
        'I like to nerd out about software and technology',
        'I train calisthenics',
        'I like to eat eggs',
        'I play the piano',
        'I used to be a competitive swimmer (aka swammer)'
    ]
}

const experiences = [
    {
        companyLink: "https://www.intuit.com/ca/",
        company: 'Intuit',
        role: 'Software Engineer Intern',
        date: 'Sep 2024 - Present',
        description: 'Knowledge Driven Systems and Tools Team',
        stack: ['Kotlin', 'Swift', 'TypeScript', 'Jetpack Compose', 'SwiftUI', 'React.js', 'JUnit', 'XCTest', 'Jest', 'Applitools Eyes']
    },
    {
        companyLink: "https://ca.formswim.com/",
        company: 'FORM',
        role: 'Android Developer Co-op',
        date: 'May 2024 - Aug 2024',
        description: 'Mobile Engineering Team',
        stack: ['Kotlin', 'Java', 'Jetpack Compose', 'RxJava', 'Protocol Buffers', 'Bluetooth Low Energy (BLE)', 'Jenkins', 'AWS', 'Firebase']
    },
    {
        companyLink: "https://www.avanti.ca/",
        company: 'Avanti',
        role: 'Software Developer Co-op',
        date: 'Sep 2023 - Apr 2024',
        description: 'Mobile Development Team',
        stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Room', 'JUnit', 'Mockito', 'Firebase']
    },
    {
        companyLink: "https://www.globalrelay.com/",
        company: 'Global Relay',
        role: 'Software Development Engineer in Test Co-op',
        date: 'May 2023 - Aug 2023',
        description: 'Android Development Team',
        stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Jenkins', 'Docker']
    }
]

const projects = [
    {
        name: 'Simple Bank Service',
        description: 'A backend web service in Go for secure account management, balance tracking, and money transfers',
        stack: ['Go', 'Gin', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GitHub Actions', 'Kubernetes']
    },
    {
        name: 'UBC AeroDesign Engineering Design Team',
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
        name: 'Noodle Doodle - 1st Place at nwHacks 2024',
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
        name: 'UBC BMEG Technical Electives Guide',
        description: 'An in depth guide for choosing your technical electives in BMEG.',
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
