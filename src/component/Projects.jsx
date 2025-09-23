import { Link } from "react-router-dom";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow hover:scale-105 transition p-4 flex flex-col"
          >
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <div className="mt-3">
              <Link
                to={`/projects/${project.id}`}
                className="w-full block text-center rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-2 text-white transition font-[600]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
