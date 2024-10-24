import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import Blogs from './shared/blogs'
import LogoSlider from './shared/logoSlider'
import HowItWorks from './shared/HowItWork'
import PriceCard from './shared/priceCard'
import Pricing from './shared/PricingCard'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  const myStyle = {
    backgroundImage:
        "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTgwMDgwMi13aWtpbWVkaWEtaW1hZ2Utam9iNTcyLTEuanBn.jpg')",
    height: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",}

  const lStyle = {
    marginTop: "120px",
    }

    
  return (
    <div>
      <div style={myStyle} >
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LogoSlider />
      </div>
      <div style={lStyle}>
      <LatestJobs />
      </div>
      <HowItWorks/>
      <Blogs/>
      <PriceCard/>
      <Pricing />
      <Footer />
    
    </div>
  )
}

export default Home