'use client'

import { useRef } from 'react'

const caseStudies = [
  {
    url: 'https://www.promptpersonnel.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/promptpersonnel.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Salesforce lead capturing',
      'end-to-end malware protection',
      'performance optimization',
      'CDN integration',
      'and Bad BOT defense.',
    ],
  },
  {
    url: 'https://www.mylaptopspares.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/mylaptopspares.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Speed optimization',
      'malware protection',
      'caching implementation',
      'eCommerce Sales Optimization',
      'regular core & plugin updates.',
    ],
  },
  {
    url: 'https://www.cubexsoft.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/cubexsoft.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: ['Server cleanup', 'Broken Link fixes', 'IP-level security', 'Regular Optimization'],
  },
  {
    url: 'https://aarviencon.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/aarviencon.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: ['Job seeker form process', 'SEO Optimization', 'Regular Website Care'],
  },
  {
    url: 'https://www.spafurniture.in',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/spafurniture.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Google Search Console issue fixes',
      'Speed Optimization',
      'Regular Updates',
      'Security Firewall Implementation.',
    ],
  },
  {
    url: 'https://caffediartisan.uk',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/caffediartisan.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/gb.png',
    country: 'United Kingdom',
    workSummary: ['Regular Updates', 'AWS Server Management', 'API Implementation', 'Broken Link Fixes'],
  },
  {
    url: 'https://www.hampsteadsmiles.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/hampsteadsmiles.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/us.png',
    country: 'USA',
    workSummary: ['Third-party API Implementation', 'Regular Updates', 'Maintenance Activities'],
  },
  {
    url: 'https://www.comply360.in',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/comply360.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Full-spectrum malware defense',
      'custom landing page development',
      'speed optimization',
      'Regular Website Maintenance ',
    ],
  },
  {
    url: 'https://atacamapro.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/atacamapro.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: ['UI/UX design overhaul', 'fresh landing page development', 'eCommerce Optimization'],
  },
  {
    url: 'https://mymilestones.in',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/mymilestones.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: [
      'Performance tuning',
      'ecommerce sales optimization',
      'email system audit',
      'discount/coupon implementation',
    ],
  },
  {
    url: 'https://fishincompany.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/fishincompany.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/us.png',
    country: 'USA',
    workSummary: ['Core and Pugin Updates', 'Regular Maintenance Activities', 'Security Firewall Implementation', 'Broken Link Fixes'],
  },
  {
    url: 'https://9mediaonline.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/9mediaonline.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/sg.png',
    country: 'Singapore',
    workSummary: ['Lead Form Integration + API', 'Blog Development', 'speed Optimization'],
  },
  {
    url: 'https://aci-logistics.net',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/aci-logistics.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/ae.png',
    country: 'United Arab Emirates',
    workSummary: ['Domain & Hosting Support', 'SSL Certificate Support', 'Broken links Fixes', 'Regular Maintenance'],
  },
  {
    url: 'https://www.taglobalgroup.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/taglobalgroup.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/in.png',
    country: 'India',
    workSummary: ['Speed Optimization', 'Broken Link Fixes', 'Core & Plugin Updates'],
  },
  {
    url: 'https://www.mwtksa.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/mwtksa.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/om.png',
    country: 'Oman',
    workSummary: ['Security Firewall Implementation', 'SSL Certificate Support', 'Broken Link Fixes', 'Regular Updates'],
  },
  {
    url: 'https://www.bizrepservices.com',
    image: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/assets/images/mtnc-casestudy/bizrepservices.png',
    flag: 'https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/flagcdn.com/w40/ae.png',
    country: 'United Arab Emirates',
    workSummary: ['Performance Optimization', 'Broken Link Fixes', 'Regular Updates'],
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-dark-gray">
              Explore Our Website Maintenance Case Studies
            </h2>
          </div>
          <div className="text-lg text-gray-600 max-w-md">
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
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left text-base-color"></i>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right text-base-color"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
