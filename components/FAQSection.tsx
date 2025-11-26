'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 'accordion-style-02-0',
    question: 'How fast can you start once I submit the form?',
    answer:
      "Typically the same business day after we receive secure access. For urgent issues (broken site, malware, checkout failure), choose One Time Fix in the form and we'll prioritize triage right away.",
    isOpen: true,
  },
  {
    id: 'accordion-style-02-1',
    question: 'Do I have to change my hosting or domain provider?',
    answer:
      "No. We work with your existing host/domain. If we see clear reliability or speed gains from a different setup, we'll recommend options - migration is optional and done only with your approval.",
    isOpen: false,
  },
  {
    id: 'accordion-style-02-2',
    question: 'What access do you need and how do you keep it secure?',
    answer:
      'Usually CMS admin, hosting panel, and CDN/SSL (if used). We follow least privilege access, use secure credential sharing, keep change logs, and can sign an NDA on request.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-3',
    question: "What's the difference between One Time Fix and Monthly Maintenance?",
    answer:
      'One Time Fix addresses a specific issue (e.g., malware, SSL, forms, speed). Monthly Maintenance includes preventive activities, standard support, monthly edits, 24×7 monitoring, and reporting to keep your site stable long term.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-4',
    question: 'Will updates break my site?',
    answer:
      'We update core, plugins, and themes in a safe sequence, use staging when needed, take pre-change backups, and roll back instantly if something conflicts. You get a clear change log.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-5',
    question: 'What\'s included in "monthly standard support" and "monthly website edits"?',
    answer:
      'Routine content changes (copy/images), minor layout tweaks, fixing broken links/forms, small UX cleanups, and troubleshooting within scope. Larger redesigns, custom development, and third party integrations are quoted separately.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-6',
    question: 'Do you support e-commerce sites?',
    answer:
      'Yes. We handle WooCommerce/Shopify care, order flow checks, speed/security tuning, and routine fixes. For major customizations or app builds, we\'ll propose a separate work order.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-7',
    question: 'How do I request changes or report an issue?',
    answer:
      'Use your Client Area to open a ticket - everything is tracked there. You can also reply to report emails; it auto creates/updates tickets.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-8',
    question: 'What monitoring do I get access to?',
    answer:
      'Your Client Area shows live uptime, performance trends, SSL/domain status, server health, and blacklist checks - plus ticket history and monthly reports.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-9',
    question: 'What do the monthly reports include?',
    answer:
      'Preventive Activities, WordPress Care (updates performed), Uptime, Performance (speed/Core Web Vitals trends), Traffic highlights, and Ticket Status - clear, non-technical summaries you can share internally.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-10',
    question: 'Do you lock me into a long contract?',
    answer:
      'No lock-in. Maintenance is month-to-month. You can pause or cancel with notice; we\'ll ensure a clean handover.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-11',
    question: 'Can you work alongside our in-house developer or agency?',
    answer:
      'Absolutely. We coordinate updates, share change logs, and use staging to avoid collisions. Think of us as your reliability/safety layer.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-12',
    question: 'What if the problem returns after a One Time Fix?',
    answer:
      'We\'ll re-check the root cause and advise long-term prevention. If recurring issues stem from outdated components or hosting limits, we\'ll outline preventive maintenance steps.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-13',
    question: 'Do you support non-WordPress sites?',
    answer:
      'Yes - WordPress is most common, but we also support other CMSs and custom builds. Share your tech stack in the form and we\'ll confirm fit during onboarding.',
    isOpen: false,
  },
  {
    id: 'accordion-style-02-14',
    question: 'How do we get started?',
    answer:
      'Use the form at the top: choose Monthly Website Maintenance Services for ongoing care or One Time Fix for urgent help. We\'ll review access, confirm scope, and begin.',
    isOpen: false,
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string>('accordion-style-02-0')

  const toggleItem = (id: string) => {
    setOpenItem((prev) => {
      // If clicking the same item, close it. Otherwise, open the new one
      if (prev === id) {
        return ''
      } else {
        return id
      }
    })
  }

  return (
    <section className="pt-0 pb-24 faq-section-wrapper" style={{ backgroundColor: '#fafbfc', paddingTop: '60px', paddingBottom: '96px' }}>
      <div className="container mx-auto px-4 faq-container">
        <div className="row align-items-center md-mb-15px">
          <div className="col-12">
            <div className="bg-gradient-quartz-white p-9 pb-4 md-p-7 border-radius-6px overflow-hidden position-relative faq-box">
              {/* FAQ Icon */}
              <div className="position-absolute right-70px md-right-20px top-minus-20px w-250px sm-w-180px xs-w-150px opacity-1" style={{ opacity: 0.3 }}>
                <img
                  alt="FAQ - Website Maintenance & One Time Fix"
                  src="https://cdn-idinh.nitrocdn.com/GkhePegAsmwurGKLRvHrNfXpwduBSrnm/assets/images/optimized/rev-90e4b75/www.aaravinfotech.com/images/demo-corporate-features-faq-icon.png"
                  className="w-full h-auto"
                  decoding="async"
                  style={{ opacity: 0.3 }}
                />
              </div>

              {/* Badge */}
              <div className="bg-base-color d-inline-block mb-15px fw-600 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-12">
                Frequently asked questions
              </div>

              {/* Title */}
              <h3 className="fw-700 text-dark-gray xs-mb-10px ls-minus-1px text-3xl md:text-4xl lg:text-4xl">
                FAQ - Website Maintenance & One Time Fix
              </h3>

              {/* Accordion */}
              <div className="accordion accordion-style-02" id="accordion-style-02">
                {faqs.map((faq) => {
                  const isOpen = openItem === faq.id
                  return (
                    <div
                      key={faq.id}
                      className={`accordion-item ${isOpen ? 'active-accordion' : ''}`}
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <div className="accordion-header border-bottom border-color-transparent-dark-very-light">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            toggleItem(faq.id)
                          }}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${faq.id}`}
                          aria-expanded={isOpen}
                          data-bs-parent="#accordion-style-02"
                        >
                          <div className="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                            <i className={`feather ${isOpen ? 'icon-feather-minus' : 'icon-feather-plus'} fs-20`} style={{ color: '#2563eb' }}>
                              {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              )}
                            </i>
                            <span className="fw-600 fs-18" itemProp="name">
                              {faq.question}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        id={faq.id}
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        data-bs-parent="#accordion-style-02"
                        itemProp="acceptedAnswer"
                        itemScope
                        itemType="https://schema.org/Answer"
                      >
                        <div className="accordion-body last-paragraph-no-margin border-bottom border-color-transparent-dark-very-light">
                          <p className="w-90 sm-w-95 xs-w-100" itemProp="text">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="row mt-3 mb-4 sm-mt-50px justify-content-center">
          <div className="col-auto icon-with-text-style-08">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon me-15px">
                <i className="bi bi-patch-question icon-medium text-base-color"></i>
              </div>
              <div className="feature-box-content alt-font text-dark-gray fs-22 fw-600">
                Anything unclear?{' '}
                <a href="#get_a_quote" className="text-decoration-line-bottom text-base-color">
                  Talk to a Website Maintenance Expert now.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
