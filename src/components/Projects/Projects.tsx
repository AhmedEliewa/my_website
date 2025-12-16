import { projectsData } from "./projectsData";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 mx-auto px-8 md:px-20 overflow-hidden"
    >
      {/* heading */}
      <div className="text-center mb-12">
        <h3 className="flex capitalize flex-col items-center justify-center gap-2 text-4xl font-medium  py-5">
          Featured Projects
          <span className="h-1 w-40 bg-blue-600 animate-pulse"></span>
        </h3>
        <p className="text-gray-600 text-xl font-medium">
          A selection of projects showcasing my skills in modern web development
        </p>
      </div>
      {/* projects */}

      <div className="">
        <ProjectsList projects={projectsData} />
      </div>
    </section>
  );
};

export default Projects;
