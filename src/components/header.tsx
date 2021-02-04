import React from "react";
import SVGLogo from "../img/maschinelogo.svg";

const Header = () => {
  return (
    <>
      <header className="app-header">
        <div className="column">
          <img src={SVGLogo} className="logo" alt="MASCHINE MIKRO" />
        </div>
        <div className="column">
          <div className="app-header-lcd">
            <h1>
              React
              <div>808 Drums</div>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
