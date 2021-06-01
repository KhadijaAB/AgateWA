import { useTranslation } from "react-i18next";

export const Navigation = (props) => {
  const { t, i18n } = useTranslation();
  const changeLan = (lan) => {
    i18n.changeLanguage(lan);
    lan === "en" ? document.body.dir = "ltr": document.body.dir = "rtl"
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {t('Navigation.name')}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {t('Navigation.menu')}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              {t('Navigation.about')}
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> 
            <li>
              <a href='#portfolio' className='page-scroll'>
               Most Wanted
              </a>
            </li> */}
            <li>
              <a href="#testimonials" className="page-scroll">
                {t('Navigation.testimonials')}
              </a>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                {t('Navigation.contact')}
              </a>
            </li>
            <li>
              <a>
            <button className="btn-custom" style={{padding: "4px 8px", fontSize: "10px"}} onClick={() => changeLan("en")}>En</button>
            </a>
            </li>
            <li><a> <button className="btn-custom" style={{padding: "4px 8px", fontSize: "10px"}} onClick={() => changeLan("ar")}>Ar</button></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
