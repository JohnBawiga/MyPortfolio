import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    canva,
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
    c,
    cplus,
    csharp,
    spring,
    net,
    welltalk,
    python,
    mom,
    mommy,
    mill,
    jk
  } from "../assets/assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Enthusiast Gamer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Canva",
      icon: canva
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
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c
    },
    {
      name: "C ++",
      icon: cplus
    },
    {
      name: "C sharp",
      icon: csharp
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Springboot",
      icon: spring,
    },
    
    {
      name: "figma",
      icon: figma,
    },
  
  ];
  
  const experiences = [
    {
      title: "NetMommy - Project Leader",
      company_name: "Application Development Project",
      icon: net,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2021",
      points: [
        
        "Led a team in the development of Netmommy, a cybersecurity app, demonstrating effective leadership and project management skills.",
        "Developed Netmommy with a focus on cybersecurity, implementing features to enhance user privacy, data protection, and threat detection.",
        "Successfully addressed and resolved complex coding challenges and issues that arose during the development process.",
      ],
    },
    {
      title: "WellTalk - Project Leader",
      company_name: "Capstone Project",
      icon: welltalk,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining a native application using React.js and other related technologies.",
        "Collaborating with cross-functional teams and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Creating a website seemed challenging until my leader, John, guided me throughout the project. His immense patience with us, the team members, made the process much more manageable",
      name: "Mill Zozobrado",
      designation: "Project Member",
      company: "AppDev",
      image: mill,
    },
    {
      testimonial:
        "Teacher John has been part of our GLC Family who has not only shared his knowledge to our foreign students but also showcased his talent during those times that we was still part of the ESL Industry",
      name: "JKenneth Lumapay",
      designation: "Mentor",
      company: "Global Language Cebu",
      image: jk,
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
      name: "NetMommy",
      description:
        "Your all-in-one parental control app—tracks online activities, blocks inappropriate content, monitors user movement, and provides insights into social media. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "pink-text-gradient",
        },
      ],
      image: mom,
      source_code_link: "https://drive.google.com/file/d/1NFw39hVHPQ_EuAuIukfx5tGFCOYsAJj2/view",
    },
    {
      name: "WellTalk App",
      description:
        "A mental health application, a streamlined, user-friendly solution to encourage broader participation in counseling services.                         ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "springboot",
          color: "pink-text-gradient",
        },
      ],
      image: mommy,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };