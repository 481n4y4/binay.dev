import { useParams, Link } from "react-router-dom";
import projects from "../data/projectsData";
import ReactMarkdown from "react-markdown";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center">Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl shadow-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <div className="prose prose-invert">
        <ReactMarkdown>{project.detail}</ReactMarkdown>
      </div>
      <Link
        to="/#projects"
        className="inline-block mt-6 px-4 py-2 bg-purple-900 hover:bg-purple-800 text-white rounded-xl"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;
