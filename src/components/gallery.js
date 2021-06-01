
import {SecondNav} from "./secondNav"
import { useTranslation } from "react-i18next";

export const Gallery = (props) => {
  const { t } = useTranslation();
  return (
    <div> 
      <SecondNav/>
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t("MostWanted")}</h2>
          <p>
          {t("MostWantedBody")}
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/01-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Biryani - برياني</h4>
                      <h5>  554 cal,  46 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/01-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/02-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>chocolate mousse - موس الشوكولاه</h4>
                      <h5>  380 cal,  35 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/02-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/03-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>crazy makki - كريزي ماكي رول</h4>
                      <h5>  221 cal,  55 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/03-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/04-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Fusili - فوزيلي بيستو بازيليكا</h4>
                      <h5>  367 cal,  49 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/04-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/05-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>lobster risotto - ريزوتو استاكوزا</h4>
                      <h5>  339 cal,  69 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/05-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/06-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>sea bass - القاروس المشوي</h4>
                      <h5>  340 cal,  76 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/06-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/07-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>sushi dinner - سوشي دينر </h4>
                      <h5>  873 cal,  193 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/07-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/08-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>salmon fillet - فيليه السلمون النرويجي</h4>
                      <h5>  371 cal,  72 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/08-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/09-large.jpg'
                    title='اسم الطبق'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Tomahawwk - توماهوك ستيك 1300جرام</h4>
                      <h5>  461 cal,  258 SAR  </h5>
                    </div>
                    <img
                      src='img/portfolio/09-small.jpg'
                      className='img-responsive'
                      alt='اسم الطبق'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}
