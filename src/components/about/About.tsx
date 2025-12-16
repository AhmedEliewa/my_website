import { SiExpensify } from "react-icons/si";
import me2 from "../../assets/me2.jpg";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-12 mx-auto max-w-7xl px-8 md:px-12 overflow-hidden"
    >
      <div className="text-center">
        <p className="text-gray-600 text-xl font-medium">Get To Know More</p>
        <h3 className="flex capitalize flex-col items-center justify-center gap-2 text-4xl font-medium  py-5">
          about me
          <span className="h-1 w-32 bg-blue-600 animate-pulse"></span>
        </h3>
      </div>
      <motion.div
        variants={containerVariants}
        className="flex items-center justify-center gap-8 lg:flex-row flex-col mt-5"
      >
        <motion.div
          variants={imgVariants}
          initial="hidden"
          whileInView="show"
          className="w-96 h-96 overflow-hidden rounded-full"
        >
          <img src={me2} alt="photo" className="object-cover w-100 h-100" />
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="flex items-center justify-center flex-col gap-10"
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            className="flex items-center flex-col gap-2 border-2 border-gray-400 px-6 py-4 shadow-md shadow-amber-950 rounded-xl w-87.25"
          >
            <SiExpensify size={20} />
            <h5 className="font-semibold">Experience</h5>
            <p className="text-gray-600">
              1 year of self-learning and project-based frontend development
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            className="flex items-center flex-col gap-2 border-2 border-gray-400 px-6 py-4 shadow-sm shadow-amber-950 rounded-xl "
          >
            <p>
              I’m a self-taught Frontend Developer with hands-on experience in{" "}
              <span className="font-medium capitalize">react</span>, HTML, CSS,
              tailwind, and JavaScript and typescript,. Since 2023,
            </p>
            <p>
              I’ve built and deployed several projects, solved complex bugs, and
              continuously improved my development workflow using AI-powered
              tools.
            </p>
            <p>
              I’m passionate about creating clean, responsive, and user-friendly
              web interfaces, and I’m always eager to learn new technologies
              that enhance performance and user experience.
            </p>
            <p>
              I’m now looking for an opportunity to join a collaborative team
              where I can contribute to real-world projects, grow as a
              developer, and add value through both technical skills and
              creativity.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
