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
  docker,
  threejs,
  project1,
  project2,
  project3,
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
    name: "Application de Réservation MK Travel",
    description:
      "Application web complète pour la réservation d'hôtels et de vols, avec interface utilisateur moderne et système de paiement intégré.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/RidaSeqqam/mk-travel",
    live_site_link: "",
  },
  {
    name: "Portfolio Personnel",
    description:
      "Portfolio professionnel développé avec React et Three.js, présentant mes compétences et expériences de manière interactive et moderne.",
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
    source_code_link: "https://github.com/RidaSeqqam/portfolio",
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
    name: "Example Certification",
    issuer: "Example Issuer",
    date: "2025",
    description: "Description of the certification and skills acquired",
    image: project1, // You'll need to replace this with your certificate image
    certificate_link: "https://example.com/certificate",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "development",
        color: "green-text-gradient",
      }
    ],
  },
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
