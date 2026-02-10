/*
импортировать картинку

создать компонент для программы
  - создать секцию с классами program container
     - создать див с классом program__content
       - создать аш2 с классом program__title
       - создать параграф с классом program__text
       - создать ссылку с классом program__link

     - создать див с классом program__video
       - создать див с классом  ellips
         - добавить импортированную картинку

импортировать компонент по умолчанию
*/


import play from "../img/PlaySolid.png";

function Program() {
  return (
    <section className="program container">
      <div className="program__content">
        <h2 className="program__title">
          Easy to Use Cloud Budget Management Software
        </h2>
        <p className="program__text">
          Our software is made so you can access and manage your budget and
          expenses online at any time from any device. It provides detailed
          income and expense reports with graphs so you can easilly see your
          spending patterns and budget at a glance. Read below to find out more.
        </p>
        <a className="program__link" href="">
          Learn More
        </a>
      </div>

      <div className="program__video">
        <div className="ellips">
          <img src={play} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Program;
