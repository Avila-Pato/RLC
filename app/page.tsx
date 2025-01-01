import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/pages/CompanyProfile'
import Navbar from '../lib/components/NavBar'
import Hero from '@/lib/pages/Hero'
import { Services } from '@/lib/pages/Services'
import Packages from '@/lib/pages/Packages'
import Testimony from '@/lib/pages/Testimony'
import Footer from '@/lib/pages/Footer'
import { Suspense } from 'react'

export default function Home() {

    return (
        <div className="min-h-screen bg-white">
            <Suspense fallback={<div>Loading...</div>} >
            <Navbar />
            <Hero />
            <Services />
            <Packages />
            <CompanyProfile />
            <Testimony />
            <CallToAction />
            <Footer />
            </Suspense> 
        </div>
    )
}
