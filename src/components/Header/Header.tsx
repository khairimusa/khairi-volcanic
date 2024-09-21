"use client";

function Header() {
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">
          Brand
        </a>
        <nav className="nav">
          <button className="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul className="nav__wrapper">
            <li className="nav__item">
              <a href="#">JOBS</a>
            </li>
            <li className="nav__item">
              <a href="#">About</a>
            </li>
            <li className="nav__item">
              <a href="#">Services</a>
            </li>
            <li className="nav__item">
              <a href="#">Hire us</a>
            </li>
            <li className="nav__item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
