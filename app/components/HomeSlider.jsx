"use client"
import React,{useEffect, useState} from 'react';
import Link from 'next/link';
function HomeSlider({slider}) {
const [pageInfo,setpageInfo]=useState(slider);
  return (
    <>
   <section className="section-intro intro-homepage">
    <div className="container container-fluid">
      <div className="row">
        <div className="col-md-6 col-content">
          <div className="title hero-title">
            <span className="subtitle">{pageInfo[0]?.acf_field?.intro_title_sub}</span>
           <h1 dangerouslySetInnerHTML={{ __html: pageInfo[0]?.acf_field?.intro_title}}></h1>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: pageInfo[0]?.acf_field?.intro_content}}>
         
          </div>
          <div className="cta">
            <Link href="" className="button-default">{pageInfo[0]?.acf_field?.intro_button_primary_text}</Link>
            <Link href="" className="button-clean">{pageInfo[0]?.acf_field?.intro_button_secondary_text}</Link>
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

export default React.memo(HomeSlider);
