import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-light text-dark text-decoration-none d-flex justify-content-around p-2">
        <Link to="/"><h3 class="text-dark text-decoration-none"> Home</h3></Link>
        <Link to="/workshops"><h3 class="text-dark text-decoration-none"> All Workshops</h3></Link>
        <Link to="/login"><h3 class="text-dark text-decoration-none">Login</h3></Link>
        <Link to="/registered"><h3 class="text-dark text-decoration-none">registered</h3></Link>
      </nav>
    </>
  );
};

export default Navbar;