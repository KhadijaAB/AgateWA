import { useTranslation } from "react-i18next";

export const About = (props) => {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 style={{ alignSelf: "right", justifyContent: "right" }}>
                {t("aboutTitle")}
              </h2>
              <p> {t("about.paragraph")} </p>
              <h3> {t("WhyToChooseUs")}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li> {t("about.Why.0")}</li>
                    <li> {t("about.Why.1")}</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li> {t("about.Why2.0")}</li>
                    <li> {t("about.Why2.1")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
