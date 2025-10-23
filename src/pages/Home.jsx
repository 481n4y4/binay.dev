import { ReactTyped } from "react-typed";
import khei from "../assets/img/Khei.JPG";
import contact from "../assets/img/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import certificate from "../data/certificate";
import skills from "../data/skills";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-0"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <FontAwesomeIcon
              icon={faCode}
              className="text-purple-400 text-sm"
            />
            <span className="text-sm text-purple-200">Frontend Developer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            <ReactTyped
              strings={[
                "Hi, I'm Abinaya",
                "Frontend Developer",
                "Creative Coder",
              ]}
              typeSpeed={70}
              backSpeed={40}
              showCursor={true}
              cursorChar="|"
              loop={true}
            />
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about building clean, responsive web applications with
            modern technologies and creating exceptional user experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold shadow-lg"
            >
              View Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-500 px-8 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 "></div>
              <img
                src={khei}
                alt="Kheira Abinaya"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:w-3/5 space-y-6">
            <h3 className="text-2xl font-bold text-purple-300">
              Kheira Abinaya Gavin Lovedila
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              A dedicated student at SMK Negeri 7 Semarang, specializing in
              Network and Application Information System. My passion lies in
              technology, software development, and artificial intelligence,
              with a focus on creating innovative solutions for real-world
              challenges.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through active participation in school organizations, I've honed
              my leadership, teamwork, and project management skills. Currently,
              I'm deepening my expertise in modern web technologies including
              JavaScript, HTML, and Tailwind CSS, while continuously exploring
              emerging technologies in the field.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm excited to collaborate on innovative projects, contribute to
              meaningful solutions, and grow professionally in dynamic tech
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 bg-gray-800/50 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            I actively work with a range of technologies that support both
            front-end and back-end development, including:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              className="group flex flex-col items-center gap-4 p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-700 hover:border-purple-500"
            >
              <div className="p-4 bg-gray-900 rounded-2xl group-hover:bg-purple-900/20 transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-bold text-lg text-center group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h4>
            </a>
          ))}
        </div>
      </section>

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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 bg-gray-800/50 rounded-3xl mx-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-purple-500/50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer p-3 text-white transition-all font-semibold group/btn"
                >
                  Read More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Let's discuss your project or just say hello!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25"></div>
              <img
                src={contact}
                alt="Contact"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="4b01bfae-9d39-4341-a30d-554d890f359f"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-center mb-8 text-gray-300">
                Connect with me on social media
              </h3>
              <div className="flex justify-center gap-6 flex-wrap">
                {[
                  {
                    icon: faInstagram,
                    href: "https://www.instagram.com/abinaya_4o4?igsh=MWMwZzRqaTNtbjkxbw==",
                    label: "Instagram",
                  },
                  {
                    icon: faLinkedin,
                    href: "https://www.linkedin.com/in/kheira-abinaya-677ba2286",
                    label: "LinkedIn",
                  },
                  {
                    icon: faGithub,
                    href: "https://github.com/481n4y4",
                    label: "GitHub",
                  },
                  {
                    icon: faFacebook,
                    href: "https://www.facebook.com/kheira.abinaya?mibextid=ZbWKwL",
                    label: "Facebook",
                  },
                  {
                    icon: faWhatsapp,
                    href: "https://wa.me/6285179902663",
                    label: "WhatsApp",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-purple-500"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors"
                    />
                    <span className="text-xs text-gray-400 group-hover:text-gray-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
