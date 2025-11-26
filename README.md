# Aarav Infotech Website Maintenance Landing Page

A Next.js application for Aarav Infotech's website maintenance services landing page.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Works on all devices
- **Interactive Components** - FAQ accordion, case studies slider, contact form
- **SEO Optimized** - Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx      # Hero section with rotating text
│   ├── ContactForm.tsx     # Contact form component
│   ├── BenefitsSection.tsx # Benefits showcase
│   ├── HowItWorksSection.tsx # Process steps
│   ├── ComparisonSection.tsx # Pricing comparison
│   ├── CaseStudiesSection.tsx # Case studies slider
│   ├── ReviewsSection.tsx  # Customer reviews
│   ├── FAQSection.tsx      # FAQ accordion
│   └── Footer.tsx         # Footer component
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icons

## Customization

- Update colors in `tailwind.config.js` and `app/globals.css`
- Modify content in component files
- Add new sections by creating new components in `components/` folder

## License

This project is for Aarav Infotech.

