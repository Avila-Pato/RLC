import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/components/CompanyProfile'
import Footer from '../lib/components/Footer'
import Hero from '../lib/components/Hero'
import Navbar from '../lib/components/NavBar'
import { Services } from '@/lib/components/Services'
import Testimony from '@/lib/components/Testimony'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Services />
            <CompanyProfile />
            <Testimony />
            <CallToAction />
            <Footer />
        </div>
    )
}
