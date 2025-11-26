'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', website: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-form-style-03 relative border-radius-10px bg-white p-6 lg:p-8 box-shadow-double-large overflow-hidden">
      <h4 className="text-2xl font-bold mb-3 text-dark-gray">Get Help With Your Website</h4>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Stop worrying about security breaches, slow loading, or broken updates. Let our experts
        handle it - so you don't have to!
      </p>

      <form onSubmit={handleSubmit} className="contact-form-style-02">
        <input type="hidden" name="page_url" value={typeof window !== 'undefined' ? window.location.href : ''} />
        <input type="hidden" name="page_title" value="" />

        {/* Row 1: Full name and Email in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              className="input-name border-radius-4px border form-control w-full px-4 py-3 rounded"
              type="text"
              maxLength={30}
              name="name"
              id="name"
              placeholder="Full name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="border-radius-4px border form-control w-full px-4 py-3 rounded"
              type="email"
              maxLength={30}
              name="email"
              id="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2: Mobile and Website in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-10 pointer-events-none">
                <span className="text-xl">🇮🇳</span>
              </div>
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-10 pointer-events-auto">
                <select className="bg-transparent border-none outline-none text-sm font-medium text-gray-700 cursor-pointer" defaultValue="+91">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
              </div>
              <input
                className="border-radius-4px border form-control w-full px-4 py-3 rounded pl-24"
                type="tel"
                name="phone"
                id="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <input
              className="border-radius-4px border form-control w-full px-4 py-3 rounded"
              type="text"
              name="website"
              id="website"
              placeholder="Website*"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 3: Message full width */}
        <div className="mb-4">
          <textarea
            className="border-radius-4px border form-control w-full px-4 py-3 rounded"
            name="message"
            id="message"
            rows={3}
            placeholder="Your message."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Footer Row: Success message + Cloudflare on left, Submit button on right */}
        <div className="mb-4 flex flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-500 text-lg"></i>
              <span className="text-sm font-medium text-gray-700">Success!</span>
            </div>
            <div className="flex flex-col text-xs text-gray-500">
              <span className="text-xs">Privacy • Terms.</span>
              <span className="font-bold text-gray-900 text-xs mt-1" style={{ color: '#f38020' }}>CLOUDFLARE</span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-gradient-purple-pink btn-large btn-round-edge text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <i className="fas fa-arrow-right"></i>
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Security message outside form, below it */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <i className="fas fa-lock text-gray-400"></i>
        <span>Your data is 100% secure. We never spam or share your details.</span>
      </div>
    </div>
  )
}

