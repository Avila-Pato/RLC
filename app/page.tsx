import Clients from '../lib/components/Clients'
import CompanyProfile from '../lib/components/CompanyProfile'
import Footer from '../lib/components/Footer'
import Hero from '../lib/components/Hero'
import Navbar from '../lib/components/NavBar'
import { ServicesSlider } from '../lib/components/Services'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <CompanyProfile />
            <ServicesSlider />
            <Clients />
            <Footer />
        </div>
    )
}
