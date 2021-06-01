import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Features = (props) => {
  const { t } = useTranslation();
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2> {t("Menu")}</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            {" "}
            <i className={t("Features.0.icon")}></i>
            <Link to="/mostWanted">
              {" "}
              <h3>{t("Features.0.title")}</h3>{" "}
            </Link>
            <p>{t("Features.0.text")}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            {" "}
            <i className={t("Features.1.icon")}></i>
            <Link to="/mostWanted">
              {" "}
              <h3>{t("Features.1.title")}</h3>{" "}
            </Link>
            <p>{t("Features.1.text")}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            {" "}
            <i className={t("Features.2.icon")}></i>
            <Link to="/mostWanted">
              {" "}
              <h3>{t("Features.2.title")}</h3>{" "}
            </Link>
            <p>{t("Features.2.text")}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            {" "}
            <i className={t("Features.3.icon")}></i>
            <Link to="/mostWanted">
              {" "}
              <h3>{t("Features.3.title")}</h3>{" "}
            </Link>
            <p>{t("Features.3.text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
