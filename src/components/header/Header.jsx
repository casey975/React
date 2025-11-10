import React from "react";
import Logo from "./Logo";


const Header = () => {    
  return (
      
      <div className="grid grid-cols-2 gap-4 px-20 items-center bg-amber-200 mx-3">
        
        <Logo />

    
        <div className="flex gap-10 items-center text-white">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
          <button className="bg-emerald-600 px-5 py-2 text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    
  );
}

export default Header;
