import aboutpic from "./components/Access/pic_of_me.jpg"

const header = {
    homepage: 'https://jaidensiu.github.io/',
    title: 'Jaiden Siu',
}

const about = {
    photo: aboutpic,
    name: 'Jaiden',
    role: 'Software Developer Co-op @ Avanti • BME + CS @ UBC',
    description: 
        'I\'m currently a student at the University of British Columbia studying Biomedical Engineering and Computer Science. I have an avid interest in entrepreneurship and technology pertaining to software engineering and healthcare. So far, I have experience with mobile development, web development, and software testing.',
        // 'Hey there! I\'m currently a student at the University of British Columbia studying Biomedical Engineering and Computer Science. I\'m also currently working as a Software Developer Co-op at Avanti where my focus lies in mobile development. I have an avid interest in software engineering, whether it\'s fleshing out the design of database schemas or integrating novel machine learning algorithms into server side systems. Outside of work, you\'ll find me breaking a sweat with workouts and swimming, tickling the ivories on the piano, or strategizing my way through a game of mahjong. Learn more or contact me in the links below!',

        // 'I\'m currently a student at the University of British Columbia studying Biomedical Engineering and Computer Science. I\'m also currently a Software Developer Co-op at Avanti working on mobile development for human capital management. I have an avid interest in entrepreneurship and technology pertaining to many facets of software engineering from databases to distributed systems. So far, I have experience with mobile development, web development, machine learning, and software testing. Outside of work, you\'ll often catch me working out, swimming, practicing the piano, or playing mahjong.',
    contact: {
        resume: 'https://drive.google.com/file/d/1kRbtdnIrpz4b0WgfL3cbeu8xqBdReFm-/view?usp=sharing',
        github: 'https://github.com/jaidensiu',
        linkedin: 'https://www.linkedin.com/in/jaidensiu/',
        email: 'siujaiden@gmail.com'
    }
}

const experiences = [
    {
        company: 'Avanti Software Inc.',
        companyLink: 'https://www.avanti.ca/',
        role: 'Software Developer Co-op',
        date: 'Sep 2023 - Present',
        stack: ['Kotlin', 'Jetpack Compose', 'JUnit', 'Mockito', 'Android Studio', 'Swift', 'SwiftUI', 'Xcode']
    },
    {
        company: 'Global Relay Communications Inc.',
        companyLink: 'https://www.globalrelay.com/',
        role: 'Software Development Engineer in Test Co-op',
        date: 'May 2023 - Aug 2023',
        stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Android Studio', 'Jenkins']
    }
]

const projects = [
    {
        name: 'Noodle Doodle - 1st Place at nwHacks 2024',
        description: String().concat(
            'Built an IoT device that enables users to customize and cook noodles automatically through an iOS app\n',
            'Implemented an iOS app in Swift using SwiftUI for user interfaces and Alamofire to handle HTTP connections\n',
            'Developed a Flask server in Python hosted on a Raspberry Pi to expose an API endpoint to the iOS client\n',
            'Actuated 4 servo motors from a Flask server using pigpio to execute cooking sequence with 100% reliability'
        ),
        stack: ['Swift', 'SwiftUI', 'Alamofire', 'Python', 'Flask', 'Raspberry Pi', 'pigpio'],
        github: 'https://github.com/jaidensiu/Noodle-Doodle',
        livePreview: 'https://devpost.com/software/noodle-doodle'
    },
    {
        name: 'UBC MINT (Multifaceted Innovations in NeuroTechnology)',
        description: String().concat(
            'Contributed to software development for an award-winning neurotechnology engineering design team\n',
            'Designed the software architecture for a real-time data visualization web app using the Axios HTTP client\n',
            'Implemented a REST API using Express with Node and Mongoose to handle livestream data in MongoDB\n',
            'Verified API endpoints to ensure reliability and performance using Postman and MongoDB Compass\n',
            'Developed a Tkinter-based GUI facilitating EEG headset data transmission via BLE for signal processing'
        ),
        stack: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Unity', 'Tkinter'],
        github: 'https://github.com/UBCMint',
        website: 'https://ubcmint.github.io/'
    },
    {
        name: 'Accura Plastering Website',
        description: String().concat(
            'Freelancing for a local business to build a company website designed to attract customers by optimizing SEO\n',
            'Building the website with Next using TSX and CSS modules, and deploying the production build using Vercel',
        ),
        stack: ['HTML', 'CSS', 'TypeScript', 'Next.js', 'React.js'],
        github: 'https://github.com/jaidensiu/Accura-Website',
        website: 'https://www.accuraplastering.com/'
    },
    {
        name: 'Movie Review Web App',
        description: String().concat(
            'Developed a full-stack web app for users to read and write movie reviews, and watch trailers from TMDb API\n',
            'Built a REST API using Spring Boot and Java to facilitate API calls for JSON movie data stored in MongoDB\n',
            'Implemented the UI with React.js and Bootstrap that manages Axios HTTP requests to add and read reviews'
        ),
        stack: ['Java', 'Spring Boot', 'MongoDB', 'React.js', 'Bootstrap', 'Axios', 'Postman', 'IntelliJ', 'VS Code'],
        github: 'https://github.com/jaidensiu/Movie-Review-App'
    },
    {
        name: 'Travel Planner Mobile App',
        description:
            'This is a nwHacks 2023 hackathon project where my team and I built an Android mobile application to reduce the information overload experienced on travel sites. I was involved with implementing a REST API to save user profile data using Sequelize, MySQL, Express, and Node. I tested the API endpoints using MySQL Workbench and Postman to verify SQL CRUD operations. The UI/UX components were designed and emulated in Android Studio which was written in Java and XML.',
        photo: null,
        stack: ['Express.js', 'Node.js', 'JavaScript', 'Java', 'Android Studio', 'VS Code', 'MySQL', 'Postman'],
        github: 'https://github.com/jaidensiu/nwHacks-2023',
        livePreview: 'https://devpost.com/software/xplore-g1thmo'
    },
    {
        name: 'Handwritten Digit Classifier GUI',
        description:
            'This project was inspired by a Nintendo DS game called Brain Age that I used to play as a child. In this game, one of the particular minigames is a timed challenge where you write out answers to 20 randomized arithmetic questions onto the DS console\'s touchscreen in sequence. To mimic the digit recognition system in the DS console, I decided to create a convolutional neural network using max pooling that would be trained with the MNIST dataset. To test the digit recognition system, I developed a Pygame module that would allow a user to write a digit for the system to recognize the digit.',
        stack: ['Python', 'TensorFlow', 'Keras', 'Pygame', 'VS Code'],
        github: 'https://github.com/jaidensiu/Digit-Recognition-System'
    },
    {
        name: 'Rental Bike Usage Prediction',
        description:
            'This project involved applying machine learning and statistical models to forecast bike rental demand using weather, hourly rentals, and date data for bike rental supply stability. I conducted exploratory data analysis by visualizing the dataset via scatter plots to summarize the data and relation between different features. To apply models to the dataset, I employed a linear and mutiple linear regression model to best fit a line for the number of bikes dependent on temperature. I also used a vanilla neural network to fit a curve against the data. To evaluate the models, I used metrics such a mean squared error to quantify prediction accuracy. The findings of this project allows for ensuring a stable supply of rental bikes.',
        stack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 'Google Colab'],
        sourceCode: 'https://colab.research.google.com/drive/17NUwQiYhrxbHLSbDXd86RwJlmRIa-9wn?usp=sharing'
    },
    {
        name: 'Microfluidic Characterization Device',
        description:
            'A design project inspired by cell sorting techniques in microfluidic devices. In a team, we designed an electromechanical device capable of sorting ping pong balls of two colours. We also produced design history files according to FDA guidelines that are used for medical device development. Overall, we modeled mechanical actuation using SolidWorks by finite element analysis, designed analog circuits to actuate device with photoresistor-integrated sensors, and designed Arduino sketch software to control the actuation of physical components such as servo motors.',
        stack: ['C++', 'Arduino', 'SolidWorks', 'MultiSim']
    },
    {
        name: 'Autonomous Robotic Claw',
        description:
            'An engineering design course project that introduces fundamental engineering design concepts from rapid-protyping to iterative design processes. I designed a pulley system that geometrically optimized the claw to open and close, wrote Arduino sketch software to automate the claw, pinned electronics such as a sonar sensor and servo motor, and modeled claw actuation in SolidWorks. My design of the cardboard robotic claw was able to sense and pick up items from almonds to soup cans over an obstacle. This project was a highlight of my first year of engineering at UBC.',
        stack: ['C++', 'Arduino', 'SolidWorks'],
        github: 'https://github.com/jaidensiu/Autonomous-Robotic-Claw'
    }
]

export { header, about, experiences, projects }
