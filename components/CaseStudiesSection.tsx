'use client'

import { useRef } from 'react'

const caseStudies = [
  {
    url: 'https://acaad.in',
    image: '/images/Acaad.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Academic portal optimization',
      'Student form integration',
      'Performance & speed tuning',
      'Regular security updates',
    ],
  },
  {
    url: 'https://bimbra.in',
    image: '/images/Bimbra.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Business website maintenance',
      'Core & plugin updates',
      'Security firewall implementation',
      'Database optimization',
    ],
  },
  {
    url: 'https://daassummit.com',
    image: '/images/daassummit.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Event registration system',
      'Landing page optimization',
      'Email integration setup',
      'Performance monitoring',
    ],
  },
  {
    url: 'https://drnehabatra.com',
    image: '/images/drnehabatra.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Medical website maintenance',
      'Appointment booking system',
      'HIPAA compliance security',
      'Regular backups & updates',
    ],
  },
  {
    url: 'https://goodfoodretail.com',
    image: '/images/goodfoodretail.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'eCommerce cart optimization',
      'Payment gateway integration',
      'Product catalog management',
      'Order processing system',
    ],
  },
  {
    url: 'https://grainmart.in',
    image: '/images/grainmart.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Marketplace platform optimization',
      'Inventory management system',
      'Vendor dashboard updates',
      'Speed & performance tuning',
    ],
  },
  {
    url: 'https://growfastsec.com',
    image: '/images/growfastsec.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Advanced security implementation',
      'Malware scanning & removal',
      'Firewall configuration',
      '24/7 security monitoring',
    ],
  },
  {
    url: 'https://jogindra.com',
    image: '/images/jogindra.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Corporate website maintenance',
      'SSL certificate management',
      'Broken link fixes',
      'Regular content updates',
    ],
  },
  {
    url: 'https://kiaconsultant.com',
    image: '/images/kiaconsultant.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Consulting firm website optimization',
      'Lead capture form integration',
      'Client portal maintenance',
      'Performance & SEO tuning',
    ],
  },
  {
    url: 'https://klytoslegal.com',
    image: '/images/klytoslegal.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Legal firm website maintenance',
      'Client consultation forms',
      'Document security implementation',
      'Regular compliance updates',
    ],
  },
  {
    url: 'https://lesto.ca',
    image: '/images/Lesto.ca.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/ca.png',
    country: 'Canada',
    workSummary: [
      'International website optimization',
      'Multi-language support',
      'CDN implementation',
      'Cross-border performance tuning',
    ],
  },
  {
    url: 'https://mkg.sjos.in',
    image: '/images/mkg.sjos.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Business portal maintenance',
      'Database optimization',
      'Security updates',
      'Regular performance monitoring',
    ],
  },
  {
    url: 'https://mkgplasticate.in',
    image: '/images/mkgplasticate.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Industrial website optimization',
      'Product catalog management',
      'Inquiry form integration',
      'Speed & security updates',
    ],
  },
  {
    url: 'https://plasticsurgerydelhi.in',
    image: '/images/plasticsurgerydelhi.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Medical clinic website maintenance',
      'Patient appointment system',
      'Before/after gallery updates',
      'HIPAA compliant security',
    ],
  },
  {
    url: 'https://pratimatic.com',
    image: '/images/pratimatic.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Tech platform optimization',
      'API integration & maintenance',
      'Performance monitoring',
      'Regular security patches',
    ],
  },
  {
    url: 'https://prestairsystem.com',
    image: '/images/prestairsystem.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Manufacturing website maintenance',
      'Product showcase optimization',
      'Quote request system',
      'Image gallery performance',
    ],
  },
  {
    url: 'https://shyamgarments.co.in',
    image: '/images/shyamgarments.co.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Fashion eCommerce optimization',
      'Product catalog management',
      'Shopping cart improvements',
      'Payment gateway integration',
    ],
  },
  {
    url: 'https://skco.in',
    image: '/images/Skco.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Corporate website maintenance',
      'Business portal updates',
      'Security & performance tuning',
      'Regular content management',
    ],
  },
  {
    url: 'https://tenderyearsclinic.org',
    image: '/images/tenderyearsclinic.org.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Pediatric clinic website maintenance',
      'Patient portal optimization',
      'Appointment booking system',
      'Medical form security',
    ],
  },
  {
    url: 'https://thecarmall.co.in',
    image: '/images/Thecarmall.co.in.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Automotive marketplace optimization',
      'Vehicle listing management',
      'Search & filter improvements',
      'Lead generation system',
    ],
  },
  {
    url: 'https://weddingsbyknottydays.com',
    image: '/images/weddingsbyknottydays.com.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Wedding services website maintenance',
      'Event gallery optimization',
      'Booking & inquiry forms',
      'Portfolio showcase updates',
    ],
  },
]

export default function CaseStudiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 casestudies-header">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-dark-gray">
            Explore Our Website Maintenance Case Studies
          </h2>
          <div className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Success Stories from Website Owners Worldwide. Real Data, Real Transformations.
              </div>
            </div>

        {/* Horizontal Scrollable Case Studies */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((study, index) => (
            <div
                    key={index}
              className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Website Screenshot */}
              <div className="relative w-full h-48 bg-gray-100">
                <img
                  src={study.image}
                  alt={study.url}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* URL with Flag */}
                <div className="flex items-center gap-2 mb-3">
                  <img src={study.flag} alt={study.country} className="w-5 h-4 object-cover rounded" />
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-dark-gray hover:text-base-color transition"
                  >
                    {study.url.replace('https://', '').replace('www.', '').toUpperCase()}
                    <i className="fas fa-arrow-right ml-2 text-xs"></i>
                  </a>
                </div>

                {/* Work Summary */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Work Summary:</p>
                  {study.workSummary.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-base-color font-bold text-xs mt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span>{item}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Navigation Arrows - Below */}
        <div className="flex justify-center items-center mt-8 gap-4 casestudies-nav-arrows">
          <button
            onClick={scrollLeft}
            className="casestudy-nav-btn"
            aria-label="Previous case study"
          >
            <i className="fas fa-chevron-left text-base-color"></i>
          </button>
          <button
            onClick={scrollRight}
            className="casestudy-nav-btn"
            aria-label="Next case study"
          >
            <i className="fas fa-chevron-right text-base-color"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
