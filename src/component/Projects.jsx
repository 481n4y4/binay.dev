import hivo from "../assets/img/Hivo.png";
import mindkeeper from "../assets/img/MindKeeper.png";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl shadow hover:scale-105 transition p-4">
          <div className="h-40 rounded-lg mb-4 overflow-hidden">
            <img src={hivo} alt="hivo" className="object-cover" />
          </div>
          <h4 className="text-xl font-semibold">Hidden Voice</h4>
          <p className="text-gray-400 text-sm mt-2">
            AI-based web application designed to assist communication for people
            with speech impairments.
          </p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/xyleneSVG/HiVo.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-2 text-white transition font-[600]"
            >
              Repository
            </a>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl shadow hover:scale-105 transition p-4">
          <div className="h-40 rounded-lg mb-4 overflow-hidden">
            <img src={mindkeeper} alt="mindkeeper" className="object-cover" />
          </div>
          <h4 className="text-xl font-semibold">MindKeeper</h4>
          <p className="text-gray-400 text-sm mt-2">
            IoT solution that helps reduce digital distractions and supports
            productivity through real-time monitoring.
          </p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/481n4y4/MindKeeper.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-2 text-white transition font-[600]"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
