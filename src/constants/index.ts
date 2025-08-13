// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  certif2,
  certif3,
  certif4,
  certif5,
  docker,
  threejs,
  project1,
  project2,
  project3,
  certif1,
  user1,
  linkedin,
  github,
  dataprotect,
  orange,
  bouygues,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "À propos de moi",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "certifications",
    title: "Certifications",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "Mon cv",
    title: "Mon cv",
    link: "https://drive.google.com/file/d/1vOgSf6oQDnwgRJqILFY5mvGzEmvWKlMt/view?usp=sharing",  // You'll need to upload your CV and replace this link
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Stage PFE – Développeur Full Stack",
    company_name: "ORANGE BUSINESS ",
    icon: orange,
    iconBg: "#fff",
    date: "Mars 2025 -  Août 2025",
    points: [
      "Développement de l’application web InternFlow en Java (Spring Boot) et Angular, selon une architecture software établie",
      "Mise en place de l’authentification sécurisée et du contrôle d’accès par rôle via Spring Security et JWT",
      "Conception de dashboards dynamiques, filtres temps réel, et tests unitaires/intégrationavec JUnit/Mockito",
      "Intégration de microservices IA (Python + LLMs) pour le parsing et la recommandationintelligente de CV",
      "Conception d’API REST, avec communication fluide et gestion robuste des erreurs",
      "Participation à un projet en méthodologie Agile (Scrum) avec Jira(User Stories),DevOps Boards, et collaboration d’équipe"
    ],
  },
  {
    title: "Stage développeur Full Stack",
    company_name: "BOUYGUES CONSTRUCTION IT",
    icon: bouygues,
    iconBg: "#fff",
    date: "Juillet 2024 - Aôut 2024",
    points: [
      "Développement d’une plateforme d’administration système en Spring Boot et Angular, selon une architecture software établie",
      "Intégration d’un système d’authentification sécurisé avec Spring Security et Angular Identity (base SQL Server)",
      "Automatisation des opérations système critiques telles que le démarrage/redémarrage des services via des scripts back-end en Java et PowerShell, réduisant de plus de 30 % les interventions manuelles des équipes IT",
      "Collaboration avec les administrateurs système et les équipes DevOps afin d’alignerl’application sur les standards d’infrastructure internes et les pipelines de déploiement.",
    ],
  },
    {
    title: "Stage en Cybersécurité ",
    company_name: "DATAPROTECT",
    icon: dataprotect,
    iconBg: "#fff",
    date: "Juillet 2023 - Aôut 2023",
    points: [
      "Développement et déploiement d’une solution de protection des terminaux basée sur les technologies Kaspersky et EDR (Endpoint Detection and Response) pour sécuriser les infrastructures informatiques critiques contre les cybermenaces",
      "Participation à la réponse aux incidents de cybersécurité, incluant la surveillance en temps réel, l’analyse des menaces et la mise en œuvre de plans de reprise après sinistre",
      "temps réel, l’analyse des menaces et la mise en œuvre de plans de reprise après sinistre . Réalisation d’audits de sécurité et d’évaluations de vulnérabilités sur les réseaux et les systèmes, renforçant la protection des données sensibles et confidentielles",
      "Acquisition d’une expérience pratique avec des outils de sécurité de niveau entreprise et contribution à la documentation des procédures de sécurité et des stratégies de remédiation.",
    ],
  },


] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Rida est un développeur passionné qui apporte une grande attention aux détails dans son travail. Son expertise en développement web moderne est remarquable.",
    name: "Orange Business",
    designation: "Manager",
    company: "Orange Business",
    image: user1,
  },


] as const;

// Projects
export const PROJECTS = [
  {
    name: "Application de gestion des clients et de suivi des achats",
    description:
      "plateforme de gestion client incluant la centralisation des données, le suivi des interactions, la gestion des plaintes et la segmentation pour des campagnes marketing ciblées.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/RIDASEQQAM/Platform-de-gestion-des-clients-et-achats.git",
    live_site_link: "",
  },
  {
    name: "Portfolio Personnel",
    description:
      "Portfolio interactif et moderne développé avec React et Three.js, mettant en valeur mes compétences techniques, mon parcours et mes réalisations à travers une expérience utilisateur immersive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/RIDASEQQAM/Mon---Portfolio.git",
    live_site_link: "",
  },
  {
    name: "E-commerce Website",
    description:
      "Site e-commerce développé avec React et Firebase, incluant authentification utilisateur, panier d'achat et paiement en ligne Stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/RidaSeqqam/e-commerce",
    live_site_link: "",
  }
] as const;

// Certifications
export const CERTIFICATIONS = [
  {
    name: "Oracle Certified Professional Java SE 17 Developer",
    issuer: "Oracle",
    date: "5 December 2024",
    description: "Maîtrise avancée du langage Java, des API clés et des fonctionnalités modernes de Java SE 17, avec la capacité de concevoir et maintenir des applications robustes, sécurisées et performantes",
    image: certif1,
    certificate_link: "https://drive.google.com/file/d/1fmCkh1cDH48pfpmPwGUZO-AuXWptMqUL/view?usp=sharing",
    tags: [
      {
        name: "Java SE 17",
        color: "blue-text-gradient",
      },
      {
        name: "Développement avancé",
        color: "green-text-gradient",
      }
    ],
  },
  {
    name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud",
    date: "13 December 2024",
    description: "Compétences avancées en développement de microservices Java, incluant la conception d’architectures distribuées, la scalabilité avec Spring Boot et Spring Cloud, ainsi que l’intégration avec des services cloud pour des applications robustes et performantes.",
    image: certif2,
    certificate_link: "https://drive.google.com/file/d/1raNUrBpb5JKK4xgpqkzw1dIfWlWiwAB1/view?usp=sharing",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Cloud",
        color: "green-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM",
    date: "13 December 2024",
    description: "Compétences fondamentales en Big Data, incluant le traitement distribué, l’analyse de données à grande échelle et l’optimisation des performances. Capacité à concevoir et mettre en œuvre des solutions Big Data fiables et évolutives.",
    image: certif3,
    certificate_link: "https://drive.google.com/file/d/1kcPDlZi6ExIdotPnOuyb_huEi9Fq5jSv/view?usp=sharing",
    tags: [
      {
        name: "Spark",
        color: "blue-text-gradient",
      },
      {
        name: "Hadoop",
        color: "green-text-gradient",
      },
      {
        name: "Big Data",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "10 April 2025",
    description: "Compétences avancées en développement, déploiement et maintenance d'applications cloud-natives sur Kubernetes, avec une expertise particulière en conteneurisation et orchestration.",
    image: certif4,
    certificate_link: "https://www.cncf.io/certification/ckad/",
    tags: [
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "DevOps",
        color: "green-text-gradient",
      },
      {
        name: "Containers",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Google Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "30 May 2025",
    description: "Expertise en conception, développement et déploiement de solutions d'apprentissage automatique sur Google Cloud Platform, avec focus sur les modèles ML scalables et productifs.",
    image: certif5,
    certificate_link: "https://cloud.google.com/certification/machine-learning-engineer",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      }
    ],
  }
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/rida-seqqam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/RidaSeqqam",
  },
] as const;
