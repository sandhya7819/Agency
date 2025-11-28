'use client'

const trustLogos = [
  {
    alt: 'Authorized Google Workspace Partner in India',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/google-workspace-partner-in-india.png',
  },
  {
    alt: 'cloudflare',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/cloudflare.png',
  },
  {
    alt: 'AWS',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/aws.png',
  },
  {
    alt: 'SEM Rush Agency Partner',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/semrush-agency-partner.png',
  },
  {
    alt: 'Clutch Reviews',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/clutch-reviews-new.png',
  },
  {
    alt: 'Google Reviews',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/google-reviews.png',
  },
  {
    alt: 'CIO Review',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/cio-review.png',
  },
  {
    alt: 'Tech Behemoths',
    src: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/trust-logos/tech-behemoths.png',
  },
]

export default function Footer() {
  return (
    <footer
      className="bg-very-light-gray background-position-center-top aarav-footer pb-30px"
      style={{
        backgroundImage:
          'url(https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/demo-marketing-footer-dot.svg)',
        marginTop: '0',
        paddingTop: '180px',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Overlap Section - Google Rating */}
        <div
          className="row justify-content-center overlap-section mb-4 ms-0 me-0"
          style={{ marginTop: '-160px' }}
        >
          <div className="col-auto text-center bg-very-light-gray pt-30px pb-30px ps-7 pe-7 md-ps-4 md-pe-4 sm-mb-15px border border-radius-100px sm-border-radius-6px sm-box-shadow">
            <div itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content="Website Management Service Provider - Aarav Infotech" />
              <div
                className="trplt-mnwrapr text-dark-gray alt-font"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <span className="trplt-logo">
                  <img
                    alt="Google Review Ratings | Aarav Infotech India"
                    title="Google Review Ratings | Aarav Infotech India"
                    src="https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/google-reviews-logo.png"
                    className="inline-block align-middle"
                    decoding="async"
                    style={{ height: '20px', width: 'auto', marginRight: '5px' }}
                  />
                </span>
                rated us <strong>Excellent</strong>{' '}
                <span className="trplt-stars">
                  <img
                    alt="Google Review Star Ratings | Aarav Infotech India"
                    title="Google Review Star Ratings | Aarav Infotech India"
                    src="https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/source/rev-90e4b75/www.aaravinfotech.com/assets/images/five-star-rating.svg"
                    className="inline-block align-middle"
                    decoding="async"
                    style={{ height: '18px', width: 'auto', marginLeft: '5px', marginRight: '5px' }}
                  />
                </span>
                with the{' '}
                <a
                  className="trplt-ulin"
                  href="https://bit.ly/33hzurT"
                  target="_blank"
                  rel="nofollow"
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  GoogleRate <strong itemProp="ratingValue">4.6</strong>
                </a>{' '}
                out of <span itemProp="bestRating">5</span> based on{' '}
                <span itemProp="ratingCount">114</span> customer reviews.
              </div>
            </div>
          </div>
        </div>

        {/* Trust Logos Grid */}
        <div className="row row-cols-auto justify-content-center trust-logo-grid g-3 mb-20px">
          {trustLogos.map((logo, index) => (
            <div key={index} className="col text-center mb-20px">
              <div className="client-box">
                <img alt={logo.alt} src={logo.src} className="trust-logo-img" decoding="async" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-dark text-center text-sm-start mx-auto px-4">
        <div className="row align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px pb-30px g-0">
          <div className="col-lg-12 text-center md-mb-10px">
            <p className="fs-15 mb-0" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              © 2025. Aarav Infotech India Pvt. Ltd., All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
