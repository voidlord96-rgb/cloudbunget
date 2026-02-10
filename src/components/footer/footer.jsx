import fb from '../img/fb.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import secure from '../img/secure.png';

function Footert() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__adress footer__card">
          <h3 className="adress-title">Address</h3>
          <p className="adress-text">
            Pipang Ltd, Griva Digeni, <br />
            81-83 Jacovides Tower, 1st Floor <br />
            1090 Picosia USA
          </p>
        </div>
        <div className="footer__services footer__card">
          <h3 className="services-title">Services</h3>

          <ul className="services-list">
            <li className="services-item">Overview</li>
            <li className="services-item">features</li>
            <li className="services-item">technology</li>
            <li className="services-item">Terms & Conditions</li>
            <li className="services-item">Privecy</li>
          </ul>
        </div>
        <div className="footer__get-in-touch footer__card">
          <h3 className="touch-title">Get in Touch</h3>
          <p>info@cloudbudget.com</p>
          <p>+1 844-721-7120</p>
          <div className="touch-icon">
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="footer__support footer__card">
          <h3 className="support-title">We Support</h3>
          <img src={secure} alt="" />
        </div>
        <p className="copyright">Copyright 2018 CloudBudget</p>
      </div>
    </footer>
  );
}

export default Footert;
