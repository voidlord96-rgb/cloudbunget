import google from "../img/ion-logo-google-playstore.png";
import vector4 from "../img/Vector (4).png";
import vector5 from "../img/Vector (5).png";
import video1 from "../img/Video_bg (1).png";
import video2 from "../img/Video_bg (2).png";
import video3 from "../img/Video_bg (3).png";

function SavingMoney() {
  return (
    <section className="saving-money">
      <div className="container saving-money_container">
        <div className="saving-money__content">
          <h2 className="saving-money__title">
            Stay focused on saving <br />
            money
          </h2>
          <p className="saving-money__desc">
            It is important to stay focused on saving money in any way you can.
            We help you monitor your spending habits so you can easily spot and
            cut any unnecessary expenses. Simply join today to get started!
          </p>
          <div className="saving-money__icons">
            <img src={google} alt="" />
            <img src={vector5} alt="" />
            <img src={vector4} alt="" />
          </div>
        </div>
        <div className="saving-money__images">
          <img className="saving-money__image" src={video1} alt="" />
          <img className="saving-money__image" src={video2} alt="" />
          <img className="saving-money__image" src={video3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SavingMoney;
