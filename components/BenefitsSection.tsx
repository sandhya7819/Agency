'use client'

import { useState, useEffect, useRef } from 'react'

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState('explore1')
  const leftNavRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)

  const tabs = [
    { id: 'explore1', title: '24×7 Security Hardening & Protection' },
    { id: 'explore2', title: 'Performance That Sticks' },
    { id: 'explore3', title: 'Always Updated. Always Compatible' },
    { id: 'explore4', title: 'Responsive Support & Website Edits' },
    { id: 'explore5', title: 'Backups & Rapid Recovery' },
    { id: 'explore6', title: 'See It Live in Your Client Area' },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  useEffect(() => {
    const syncHeights = () => {
      if (leftNavRef.current && rightContentRef.current) {
        const leftHeight = leftNavRef.current.offsetHeight
        rightContentRef.current.style.height = `${leftHeight}px`
      }
    }

    syncHeights()
    window.addEventListener('resize', syncHeights)
    return () => window.removeEventListener('resize', syncHeights)
  }, [activeTab])

  const tabContents = {
    explore1: {
      title: 'Security Hardening & Protection',
      subtitle: '(24×7)',
      description: 'Keep threats out and recover fast if something slips through. Our website maintenance company deploy layered defenses that combine prevention, detection, and rapid remediation.',
      whatYouGet: [
        { text: '<strong>24×7 firewall protection</strong> tuned for your stack and traffic patterns' },
        { text: '<strong>Hack attempts protection</strong> and rules that block common exploits' },
        { text: '<strong>Advanced vulnerability scanning</strong> to spot weaknesses early' },
        { text: '<strong>Malware scanning & removal</strong> with clean‑up and hardening' },
        { text: '<strong>SSL issue & installation support</strong> to maintain visitor trust' },
      ],
      whyItWorks: [
        'A hardened site with active monitoring reduces risk at the source',
        'Shortens recovery time if issues occur',
      ],
      cta: 'Start Protecting My Website',
  },
    explore2: {
      title: 'Performance That Sticks',
      subtitle: '(Speed & Core Web Vitals)',
      description: "Speed isn't a vanity metric - it affects conversion, SEO, and support load. Our website maintenance services also tune what users actually feel.",
      whatYouGet: [
        { text: '<strong>Site speed optimization</strong> and <strong>database optimization</strong> to trim bloat' },
        { text: 'Smart <strong>caching</strong> and <strong>CDN implementation support</strong> for global delivery' },
        { text: 'Image, font, and script strategies that improve <strong>Core Web Vitals</strong>' },
        { text: '<strong>Website performance monitoring</strong> in your client area' },
      ],
      whyItWorks: [
        'Faster pages reduce abandonment',
        'Makes every campaign more efficient',
      ],
      cta: 'Start My Website Maintenance Services',
  },
    explore3: {
      title: 'Always Updated. Always Compatible.',
      description: "Updates shouldn't be scary. Our website maintenance agency manage them safely so new features and security patches don't break your day.",
      whatYouGet: [
        { text: '<strong>WP core & plugin updates</strong> and <strong>theme updates</strong> in a safe sequence' },
        { text: '<strong>Staging environment support</strong> to test changes before going live' },
        { text: '<strong>Security optimization</strong> and dependency checks around each update' },
        { text: '<strong>Google crawling & indexing error fixes</strong> to protect visibility' },
      ],
      whyItWorks: [
        'A structured, "no-break" update process keeps you current without surprises',
      ],
      cta: 'Start Website Maintenance Services',
  },
    explore4: {
    title: 'Responsive Support & Monthly Website Edits',
      description: 'Real-world changes happen - content, banners, menus, mobile tweaks, or a sudden issue. Our website maintenance company handle them without the runaround.',
      whatYouGet: [
        { text: '<strong>Monthly website edits</strong> for routine changes' },
        { text: '<strong>Monthly standard support</strong> for fixes within scope' },
        { text: '<strong>Downtime/restoration support</strong> using our <strong>off-site backups</strong>' },
        { text: '<strong>Domain & hosting support</strong> and <strong>SSL support</strong> to prevent avoidable outages' },
        { text: '<strong>eCommerce support</strong> for storefront updates and light troubleshooting' },
      ],
      whyItWorks: [
        'Our website maintenance team keeps your site moving forward, not just "maintained"',
      ],
      cta: 'Start Website Maintenance Services',
  },
    explore5: {
    title: 'Backups & Rapid Recovery',
      subtitle: '(Your Safety Net)',
      description: "If something goes wrong, you'll be glad this is in place. Our website maintenance team restores predictable and fast.",
      whatYouGet: [
        { text: '<strong>Off-site backup of full website</strong> (files + database) with retention' },
        { text: '<strong>One-click restore</strong> to recover in minutes, not days' },
        { text: '<strong>Pre-change snapshots</strong> before significant updates' },
        { text: '<strong>Regular integrity checks</strong> so backups work when needed' },
      ],
      whyItWorks: [
        'Reliable backups + disciplined process = minimal downtime and no data-loss panic',
      ],
      cta: 'Start Website Maintenance Services',
  },
    explore6: {
    title: 'See It Live in Your Client Area',
      description: "You don't have to guess how your site is doing. Your client area shows:",
      whatYouGet: [
        { text: '<strong>Website uptime monitoring</strong> and <strong>server monitoring</strong>' },
        { text: '<strong>SSL certificate</strong> and <strong>domain monitoring</strong> to avoid expiries' },
        { text: '<strong>Website performance monitoring</strong> for speed trends' },
        { text: '<strong>Website blacklist monitoring</strong> for reputation health' },
      ],
      whyItWorks: [],
      additionalText: "Plus, each month you'll receive: <strong>Preventive Activities Report</strong>, <strong>WordPress Care Report</strong>, <strong>Uptime Report</strong>, <strong>Performance Report</strong>, <strong>Traffic Report</strong>, and <strong>Ticket Status Report</strong> - easy to share with stakeholders.",
      cta: 'Ready to stabilize and improve your website?',
      ctaLink: 'Use the form',
  },
  }

  const currentContent = tabContents[activeTab as keyof typeof tabContents]

  return (
    <section id="benefits" className="overflow-hidden bg-solitude-blue position-relative explore-section py-16 pb-24">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="mb-3 text-center lg:text-left">
          <h3 className="text-dark-gray font-bold text-3xl md:text-4xl mb-0">
            Never Worry About Website Issues Again with our Website Maintenance Services
          </h3>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our website maintenance company handles the hard parts - security, speed, updates, backups, and support, so you can focus on the work that grows your business. Everything here maps directly to how we deliver: onboarding setups, monthly preventive website maintenance activities, on demand support and edits, 24×7 monitoring, and clear monthly reports.
          </p>
        </div>
      </div>

      {/* Two Column Layout: Left Navigation + Right Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Column - Navigation Menu (Small White Box) */}
          <div className="mb-explore-select lg:col-span-3">
            {/* Mobile Select */}
            <div className="select-item mb-4 lg:hidden">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg text-base font-semibold"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Vertical Navigation - Small White Box */}
            <div ref={leftNavRef} className="hidden lg:block bg-white rounded-lg p-4 shadow-sm">
              <ul className="tabing-wrap">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`tab-nav cursor-pointer py-3 px-4 mb-1 text-lg font-semibold transition-colors rounded ${
                      activeTab === tab.id
                        ? 'active bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => handleTabClick(tab.id)}
                    data-id={tab.id}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Content (Large White Box) */}
          <div ref={rightContentRef} className="explore-content bg-white rounded-lg p-6 lg:p-8 shadow-sm overflow-y-auto lg:col-span-7">
            {Object.keys(tabContents).map((tabId) => {
              const content = tabContents[tabId as keyof typeof tabContents]
              const isActive = activeTab === tabId

              return (
                <div
                  key={tabId}
                  className={`tab-content ${isActive ? 'active' : ''}`}
                  id={tabId}
                  style={{ display: isActive ? 'block' : 'none' }}
            >
                  <h3 className="items-title mb-10px text-dark-gray">
                    {content.title}{' '}
                    {'subtitle' in content && (content as any).subtitle && <em>({(content as any).subtitle})</em>}
                  </h3>

                  <div className="explore-content-inner">
                    <p className="mb-1 pb-10px text-gray-700 leading-relaxed">{content.description}</p>

                    {content.whatYouGet && content.whatYouGet.length > 0 && (
                      <>
                        <p className="mb-1 pb-0 font-bold text-dark-gray">What you get:</p>
                        <ul className="lising-point mb-3">
                          {content.whatYouGet.map((item, idx) => (
                            <li key={idx} className="text-lg text-gray-700 leading-relaxed mb-1" dangerouslySetInnerHTML={{ __html: item.text }} />
                          ))}
                        </ul>
                      </>
                    )}

                    {content.whyItWorks && content.whyItWorks.length > 0 && (
                      <>
                        <p className="mb-1 pb-0 font-bold text-dark-gray">Why it works:</p>
                        <ul className="lising-point mb-3">
                          {content.whyItWorks.map((item, idx) => (
                            <li key={idx} className="text-lg text-gray-700 leading-relaxed mb-1">{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {'additionalText' in content && (content as any).additionalText && (
                      <p className="mb-1 pb-2 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: (content as any).additionalText }} />
                    )}

                    {content.cta && (
                      <p className="mb-0 pb-0" style={{ color: '#2563eb' }}>
                        {'ctaLink' in content && (content as any).ctaLink ? (
                          <em>
                            <strong>{content.cta}</strong>{' '}
                            <a href="#get_a_quote" className="text-decoration-line-bottom" style={{ color: '#2563eb' }}>
                              {(content as any).ctaLink}
                            </a>{' '}
                            above to choose <strong>Monthly Website Maintenance Services</strong> or{' '}
                            <strong>One-Time Fix</strong>, and we'll take it from there.
                          </em>
                        ) : (
                          <>
                            <a href="#get_a_quote" className="text-decoration-line-bottom" style={{ color: '#2563eb' }}>
                              {content.cta}
                            </a>{' '}
                            <span style={{ color: '#2563eb' }}>
                              {tabId === 'explore1' && 'with Website Maintenance Services'}
                              {tabId === 'explore2' && 'to tune speed and keep it that way'}
                              {tabId === 'explore3' && 'and stop chasing updates'}
                              {tabId === 'explore4' && 'for ongoing care'}
                              {tabId === 'explore5' && 'and sleep easier'}
                            </span>
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="row mt-3">
          <div className="col-auto icon-with-text-style-08">
            <div className="feature-box feature-box-left-icon-middle flex items-center">
              <div className="feature-box-icon me-4">
                <i className="bi bi-patch-check icon-medium text-3xl" style={{ color: '#2563eb' }}></i>
              </div>
              <div className="feature-box-content alt-font text-dark-gray text-xl font-semibold">
                Join 1,000+ Businesses – Secure Your Website with{' '}
                <a href="#get_a_quote" className="text-decoration-line-bottom" style={{ color: '#2563eb' }}>
                  Expert Website Maintenance Services
                </a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

