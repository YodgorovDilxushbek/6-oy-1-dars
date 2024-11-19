import "./App.css";
import logo from "./assets/images/myteam-logo.svg";
import remax from "./assets/images/remax.svg";
import kady from "./assets/images/kady.svg";
import aish from "./assets/images/aisha.svg";
import arthur from "./assets/images/arthur.svg";
import features1 from "./assets/images/features-1.svg";
import features2 from "./assets/images/features-2.svg";
import features3 from "./assets/images/features-3.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container container">
          <a className="logo-link" href="#">
            <img src={logo} alt="" />
          </a>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  home
                </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  about
                </a>
              </li>
            </ul>
          </nav>
          <a className="btn header-btn btn-light" href="#">
            contact us
          </a>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-container container">
            <div className="hero__title-wrapper">
              <h1 className="hero__title">
                Find the <br /> best{" "}
                <span className="text-primary">talent</span>
              </h1>
            </div>
            <div className="hero__info">
              <hr className="hero__divider site-divider" />
              <p className="hero__description">
                Finding the right people and building high performing teams can
                be hard. Most companies aren t tapping into the abundance of
                global talent. We re about to change that.
              </p>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features__container container">
            <div className="features__info-title">
              <div className="site-divider features__divider"></div>
              <h2 className="features__title">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div className="features__list-wrapper">
              <ul className="features__list">
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features1}
                    alt="Experienced Individuals"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">
                      Experienced Individuals
                    </h3>
                    <p className="features__item-description">
                      Our network is made up of highly experienced professionals
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features2}
                    alt="Easy to Implement"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">Easy to Implement</h3>
                    <p className="features__item-description">
                      Our processes have been refined over years of
                      implementation meaning our teams always deliver.
                    </p>
                  </div>
                </div>
                <div className="features__item">
                  <img
                    className="features__image"
                    src={features3}
                    alt="Enhanced Productivity"
                    width="72"
                    height="72"
                  />
                  <div className="features__info-wrapper">
                    <h3 className="features__item-title">
                      Enhanced Productivity
                    </h3>
                    <p className="features__item-description">
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
