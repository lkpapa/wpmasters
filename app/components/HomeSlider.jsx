"use client"
import React,{useEffect, useState} from 'react'
function HomeSlider() {
    const [isHovering, setIsHovering] = useState(false)
    const [hoverStyle, setHoverStyle] = useState({})
    const [index, setIndex] = useState(0);
    const mouseEntered = (index) => {
        setIsHovering(true);
        setIndex(index + 1);
    }
    const mouseLeft = () => setIsHovering(false)


    useEffect(() => {
        if (isHovering) {
            setHoverStyle({
                background: `center url("/images/stats/rounded-images/${index}.png") no-repeat`,
                border: '1px solid #f5f5f5',
                boxShadow: '0px 0px 10px #f5f5f5',
                transition: 'all 0.3s ease-in-out'
            });
        } else {
            setHoverStyle({});
        }
    }, [isHovering]);
  return (
    <>
        <section className="section-intro intro-homepage">
    <div className="container container-fluid">
      <div className="row">
        <div className="col-md-6 col-content">
          <div className="title hero-title">
            <span className="subtitle">Jouw full service digital agency</span>
            <h1>We help brands become online <span>legends</span></h1>
          </div>
          <div className="content">
        <p>Een goede online positionering start met een indrukwekkend design en een perfect UX &amp; UI. Als ervaren digital agency ontzorgen onze Masters je volledig van visie en ambitie tot aan de strategie en het perfecte online resultaat.</p>

          </div>
          <div className="cta">
            <a href="#" className="button-default">Bekijk portfolio</a>
            <a href="#" className="button-clean">Leer ons kennen</a>
          </div>
        </div>
        <div className="col-md-6 col-services">
          <div className="inner">
            <div className={`item`}>
              <a href="#">
                <img src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/images/wpm_home-design.webp" alt="Image 1"/>
                <video autoPlay muted>
                  <source src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/videos/wpm_design-video.mp4" type="video/mp4"/>
                </video>
                <div className="label">Branding &amp; Design</div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/images/wpm_home-development.webp" alt="Image 2"/>
                <video autoPlay muted>
                  <source src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/videos/wpm_development-video.mp4" type="video/mp4"/>
                </video>
                <div className="label">WordPress Development</div>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/images/wpm_home-marketing.webp" alt="Image 3"/>
                <video autoPlay muted>
                  <source src="https://wpmasters20.kinsta.cloud/wp-content/themes/wp-masters/assets/videos/wpm_marketing-video.mp4" type="video/mp4"/>
                </video>
                <div className="label">Digital marketing</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default HomeSlider
