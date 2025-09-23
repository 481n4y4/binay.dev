import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import js from "../assets/img/js.png";

function Skills() {
  return (
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
  );
}

export default Skills;
