import { CallToAction } from "@/components/CalltoAction";
import Clients from "@/components/Clients";
import CompanyProfile from "@/components/CompanyProfile";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import { Services } from "@/components/Services";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CompanyProfile />
      <Services />
      <Clients />
      <CallToAction />
      <Footer />
    </div>
  );
}