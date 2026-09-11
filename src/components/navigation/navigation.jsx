import vector from "../img/Vector.png";
import frame1 from "../img/Frame 1.png";
import vector1 from "../img/Vector (1).png";

function Navigation() {
  return (
    <nav className="container navigation">
      <div className="navigation__logo">
        <img src={vector} alt="" />
        <a href="">CloudBudget</a>
      </div>

      <div className="navigation__button">
        <a href="#" className="buttons">
          OVERVIEW
        </a>
        <a href="#" className="buttons">
          FEATURES
        </a>
        <a href="#" className="buttons">
          TECHNOLOGY
        </a>
        <a href="#" className="buttons">
          CONTACT
        </a>
        <a href="#" className="buttons">
          Sign up
        </a>
      </div>

      <div className="navigation__extra">
        <div className="navigation__lang">
          <img src={frame1} alt="" />
          <p>EN</p>

          <img src={vector1} alt="" />
        </div>
        <button className="navigation__login">LOGIN</button>
      </div>
    </nav>
  );
}

export default Navigation;
