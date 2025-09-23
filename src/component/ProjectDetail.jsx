import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";
import Navbar from "./Navbar";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center">Project not found</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg mb-6 w-full object-cover"
        />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {project.description}
        </div>
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {project.feature}
        </div>

        {/* Tombol navigasi & repository */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to="/#projects"
            className="inline-block px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white rounded-xl"
          >
            ← Back to Projects
          </Link>

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl"
            >
              View Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
