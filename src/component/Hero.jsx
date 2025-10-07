import { ReactTyped } from "react-typed";

function Hero() {
  return (
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
  );
}

export default Hero;
