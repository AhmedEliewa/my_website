import { motion } from "framer-motion";
import Project from "./Project";
import type { TProject } from "./type";

type TProjectListProps = {
  projects: TProject[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ProjectsList = ({ projects }: TProjectListProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap"
    >
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </motion.div>
  );
};

export default ProjectsList;
