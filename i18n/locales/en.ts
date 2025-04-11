export default defineI18nLocale(async () => ({
  meta: {
    title: "Where bugs become features",
    description:
      "Full-stack developer crafting intuitive, scalable web applications with clean, maintainable code.",
    keywords:
      "Hernando Borosi, Software Developer, Full Stack Developer, JavaScript, TypeScript, Portfolio",
    author: "Hernando Borosi",
  },
  Hero: {
    intro: "Hi, I'm",
    texts: [
      "Hernando Borosi",
      "a Software Developer",
      "trying my best",
      "exhausted",
    ],
    description:
      "Developer creating reliable and intuitive digital experiences across the stack",
    button: "Explore My Work",
  },
  About: {
    title: "About Me",
    description: "Passionate about creating beautiful digital experiences",
    p1: "With a strong foundation in full-stack development and hands-on experience across diverse tech stacks, I specialize in building reliable, scalable, and user-focused web applications. From frontend interfaces to backend systems. I enjoy bringing ideas to life through clean, maintainable code.",
    p2: "I take pride in writing code that not only works, but works well—emphasizing performance, consistency, and a seamless user experience. Whether it’s collaborating with cross-functional teams or diving deep into complex problems, I’m always eager to learn, adapt, and create meaningful digital solutions.",
    location: {
      title: "Location",
      value: "South Tangerang, Indonesia",
    },
    education: {
      title: "Education",
      value: "B.Eng. Mechanical Engineering",
    },
    email: {
      title: "Email",
    },
    phone: {
      title: "Phone",
    },
    experience: {
      title: "Experience",
      value: "{years}+ Year | {years}+ Years",
    },
  },
  History: {
    title: "My Background",
    header: "Career & Education",
    description:
      "Professional experience and academic background that have shaped my expertise.",
    education: {
      title: "Education & Certifications",
      degree: "Degree",
      institution: "Institution",
      year: "Year",
      description: "Description",
      view: {
        education: "View Diploma",
        certification: "View Certificate",
      },
    },
    experience: {
      title: "Work Experience",
      position: "Position",
      company: "Company",
      period: "Period",
      description: "Description",
      achievements: "Key Achievements",
    },
  },
  Skills: {
    title: "My Skills",
    description: "Expertise & Technologies",
    categories: {
      PL: {
        name: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Golang"],
      },
      FE: {
        name: "Frontend Development",
        skills: [
          "HTML",
          "CSS",
          "Vue.js",
          "React",
          "Angular",
          "Nuxt.js",
          "Next.js",
          "Tailwind CSS",
          "Apollo Client",
        ],
      },
      SM: {
        name: "State Management",
        skills: ["Pinia", "Zustand", "Redux", "Redux Toolkit"],
      },
      BE: {
        name: "Backend Development",
        skills: [
          "Node.js",
          "Express",
          "Apollo Server",
          "Django",
          "FastAPI",
          "Golang",
          "RabbitMQ",
        ],
      },
      DB: {
        name: "Database",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      VC: {
        name: "Version Control",
        skills: ["Git", "GitHub", "GitLab"],
      },
      LA: {
        name: "Languages",
        skills: ["Indonesian", "English", "Japanese"],
      },
    },
  },
  Projects: {
    title: "My Work",
    description: "Featured Projects",
  },
  Contact: {
    title: "Get in Touch",
    header: "Let's work together",
    description:
      "I'm currently available for freelance work and open to discussing new opportunities. Feel free to reach out if you have a project in mind or just want to connect.",
    fields: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
    },
    success: "Message sent successfully!",
    button: "Send Message",
  },
  Footer: {
    subtitle: "Build with code, curiosity, and care.",
  },
}));
