import React from "react";
import "./footer.css"

function Footer(){

    const currentYear = new Date().getFullYear();

    return <div className="footer">
      <footer>
      &copy; Mudassar Bagwan {currentYear}
    </footer>
    </div>

}

export default Footer;
