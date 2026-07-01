import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
// Especializaciones
const tabList = ["Experiences"];
const AllPortfolioContent = [
  {
    img: "1",
    title: "Software Ingeener",
    alterText: "avxs",
    portfolioLink:
      "https://www.adventiscg.com/adventis-newsletter",
  },
  {
    img: "2",
    title: "Full Stack Developer",
    alterText: "Adventiscgs",
    portfolioLink:
      "https://www.adventiscg.com/adventis-newsletter",
  },
  {
    img: "3",
    title: "Full Stack Developer",
    alterText: "DANE",
    portfolioLink:
      "http://gdpdane.iyata.net/login",
  },
  {
    img: "4",
    title: "Senior Developer",
    alterText: "software Developer",
    portfolioLink:
      "https://www.doctoraki.com/",
  },
  {
    img: "5",
    title: "Lead Team ",
    subTitle: "",
    alterText: "Elearning App",
    portfolioLink:
      "https://www.ciencuadras.com/",
  },
  {
    img: "6",
    title: "Infraestructura AWS",
    alterText: "sucursal refinancia",
    portfolioLink:
      "https://sucursalvirtual.refinancia.co/",
  },

  {
    img: "7",
    title: "Senior Developer",
    alterText: "ipm",
    portfolioLink:
      "https://ipm-x.com/",
  },
  
  {
    img: "8",
    title: "Full Stack Developer",
    alterText: "",
    portfolioLink:
      "https://comfy.com.co",
  },
  {
    img: "9",
    title: "Senior Developer",
    alterText: "",
    portfolioLink:
      "https://enterprise.smartquick.com.co/login",
  },
  
];

const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} rel="noreferrer" target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}

                          <img
                            src={`img/portafolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />

                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;

