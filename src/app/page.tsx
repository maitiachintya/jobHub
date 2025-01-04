import React from 'react'
import Header from '../layout/Header'
import HeroSection from '@/layout/HeroSection'
import CategorySection from '@/layout/CategorySection'
import WhyChooseUs from '@/layout/BenifitSec'
import  CallToAction  from '@/layout/CallToAction'
import Footer from '@/layout/Footer'
import CompaniesLogoSection from '@/layout/CompLogo'

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />
      <WhyChooseUs />
      <CompaniesLogoSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default page
