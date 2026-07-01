import React, { useEffect, useState } from "react";
import { getDolarhoy } from "../../services/dolar";

const About = () => {

  const [serviceDolar , setServiceDolar] = useState();

  useEffect(()=>{
    // LAMBDA  DOLAR ...
    getDolarhoy().then((res)=>{
      setServiceDolar(res)
    })

  },[])

  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-box dark-img-box">
            <img src="img/about/me3.jpeg" alt="smiling a girl" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-dealay="100"
        >
          <div className="typo-box about-me">
            <h3>@CODEJAR</h3>
            <h5>
              <span className="color-theme">Senior Developer</span> 
     
            </h5>

            <p>
              First, solve the problem. Then, write your code.
            </p>
            <p>
              Technology has the power to make everyone's lives better
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Experience</label>
                  <p>10 Years</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Colombia</p>
                </div>
                <div className="media">
                  <label>City</label>
                  <p>BOGOTA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>cmurillo_23@hotmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>323 280 52 47</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" target="_blank" rel="noreferrer"
                 href="https://aply-models.s3.amazonaws.com/estudio91/CV.David_Ramirez.pdf" download>
                 Download CV
              </a>
            </div>
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" target="_blank"  rel="noreferrer"
                 href="https://i37u1am835.execute-api.us-east-1.amazonaws.com/Prod/trm" download>
                 Dolar Hoy :  {serviceDolar}
              </a>
            </div>
            <div className="btn-bar">
              <a  id="youtube" className="px-btn px-btn-theme" target="_blank"  rel="noreferrer"
                 href="https://www.youtube.com/channel/UCz7eedmxjkdv-FL9H0mFr8Q" download>
                 Youtube
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
