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
  const logoUrl = '/images/logo-11.png'
  const iconUrl = '/images/sv.png'
  
  return (
    <footer
      className="background-position-center-top aarav-footer pb-30px"
      style={{
        marginTop: '0',
        paddingTop: '180px',
        backgroundColor: '#000000',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Overlap Section - Google Rating */}
        <div
          className="row justify-content-center overlap-section mb-4 ms-0 me-0"
          style={{ marginTop: '-160px' }}
        >
          <div className="col-auto text-center pt-30px pb-30px ps-7 pe-7 md-ps-4 md-pe-4 sm-mb-15px border border-radius-100px sm-border-radius-6px sm-box-shadow" style={{ backgroundColor: '#1a1a1a', borderColor: '#333333' }}>
            <div itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content="Website Management Service Provider - Aarav Infotech" />
              <div
                className="trplt-mnwrapr alt-font"
                style={{ color: '#ffffff' }}
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
                  style={{ color: '#fbbf24', textDecoration: 'underline' }}
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
          <div className="col-lg-12">
            {/* Logo and Icon */}
            <div className="flex flex-col items-center mb-6 gap-4">
              <a href="/" className="footer-logo">
                <img
                  data-at2x="images/logo-black@2x.png"
                  alt="Spettro Vision Logo"
                  src={logoUrl}
                  className="default-logo footer-logo-img"
                  decoding="async"
                  style={{ maxHeight: '80px', width: 'auto', height: 'auto' }}
                />
              </a>
              <img
                alt="Spettro Vision Icon"
                src={iconUrl}
                className="footer-icon-img"
                decoding="async"
                style={{ maxHeight: '60px', width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-4">
              <a href="#contact" className="footer-link text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Contact Us
              </a>
              <span className="hidden md:inline" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <a href="#career" className="footer-link text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Career
              </a>
              <span className="hidden md:inline" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <a href="#policies" className="footer-link text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Policies
              </a>
              <span className="hidden md:inline" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <a href="#sitemap" className="footer-link text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Sitemap
              </a>
            </div>
            <p className="fs-15 mb-0 text-center" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              © 2026 Spettro Vision Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
