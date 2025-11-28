'use client'

import { useState, useEffect, useRef } from 'react'

export default function HowItWorksSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)

const steps = [
  {
      id: 'process1',
      number: '1',
    title: 'Onboarding & Account Setup',
      subtitle: 'Your Foundation for Worry-Free Care',
      description: `Once access is granted, we set up the essentials that protect your site and make future work safe and predictable. We configure <strong>off-site backups of your full website</strong> (files + database) with retention and versioning, so you always have a clean restore point. We enable <strong>staging environment support</strong> to test significant changes without touching live traffic. For security, we activate <strong>malware scanning & removal</strong> and <strong>advanced vulnerability scanning</strong> to spot weak points early, and we add <strong>24×7 firewall protection</strong> to block malicious traffic. We also connect your domain, hosting, and SSL into our workflow - covering <strong>domain & hosting support, SSL issue & installation support,</strong> and <strong>CDN implementation support</strong> if you need faster global delivery. If your site is transactional, eCommerce support is included from the start, so critical flows like cart, checkout, and orders stay healthy.`,
  },
  {
      id: 'process2',
      number: '2',
    title: 'Monthly Preventive Activities',
      subtitle: 'The Work You Never Have to Chase',
      description: `Every month, we perform a focused set of maintenance tasks that keep your site secure, fast, and search friendly - without you having to open a ticket. We run <strong>WP core & plugin updates</strong> in a safe, sequenced way (with rollback readiness), apply <strong>theme updates</strong>, and conduct <strong>security optimization</strong> to reduce attack surface. For performance, we deliver <strong>site speed optimization</strong> and <strong>database optimization</strong>, trimming bloat that slows pages down. We <strong>scan and fix broken links</strong>, tune <strong>Google crawling and indexing</strong> to remove errors that hurt visibility, and complete a <strong>website functionality check</strong> across key templates. For lead and revenue assurance, we perform a <strong>forms successful submit check</strong> and an <strong>order process check</strong> so critical conversions aren't silently failing. Finally, <strong>we clean logs & spam comments</strong>, keeping your admin tidy and your server lean.`,
  },
  {
      id: 'process3',
      number: '3',
    title: 'Support & Updates on Demand',
      subtitle: 'Your To Do List, Done',
      description: `Beyond preventive work, you get <strong>monthly website edits</strong> and <strong>monthly standard support with our website maintenance services</strong> - practical help for the real‑world changes your team needs: updating content and media, fixing layout or mobile issues, refreshing banners, adjusting menus, or implementing minor UX tweaks that improve conversions. If something goes wrong, our <strong>downtime/restoration support</strong> gets you back quickly using the <strong>off‑site backups</strong> we maintain. For infrastructure questions, our <strong>domain & hosting support</strong> keeps DNS, renewals, and plan choices under control, while <strong>SSL support</strong> prevents trust‑eroding warnings. If your audience is distributed, <strong>CDN implementation support</strong> helps pages load faster worldwide. And because e‑commerce has unique moving parts, our <strong>eCommerce support</strong> covers storefront updates, compatibility checks, and lightweight troubleshooting that keeps orders flowing.`,
  },
  {
      id: 'process4',
      number: '4',
    title: '24×7 Security Protection',
      subtitle: 'Silent Shield Around Your Brand',
      description: `Security isn't a one‑time project; it's an always‑on posture. Our <strong>24×7 firewall protection</strong> filters malicious requests before they reach your application, while <strong>hack attempts protection</strong> and proactive rulesets reduce the risk of common exploits. Combined with <strong>malware scanning & removal</strong> and <strong>advanced vulnerability scanning</strong>, your site benefits from layered defense—detect, block, and clean—so you can operate confidently even during traffic spikes, promotions, or seasonal peaks.`,
  },
  {
      id: 'process5',
      number: '5',
    title: 'Live Monitoring in Your Client Area',
      subtitle: 'See Health in Real Time',
      description: `You don't have to guess how your website is doing. Your client area shows live status via the <strong>24×7 monitoring dashboard</strong>:`,
      monitoringList: [
        '<strong>Website uptime monitoring</strong> so you know your site is reachable',
        '<strong>Website performance monitoring</strong> for page speed and experience trends',
        '<strong>SSL certificate monitoring</strong> to avoid sudden expiries and browser warnings',
        '<strong>Domain monitoring</strong> for expiry and DNS health',
        '<strong>Server monitoring</strong> for resource issues before they cause slowdowns',
        '<strong>Website blacklist monitoring</strong> to catch and resolve reputation problems early',
      ],
      additionalText: `You can track tickets, watch improvement graphs, and keep internal teams in the loop without chasing updates.`,
  },
  {
      id: 'process6',
      number: '6',
    title: 'Monthly Website Maintenance Reports',
      subtitle: 'Proof of Work, Proof of Value',
      description: `Every month you receive reports that turn maintenance into measurable progress. The <strong>Preventive Activities Report</strong> shows exactly what was updated and optimized; the <strong>WordPress Care Report</strong> details core, theme, and plugin changes; the <strong>Website Uptime Report</strong> demonstrates reliability; the <strong>Website Performance Report</strong> summarizes speed, Core Web Vitals, and key wins; the <strong>Website Traffic Report</strong> highlights top pages and trends; and the <strong>Ticket Status Report</strong> rolls up all support activity. These reports make it easy to brief management, align marketing and IT, and plan smart next steps—without technical translation.`,
    },
    {
      id: 'process7',
      number: '7',
      title: 'Why Businesses Choose Our Website Maintenance Company',
      subtitle: '',
      description: `Most website problems start quietly - an outdated plugin, a misconfigured cache, a broken form after a theme change, an SSL lapse, or a slow database. Our program reduces these risks at the source, monitors continuously, and gives you responsive support when priorities shift. You get the convenience of having one accountable team for maintenance, fixes, and advice, with <strong>staging safety</strong>, <strong>off‑site backups</strong>, <strong>real‑time monitoring</strong>, and <strong>clear monthly reporting</strong> - so your website stays an asset, not a liability.`,
      isLast: true,
  },
]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const sectionTop = scrollY + rect.top
      const sectionHeight = rect.height

      // Calculate when section enters viewport (start animation when section is 30% visible)
      const sectionStart = sectionTop - windowHeight * 0.7
      const sectionEnd = sectionTop + sectionHeight - windowHeight * 0.3
      const scrollableDistance = sectionEnd - sectionStart

      if (scrollY >= sectionStart && scrollY <= sectionEnd) {
        // Calculate progress (0 to 1)
        const progress = Math.min(
          1,
          Math.max(0, (scrollY - sectionStart) / scrollableDistance)
        )
        setScrollProgress(progress)

        // Get the process-content element to calculate line height
        const processContent = section.querySelector('.process-content') as HTMLElement
        if (processContent && lineRef.current) {
          // Get the last step element to calculate proper end position
          const lastStep = processContent.querySelector('.process-step-item:last-child') as HTMLElement
          const lineWrap = processContent.querySelector('.line-wrap') as HTMLElement
          
          let contentHeight = processContent.scrollHeight
          if (lastStep && lineWrap) {
            const lastStepBottom = lastStep.offsetTop + lastStep.offsetHeight
            const lineWrapTop = lineWrap.offsetTop
            contentHeight = lastStepBottom - lineWrapTop + 40 // Add extra padding for line extension
          }
          
          const currentHeight = contentHeight * progress
          lineRef.current.style.height = `${currentHeight}px`
        }
      } else if (scrollY < sectionStart) {
        setScrollProgress(0)
        if (lineRef.current) {
          lineRef.current.style.height = '0px'
        }
      } else if (scrollY > sectionEnd) {
        setScrollProgress(1)
        const processContent = section.querySelector('.process-content') as HTMLElement
        if (processContent && lineRef.current) {
          // Get the last step element to calculate proper end position
          const lastStep = processContent.querySelector('.process-step-item:last-child') as HTMLElement
          const lineWrap = processContent.querySelector('.line-wrap') as HTMLElement
          
          let contentHeight = processContent.scrollHeight
          if (lastStep && lineWrap) {
            const lastStepBottom = lastStep.offsetTop + lastStep.offsetHeight
            const lineWrapTop = lineWrap.offsetTop
            contentHeight = lastStepBottom - lineWrapTop + 40 // Add extra padding for line extension
          }
          
          lineRef.current.style.height = `${contentHeight}px`
        }
      }
    }

    // Use requestAnimationFrame for smooth animation
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="process-section py-8 md:py-12 lg:py-16 pb-16 md:pb-20 lg:pb-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="process-inner" style={{ marginLeft: '0px', maxWidth: '100%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start relative">
            {/* Left Side - Heading and Intro (Sticky - Always Visible Throughout Section) */}
            <div className="section-head">
              <div className="head-left sec-title-spacing text-center lg:text-left">
                <h3 className="text-dark-gray font-bold mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
            How Our Website Maintenance Services Works
                </h3>
                <p className="mb-3 md:mb-4 text-sm sm:text-base text-gray-700">
                  <strong>(Onboarding → Monthly Care → Live Monitoring → Reports)</strong>
                </p>
                <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed">
                  When you choose us, you're not buying "hours" - you're getting a proven maintenance program that keeps your website fast, secure, and up to date without draining your team. Everything starts with a structured onboarding, followed by ongoing preventive care, on-demand support for updates and fixes, real-time monitoring in your client area, and clear monthly reports that you can share with stakeholders. Whether you select <strong>One Time Fix</strong> or <strong>Monthly Maintenance</strong> in the form above, the outcome is the same: a stable, optimized website with zero guesswork and full transparency.
                </p>
              </div>
            </div>

            {/* Right Side - Timeline and Steps */}
            <div className="process-content relative">
            {/* Timeline Line Container */}
            <div className="line-wrap">
              <span className="default-line"></span>
              <span ref={lineRef} className="draw-line"></span>
        </div>

            {/* Process Steps */}
            <div className="tab-content" id="process1">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`process-step-item ${index === 0 ? 'active' : ''} ${step.isLast ? 'last-step' : ''}`}
                  
                >
                  {/* Timeline Node Circle */}
                  <div
                    className="timeline-node"
                    style={{
                      backgroundColor: scrollProgress >= index / steps.length ? '#fbbf24' : '#e5e7eb',
                      borderColor: scrollProgress >= index / steps.length ? '#fbbf24' : '#d1d5db',
                      '--node-border-color': scrollProgress >= index / steps.length ? '#fbbf24' : '#d1d5db',
                    } as React.CSSProperties & { '--node-border-color': string }}
                  ></div>

                  {/* Background Number */}
                  <span className="number">{step.number}</span>

                  {/* Content */}
                  <div className="step-content">
                    {/* Title */}
                    <div className="step-title-wrapper">
                      <h3 className="box-title mb-2 md:mb-3 text-lg sm:text-xl md:text-2xl">{step.title}</h3>
                    </div>
                    
                    {/* Subtitle */}
                    {step.subtitle && (
                      <div className="step-subtitle-wrapper mb-3 md:mb-4">
                        <p className="text-sm sm:text-base">
                          <strong>
                            <em>{step.subtitle}</em>
                          </strong>
                        </p>
                      </div>
                    )}
                    
                    {/* Description Paragraph */}
                    <div className="step-description-wrapper mb-3 md:mb-4">
                      <p
                        className="text-gray-700 leading-relaxed text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                    
                    {/* Monitoring List */}
                    {step.monitoringList && step.monitoringList.length > 0 && (
                      <div className="step-monitoring-list-wrapper mb-3 md:mb-4">
                        {step.monitoringList.map((item, idx) => (
                          <div key={idx} className="step-monitoring-item mb-2">
                            <p
                              className="text-gray-700 leading-relaxed text-sm sm:text-base"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Additional Text */}
                    {step.additionalText && (
                      <div className="step-additional-text-wrapper mb-3 md:mb-4">
                        <p
                          className="text-gray-700 leading-relaxed text-sm sm:text-base"
                          dangerouslySetInnerHTML={{ __html: step.additionalText }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
