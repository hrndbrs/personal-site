import { EducationType, type Education, type Work } from "./types/history.type";

export const staticData = {
  email: "hernandoborosi@proton.me",
  phone: "+62 813-8911-2785",
  categories: [
    {
      name: "PL",
      icon: "lucide:code",
    },
    {
      name: "FE",
      icon: "lucide:computer",
    },
    {
      name: "SM",
      icon: "lucide:atom",
    },
    {
      name: "BE",
      icon: "lucide:server",
    },
    {
      name: "DB",
      icon: "lucide:database",
    },
    {
      name: "VC",
      icon: "lucide:git-branch",
    },
    {
      name: "LA",
      icon: "lucide:languages",
    },
  ],
};

export const education: Education[] = [
  {
    title: "Informatics Engineering",
    institution: "Institut Teknologi Tangerang Selatan",
    period: "2024 - Present",
    type: EducationType.EDUCATION,
  },
  {
    title: "edX Verified Certificate for Fundamentals of C++",
    institution: "edX/IBM",
    period: "2024",
    type: EducationType.CERTIFICATION,
    url: "https://courses.edx.org/certificates/7329b6516b2d487dacdf6473774d64b9",
  },
  {
    title:
      "edX Verified Certificate for Django Application Development with SQL and Databases",
    institution: "edX/IBM",
    period: "2024",
    type: EducationType.CERTIFICATION,
    url: "edX Verified Certificate for Django Application Development with SQL and Databases",
  },
  {
    title: "Advanced Django: Advanced Django Rest Framework",
    institution: "Coursera/Codio",
    period: "2024",
    type: EducationType.CERTIFICATION,
    url: "https://coursera.org/verify/HQK6U24YYB7W",
  },
  {
    title: "Japanese-Language Proficiency Test N1",
    institution: "The Japan Foundation",
    period: "2024",
    type: EducationType.CERTIFICATION,
    url: "https://drive.google.com/file/d/1JOKQVpJcHTCXUrYsCX5J-Xk9SggpWL8H/view?usp=sharing",
  },
  {
    title: "FullStack Javascript Immersive",
    institution: "Hacktiv8",
    period: "2023",
    type: EducationType.CERTIFICATION,
    url: "https://drive.google.com/file/d/1VRWhDXNAmy-VMjSXmDpWQHA4TPYUweni/view?usp=drive_link",
  },
  {
    title: "Bachelor of Mechanical Engineering",
    institution: "Ashikaga University",
    period: "2018 - 2022",
    type: EducationType.EDUCATION,
  },
];

export const socialMedia = [
  {
    name: "GitHub",
    icon: "lucide:github",
    url: "https://github.com/hrndbrs",
  },
  {
    name: "Twitter",
    icon: "lucide:twitter",
    url: "https://x.com/hrndbr",
  },
  {
    name: "LinkedIn",
    icon: "lucide:linkedin",
    url: "https://www.linkedin.com/in/hernandobrs/",
  },
  {
    name: "Instagram",
    icon: "lucide:instagram",
    url: "https://www.instagram.com/hrndbrs",
  },
];

export const workExperiences: Work[] = [
  {
    position: "Software Engineer",
    company: "Enigma Camp",
    period: "2024 - Present",
    description:
      "Enigma Camp is a software development bootcamp that provides a comprehensive curriculum to prepare students for a career in software development.",
    keypoints: [],
  },
];
