import { motion } from "framer-motion";
import useSkills from "../../hook/useSkills";

const containerVarients = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Skills = () => {
  const { skillCategories, getColorClasses } = useSkills();

  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-40 h-1 bg-blue-600 mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses();
            return (
              <motion.div
                key={category.category}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${colorClasses.text}`}>{category.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} className="relative">
                      <div
                        className={`px-4 py-2 ${colorClasses.bg} ${colorClasses.border} border-2 rounded-lg ${colorClasses.hover} transition-all duration-200 cursor-pointer`}
                      >
                        <span className={`font-medium ${colorClasses.text}`}>
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
