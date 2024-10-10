import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactnative,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  androidstudio,
  vs,
  vitest,
  sqlite,
  regex,
  postman,
  kotlin,
  java,
  firebase,
  eclipse,
  clion,
  cpp,
  appwrite,
  freelance,
  gdsc,
  azsencs,
  elsakaelectric,
  aora,
  aflammy,
  mohtadon,
  musicplayer,
  talkbook,
  deliveroo,
  uber,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android debeveloper",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "android studio",
    icon: androidstudio,
  },
  {
    name: "appwrite",
    icon: appwrite,
  },
  {
    name: "react native",
    icon: reactnative,
  },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "java",
  //   icon: java,
  // },
  {
    name: "kotlin",
    icon: kotlin,
  },

  // {
  //   name: "sqlite",
  //   icon: sqlite,
  // },
];

const experiences = [
  {
    title: "Freelance",
    company_name: "",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2022 - now",
    points: [
      "Developing and maintaining Cross Platform applications using React Native and other related technologies.",
      "Developing and maintaining Native Android applications using Kotlin and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const volunteeringExperiences = [
  {
    title: "Head of Java Committee",
    company_name: "Google DSC Al-azhar University",
    icon: gdsc,
    iconBg: "#383E56",
    date: "October 2023 – June 2024",
    points: [
      "Led a team of 20 members, improving their programming skills through workshops",
      "Developed and conducted a Java programming course for beginners. ",
    ],
  },
  {
    title: "Technical Support & Java Instructor",
    company_name: "Google DSC Al-azhar University",
    icon: gdsc,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: ["Guided students in fundamental Java programming concepts."],
  },
  {
    title: "Android Technical Member",
    company_name: "Az-SENCS, Systems and Computer Engineering Exhibition",
    icon: azsencs,
    iconBg: "#383E56",
    date: "November 2021 - May 2022",
    points: [
      "Volunteered to expand knowledge in Android development and Teaching Android development to newer students ",
    ],
  },
  {
    title: "	Java Technical Member",
    company_name: "Az-SENCS, Systems and Computer Engineering Exhibition",
    icon: azsencs,
    iconBg: "#383E56",
    date: "March 2021 - October 2021",
    points: ["Enhanced knowledge in various Java programming concepts."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Elsaka Electric",
    description:
      "An e-commerce mobile app for selling electrical products such as lamps, wires, plugs, and other electrical items. The app provides a seamless shopping experience, complete with product listings, categorization, cart functionality, and user authentication  ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "NativeWind",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Stripe ",
        color: "pink-text-gradient",
      },
    ],
    image: elsakaelectric,
    source_code_link:
      "https://github.com/AhmedSamirElsaka/Elsaka-Electric-React-Native",
  },
  {
    name: "Aora",
    description:
      "a React Native video-sharing mobile application with real-time features using Appwrite for backend services. The app includes user authentication, media uploads, and dynamic home screen animations, providing a smooth and engaging user experience",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Context Api ",
        color: "pink-text-gradient",
      },
      {
        name: "NativeWind",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Lottie ",
        color: "pink-text-gradient",
      },
    ],
    image: aora,
    source_code_link: "https://github.com/AhmedSamirElsaka/Aora-React-Native",
  },
  {
    name: "Aflammy",
    description:
      "Developed an Android app using TMDB API to provide a comprehensive library of films and TV shows.",
    tags: [
      {
        name: "Android studio",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "TMDB",
        color: "pink-text-gradient",
      },
      {
        name: "Retrofit",
        color: "blue-text-gradient",
      },
      {
        name: "MVI",
        color: "green-text-gradient",
      },
      {
        name: "MVVM",
        color: "pink-text-gradient",
      },
    ],
    image: aflammy,
    source_code_link: "https://github.com/AhmedSamirElsaka/AflammyApp",
  },
  {
    name: "Mohtadon",
    description:
      "Created a comprehensive Islamic app offering Quran reading, recitation, Islamic radio, prayers, Hadith, Qibla, prayer times, and more.",
    tags: [
      {
        name: "Android studio",
        color: "blue-text-gradient",
      },
      {
        name: "Hilt",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "Intuit",
        color: "blue-text-gradient",
      },
      {
        name: "Room",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin Coroutines",
        color: "pink-text-gradient",
      },
    ],
    image: mohtadon,
    source_code_link: "https://github.com/mohtadon-team/mohtadon",
  },
  {
    name: "Music Player",
    description:
      "Created a sleek and intuitive music player app that allows users to scan, play, and manage local audio files Key features include audio playback, album and artist browsing, playlist creation and editing, search functionality, and audio sharing.",
    tags: [
      {
        name: "Android studio",
        color: "blue-text-gradient",
      },
      {
        name: "Hilt",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "Intuit",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin Coroutines",
        color: "pink-text-gradient",
      },
    ],
    image: musicplayer,
    source_code_link: "https://github.com/AhmedSamirElsaka/Music-Player",
  },
  {
    name: "TalkBook",
    description:
      "Developed TalkBook an Android application that serves as a comprehensive PDF reader with advanced features.Implemented secure user authentication, robust PDF reading interface, and text-to-speech (TTS) integration for converting text from PDFs into audio.",
    tags: [
      {
        name: "Android studio",
        color: "blue-text-gradient",
      },
      {
        name: "Hilt",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "Intuit",
        color: "blue-text-gradient",
      },
      {
        name: "TTS",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin Coroutines",
        color: "pink-text-gradient",
      },
    ],
    image: talkbook,
    source_code_link: "https://github.com/AhmedSamirElsaka/TalkBook",
  },
  {
    name: "Deliveroo Clone",
    description:
      "A clone of Deliveroo with functionalities like restaurant listing and order tracking",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "React Navigation",
        color: "green-text-gradient",
      },
      {
        name: "Map Integration",
        color: "pink-text-gradient",
      },
      {
        name: "Google Direction API",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: deliveroo,
    source_code_link: "https://github.com/AhmedSamirElsaka/Deliveroo-Clone",
  },
  {
    name: "Uber Clone",
    description: "A transportation app mimicking Uber's key features.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "React Navigation",
        color: "green-text-gradient",
      },
      {
        name: "Map Integration",
        color: "pink-text-gradient",
      },
      {
        name: "NativeWind",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: uber,
    source_code_link:
      "https://github.com/AhmedSamirElsaka/Uber-Clone-React-Native",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  volunteeringExperiences,
};
