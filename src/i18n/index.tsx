import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Translations = Record<string, string>;

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Hero
    hero_greeting: "Hi, I'm",
    hero_title: "Full Stack Engineer & DevOps",

  // Navbar
  navbar_subtitle: "SEQQAM | Software Engineer",
  nav_about: "About",
  nav_experience: "Experience",
  nav_projects: "Projects",
  nav_certifications: "Certifications",
  nav_contact: "Contact",
  nav_cv: "My CV",

    // About
    about_sub: "Introduction",
    about_title: "Overview.",
    about_text:
      "I am a Junior Full Stack Developer passionate about building modern, high-performance web applications. I have solid training in Full Stack development and practical experience across multiple projects.",

    // Works
    projects_sub: "My Work",
    projects_title: "Projects.",
    projects_desc:
      "The following projects showcase my skills and experience through concrete examples of my work. Each project includes descriptions, code references and live demos where available.",

    // Certifications
    certifications_sub: "My Achievements",
    certifications_title: "Certifications.",
    certifications_desc:
      "The following certifications demonstrate my continued commitment to learning and professional development. Each certificate validates practical expertise in a specific area of computing and development.",
    // Individual certification entries
    cert_oracle_date: "5 December 2024",
    cert_oracle_desc:
      "Advanced mastery of Java SE 17, key APIs and modern language features, with the ability to design and maintain robust, secure, and high-performance applications.",
    cert_google_date: "13 December 2024",
    cert_google_desc:
      "Advanced skills in building Java microservices, including distributed architecture design, scalability with Spring Boot and Spring Cloud, and integration with cloud services for robust applications.",
    cert_ibm_date: "13 December 2024",
    cert_ibm_desc:
      "Fundamental Big Data skills covering distributed processing, large-scale data analysis, and performance optimization. Ability to design and implement reliable, scalable Big Data solutions.",
    cert_meta_date: "10 May 2024",
    cert_meta_desc:
      "Practical skills for building cross-platform mobile applications using React Native, including UI design, API integration, and state management following mobile best practices.",
    cert_umich_date: "30 May 2024",
    cert_umich_desc:
      "Solid mastery of Python programming fundamentals, data structures, web data extraction, and relational databases; demonstrates practical Python development and data analysis skills.",
    cert_hku_date: "15 July 2025",
    cert_hku_desc:
      "Course focused on software engineering methodologies and tools for large-scale development: requirements analysis, design, implementation, testing and maintenance with practical case studies.",

    // Certification tags
    tag_java_se_17: "Java SE 17",
    tag_advanced_development: "Advanced development",
    tag_spring_boot: "Spring Boot",
    tag_spring_cloud: "Spring Cloud",
    tag_google_cloud: "Google Cloud",
    tag_spark: "Spark",
    tag_hadoop: "Hadoop",
    tag_big_data: "Big Data",
    tag_react_native: "React Native",
    tag_api_integration: "API Integration",
    tag_mobile_development: "Mobile development",
    tag_python: "Python",
    tag_data_structures: "Data structures",
    tag_sql: "SQL",
    tag_software_engineering: "Software engineering",
    tag_oop: "OOP",
    tag_agile_methods: "Agile methodologies",

    // Testimonials
    testimonials_sub: "What others say",
    testimonials_title: "Testimonials.",
    testimonial_orange:
      "Rida is a passionate Full Stack engineer rigorous, detail oriented with strong front-end and back-end skills, committed to delivering high-quality, reliable projects.",

  // Experiences
  experience_sub: "WHAT I'VE DONE SO FAR",
  experience_heading: "Experience",
  exp_orange_title: "Final Year Internship – Full Stack Developer",
  exp_orange_company: "ORANGE BUSINESS",
  exp_orange_date: "Mar 2025 - Aug 2025",
  exp_orange_p1: "Developed InternFlow web application using Java (Spring Boot) and Angular.",
  exp_orange_p2: "Implemented secure authentication and role-based access control via Spring Security and JWT.",
  exp_orange_p3: "Designed dynamic dashboards, real-time filters, and unit/integration tests with JUnit/Mockito.",
  exp_orange_p4: "Integrated AI microservices (Python + LLMs) for CV parsing and intelligent recommendations.",
  exp_orange_p5: "Designed REST APIs with robust error handling and smooth communication.",
  exp_orange_p6: "Participated in an Agile (Scrum) project using Jira and collaborated with DevOps practices.",

  exp_bouygues_title: "Full Stack Developer Intern",
  exp_bouygues_company: "BOUYGUES CONSTRUCTION IT",
  exp_bouygues_date: "Jul 2024 - Aug 2024",
  exp_bouygues_p1: "Developed a system administration platform using Spring Boot and Angular.",
  exp_bouygues_p2: "Integrated a secure authentication and identity management system (SQL Server).",
  exp_bouygues_p3: "Automated critical system operations via back-end scripts, reducing manual interventions by 30%.",
  exp_bouygues_p4: "Collaborated with system administrators and DevOps teams to align the app with infrastructure standards.",

  exp_dataprot_title: "Cybersecurity Intern",
  exp_dataprot_company: "DATAPROTECT",
  exp_dataprot_date: "Jul 2023 - Aug 2023",
  exp_dataprot_p1: "Developed and deployed an endpoint protection solution based on Kaspersky and EDR.",
  exp_dataprot_p2: "Participated in incident response, threat monitoring, and disaster recovery planning.",
  exp_dataprot_p3: "Performed security audits and vulnerability assessments to strengthen data protection.",

    // Contact
    contact_sub: "Get in touch",
    contact_title: "Contact.",
    contact_name_label: "Your name*",
    contact_email_label: "Your email*",
    contact_message_label: "Your message*",
    contact_name_placeholder: "Rida",
    contact_email_placeholder: "name.surname@email.com",
    contact_message_placeholder: "Hi Rida!",
    contact_name_error: "Invalid name!",
    contact_email_error: "Invalid e-mail!",
    contact_message_error: "Invalid message!",
    contact_send: "Send",
    contact_sending: "Sending...",
    contact_unavailable:
      "Contact form is disabled in this build — missing EmailJS keys. Add VITE_EMAILJS_* env vars and rebuild.",

    // Banner
    banner_thanks: "Thanks for visiting.",
  },
  fr: {
    // Hero
    hero_greeting: "Salut, Je suis",
    hero_title: "Ingénieur Full Stack et DevOps",

  // Navbar
  navbar_subtitle: "SEQQAM | Ingénieur logiciel",
  nav_about: "À propos",
  nav_experience: "Experience",
  nav_projects: "Projects",
  nav_certifications: "Certifications",
  nav_contact: "Contact",
  nav_cv: "Mon cv",

    // About
    about_sub: "Introduction",
    about_title: "Aperçu.",
    about_text:
      "Je suis un Développeur Full Stack Junior passionné par la création d'applications web modernes et performantes. Fort d'une formation solide en développement Full Stack et d'une expérience pratique acquise à travers divers projets.",

    // Works
    projects_sub: "My Work",
    projects_title: "Projects.",
    projects_desc:
      "Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers des référentiels de code et des démos en direct.",

    // Certifications
    certifications_sub: "Mes réalisations",
    certifications_title: "Certifications.",
    certifications_desc:
      "Les certifications suivantes démontrent mon engagement continu envers l'apprentissage et le développement professionnel. Chaque certification représente une expertise validée dans un domaine spécifique de l'informatique et du développement.",
    // Individual certification entries
    cert_oracle_date: "5 Décembre 2024",
    cert_oracle_desc:
      "Maîtrise avancée du langage Java SE 17, des API clés et des fonctionnalités modernes, avec la capacité de concevoir et maintenir des applications robustes, sécurisées et performantes.",
    cert_google_date: "13 Décembre 2024",
    cert_google_desc:
      "Compétences avancées en développement de microservices Java, incluant la conception d’architectures distribuées, la scalabilité avec Spring Boot et Spring Cloud, ainsi que l’intégration avec des services cloud.",
    cert_ibm_date: "13 Décembre 2024",
    cert_ibm_desc:
      "Compétences fondamentales en Big Data, incluant le traitement distribué, l’analyse de données à grande échelle et l’optimisation des performances.",
    cert_meta_date: "10 Mai 2024",
    cert_meta_desc:
      "Compétences pratiques en création d’applications mobiles multiplateformes avec React Native : conception d’interfaces, intégration d’API et gestion d’état selon les bonnes pratiques.",
    cert_umich_date: "30 Mai 2024",
    cert_umich_desc:
      "Maîtrise des bases de la programmation en Python, manipulation des structures de données, extraction et traitement d’informations depuis le web, et utilisation de bases de données relationnelles.",
    cert_hku_date: "15 Juillet 2025",
    cert_hku_desc:
      "Formation axée sur les méthodologies et outils d’ingénierie logicielle à grande échelle : analyse, conception, implémentation, tests et maintenance avec études de cas.",
    // Certification tags (FR)
    tag_java_se_17: "Java SE 17",
    tag_advanced_development: "Développement avancé",
    tag_spring_boot: "Spring Boot",
    tag_spring_cloud: "Spring Cloud",
    tag_google_cloud: "Google Cloud",
    tag_spark: "Spark",
    tag_hadoop: "Hadoop",
    tag_big_data: "Big Data",
    tag_react_native: "React Native",
    tag_api_integration: "Intégration d'API",
    tag_mobile_development: "Développement mobile",
    tag_python: "Python",
    tag_data_structures: "Structures de données",
    tag_sql: "SQL",
    tag_software_engineering: "Ingénierie logicielle",
    tag_oop: "POO",
    tag_agile_methods: "Méthodologies agiles",

    // Testimonials (FR)
    testimonials_sub: "Ce que les autres disent",
    testimonials_title: "Témoignages.",
    testimonial_orange:
      "Rida est un ingénieur Full Stack passionné, rigoureux et attentif aux détails. Sa maîtrise des technologies front-end et back-end et son engagement garantissent des projets fiables et de grande qualité.",

    // Contact
    contact_sub: "Prendre contact",
    contact_title: "Contact.",
    contact_name_label: "Votre Nom*",
    contact_email_label: "Votre Email*",
    contact_message_label: "Votre Message*",
    contact_name_placeholder: "Rida",
    contact_email_placeholder: "nom.prenom@email.com",
    contact_message_placeholder: "Salut Rida !",
    contact_name_error: "Nom incorrect!",
    contact_email_error: "Invalid E-mail!",
    contact_message_error: "Invalid Message!",
    contact_send: "Envoyer",
    contact_sending: "Envoi en cours...",
    contact_unavailable:
      "Le formulaire de contact est désactivé dans cette build — clés EmailJS manquantes. Ajoutez VITE_EMAILJS_* et reconstruisez.",

    // Banner
    banner_thanks: "Merci pour votre visite.",
  // Experiences (FR)
  experience_sub: "CE QUE J'AI FAIT JUSQU'À PRÉSENT",
  experience_heading: "Experience",
  exp_orange_title: "Stage PFE – Développeur Full Stack",
  exp_orange_company: "ORANGE BUSINESS",
  exp_orange_date: "Mars 2025 - Août 2025",
  exp_orange_p1: "Développement de l’application web InternFlow en Java (Spring Boot) et Angular.",
  exp_orange_p2: "Mise en place de l’authentification sécurisée et du contrôle d’accès par rôle via Spring Security et JWT.",
  exp_orange_p3: "Conception de dashboards dynamiques, filtres temps réel, et tests unitaires/intégration avec JUnit/Mockito.",
  exp_orange_p4: "Intégration de microservices IA (Python + LLMs) pour le parsing et la recommandation intelligente de CV.",
  exp_orange_p5: "Conception d’API REST, avec communication fluide et gestion robuste des erreurs.",
  exp_orange_p6: "Participation à un projet en méthodologie Agile (Scrum) avec Jira et collaboration DevOps.",

  exp_bouygues_title: "Stage développeur Full Stack",
  exp_bouygues_company: "BOUYGUES CONSTRUCTION IT",
  exp_bouygues_date: "Juillet 2024 - Août 2024",
  exp_bouygues_p1: "Développement d’une plateforme d’administration système en Spring Boot et Angular.",
  exp_bouygues_p2: "Intégration d’un système d’authentification sécurisé et de gestion d’identité (SQL Server).",
  exp_bouygues_p3: "Automatisation d’opérations système critiques via des scripts back-end, réduisant les interventions manuelles de 30%.",
  exp_bouygues_p4: "Collaboration avec les administrateurs système et les équipes DevOps pour aligner l’application sur les standards d’infrastructure.",

  exp_dataprot_title: "Stage en Cybersécurité",
  exp_dataprot_company: "DATAPROTECT",
  exp_dataprot_date: "Juillet 2023 - Août 2023",
  exp_dataprot_p1: "Développement et déploiement d’une solution de protection des terminaux basée sur Kaspersky et EDR.",
  exp_dataprot_p2: "Participation à la réponse aux incidents, la surveillance des menaces et les plans de reprise après sinistre.",
  exp_dataprot_p3: "Réalisation d’audits de sécurité et d’évaluations de vulnérabilités pour renforcer la protection des données.",
  },
};

const DEFAULT_LANG = "fr";

const I18nContext = createContext({
  lang: DEFAULT_LANG,
  t: (k: string) => k,
  setLang: (l: string) => {},
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<string>(DEFAULT_LANG);

  useEffect(() => {
    // detect navigator language
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    const short = nav.split("-")[0];
    setLang(TRANSLATIONS[short] ? short : DEFAULT_LANG);
  }, []);

  const t = useMemo(() => (key: string) => {
    return TRANSLATIONS[lang] && TRANSLATIONS[lang][key]
      ? TRANSLATIONS[lang][key]
      : TRANSLATIONS[DEFAULT_LANG][key] || key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
