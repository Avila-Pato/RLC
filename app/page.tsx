import { CallToAction } from '@/lib/components/CalltoAction'
import CompanyProfile from '../lib/pages/CompanyProfile'
import Navbar from '../lib/components/NavBar'
import Hero from '@/lib/pages/Hero'
import { Services } from '@/lib/pages/Services'
import Packages from '@/lib/pages/Packages'
import Testimony from '@/lib/pages/Testimony'
import Footer from '@/lib/pages/Footer'
import Profile from '@/lib/pages/Profile'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Packages />
            <CompanyProfile />
            <Testimony />
            <Profile />
            <CallToAction />
            <Footer />
        </div>
    )
}
