import { useTranslation } from "react-i18next";

export const Testimonials = (props) => {
  const { t } = useTranslation();
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t("TestimonialsTitle")}</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src={t("Testimonials.0.img")} alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"{t("Testimonials.0.text")}"</p>
                <div className="testimonial-meta">
                  {" "}
                  - {t("Testimonials.0.name")}{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src={t("Testimonials.1.img")} alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"{t("Testimonials.1.text")}"</p>
                <div className="testimonial-meta">
                  {" "}
                  - {t("Testimonials.1.name")}{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src={t("Testimonials.2.img")} alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"{t("Testimonials.2.text")}"</p>
                <div className="testimonial-meta">
                  {" "}
                  - {t("Testimonials.2.name")}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
