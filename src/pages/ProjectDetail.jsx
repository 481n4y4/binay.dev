import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCode,
  faExternalLinkAlt,
  faCalendarAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import projects from "../data/projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-300 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md shadow-md z-50">
        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            Back to Projects
          </Link>

          <h1 className="text-2xl font-bold text-white">
            {project.title}
          </h1>
        </nav>
      </header>
      <div className="max-w-4xl mx-auto px-6 pb-12 pt-20">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-300">
            {project.date && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-purple-400"
                />
                <span>{project.date}</span>
              </div>
            )}
            {project.techStack && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTools} className="text-purple-400" />
                <span>{project.techStack.join(", ")}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Content */}
        <div className="gap-8">
          {/* Main Content */}
          <div className=" space-y-6">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                Project Overview
              </h2>
              <div className="text-gray-300 leading-relaxed text-lg bg-gray-800/50 p-6 rounded-2xl">
                {project.description}
              </div>
            </section>

            {/* Features */}
            {project.feature && (
              <section>
                <h2 className="text-2xl font-bold mb-4 text-purple-300">
                  Key Features
                </h2>
                <div className="text-gray-300 leading-relaxed bg-gray-800/50 p-6 rounded-2xl whitespace-pre-line">
                  {project.feature}
                </div>
              </section>
            )}

            {/* Additional Content */}
            {project.details && (
              <section>
                <h2 className="text-2xl font-bold mb-4 text-purple-300">
                  Project Details
                </h2>
                <div className="text-gray-300 leading-relaxed bg-gray-800/50 p-6 rounded-2xl">
                  {project.details}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                Project Links
              </h3>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Live Demo
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faCode} />
                  View Repository
                </a>
              )}
            </div>

            {/* Tech Stack */}
            {project.techStack && (
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-purple-900/50 text-purple-200 rounded-lg text-sm font-medium border border-purple-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                Project Info
              </h3>
              <div className="space-y-3 text-gray-300">
                {project.status && (
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-400 font-semibold">
                      {project.status}
                    </span>
                  </div>
                )}
                {project.role && (
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <span className="text-purple-400">{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
