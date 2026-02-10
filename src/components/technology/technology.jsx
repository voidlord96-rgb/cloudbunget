import frame3 from "../img/Frame 3.png";
import frame4 from "../img/Frame 4.png";
import vector2 from "../img/Vector (2).png";
import vector3 from "../img/Vector (3).png";

function Technology() {
  return (
    <section className="technology">
      <div className="container technology__container">
        <h2 className="technology__title">Technology</h2>

        <div className="technology__cards">
          <div className="technology__card">
            <img src={frame3} alt="" class="technology__card-img"/>

            <h3 className="technology__card-title">Cloud Storage</h3>
            <p className="technology__card-desc">
              Access your account from anywhere in the world on any device
            </p>
          </div>
          <div className="technology__card">
            <img src={frame4} alt="" class="technology__card-img"/>

            <h3 className="technology__card-title">Secure</h3>
            <p className="technology__card-desc">
              All your information is stored on secure cloud servers
            </p>
          </div>
          <div className="technology__card">
            <img src={vector2} alt="" class="technology__card-img"/>

            <h3 className="technology__card-title">PDF Download</h3>
            <p className="technology__card-desc">
              Download any of your reports in PDF format
            </p>
          </div>
          <div className="technology__card">
            <img src={vector3} alt="" class="technology__card-img"/>

            <h3 className="technology__card-title">CSV Download</h3>
            <p className="technology__card-desc">
              All your information is stored on secure cloud servers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Technology;
