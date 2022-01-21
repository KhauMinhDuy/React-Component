import { ThemeContext } from "../contexts/ThemeContext";
import React, { useContext } from "react";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/SVCCLogo.png" alt="Logo" />
          </div>
          <div className="light">
            <h4 className={theme === "light" ? "header-title" : "text-info"}>
              Silicon Valley Code Camp
            </h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Duy Khau &nbsp;&nbsp;
            <span>
              <a href="#">Sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
