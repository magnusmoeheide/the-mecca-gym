import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-0">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#FF3366]">CONTACT</span>{" "}
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                THE MeCCa
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Have questions about our programs, membership options, or facilities? We're here to help. Reach out to us
              using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                GET IN TOUCH
              </span>
            </h2>

            {/* Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Women's Location */}
              <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-[#FF3366]">Women's Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">Nairobi Eastleigh, Muyuyu Lane Ramadan Apartment underground, next to Nur Hotel</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">0729779137</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">Mon-Sat: 6am - 9:30pm</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Men's Location */}
              <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-[#33CCCC]">Men's Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">Nairobi Eastleigh 4th Street Al Bait Apartment, 1st floor</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">0729779137</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">Mon-Sat: 5:40am - 10:30pm</p>
                      <p className="text-gray-300">Sunday: 8:30am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 mb-12">
              <h3 className="text-xl font-bold mb-6 text-center">General Inquiries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#FF3366] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-gray-300">info@themeccagym.com</p>
                    <p className="text-gray-400 mt-1 text-sm">We respond to all emails within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#33CCCC] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-gray-300">Main: 0729779137</p>
                    <p className="text-gray-400 mt-1 text-sm">Available 7 days a week, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex justify-center space-x-6">
                {/* <a
                  href="#"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#FF3366]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-gray-300" />
                </a> */}
                <a
                  href="https://www.instagram.com/themeccagymm_/"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#FF3366]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-gray-300" />
                </a>
                {/* <a
                  href="#"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#33CCCC]/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 text-gray-300" />
                </a>
                <a
                  href="#"
                  className="bg-gray-900 p-3 rounded-full hover:bg-[#33CCCC]/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6 text-gray-300" />
                </a> */}
              </div>
              <p className="text-gray-400 mt-4">
                Follow us on social media for fitness tips, event updates, and member spotlights
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 p-8 md:p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                READY TO VISIT?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Schedule a tour of our facilities and see firsthand what makes The MeCCa Gym special.
            </p>
          
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
