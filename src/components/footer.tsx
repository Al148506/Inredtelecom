import { useState, useEffect } from "react";
import "../styles/footer.css";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="footer-wrap px-0">
      <div className="footer-inner">
        <div className="copyright">
          Copyright © 2025 INREDTELECOM - Todos los derechos reservados.
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/inredtelecom">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/inredtelecom">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/524491108665">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </div>
  );
}

export default AppFooter;
