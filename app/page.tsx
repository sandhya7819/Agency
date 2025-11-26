import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ComparisonSection from '@/components/ComparisonSection'
import FlexiTaskSection from '@/components/FlexiTaskSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FlexiTaskSection />
      <CaseStudiesSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}

