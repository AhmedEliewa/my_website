import { BiCode, BiPalette, BiWrench } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";

interface Skill {
  name: string;
  description: string;
}
interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const useSkills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      icon: <BiCode size={24} />,
      color: "blue",
      skills: [
        {
          name: "React.js",
          description:
            "Building dynamic UIs with hooks and component architecture",
        },
        {
          name: "TypeScript",
          description: "Type-safe JavaScript for scalable applications",
        },
        {
          name: "JavaScript (ES6+)",
          description: "Modern JavaScript with latest features",
        },
        {
          name: "Redux Toolkit",
          description: "Efficient state management for complex apps",
        },
        {
          name: "Context API",
          description: "React state management for lighter needs",
        },
        { name: "React Router", description: "Client-side routing for SPAs" },
      ],
    },
    {
      category: "Styling & UI",
      icon: <BiPalette size={24} />,
      color: "green",
      skills: [
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
        },
        {
          name: "Material UI",
          description: "React component library with Material Design",
        },
        {
          name: "Bootstrap",
          description: "Popular CSS framework for responsive design",
        },
        {
          name: "Responsive Design",
          description: "Mobile-first, cross-device compatibility",
        },
      ],
    },
    {
      category: "Animations & Motion",
      icon: <GiSparkles size={24} />,
      color: "orange",
      skills: [
        {
          name: "Framer Motion",
          description: "Production-ready animations for React",
        },
        {
          name: "CSS Animations",
          description: "Custom animations with CSS transitions",
        },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <BiWrench size={24} />,
      color: "gray",
      skills: [
        { name: "Git", description: "Version control and collaboration" },
        { name: "GitHub", description: "Code hosting and project management" },
        { name: "JSON Server", description: "Quick backend prototyping" },
        {
          name: "Netlify",
          description: "Deployment and continuous integration",
        },
      ],
    },
  ];

  const getColorClasses = () => {
    const colors: { border: string; bg: string; text: string; hover: string } =
      {
        border: "border-gray-200",
        bg: "bg-gray-50",
        text: "text-gray-600",
        hover: "hover:border-gray-400",
      };
    return colors;
  };
  return { skillCategories, getColorClasses };
};

export default useSkills;
