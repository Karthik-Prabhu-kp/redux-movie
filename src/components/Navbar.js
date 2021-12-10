import React from "react";


function Navbar() {
    return (
      <div>
        <nav data-testid="navbarDisplay" className="navbar navbar-light bg-dark mb-5">
          <div className="container">
            <div className="navbar-header">
              < h1 className="navbar-brand text-white text-lg brand-text" >
                Movie Recommendations
              </h1>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;