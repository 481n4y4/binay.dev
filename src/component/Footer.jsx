import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faEnvelope,
  faCode,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/it5_thakei?igsh=MWMwZzRqaTNtbjkxbw==",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/kheira-abinaya-677ba2286",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: faGithub,
      href: "https://github.com/481n4y4",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/6285179902663",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: faEnvelope,
      href: "abinayagavin16@gmail.com", // Ganti dengan email Anda
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-purple-900/30 border-t border-purple-500/20 text-gray-300 pt-16 pb-8 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              thakei.dev
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Passionate about building clean, responsive web applications with
              modern technologies and creating exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-purple-300 mb-4">
              Let's Connect
            </h4>
            <p className="text-gray-400 mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-lg group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>© {currentYear} thakei.dev</span>
            <span className="text-gray-600">•</span>
            <span>All Rights Reserved</span>
            <span className="text-gray-600">•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 text-xs"
              />
              <span>by Abinaya</span>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a
              href="https://github.com/481n4y4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors duration-300 flex items-center space-x-1"
            >
              <FontAwesomeIcon icon={faCode} className="text-xs" />
              <span>Source Code</span>
            </a>
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-1 hover:text-purple-300 transition-colors duration-300"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <FontAwesomeIcon
                icon={faArrowUp}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Made With Love */}
        <div className="text-center mt-6 pt-6 border-t border-gray-700/30">
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
