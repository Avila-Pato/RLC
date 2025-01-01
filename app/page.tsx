import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/pages/CompanyProfile'
import Navbar from '../lib/components/NavBar'
import Hero from '@/lib/pages/Hero'
import { Services } from '@/lib/pages/Services'
import Packages from '@/lib/pages/Packages'
import Testimony from '@/lib/pages/Testimony'
import Footer from '@/lib/pages/Footer'
import { Suspense } from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function Home() {

    return (
            <Suspense fallback={<div className='flex justify-center items-center h-screen '>
                <FaSpinner className="animate-spin text-4xl text-gray-500 " />
                <span className='ml-2 text-xl '>Cargando...</span>
            </div>
        } >
            <Navbar />
            <Hero />
            <Services />
            <Packages />
            <CompanyProfile />
            <Testimony />
            <CallToAction />
            <Footer />
            </Suspense> 
       
    )
}
