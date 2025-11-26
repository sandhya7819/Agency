'use client'

export default function FlexiTaskSection() {
  return (
    <section className="py-16 pb-24 bg-white" style={{ paddingTop: '80px' }}>
      <div className="container mx-auto px-4">
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6 text-center">
            <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-solitude-blue d-inline-flex items-center justify-center gap-2">
              <i className="bi bi-currency-rupee fs-16 me-5px"></i>
              Pay only for what you need
            </span>
            <h2 className="alt-font text-dark-gray fw-800 text-4xl md:text-5xl lg:text-5xl mt-4 mb-0">
              Try <em className="fw-800"><span className="fw-800">FlexiTask</span></em> Website Maintenance Services
            </h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
          {/* start features box item */}
          <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
            <div className="feature-box border-radius-10px p-15 lg-pt-15 lg-pb-15 lg-ps-10 lg-pe-10 last-paragraph-no-margin">
              <div className="feature-box-icon">
                <i className="fas fa-life-ring icon-double-large text-base-color mb-25px"></i>
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block alt-font text-dark-gray fw-700 fs-19 mb-10px">
                  On-Demand Expert Help
                </span>
                <p style={{ fontSize: '16px', lineHeight: '30px' }}>
                  Get quick fixes without long-term commitments. Whether it's an emergency security patch or a speed
                  boost before your big sale, our task-based plans put the right expert on your job within hours.
                </p>
              </div>
              <div className="feature-box-overlay bg-solitude-blue border-radius-10px"></div>
            </div>
          </div>
          {/* end features box item */}

          {/* start features box item */}
          <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
            <div className="feature-box border-radius-10px box-shadow-quadruple-large-hover bg-solitude-blue p-15 lg-pt-15 lg-pb-15 lg-ps-10 lg-pe-10 last-paragraph-no-margin">
              <div className="feature-box-icon">
                <i className="fas fa-user-plus icon-double-large text-base-color mb-25px"></i>
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block alt-font text-dark-gray fw-700 fs-19 mb-10px">
                  Specialized Skills, Zero Overhead
                </span>
                <p style={{ fontSize: '16px', lineHeight: '30px' }}>
                  No recruiting costs or training – just submit your task and we assign the perfect pro.
                </p>
              </div>
              <span className="position-absolute box-shadow-large top-25px lg-top-15px right-25px lg-right-15px bg-dark-gray border-radius-18px text-white fs-11 fw-700 text-uppercase ps-15px pe-15px lh-26 ls-minus-05px">
                Popular
              </span>
              <div className="feature-box-overlay bg-white border-radius-10px"></div>
            </div>
          </div>
          {/* end features box item */}

          {/* start features box item */}
          <div className="col icon-with-text-style-04 transition-inner-all">
            <div className="feature-box border-radius-10px p-15 lg-pt-15 lg-pb-15 lg-ps-10 lg-pe-10 last-paragraph-no-margin">
              <div className="feature-box-icon">
                <i className="fas fa-running icon-double-large text-base-color mb-25px"></i>
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block alt-font text-dark-gray fw-700 fs-19 mb-10px">
                  No Staffing Headaches
                </span>
                <p style={{ fontSize: '16px', lineHeight: '30px' }}>
                  Skip hiring headaches and infrastructure costs. Submit tasks anytime via our portal for fast, reliable
                  solutions.
                </p>
              </div>
              <div className="feature-box-overlay bg-solitude-blue border-radius-10px"></div>
            </div>
          </div>
          {/* end features box item */}
        </div>

        <div className="row mt-3 sm-mt-50px justify-content-center">
          <div className="col-auto icon-with-text-style-08">
            <div className="feature-box feature-box-left-icon-middle flex items-center">
              <div className="feature-box-icon me-15px">
                <i className="bi bi-clock-history icon-medium text-base-color"></i>
              </div>
              <div className="feature-box-content alt-font text-dark-gray fs-22 fw-600">
                <a href="#get_a_quote" className="text-decoration-line-bottom text-base-color">
                  Start a FlexiTask
                </a>{' '}
                - Fix Critical Website Issues in 24 Hours.{' '}
                <em>
                  <strong>Guaranteed</strong>.
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
