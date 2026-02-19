import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = (
    <>
      <li><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
      <li><Link to="/todos" onClick={() => setShowMenu(false)}>Your Tasks</Link></li>
    </>
  );

  const socialLinks = (
    <>
       <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><FaYoutubeSquare className="text-red-600" /></a></li>
      <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="text-blue-600" /></a></li>
      <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare className="text-blue-700" /></a></li>
    </>
  );
return (
    <nav className="flex justify-between items-center bg-green-300 py-5 px-6 shadow relative">
      
      <div className="font-bold text-xl text-black">My Project</div>

     
      <ul className="hidden md:flex gap-6 font-medium text-black">
        {navLinks}
      </ul>

      <ul className="hidden md:flex gap-4 text-2xl">
        {socialLinks}
      </ul>

      
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      
      
    </nav>
  );
  
  
};

export default Navbar;
