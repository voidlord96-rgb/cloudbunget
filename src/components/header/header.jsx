/*
создать компонент для шапки
 - создать шапку с классом header:
  
   - создать див с классом header__content:
     - создать главный заголовок с классом header__content
     - создать параграф с классом header__desk
     - создать кнопку с классом header__btn

    - создать див с классом header__bg 

импортировать компонент по умолчанию
*/


function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">CloudBudget</h1>
        <p className="header__desk">
          Cloud budget management for everyone. Only <br />
          €69.95 a Month After a 7 Day Trial of <br />
          Up to €4.99
        </p>
        <button className="header__btn">Sign Up</button>
      </div>

      <div className="header__bg"></div>
    </header>
  );
}

export default Header;
