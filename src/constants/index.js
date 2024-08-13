import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer(learning)",
    icon: mobile,
  },
  {
    title: "Web Developer ",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences = [
  {
    title: "IT Engineer",
    company_name: "TCS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November-2023",
    points: [
      "User Support: Emphasize your experience providing technical support to users, including troubleshooting and resolving issues efficiently.",
      "Networking: Highlight any involvement in network setup, configuration, and maintenance, as well as ensuring network security and performance.",
      "Problem Resolution: Detail how you handled and resolved user issues, showcasing your problem-solving skills and ability to work under pressure.",
      "Customer Service: Highlight any instances where you went above and beyond to ensure customer satisfaction and resolve complex issues.",
    ],
  },
  {
    title: " Internship in IT Associate ",
    company_name: "SshArk AUM LLP ",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sept 2022",
    points: [
      "Developing and maintaining E-Commerce web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality Web-APP.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "I was actively developing a WhatsApp Chatbot, designing and implementing user-friendly conversational experiences on the platform."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Currently pursuing an M.Tech degree, with a focus on enhancing my technical skills and knowledge.",
    name: "M.Tech",
    designation: "MDU",
    company: "Vaish College of Engineering ",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Completed MCA through distance learning with a CGPA of 73%",
    name: "MCA",
    designation: "",
    company: "Chandigarh University ",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Completed BCA through Vaish College of Engineering with 68%",
    name: "BCA",
    designation: "MDU",
    company: "Vaish College of Engineering",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Posting",
    description:
      "A web-based platform enabling users to post, read, update, and delete content with integrated authentication. ",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "rest API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/KpDaksh/Mega_Blog",
  },
  {
    name: "E-Commerce",
    description:
      "A dynamic e-commerce website built with React and Redux, featuring a seamless user experience for browsing, purchasing products using API calls",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KpDaksh/E-Commerce",
  },
  {
    name: "Keep Notes",
    description:
      "A simple note-taking application built with HTML, CSS, and JavaScript that mimics Google Notes, allowing users to create, edit, and delete notes, with data persistence through local storage",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/KpDaksh/Keep_Notes",
  },
];

export { services, technologies, experiences, testimonials, projects };
