import { FaArrowRightLong, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { MdMailOutline } from "react-icons/md";
import img from "../../assets/me1.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
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

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center lg:px-8 sm:px-6 px-4 mt-20 md:mt-0 overflow-hidden"
    >
      <div>
        <h3 className="flex items-center justify-center gap-2 text-center text-gray-600 mb-4 font-bold relative top-0  md:-top-10">
          <span className=" w-4 h-4 left-91.25 top-1 rounded-full  bg-green-600 animate-pulse"></span>
          Available for Opportunities
        </h3>
        <div className="flex justify-between items-center gap-8 md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="w-80  h-96 overflow-hidden rounded-full"
          >
            <img
              src={img}
              alt="my image"
              className="object-cover cursor-pointer"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: false }}
            className=" capitalize text-center space-y-4 font-bold"
          >
            <motion.p
              variants={textVariants}
              className="text-2xl text-gray-600 "
            >
              hello, i'm
            </motion.p>
            <motion.h3 variants={textVariants} className="text-5xl">
              Ahmed Eliewa
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-2xl text-gray-600 "
            >
              Front-End Developer specializing in React & TypeScript
            </motion.p>
            <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="cursor-pointer group capitalize py-3 px-6 flex items-center gap-2 font-medium bg-transparent text-black rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                view projects
                <FaArrowRightLong
                  size={19}
                  className="group-hover:translate-x-1 transition-all duration-300 group-hover:text-white group-hover:shadow-2xl"
                />
              </a>
              <a
                href="/Ahmed_Eliewa.pdf"
                download="Ahmed Eliewa CV"
                className="cursor-pointer flex capitalize items-center gap-2 py-3 px-6 bg-gray-900 text-white border-2  rounded-full hover:bg-gray-700  transition-all duration-300 font-medium "
              >
                download CV <HiOutlineDownload size={19} />
              </a>
            </div>
            <div className="flex justify-center gap-5 my-9">
              <a
                className="p-3  rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
                href="https://github.com/AhmedEliewa"
                target="_blank"
              >
                <FaGithub size={19} />
              </a>
              <a
                className="p-3 hover:text-blue-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
                href="https://www.linkedin.com/in/ahmed-eliewa16/"
                target="_blank"
              >
                <FaLinkedinIn size={19} />
              </a>
              <a
                className="p-3 hover:text-red-600 rounded-full bg-[#8ba1a14d] hover:shadow-black hover:shadow-xl hover:scale-110 transition duration-300"
                href="mailto:ahmedaboeliewa@gmail.com"
                target="_blank"
              >
                <MdMailOutline size={19} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
