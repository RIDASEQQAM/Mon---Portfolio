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
  certif6,
  docker,
  threejs,
  java,
  postgres,
  maven,
  angular,
  azure,
  jira,
  python,
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
  title: "nav_about",
    link: null,
  },
  {
    id: "work",
  title: "nav_experience",
    link: null,
  },
  {
    id: "projects",
  title: "nav_projects",
    link: null,
  },
  {
    id: "certifications",
  title: "nav_certifications",
    link: null,
  },
  {
    id: "contact",
  title: "nav_contact",
    link: null,
  },
  {
    id: "Mon cv",
  title: "nav_cv",
    link: "https://drive.google.com/file/d/1Rm7Y5FY7szbDnW4OKvotAT488LhVrGiN/view?usp=sharing",  // You'll need to upload your CV and replace this link
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
    name: "HTML",
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
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Maven",
    icon: maven,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Python",
    icon: python,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "exp_orange_title",
    company_name: "exp_orange_company",
    icon: orange,
    iconBg: "#fff",
    date: "exp_orange_date",
    points: [
      "exp_orange_p1",
      "exp_orange_p2",
      "exp_orange_p3",
      "exp_orange_p4",
      "exp_orange_p5",
      "exp_orange_p6",
    ],
  },
  {
    title: "exp_bouygues_title",
    company_name: "exp_bouygues_company",
    icon: bouygues,
    iconBg: "#fff",
    date: "exp_bouygues_date",
    points: [
      "exp_bouygues_p1",
      "exp_bouygues_p2",
      "exp_bouygues_p3",
      "exp_bouygues_p4",
    ],
  },
    {
    title: "exp_dataprot_title",
    company_name: "exp_dataprot_company",
    icon: dataprotect,
    iconBg: "#fff",
    date: "exp_dataprot_date",
    points: [
      "exp_dataprot_p1",
      "exp_dataprot_p2",
      "exp_dataprot_p3",
    ],
  },


] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Rida est un ingénieur Full Stack passionné, rigoureux et attentif aux détails. Sa maîtrise des technologies front-end et back-end et son engagement garantissent des projets fiables et de grande qualité.",
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
    name: "Timesheet and Absence Management System",
    description:
      "Ce projet est une application full-stack pour la gestion des feuilles de temps et des absences des employés. Elle se compose d’un backend en Java Spring Boot et d’un frontend en Angular.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/RIDASEQQAM/WorkSync---Timesheet-and-Absence-Management-System.git",
    live_site_link: "",
  }
] as const;

// Certifications
export const CERTIFICATIONS = [
  {
    name: "Oracle Certified Professional Java SE 17 Developer",
    issuer: "Oracle",
    date: "cert_oracle_date",
    description: "cert_oracle_desc",
    image: certif1,
    certificate_link: "https://drive.google.com/file/d/1fmCkh1cDH48pfpmPwGUZO-AuXWptMqUL/view?usp=sharing",
    tags: [
      {
  name: "tag_java_se_17",
        color: "blue-text-gradient",
      },
      {
  name: "tag_advanced_development",
        color: "green-text-gradient",
      }
    ],
  },
  {
    name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud",
    date: "cert_google_date",
    description: "cert_google_desc",
    image: certif2,
    certificate_link: "https://drive.google.com/file/d/1raNUrBpb5JKK4xgpqkzw1dIfWlWiwAB1/view?usp=sharing",
    tags: [
      {
  name: "tag_spring_boot",
        color: "blue-text-gradient",
      },
      {
  name: "tag_spring_cloud",
        color: "green-text-gradient",
      },
      {
  name: "tag_google_cloud",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM",
    date: "cert_ibm_date",
    description: "cert_ibm_desc",
    image: certif3,
    certificate_link: "https://drive.google.com/file/d/1kcPDlZi6ExIdotPnOuyb_huEi9Fq5jSv/view?usp=sharing",
    tags: [
      {
  name: "tag_spark",
        color: "blue-text-gradient",
      },
      {
  name: "tag_hadoop",
        color: "green-text-gradient",
      },
      {
  name: "tag_big_data",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "React Native",
    issuer: "Meta",
    date: "cert_meta_date",
    description: "cert_meta_desc",
    image: certif4,
    certificate_link: "https://drive.google.com/file/d/1vurYZhsfSQkbhnEliKs_oYTtZe03pdv-/view?usp=sharing",
    tags: [
      {
  name: "tag_react_native",
        color: "blue-text-gradient",
      },
      {
  name: "tag_api_integration",
        color: "green-text-gradient",
      },
      {
  name: "tag_mobile_development",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Python for Everybody",
    issuer: "University of Michigan",
    date: "cert_umich_date",
    description: "cert_umich_desc",
    image: certif5,
    certificate_link: "https://drive.google.com/file/d/1pfD8cR-5cOc0dOz69qjHqVRIOUShPQEz/view?usp=sharing",
    tags: [
      {
  name: "tag_python",
        color: "blue-text-gradient",
      },
      {
  name: "tag_data_structures",
        color: "green-text-gradient",
      },
      {
  name: "tag_sql",
        color: "pink-text-gradient",
      }
    ],
  },
  {
    name: "Software Engineering",
    issuer: "The University of Hong Kong",
    date: "cert_hku_date",
    description: "cert_hku_desc",
    image: certif6,
    certificate_link: "https://drive.google.com/file/d/1vtdiSvkCHgdiJQId9qdWKv1EdOayJoNG/view?usp=sharing",
    tags: [
      {
  name: "tag_software_engineering",
        color: "blue-text-gradient",
      },
      {
  name: "tag_oop",
        color: "green-text-gradient",
      },
      {
  name: "tag_agile_methods",
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
