import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-950 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-400">Binay.dev</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <Link to={"/"} className="hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-indigo-400">
              About
            </Link>
          </li>
          <li>
            <Link to={"/certificate"} className="hover:text-indigo-400">
              Certificate
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="hover:text-indigo-400">
              Projects
            </Link>
          </li>
        </ul>

        {/* Ikon Bars untuk Mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden w-60 min-h-screen flex flex-col items-end gap-6  px-8 py-6 bg-gray-900/90 text-white absolute right-0">
          <li>
            <Link to={"/"} className="hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-indigo-400">
              About
            </Link>
          </li>
          <li>
            <Link to={"/certificate"} className="hover:text-indigo-400">
              Certificate
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="hover:text-indigo-400">
              Projects
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
