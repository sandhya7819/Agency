'use client'

export default function ComparisonSection() {
  const tools = [
    {
      name: 'SiteLock',
      description: 'Site Security and Firewall',
      price: '$14.99',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/sitelock.png',
    },
    {
      name: 'CodeGuard',
      description: 'Backup & Restoration Services',
      price: '$5',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/codeguard.png',
    },
    {
      name: 'NitroPack',
      description: 'CDN, PageSpeed, and Web Core Vital',
      price: '$21',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/nitropack.png',
    },
    {
      name: 'Pingdom',
      description: 'Uptime Monitoring',
      price: '$10',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/pingdom.png',
    },
    {
      name: 'Site24x7',
      description: 'Server, Blacklist, SSL Monitoring',
      price: '$39',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/site24x7.png',
    },
    {
      name: 'GTMatrix',
      description: 'Performance Monitoring',
      price: '$5',
      period: '/mo',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/gtmatrix.png',
    },
    {
      name: ' On-Demand SEO Issue Fixes',
      description: 'Indexing Error, Meta Update, etc.',
      price: '$40',
      period: '/hour',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/seo-fixes.png',
    },
    {
      name: 'Monthly Preventive Activity',
      description: 'Core, Plugins & CMS Update',
      price: '$40',
      period: '/hour',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/monthly-activity.png',
    },
    {
      name: 'Bug Fixes & Website Support',
      description: 'For when things go wrong ',
      price: '$40',
      period: '/hour',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/website-support.png',
    },
    {
      name: 'Your Sanity',
      description: 'and your clients and team',
      price: 'Priceless',
      period: '',
      image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/pricing/compare/sanity.png',
      isLast: true,
    },
  ]

  const premiumFeatures = [
    '24/7 Website Monitoring & Uptime Checks',
    'Advanced Security & Firewall Protection',
    'Regular Website Backups & Restoration Support',
    'Performance & Speed Optimization',
    'Edge Content Delivery with Global CDN',
    'CMS, Plugin & Theme Updates',
    'Bug Fixes & Technical Support',
    'Content Updates & Image Optimization',
    'SEO Fixes on Request',
    'E-commerce Support & Order Processing Checks',
    'Hosting & Domain Support',
    'Montly Preventive Activities',
  ]

  const logoUrl = 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/aaravinfotechreverse.png'

  return (
    <section className="content-section section--plan-savings-compare py-16 pb-24 bg-white" id="plan-savings">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-xl-10 col-lg-10 col-md-10 text-center mx-auto">
            <h3 className="text-dark-gray fw-700 ls-minus-1px mb-1 text-3xl md:text-4xl lg:text-4xl text-center" style={{ maxWidth: '100%', margin: '0 auto' }}>
              One Solution vs 10+ Tools: Save 86% on Website Care!
            </h3>
            <div className="text-center mt-4">
              <span className="ps-25px pe-25px mb-20px text-uppercase text-base-color fs-14 lh-42px fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-block">
                Increase the Performance of your website by Up To 80% (Saving{' '}
                <span className="total_yearly_saving_cost">₹1,96,396</span> Per Year)
              </span>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="row mt-8 relative">
          {/* Left Side - Aarav Infotech Plan (Order First on Desktop) */}
          <div className="col-lg-6 col-12 order-lg-first px-xl-3 px-lg-2">
            <div className="fc-best-plan-compare text-white ml-xl-5 ml-lg-3" style={{ backgroundColor: '#013756' }}>
              <div className="mb-4">
                <img
                  alt="Aarav Infotech Logo"
                  width="130"
                  src={logoUrl}
                  className="lazyloaded mb-3"
                  decoding="async"
                  style={{ maxWidth: '130px', height: 'auto' }}
                />
                <p className="text-white text-sm leading-relaxed">
                  Most Recommended, completely hassle-free Website Maintenance Service plan with all the premium
                  components bundled.
                </p>
              </div>
              <div>
                <h3 className="text-white mt-4 text-2xl md:text-3xl font-bold mb-4">
                  Premium Features <em className="text-lg">(Managed Care Plan)</em>
                </h3>
                <ul className="list list-unstyled mb-4 space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <i className="fa fa-check text-green-400 mt-0.5 flex-shrink-0 text-sm"></i>
                      <span className="text-white text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing - Mobile */}
              <p className="text-white d-lg-none mb-4">
                <strong className="text-sm">
                  Starting cost:{' '}
                  <span className="text-yellow">
                    <ins className="inr_starting_price">₹2548</ins>
                  </span>{' '}
                  per month
                </strong>
                <br />
                <span className="text-xs">No Hidden Fees</span>
              </p>

              {/* Pricing - Desktop */}
              <div className="btn-holder">
                <p className="text-white d-lg-block d-none mb-4">
                  <strong className="text-lg">
                    Starting cost:{' '}
                    <span className="text-yellow">
                      <ins className="inr_starting_price">₹2548</ins>
                    </span>{' '}
                    per month
                  </strong>
                  <br />
                  <span className="text-sm">No Hidden Fees</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="d-inline-block mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href="#get_a_quote"
                  className="btn btn-medium btn-white btn-box-shadow fw-600 me-35px sm-me-25px btn-round-edge text-center"
                >
                  Get Your Plan
                </a>
                <a
                  href="#get_a_quote"
                  className="btn btn-link btn-extra-large thin text-dark-gray xs-mt-15px xs-mb-15px text-white text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* VS Circle */}
          <div className="vs-circle-wrapper">
            <div className="vs-circle">
              <span className="vs-text">VS</span>
            </div>
          </div>

          {/* Right Side - Tools List (Order Last on Desktop) */}
          <div className="col-lg-6 col-12 order-lg-last px-xl-5 px-lg-4">
            <div className="compare-wrp pr-lg-4">
              {tools.map((tool, index) => (
                <div key={index} className={tool.isLast ? 'mb-0' : 'mb-2'}>
                  <div className="card-box card--compare">
                    <div className="card__image">
                      <img
                        alt={tool.name}
                        src={tool.image}
                        className="lazyloaded"
                        decoding="async"
                        style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="card__description">
                      <h6 className="text-dark-gray font-semibold text-base mb-0.5">{tool.name}</h6>
                      <p className="text-gray-600 text-xs">{tool.description}</p>
                    </div>
                    <div className="card__pricing ml-lg-auto">
                      <strong className="text-dark-gray font-bold text-sm">
                        {tool.price}
                        {tool.period && <span className="text-xs">{tool.period}</span>}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}

              {/* Total Cost - Mobile */}
              <div className="text-right compare-total d-lg-none mt-3">
                <p className="text-xs">
                  <strong className="text-base">
                    Total Cost: <span className="total_compare_cost">₹18,489</span>/mo*
                  </strong>
                </p>
              </div>

              {/* Total Cost - Desktop */}
              <div className="mt-2 text-right compare-total w-100">
                <input type="hidden" name="total_compare_cost_usd" id="total_compare_cost_usd" value="214.99" />
                <p className="d-md-block d-none text-lg-right text-center text-xs">
                  <strong className="text-base">
                    Total Cost: <span className="total_compare_cost">₹18,489</span>/mo*
                  </strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  *Plus your precious time and jumping between tools and apps <br /> **Hidden fees...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
