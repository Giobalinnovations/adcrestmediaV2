import React from 'react';
import WhyChooseUs from '../HomePages/DigitalMarketing/WhyChooseUs';

const ServiceDetailsContent = ({ service }: any) => {
  return (
    <>
      <div className="services-details-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="services-details-desc">
                <div className="section-title mb-0">
                  <h2>{service?.about?.title}</h2>
                </div>
                <p>{service?.about?.description}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="services-details-desc">
                <div className="section-title mb-0">
                  <h2>{service?.approach?.title}</h2>
                </div>
              </div>

              {service?.approach?.listItems?.length > 0 ? (
                <div className="approach-list">
                  <div className="approach-grid">
                    {service?.approach?.listItems.map(
                      (item: any, index: number) => (
                        <div
                          key={index}
                          className="approach-item"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={index * 100}
                        >
                          <div className="approach-number">{index + 1}</div>
                          <div className="approach-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="col-md-12">
              <div className="services-details-desc pb-5">
                <ServiceSolutions expertise={service?.whyChooseUs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;

export const ServiceSolutions = ({ expertise }: any) => {
  const { title, listItems } = expertise;

  return (
    <div className="">
      <div className="section-title">
        {/* <span className="sub-title marketing-color">{subtitle}</span> */}
        <h2>{title}</h2>
      </div>
      <div className="solutions-grid">
        {listItems.map((solution: any, index: any) => (
          <div
            key={index}
            className="solution-card d-flex gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={solution.aosDelay}
          >
            <div
              className="icon"
              style={{
                backgroundColor: '#e08c8c',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                flexShrink: '0',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <i className="fa-solid fa-check fa"></i>
            </div>
            <div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
