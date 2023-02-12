import React, { useEffect, useState } from "react";
import './Navbar.css'
function Navbar() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
      <nav style={{ backgroundColor: scroll > 50 ? "#333" : "transparent",transition: "background-color 0.5s ease-out"}} className="Navbar vw-100">
        <div className="logo" href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" height={40} />
        </div>
        <div>
          <img src="\assets\images.png" className="rounded" alt="Avatar" height={30}/>
        </div>
      </nav>
  );
}

export default Navbar;
