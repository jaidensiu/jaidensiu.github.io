import aboutpic from "./components/Access/pic_of_me.jpg"

const header = {
    homepage: '/',
    title: 'Jaiden Siu',
}

const about = {
    photo: aboutpic,
    name: 'Jaiden',
    role: 'Android Developer Co-op @ FORM • BME + CS @ UBC',
    description: String().concat(
        'I\'m currently a student at the University of British Columbia studying Biomedical Engineering with a specialization in Computer Science. Currently, I am working as an Android Developer Co-op at FORM building a scalable mobile app for smart goggles to transform the way people swim.\n',
        'On UBC campus, you will find me building software for autonomous aircraft systems on UBC AeroDesign. You will also find me deeply involved in the engineering community as a Co-President on the BMEUSA student council through community building, mentorship, and outreach.\n',
        'Passionate about architecting and developing software, my mission is to bring applications and services to fruition. Recently, I have been learning backend development with Go, and cross-platform development with Kotlin/Compose Multiplatform. In my free time, you\'ll find me breaking a sweat at the gym, refining my swimming technique at the pool, and bringing my engineering projects to life.'
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
        company: 'Form Athletica Inc.',
        role: 'Android Developer Co-op',
        date: 'Apr 2024 - Present',
        description: String().concat(
            'Building mobile experiences that pair with smart swim goggles to transform the way people swim'
        ),
        stack: ['Kotlin', 'Jetpack Compose', 'XML', 'RxJava', 'Room', 'Protocol Buffers', 'Jenkins', 'Bluetooth Low Energy (BLE)', 'Firebase', 'Android Studio']
    },
    {
        company: 'Avanti Software Inc.',
        role: 'Software Developer Co-op',
        date: 'Sep 2023 - Apr 2024',
        description: String().concat(
            'Implemented a mobile solution to make viewing pay statements and managing vacation days effortless'
        ),
        stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'OkHttp', 'Room', 'JUnit', 'Mockito', 'Firebase', 'Android Studio', 'Postman']
    },
    {
        company: 'Global Relay Communications Inc.',
        role: 'Software Development Engineer in Test Co-op',
        date: 'May 2023 - Aug 2023',
        description: String().concat(
            'Developed test automation to efficiently validate a mobile app for messaging and calling'
        ),
        stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Android Studio', 'Jenkins', 'Docker']
    }
]

const projects = [
    {
        name: 'UBC AeroDesign',
        description: String().concat(
            'Contributing to software development for an autonomous aircraft system competition at SAE Aero Design'
        ),
        stack: ['Kotlin', 'Kotlin Multiplatform (KMP)', 'Compose Multiplatform', 'JUnit', 'Mockito', 'Raspberry Pi']
    },
    {
        name: 'Gopher Banking Service',
        description: String().concat(
            'Developing a backend web service in Go to manage accounts, record transfers, and perform transactions'
        ),
        stack: ['Go', 'SQL', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/jaidensiu/gopher-banking-service'
    },
    {
        name: 'World Countries App',
        description: String().concat(
            'Built an Android app to display country details from a GraphQL API, and view a selected country on a map'
        ),
        stack: ['Kotlin', 'GraphQL', 'Jetpack Compose', 'Apollo Kotlin', 'JUnit', 'Mockito', 'Hilt'],
        github: 'https://github.com/jaidensiu/world-countries-app'
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
            'Contributed to software development for an award-winning neurotechnology engineering design team',
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
            'Increased web traffic from 10 to 50+ visitors by building a new website in TypeScript using Next.js and Vercel'
            // 'Freelanced for a local business to build a website, focusing on SEO to improve site ranking using metadata\n',
            // 'Built the website using Next.js with TypeScript and CSS, and deployed the website onto a domain with Vercel\n',
            // 'Optimized web vitals by minimizing latency to 0.06s and responsiveness to 0.03s for the optimal user experience',
        ),
        stack: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'React.js'],
        github: 'https://github.com/jaidensiu/Accura-Website',
        website: 'https://www.accuraplastering.com/'
    },
    {
        name: 'Movie Review Web App',
        description: String().concat(
            'Developed a full-stack web app for users to read and write movie reviews, and watch trailers from TMDb API',
            // 'Built a REST API using Spring Boot and Java to facilitate API calls for JSON movie data stored in MongoDB\n',
            // 'Implemented the UI with React.js and Bootstrap that manages Axios HTTP requests to add and read reviews'
        ),
        stack: ['Java', 'Spring Boot', 'MongoDB', 'React.js', 'Bootstrap', 'Axios', 'Postman', 'IntelliJ', 'VS Code'],
        github: 'https://github.com/jaidensiu/Movie-Review-App'
    },
    // {
    //     name: 'Travel Planner Mobile App',
    //     description:
    //         'This is a nwHacks 2023 hackathon project where my team and I built an Android mobile application to reduce the information overload experienced on travel sites. I was involved with implementing a REST API to save user profile data using Sequelize, MySQL, Express, and Node. I tested the API endpoints using MySQL Workbench and Postman to verify SQL CRUD operations. The UI/UX components were designed and emulated in Android Studio which was written in Java and XML.',
    //     photo: null,
    //     stack: ['Express.js', 'Node.js', 'JavaScript', 'Java', 'Android Studio', 'VS Code', 'MySQL', 'Postman'],
    //     github: 'https://github.com/jaidensiu/nwHacks-2023',
    //     livePreview: 'https://devpost.com/software/xplore-g1thmo'
    // },
    // {
    //     name: 'Handwritten Digit Classifier GUI',
    //     description:
    //         'This project was inspired by a Nintendo DS game called Brain Age that I used to play as a child. In this game, one of the particular minigames is a timed challenge where you write out answers to 20 randomized arithmetic questions onto the DS console\'s touchscreen in sequence. To mimic the digit recognition system in the DS console, I decided to create a convolutional neural network using max pooling that would be trained with the MNIST dataset. To test the digit recognition system, I developed a Pygame module that would allow a user to write a digit for the system to recognize the digit.',
    //     stack: ['Python', 'TensorFlow', 'Keras', 'Pygame', 'VS Code'],
    //     github: 'https://github.com/jaidensiu/Digit-Recognition-System'
    // },
    // {
    //     name: 'Rental Bike Usage Prediction',
    //     description:
    //         'This project involved applying machine learning and statistical models to forecast bike rental demand using weather, hourly rentals, and date data for bike rental supply stability. I conducted exploratory data analysis by visualizing the dataset via scatter plots to summarize the data and relation between different features. To apply models to the dataset, I employed a linear and mutiple linear regression model to best fit a line for the number of bikes dependent on temperature. I also used a vanilla neural network to fit a curve against the data. To evaluate the models, I used metrics such a mean squared error to quantify prediction accuracy. The findings of this project allows for ensuring a stable supply of rental bikes.',
    //     stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 'Google Colab'],
    //     sourceCode: 'https://colab.research.google.com/drive/17NUwQiYhrxbHLSbDXd86RwJlmRIa-9wn?usp=sharing'
    // },
    // {
    //     name: 'Microfluidic Characterization Device',
    //     description:
    //         'A design course project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also produced design history files according to FDA guidelines that are used for medical device development. Overall, we modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and wrote Arduino sketch software to control the actuation of physical components such as servo motors.',
    //     stack: ['C++', 'Arduino', 'SolidWorks', 'MultiSim']
    // },
    // {
    //     name: 'Autonomous Robotic Claw',
    //     description:
    //         'A design course project that introduces fundamental engineering design concepts from rapid-protyping to iterative design processes. I designed a pulley system that geometrically optimized the claw to open and close, wrote Arduino sketch software to automate the claw, pinned electronics such as a sonar sensor and servo motor, and modeled claw actuation in SolidWorks. My design of the cardboard robotic claw was able to sense and pick up items from almonds to soup cans over an obstacle. This project was a highlight of my first year of engineering at UBC.',
    //     stack: ['C++', 'Arduino', 'SolidWorks'],
    //     github: 'https://github.com/jaidensiu/Autonomous-Robotic-Claw'
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

const notes = [
    {
        name: 'Go Programming',
        description: 'My notes for the Go Programming Language.',
        date: 'June 26, 2024',
        link: '/notes/go-programming'
    }
]

export { header, about, experiences, projects, blogs, notes }
