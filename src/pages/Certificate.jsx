import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import certificate from "../data/certificate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Contact from "../component/Contact";

function Certificate() {
  return (
    <main className="bg-gray-900 text-white font-sans">
      <Navbar />
      {/* Certificate */}
      <section
        id="certificate"
        className="max-w-6xl mx-auto px-6 py-24 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Certificate
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            I possess a strong foundation in web development, problem-solving,
            and creative presentation. My skills include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificate.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-purple-500/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className=" bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {project.name}
                </h4>
                <a
                  href={project.Link}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-3 text-white transition-all font-semibold group/btn"
                >
                  View Certificate
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

export default Certificate;
