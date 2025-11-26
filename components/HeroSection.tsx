'use client'

import ContactForm from './ContactForm'

export default function HeroSection() {
  return (
    <section className="hero-bg pt-[220px] py-16 pb-24 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 text-white text-xs uppercase px-4 py-1.5 rounded-full mr-3 font-semibold" style={{ backgroundColor: '#2563eb' }}>
                GET STARTED
              </div>
              <span className="text-sm font-medium text-gray-600">
                Fix Critical Website Issues.
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-5 text-dark-gray leading-tight">
              Monthly{' '}
              <span className="text-highlight relative">
                Website Maintenance
                <span className="absolute bottom-3 left-0 right-0 h-3 bg-blue-600 opacity-30"></span>
              </span>{' '}
              with 12-Minute Avg Response.
            </h1>

            <div className="text-lg text-gray-700 mb-8 leading-relaxed">
              Security, updates, speed, and fixes handled by senior engineers.{' '}
              <strong>Cancel anytime.</strong>
            </div>

            <a
              href="#get_a_quote"
              className="btn btn-gradient-purple-pink btn-large btn-round-edge btn-box-shadow px-4 py-3 rounded-lg text-white font-medium inline-flex items-center mb-6"
              style={{ width: 'fit-content' }}
            >
              <i className="fas fa-arrow-right mr-2"></i>
              <span>GET WEBSITE MAINTENANCE PLAN</span>
            </a>

            <p className="text-sm text-gray-600">
              Need urgent help?{' '}
              <a href="#get_a_quote" className="text-blue-600 font-semibold hover:underline">
                <strong>Connect us now!</strong>
              </a>
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full lg:pl-4" id="get_a_quote">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

