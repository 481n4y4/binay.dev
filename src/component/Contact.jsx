import contact from "../assets/img/contact.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
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
      <div className="flex justify-center flex-wrap gap-15 mt-5">
        <div className="text-center p-1">
          <a
            href="https://www.instagram.com/abinaya_4o4?igsh=MWMwZzRqaTNtbjkxbw=="
            id="instagram"
            target="_blank"
            className="text-purple-700 text-5xl"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <h3 className="font-bold">Instagram</h3>
        </div>
        <div className="text-center p-1">
          <a
            href="https://www.linkedin.com/in/kheira-abinaya-677ba2286"
            id="linkedin"
            target="_blank"
            className="text-purple-700 text-5xl"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <h3 className="font-bold">Linkedin</h3>
        </div>
        <div className="text-center p-1">
          <a
            href="https://github.com/481n4y4"
            id="github"
            target="_blank"
            className="text-purple-700 text-5xl"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <h3 className="font-bold">Github</h3>
        </div>
        <div className="text-center p-1">
          <a
            href="https://www.facebook.com/kheira.abinaya?mibextid=ZbWKwL"
            id="Facebook"
            target="_blank"
            className="text-purple-700 text-5xl"
          >
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <h3 className="font-bold">Facebook</h3>
        </div>
        <div className="text-center p-1">
          <a
            href="https://wa.me/6285179902663"
            id="Whatsapp"
            target="_blank"
            className="text-purple-700 text-5xl"
          >
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
          <h3 className="font-bold">Whatsapp</h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;
