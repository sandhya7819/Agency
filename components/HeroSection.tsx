'use client'

import ContactForm from './ContactForm'

export default function HeroSection() {
  return (
    <section className="hero-bg pt-[160px] md:pt-[180px] lg:pt-[220px] py-8 md:py-12 lg:py-16 pb-12 md:pb-16 lg:pb-24 min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content - Text */}
          <div className="w-full flex flex-col justify-center order-2 lg:order-1">
            <div className="flex flex-wrap items-center mb-3 md:mb-4">
              <div className="flex-shrink-0 text-black text-xs uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full mr-2 md:mr-3 font-semibold" style={{ backgroundColor: '#fbbf24' }}>
                GET STARTED
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-600">
                Fix Critical Website Issues.
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-5 text-dark-gray leading-tight">
              Monthly{' '}
              <span className="text-highlight relative">
                Website Maintenance
                <span className="absolute bottom-2 md:bottom-3 left-0 right-0 h-2 md:h-3 bg-yellow-500 opacity-30"></span>
              </span>{' '}
              with 12-Minute Avg Response.
            </h1>

            <div className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Security, updates, speed, and fixes handled by senior engineers.{' '}
              <strong>Cancel anytime.</strong>
            </div>

            <a
              href="#get_a_quote"
              className="btn btn-gradient-purple-pink btn-large btn-round-edge btn-box-shadow px-4 py-3 rounded-lg text-white font-medium inline-flex items-center mb-4 md:mb-6 w-full sm:w-auto justify-center sm:justify-start"
              style={{ width: 'fit-content', maxWidth: '100%' }}
            >
              <i className="fas fa-arrow-right mr-2"></i>
              <span className="text-sm md:text-base">GET WEBSITE MAINTENANCE PLAN</span>
            </a>

            <p className="text-xs md:text-sm text-gray-600">
              Need urgent help?{' '}
              <a href="#get_a_quote" className="font-semibold hover:underline" style={{ color: '#fbbf24' }}>
                <strong>Connect us now!</strong>
              </a>
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full lg:pl-4 order-1 lg:order-2 mb-6 lg:mb-0" id="get_a_quote">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

