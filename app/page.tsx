import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/components/CompanyProfile'
import Navbar from '../lib/components/NavBar'
import Hero from '@/lib/pages/Hero'
import { Services } from '@/lib/pages/Services'
import Packages from '@/lib/pages/Packages'
import Testimony from '@/lib/pages/Testimony'
import Footer from '@/lib/pages/Footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Services />
            <CompanyProfile />
            <Packages />
            <Testimony />
            <CallToAction />
            <Footer />
        </div>
    )
}
