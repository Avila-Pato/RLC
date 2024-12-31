import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/components/CompanyProfile'
import Footer from '../lib/components/pages/Footer'
import Hero from '../lib/components/pages/Hero'
import Navbar from '../lib/components/NavBar'
import { Services } from '@/lib/components/pages/Services'
import Testimony from '@/lib/components/pages/Testimony'
import Packages from '@/lib/components/pages/Packages'

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
