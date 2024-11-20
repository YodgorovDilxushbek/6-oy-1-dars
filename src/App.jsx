import "./App.css";
import logo from "./assets/images/myteam-logo.svg";

import features1 from "./assets/images/features-1.svg";
import features2 from "./assets/images/features-2.svg";
import features3 from "./assets/images/features-3.svg";

function App() {
  return (
    <div>
<header className="main-header">
  <div className="main-header__container container">
    <a className="main-logo-link" href="#">
      <img src={logo} alt="" />
    </a>
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="main-nav__link" href="#">
            home
          </a>
        </li>
        <li className="main-nav__item">
          <a className="main-nav__link" href="#">
            about
          </a>
        </li>
      </ul>
    </nav>
    <a className="btn main-header-btn btn-light" href="#">
      contact us
    </a>
  </div>
</header>

<main className="main-content">
  <section className="hero-section">
    <div className="hero-section__container container">
      <div className="hero-section__title-wrapper">
        <h1 className="hero-section__title">
          Find the <br /> best{" "}
          <span className="text-highlight">talent</span>
        </h1>
      </div>
      <div className="hero-section__info">
        <hr className="hero-section__divider site-divider" />
        <p className="hero-section__description">
          Finding the right people and building high performing teams can be
          hard. Most companies aren t tapping into the abundance of global
          talent. We re about to change that.
        </p>
      </div>
    </div>
  </section>
  <section className="features-section">
    <div className="features-section__container container">
      <div className="features-section__info-title">
        <div className="site-divider features-section__divider"></div>
        <h2 className="features-section__title">
          Build & manage distributed teams like no one else.
        </h2>
      </div>
      <div className="features-section__list-wrapper">
        <ul className="features-section__list">
          <div className="features-section__item">
            <img
              className="features-section__image"
              src={features1}
              alt="Experienced Individuals"
              width="72"
              height="72"
            />
            <div className="features-section__info-wrapper">
              <h3 className="features-section__item-title">
                Experienced Individuals
              </h3>
              <p className="features-section__item-description">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="features-section__item">
            <img
              className="features-section__image"
              src={features2}
              alt="Easy to Implement"
              width="72"
              height="72"
            />
            <div className="features-section__info-wrapper">
              <h3 className="features-section__item-title">Easy to Implement</h3>
              <p className="features-section__item-description">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="features-section__item">
            <img
              className="features-section__image"
              src={features3}
              alt="Enhanced Productivity"
              width="72"
              height="72"
            />
            <div className="features-section__info-wrapper">
              <h3 className="features-section__item-title">
                Enhanced Productivity
              </h3>
              <p className="features-section__item-description">
                Our customized platform with in-built analytics helps you{" "}
                manage your distributed teams.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </section>
</main>


    </div>
  );
}

export default App;
