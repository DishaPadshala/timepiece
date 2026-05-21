function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our information</h3>
          <ul className="footer__list">
            <li>1234 - Peru</li>
            <li>La Libertad 43210</li>
            <li>123-456-789</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">About Us</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Support Center</a></li>
            <li><a href="#" className="footer__link">Customer Support</a></li>
            <li><a href="#" className="footer__link">About Us</a></li>
            <li><a href="#" className="footer__link">Copy Right</a></li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Product</h3>
          <ul className="footer__links">
            <li><a href="#" className="footer__link">Dress watches</a></li>
            <li><a href="#" className="footer__link">Automatic watches</a></li>
            <li><a href="#" className="footer__link">Chronographs</a></li>
            <li><a href="#" className="footer__link">Accessories</a></li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>
          <ul className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="bx bxl-facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="bx bxl-twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="bx bxl-instagram" />
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">&#169; Timepiece Co. All rights reserved</span>
    </footer>
  );
}

export default Footer;
