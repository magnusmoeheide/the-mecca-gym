import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Membership from "@/components/membership"
import Locations from "@/components/locations"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Locations />
      <Membership />
      <Testimonials />
      <Footer />
    </main>
  )
}