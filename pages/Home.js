'use client'



import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import Button from '../components/ui/Button'

import Card from '../components/ui/Card'

import Hero from '../components/common/Hero'

import LogoSection from '../components/common/LogoSection'

import Services from '../components/common/Services'

import Lifecycle from '../components/common/Lifecycle'

import Advantages from '../components/common/Advantages'

import Trust from '../components/common/Videos'

import CaseStudies from '../components/common/CaseStudies'

import Sitemap from '../components/common/Sitemap'

import ContactModal from '../components/common/ContactModal'



const Home = () => {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const [serviceToOpen, setServiceToOpen] = useState(null)

  const searchParams = useSearchParams()



  const openContactModal = () => {

    setIsContactModalOpen(true)

  }



  const closeContactModal = () => {

    setIsContactModalOpen(false)

  }



  // Listen for service modal open events

  useEffect(() => {

    const handleOpenServiceModal = (event) => {

      setServiceToOpen(event.detail.serviceId)

    }



    window.addEventListener('openServiceModal', handleOpenServiceModal)

    return () => {

      window.removeEventListener('openServiceModal', handleOpenServiceModal)

    }

  }, [])

  // Open the same contact form when navigated from other pages
  useEffect(() => {
    const shouldOpen = searchParams?.get('contact') === '1'
    if (shouldOpen) {
      openContactModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  

  return (

    <main>

      {/* Hero Section */}

      <Hero onContactClick={openContactModal} />



      {/* Logo Section */}

      <LogoSection />



      {/* Services Section */}

      <Services onContactClick={openContactModal} serviceToOpen={serviceToOpen} />



      {/* Lifecycle Section */}

      <Lifecycle onContactClick={openContactModal} />



      {/* Advantages Section */}

      <Advantages onContactClick={openContactModal} />



      {/* Trust Section */}

      <Trust />



      {/* Case Studies Section */}

      <CaseStudies onContactClick={openContactModal} />



      {/* Sitemap Section */}
    <div className="login-sitemap-section">
      <Sitemap />
    </div>



      {/* Contact Modal */}

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      

    </main>

  )

}



export default Home

