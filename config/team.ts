export interface Developer {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
}

export const developers: Developer[] = [
  {
    name: "Dichill Tomarong",
    role: "Founder, CEO, Full Stack Developer & Software Engineer",
    image: "/images/Dichill_copy.jpg",
    github: "https://github.com/dichill",
    linkedin: "https://linkedin.com/in/dichill",
  },

  {
    name: "Fahat Youseuf",
    role: "Founder, DMO & UI/UX Designer",
    image: "/images/Fahat_copy.jpg",
    github: "https://github.com/Fahat-Yousuf",
    linkedin: "https://www.linkedin.com/in/fahatyousuf/",
  },

  {
    name: "Ray Devera",
    role: "Full Stack Developer",
    image: "/images/Ray_copy.jpg",
    github: "https://github.com/RayDV",
    linkedin: "https://www.linkedin.com/in/raydevera/",
  },

  {
    name: "Justin Dela Cruz",
    role: "Analytics & Marketing",
    image: "/images/placeholder_copy.jpg",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/delacruzjustin/",
  },

];