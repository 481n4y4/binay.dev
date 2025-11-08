import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import contact from "../assets/img/contact.png";

export default function Contact() {
  return (
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
                  href: "https://www.instagram.com/it5_binay?igsh=MWMwZzRqaTNtbjkxbw==",
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
  );
}
