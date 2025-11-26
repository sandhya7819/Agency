'use client'

export default function CTASection() {
  return (
    <section className="my_cta_section" style={{ paddingTop: '100px', paddingBottom: '100px', marginBottom: '0' }}>
      <div className="container mx-auto px-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="row justify-content-center" style={{ width: '100%', margin: '0 auto' }}>
          <div className="col-12 col-xl-8 text-center" style={{ margin: '0 auto', maxWidth: '100%' }}>
            <span className="alt-font d-inline-block mt-15px fs-17 fw-500 text-gradient-light-gray-white mb-4 block">
              Every Unmaintained Website is a Business Risk
            </span>
            <h4 className="text-white alt-font fw-600 mb-30px text-3xl md:text-4xl lg:text-5xl leading-tight">
              Get a free 15-minute consultation with our Website Maintenance Experts.
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6" style={{ gap: '20px', width: '100%', justifyContent: 'center' }}>
              <a
                href="#get_a_quote"
                className="btn btn-large btn-gradient-purple-pink btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left"
                style={{ marginRight: '25px', marginLeft: '0' }}
              >
                <span className="btn-text">START MY FREE AUDIT</span>
                <span className="btn-icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
              <a
                href="#get_a_quote"
                className="btn btn-link btn-hover-animation-switch btn-large text-dark-gray btn-icon-left align-middle p-0 xs-mt-20px xs-mb-20px text-white"
                style={{ marginLeft: '0', marginRight: '0' }}
              >
                <span className="btn-text">GET AN INSTANT QUOTE</span>
                <span className="btn-icon">
                  <i className="bi bi-envelope"></i>
                </span>
              </a>
            </div>
            <p className="mb-0">
              <span className="alt-font d-inline-block mt-15px fs-17 fw-500 text-gradient-light-gray-white text-decoration-line-bottom-medium border-color-base-color-transparent">
                No obligation, just actionable insights.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

