import homepic from './components/Access/pic_of_me.jpg'
import aboutpic from './components/Access/go_core_data_case_study.png'

export interface HeaderInfo {
  homepage: string
  title: string
}

export interface ContactInfo {
  resume?: string
  github?: string
  linkedin?: string
  email?: string
}

export interface HomeInfo {
  photo: string
  name: string
  role: string
  description: string
  contact: ContactInfo
}

export interface AboutInfo {
  photo: string
  work: string[]
  outsideWork: string[]
}

export interface Experience {
  companyLink?: string
  company: string
  role: string
  date: string
  description?: string
  stack?: string[]
  sourceCode?: string
  livePreview?: string
}

export interface Project {
  name: string
  description?: string
  photo?: string
  stack?: string[]
  sourceCode?: string
  github?: string
  website?: string
  livePreview?: string
}

export interface Blog {
  name: string
  description: string
  date: string
  link: string
}

export interface Note {
  name: string
  description: string
  date: string
  link: string
}

const header: HeaderInfo = {
  homepage: '/',
  title: 'Jaiden Siu',
}

const home: HomeInfo = {
  photo: homepic,
  name: 'Jaiden',
  role: 'Building World App @ Tools for Humanity',
  description: "Hi there, welcome to my website!\n(yes, you'll find a few Go gophers around here)",
  contact: {
    // resume: '/resume',
    github: 'https://github.com/jaidensiu',
    linkedin: 'https://www.linkedin.com/in/jaidensiu/',
  },
}

const about: AboutInfo = {
  photo: aboutpic,
  work: [
    'Passionate about building mobile apps, libraries, and backend services',
    'Currently building [World App](https://world.org/world-app) at Tools for Humanity',
  ],
  outsideWork: [
    'Currently learning Mandarin Chinese (mainly conversationally)',
    "Steadily learning some of Chopin's and Liszt's piano masterpieces",
    'Striving to lift heavier weights at the gym and perfecting my smashes in badminton',
    'I used to be a competitive swimmer (aka swammer)',
  ],
}

const experiences: Experience[] = [
  {
    companyLink: 'https://www.toolsforhumanity.com/',
    company: 'Tools for Humanity',
    role: 'Senior Software Engineer',
    date: 'Jan 2026 - Present',
    description: 'Building [World App](https://world.org/world-app)',
    stack: ['Kotlin', 'Compose', 'Retrofit', 'OkHttp', 'Koin'],
  },
  {
    companyLink: 'https://www.dialpad.com/',
    company: 'Dialpad',
    role: 'Software Engineer Co-op',
    date: 'Jan 2025 - Dec 2025',
    description: 'Cross-Platform Analytics Infrastructure and Android Tooling',
    stack: ['Kotlin', 'Swift', 'JavaScript', 'Python', 'Kotlin Multiplatform', 'JUnit', 'Jetpack Compose', 'Retrofit', 'Ktor', 'Dagger', 'Paparazzi', 'Gradle', 'Docker', 'GitHub Actions', 'Bitrise', 'Amplitude', 'Firebase'],
  },
  {
    companyLink: 'https://www.intuit.com/',
    company: 'Intuit',
    role: 'Software Engineer Co-op',
    date: 'Sep 2024 - Dec 2024',
    description: 'Server-Driven UI and Design Systems',
    stack: ['Kotlin', 'Swift', 'TypeScript', 'Jetpack Compose', 'SwiftUI', 'React.js', 'JUnit', 'XCTest', 'Jest', 'Applitools Eyes', 'Jenkins'],
  },
  {
    companyLink: 'https://ca.formswim.com/',
    company: 'FORM',
    role: 'Software Developer Co-op',
    date: 'May 2024 - Aug 2024',
    description: 'AR Swim Goggles',
    stack: ['Kotlin', 'Jetpack Compose', 'RxJava', 'OkHttp', 'Protocol Buffers', 'Bluetooth Low Energy (BLE)', 'Jenkins', 'AWS', 'Firebase'],
  },
  {
    companyLink: 'https://www.avanti.ca/',
    company: 'Avanti',
    role: 'Software Developer Co-op',
    date: 'Sep 2023 - Apr 2024',
    description: 'Human Capital Management (HCM)',
    stack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Room', 'SQLite', 'Dagger', 'Hilt', 'JUnit', 'Mockito', 'Firebase'],
  },
  {
    companyLink: 'https://www.globalrelay.com/',
    company: 'Global Relay',
    role: 'Software Development Engineer in Test Co-op',
    date: 'May 2023 - Aug 2023',
    description: 'QA and Automation Infrastructure',
    stack: ['Kotlin', 'Java', 'Espresso', 'JUnit', 'Jenkins', 'Docker'],
  },
]

const projects: Project[] = [
  {
    name: 'Red Squid Dead Squid - Winner at nwHacks 2025',
    description: "Built the Red Light, Green Light game from Netflix's Squid Game with Kotlin Multiplatform and a robotic doll",
    stack: ['Kotlin', 'Python', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Ktor', 'Koin', 'Coil', 'Raspberry Pi', 'Figma'],
    github: 'https://github.com/jaidensiu/red-squid-dead-squid',
  },
  {
    name: 'Eggpedia - Kotlin Multiplatform Contest 2025',
    description: 'An Android and iOS mobile app to explore recipes and play minigames about eggs',
    stack: ['Kotlin', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Room', 'SQLite', 'Ktor', 'Koin', 'Coil'],
    github: 'https://github.com/jaidensiu/eggpedia',
  },
  {
    name: 'Noodle Doodle - Winner at nwHacks 2024',
    description: 'An iOS app and IoT device that autonomously cooks a bowl of noodles',
    stack: ['Swift', 'SwiftUI', 'Alamofire', 'Python', 'Flask', 'Raspberry Pi', 'pigpio'],
    github: 'https://github.com/jaidensiu/noodle-doodle',
    livePreview: 'https://devpost.com/software/noodle-doodle',
  },
  {
    name: 'Accura Plastering Website - Freelance Project',
    description: 'Developed and deployed a website for a local business',
    stack: ['TypeScript', 'Next.js', 'React.js', 'GitHub Actions', 'Vercel'],
    website: 'https://www.accuraplastering.com/',
  },
]

const blogs: Blog[] = [
  {
    name: 'My UBC Co-op Program Experience',
    description: 'My co-op experience wrapped',
    date: 'December 21, 2025',
    link: '/blogs/co-op',
  },
  {
    name: 'How to Write a Great Resume',
    description: 'A guide on how to write a great resume for students and budding industry professionals',
    date: 'April 4, 2025',
    link: '/blogs/resume-guide',
  },
  {
    name: 'UBC BMEG Technical Electives Guide',
    description: 'A guide for choosing your technical electives in BMEG',
    date: 'April 2, 2024 (Last edited: January 30, 2025)',
    link: '/blogs/bmeg-electives-guide',
  },
]

// Placeholder data for parked sections that are not currently routed.
const contact: ContactInfo = {}
const courses: string[] = []
const skills: string[] = []
const notes: Note[] = []

export { header, home, about, experiences, projects, blogs, contact, courses, skills, notes }
