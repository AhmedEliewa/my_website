import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import type { TProject } from "./type";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Project = ({
  img,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: TProject) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      className=" border border-gray-200  overflow-hidden  rounded-md cursor-pointer shadow-md"
    >
      {/* heading */}
      <div className="h-48 relative group">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <span className="w-full h-full bg-gray-100 opacity-70 md:opacity-0 group-hover:opacity-80 duration-500 absolute top-0 left-0 flex items-center justify-center gap-5">
          <a
            href={githubUrl}
            className="p-2 shadow-md bg-gray-900 text-white rounded-full"
          >
            <FaGithub size={30} />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              className="p-2 shadow-md bg-gray-900 text-white rounded-full"
            >
              <LiaExternalLinkAltSolid size={30} />
            </a>
          )}
        </span>
      </div>
      {/* body */}
      <div className="p-4">
        <p className="h-17.5">{description}</p>
        {/* technology */}
        <p className="font-medium py-2">Tech Stack :</p>
        <ul className="flex items-center gap-2 flex-wrap">
          {tech.map((item) => (
            <li key={item} className="py-1 px-3 bg-gray-200 rounded-2xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Project;
