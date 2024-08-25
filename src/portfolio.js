import aboutpic from "./components/Access/pic_of_me.jpg"

const header = {
    homepage: '/',
    title: 'Jaiden Siu',
}

const about = {
    photo: aboutpic,
    name: 'Jaiden',
    role: 'Android Developer Co-op @ FORM • Incoming SWE Intern @ Intuit • BME + CS @ UBC',
    description: String().concat(
        // 'I\'m currently a student at the University of British Columbia studying Biomedical Engineering with a specialization in Computer Science. Currently, I am working as an Android Developer Co-op at FORM building a scalable mobile app for smart goggles to transform the way people swim.\n',
        // 'On UBC campus, you will find me building software for autonomous aircraft systems on UBC AeroDesign. You will also find me deeply involved in the engineering community as a Co-President on the BMEUSA student council through community building, mentorship, and outreach.\n',
        // 'Passionate about architecting and developing software, my mission is to bring applications and services to fruition. Recently, I have been learning backend development with Go, and cross-platform development with Kotlin/Compose Multiplatform. In my free time, you\'ll find me breaking a sweat at the gym, refining my swimming technique at the pool, and bringing my engineering projects to life.'
        'Interested in engineering and computer science.',
    ),
    contact: {
        // resume: 'https://drive.google.com/file/d/1kRbtdnIrpz4b0WgfL3cbeu8xqBdReFm-/view?usp=sharing',
        github: 'https://github.com/jaidensiu',
        linkedin: 'https://www.linkedin.com/in/jaidensiu/',
        email: 'siujaiden@gmail.com'
    }
}

const experiences = [
    {
        company: 'Intuit Inc.',
        role: 'Software Engineer Intern',
        date: 'Incoming Sep 2024',
        description: String().concat(
            'Joining a team working on a server driven UI framework and native UI libraries for Android, iOS, and Web'
        ),
        stack: []
    },
    {
        company: 'Form Athletica Inc.',
        role: 'Android Developer Co-op',
        date: 'Apr 2024 - Present',
        description: String().concat(
            'Building the FORM Swim Android app that pairs with smart swim goggles to transform the way people swim'
        ),
        stack: ['Kotlin', 'Jetpack Compose', 'XML', 'RxJava', 'Room', 'Protocol Buffers', 'Jenkins', 'Bluetooth Low Energy (BLE)', 'Firebase', 'Android Studio']
    },
    {
        company: 'Avanti Software Inc.',
        role: 'Software Developer Co-op',
        date: 'Sep 2023 - Apr 2024',
        description: String().concat(
            'Worked on the Avanti Go Android app to make things like viewing pay statements and schedules effortless'
        ),
        stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'OkHttp', 'Room', 'JUnit', 'Mockito', 'Firebase', 'Android Studio', 'Postman']
    },
    {
        company: 'Global Relay Communications Inc.',
        role: 'Software Development Engineer in Test Co-op',
        date: 'May 2023 - Aug 2023',
        description: String().concat(
            'Built test automation to ensure compliance, privacy, and security for the Global Relay Android app'
        ),
        stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Android Studio', 'Jenkins', 'Docker']
    }
]

const projects = [
    {
        name: 'UBC AeroDesign',
        description: String().concat(
            'Building avionics software'
            // 'Contributing to software development for an autonomous aircraft system competition at SAE Aero Design'
        ),
        stack: ['Kotlin', 'Kotlin Multiplatform (KMP)', 'Compose Multiplatform', 'JUnit', 'Mockito', 'Raspberry Pi']
    },
    {
        name: 'Gopher Bank',
        description: String().concat(
            'Building my own version of Interac e-Transfer or Zelle'
            // 'Developing bank web service in Go that manages accounts, records transfers, and performs transactions.'
        ),
        stack: ['Go', 'SQL', 'Gin', 'PostgreSQL', 'Docker', 'GitHub Actions'],
        github: 'https://github.com/jaidensiu/Gopher-Bank'
    },
    {
        name: 'World Countries App',
        description: String().concat(
            'Built an Android app so people can learn more about the world'
            // 'Built an Android app to display country details from a GraphQL API, and view a selected country on a map'
        ),
        stack: ['Kotlin', 'GraphQL', 'Jetpack Compose', 'Apollo Kotlin', 'JUnit', 'Mockito', 'Hilt', 'GitHub Actions'],
        github: 'https://github.com/jaidensiu/World-Countries-App'
    },
    {
        name: 'Noodle Doodle - 1st Place at nwHacks',
        description: String().concat(
            'Placed 1st out of 300 teams at a hackathon by working in a team of 3 to build a noodle cooking IoT device'
            // 'Led the development of an IoT device that enables users to cook noodles automatically with an iPhone\n',
            // 'Implemented an iOS app in Swift using SwiftUI for user interfaces and Alamofire to handle HTTP connections\n',
            // 'Developed a Flask server in Python hosted on a Raspberry Pi to expose an API endpoint to the iOS client\n',
            // 'Actuated 4 servo motors from a Flask server using pigpio to execute cooking sequence with 100% reliability'
        ),
        stack: ['Swift', 'SwiftUI', 'Alamofire', 'Xcode', 'Python', 'Flask', 'VS Code', 'Raspberry Pi', 'pigpio'],
        github: 'https://github.com/jaidensiu/Noodle-Doodle',
        livePreview: 'https://devpost.com/software/noodle-doodle'
    },
    {
        name: 'UBC Multifaceted Innovations in NeuroTechnology',
        description: String().concat(
            'Worked on some cool engineering projects for neuroscience-based applications'
            // 'Contributed to software development for an award-winning neurotechnology engineering design team',
            // 'Built a data-intensive web application that visualizes a user’s attentiveness state from an EEG headset\n',
            // 'Developed a REST API using Express.js to manage routes, and Node.js and Mongoose ODM to define models\n',
            // 'Reduced MongoDB query execution times by more than 50% through effective indexing strategies for caching\n',
            // 'Verified API endpoints to ensure backend reliability and performance using Postman and MongoDB Compass',
            // 'Developed a Tkinter-based GUI facilitating EEG headset data transmission via BLE for signal processing'
        ),
        stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Axios']
    },
    {
        name: 'Accura Plastering Website',
        description: String().concat(
            'Built a website as part of freelance work'
            // 'Freelanced for a local business to build a website, focusing on SEO to improve site ranking using metadata\n',
            // 'Built the website using Next.js with TypeScript and CSS, and deployed the website onto a domain with Vercel\n',
            // 'Optimized web vitals by minimizing latency to 0.06s and responsiveness to 0.03s for the optimal user experience',
        ),
        stack: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'React.js'],
        website: 'https://www.accuraplastering.com/'
    },
    {
        name: 'Movie Review Web App',
        description: String().concat(
            'Developed a web app so users can give their opinions about a movie and watch trailers',
            // 'Built a REST API using Spring Boot and Java to facilitate API calls for JSON movie data stored in MongoDB\n',
            // 'Implemented the UI with React.js and Bootstrap that manages Axios HTTP requests to add and read reviews'
        ),
        stack: ['Java', 'Spring Boot', 'MongoDB', 'React.js', 'Bootstrap', 'Axios', 'Postman', 'IntelliJ', 'VS Code'],
        github: 'https://github.com/jaidensiu/Movie-Review-App'
    }
]

const blogs = [
    {
        name: 'UBC BMEG Technical Electives Guide',
        description: 'An in depth guide for choosing your technical electives in BMEG.',
        date: 'April 2, 2024',
        link: '/blogs/bmeg-electives-guide'
    }
]

const notes = [
    {
        name: 'Go Programming',
        description: 'My notes for the Go Programming Language.',
        date: 'June 26, 2024',
        link: '/notes/go-programming'
    }
]

export { header, about, experiences, projects, blogs, notes }
