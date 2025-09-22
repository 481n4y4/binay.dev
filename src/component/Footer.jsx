function Footer() {
  return (
    <footer className="bg-[#0B0214] text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Binay.dev — All Rights Reserved
        </p>

        {/* Sosial Media */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:youremail@gmail.com" 
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
