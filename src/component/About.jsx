import khei from "../assets/img/Khei.JPG";

function About() {
  return (
    <>
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
              I actively contribute to school
              organizations, where I develop my leadership, teamwork, and
              project management skills. Currently, I am strengthening my
              expertise in JavaScript, HTML, and Tailwind CSS, while
              continuously expanding my knowledge in emerging technologies. I am
              eager to apply my skills in collaborative environments, contribute
              to innovative projects, and gain valuable experience for my future
              career.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
