import { ReactTyped } from "react-typed";
import khei from "../assets/img/Khei.JPG";
import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import js from "../assets/img/js.png";
import contact from "../assets/img/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import projects from "../data/projectsData";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <section
        id="hero"
        className="bg-gradient-to-t from-gray-900 via-purple-950 to-black text-white overflow-hidden h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <div className="relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <ReactTyped
              strings={[
                "Hi, I’m Abinaya",
                "A Frontend Dev",
                "A Creative Coder",
              ]}
              typeSpeed={70}
              backSpeed={40}
              showCursor={true}
              cursorChar="|"
              loop={true}
            />
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            A passionate Frontend Developer who loves building clean and
            responsive web applications.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className=" max-w-6xl mx-auto px-6 py-20 ">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div>
            <img
              src={khei}
              alt="kheira"
              className="md:w-full w-xs object-cover rounded-xl border-none border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-justify text-gray-200 leading-relaxed">
              My name is Kheira Abinaya Gavin Lovedila, a student at SMK Negeri
              7 Semarang majoring in Network and Application Information System.
              I have a strong interest in technology, software development, and
              artificial intelligence, particularly in creating solutions that
              address real-world problems.
            </p>
            <p className="text-justify text-gray-200 leading-relaxed">
              I actively contribute to school organizations, where I develop my
              leadership, teamwork, and project management skills. Currently, I
              am strengthening my expertise in JavaScript, HTML, and Tailwind
              CSS, while continuously expanding my knowledge in emerging
              technologies. I am eager to apply my skills in collaborative
              environments, contribute to innovative projects, and gain valuable
              experience for my future career.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <a
              href="https://www.dicoding.com/certificates/MRZMNMDRRPYQ"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img src={github} alt="GitHub" className="w-16" />
              <h4 className="font-bold">Git & GitHub</h4>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <a
              href="https://www.dicoding.com/certificates/JLX19RGN5P72"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img src={html} alt="HTML" className="w-16" />
              <h4 className="font-bold">HTML</h4>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <a
              href="https://www.dicoding.com/certificates/4EXGVRNEDXRL"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img src={css} alt="CSS" className="w-16" />
              <h4 className="font-bold">CSS</h4>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
            <a
              href="https://www.dicoding.com/certificates/KEXL7DL9MXG2"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img src={js} alt="JavaScript" className="w-16" />
              <h4 className="font-bold">JavaScript</h4>
            </a>
          </div>
        </div>
      </section>

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
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
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

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <div className="flex justify-evenly items-center">
          <div className="flex-1 hidden md:flex">
            <img src={contact} alt="contact" />
          </div>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-1 flex-col items-start  gap-[20px]"
          >
            <input
              type="hidden"
              name="access_key"
              value="4b01bfae-9d39-4341-a30d-554d890f359f"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="border-none outline-none w-full bg-gray-800 p-3 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="border-none outline-none w-full bg-gray-800 p-3 rounded-xl"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              class="border-none outline-none w-full h-[140px] bg-gray-800 p-3 rounded-xl"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 text-white text-base rounded-xl bg-purple-900 hover:bg-purple-800 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-wrap md:gap-15 mt-3">
          <div className="text-center p-1">
            <a
              href="https://www.instagram.com/abinaya_4o4?igsh=MWMwZzRqaTNtbjkxbw=="
              id="instagram"
              target="_blank"
              className="text-purple-700 md:text-4xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="text-center p-1">
            <a
              href="https://www.linkedin.com/in/kheira-abinaya-677ba2286"
              id="linkedin"
              target="_blank"
              className="text-purple-700 md:text-4xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="text-center p-1">
            <a
              href="https://github.com/481n4y4"
              id="github"
              target="_blank"
              className="text-purple-700 md:text-4xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="text-center p-1">
            <a
              href="https://www.facebook.com/kheira.abinaya?mibextid=ZbWKwL"
              id="Facebook"
              target="_blank"
              className="text-purple-700 md:text-4xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="text-center p-1">
            <a
              href="https://wa.me/6285179902663"
              id="Whatsapp"
              target="_blank"
              className="text-purple-700 md:text-4xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
