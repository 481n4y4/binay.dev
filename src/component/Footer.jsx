import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#0B0214] text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center md:flex md:justify-between md:items-center md:text-left gap-4">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Binay.dev — All Rights Reserved
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0 justify-center">
          <a
            href="https://www.instagram.com/abinaya_4o4?igsh=MWMwZzRqaTNtbjkxbw=="
            id="instagram"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/kheira-abinaya-677ba2286"
            id="linkedin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/481n4y4" id="github" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
