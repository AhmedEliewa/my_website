import eCom from "../../assets/e-com.jpg";
import noqtetTahwl from "../../assets/noqtettahwl.jpg";
import gym from "../../assets/gym.jpg";
import prayerTiming from "../../assets/praytiming.jpg";
import cruds from "../../assets/cruds.jpg";
import front from "../../assets/front.jpg";
import type { TProject } from "./type";

export const projectsData: TProject[] = [
  {
    img: eCom,
    title: "E-Commerce Web App",
    description:
      "Full-featured online shopping platform with authentication, cart management, and product filtering",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "Bootstrap",
      "JSON Server Auth",
    ],
    liveUrl: "https://ecom3liewa.netlify.app/",
    githubUrl: "https://github.com/AhmedEliewa/frontend-eCom",
  },
  {
    img: noqtetTahwl,
    title: "Noqtet Tahwl Platform",
    description:
      "Clean technology awareness platform promoting environmental sustainability",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://noqtettahwl.netlify.app/",
    githubUrl: "https://github.com/AhmedEliewa/noqtet_tahwl",
  },
  {
    img: gym,
    title: "Fitness Gym Website",
    description:
      "Dynamic fitness platform with product listings and shopping functionality",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://fitness-gym999.netlify.app/",
    githubUrl: "https://github.com/AhmedEliewa/fitness-gym",
  },
  {
    img: prayerTiming,
    title: "Prayer Timing App",
    description:
      "Islamic prayer times application with real-time API integration",
    tech: ["React", "Tailwind CSS", "API Integration"],
    liveUrl: "https://praytiming.netlify.app/",
    githubUrl: "https://github.com/AhmedEliewa/prayTiming",
  },
  {
    img: cruds,
    title: "cruds",
    description:
      "Built a fully functional CRUD application using HTML, CSS, and vanilla JavaScript",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://cruds3liewa.netlify.app/",
    githubUrl: "https://github.com/AhmedEliewa/CRUDS-html-css-js-",
  },
  {
    img: front,
    title: "Frontend Mentor Challenges",
    description:
      "Collection of responsive UI challenges demonstrating HTML, CSS, and JavaScript skills",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "",
    githubUrl: "https://github.com/AhmedEliewa",
  },
];
