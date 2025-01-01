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
import Profile from '@/lib/pages/Profile'

export default function Home() {
    return (
        <Suspense
            name="Home"
            fallback={
                <div
                    className="flex items-center justify-center"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <FaSpinner className="animate-spin text-4xl text-gray-500" />
                    <span className="ml-2 text-xl">Cargando...</span>
                </div>
            }
        >
            <Navbar />
            <Hero />
            <Services />
            <Packages />
            <CompanyProfile />
            <Profile />
            <Testimony />
            <CallToAction />
            <Footer />
        </Suspense>
    )
}
