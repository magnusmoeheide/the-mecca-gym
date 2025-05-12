import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import WomensFacility from "@/components/womens-facility"
import MensFacility from "@/components/mens-facility"

export default function StartNowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF3366]">START</span> YOUR FITNESS JOURNEY{" "}
                <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                  TODAY
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Take the first step towards a healthier, stronger you. Contact us to schedule a visit to The MeCCa Gym
                and start your membership.
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#FF3366] mr-4" />
                  <div>
                    <p className="text-xl font-bold">Call Us</p>
                    <p className="text-gray-300">0729779137</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#33CCCC] mr-4" />
                  <div>
                    <p className="text-xl font-bold">Email Us</p>
                    <p className="text-gray-300">info@themeccagym.com</p>
                  </div>
                </div>
              </div>
            </div>
       
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/start.jpeg"
                  alt="The MeCCa Gym"
                  fill
                  className="object-cover rounded-xl z-0"
                  priority
                />
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 mix-blend-overlay z-10 rounded-xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Membership Process Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                HOW TO JOIN
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Becoming a member at The MeCCa Gym is simple. Follow these easy steps to start your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 relative">
              <div className="absolute -top-5 -left-5 bg-[#FF3366] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">Contact Us</h3>
              <p className="text-gray-400 mb-6">
                Call us at 0729779137 or email info@themeccagym.com to express your interest in joining The MeCCa
                Gym.
              </p>
              <div className="flex items-center text-[#FF3366]">
                <Phone className="h-5 w-5 mr-2" />
                <span>Make the call</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 relative">
              <div className="absolute -top-5 -left-5 bg-[#33CCCC] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">Schedule a Visit</h3>
              <p className="text-gray-400 mb-6">
                Arrange a time to visit our facility. We'll give you a tour and discuss your fitness goals and which
                membership plan is right for you.
              </p>
              <div className="flex items-center text-[#33CCCC]">
                <Clock className="h-5 w-5 mr-2" />
                <span>Book your tour</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 relative">
              <div className="absolute -top-5 -left-5 bg-[#FF3366] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4">Start Your Membership</h3>
              <p className="text-gray-400 mb-6">
                Complete the registration process, select your membership plan, and begin your fitness journey at The
                MeCCa Gym.
              </p>
              <div className="flex items-center text-[#FF3366]">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Begin your journey</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                VISIT OUR LOCATIONS
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              The MeCCa Gym has two dedicated facilities - one for women and one for men. Visit the location that's
              right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Women's Location */}
           <WomensFacility />

            {/* Men's Location */}
            <MensFacility />
          </div>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Have questions about joining The MeCCa Gym? Find answers to common questions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Do I need to sign a long-term contract?</h3>
              <p className="text-gray-400">
                No, we offer flexible membership options including month-to-month plans with no long-term commitment
                required.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Is there a joining fee?</h3>
              <p className="text-gray-400">
               No! We do not charge any joining fees. You only pay for your selected membership plan.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Can I freeze my membership?</h3>
              <p className="text-gray-400">
                Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Do you offer personal training?</h3>
              <p className="text-gray-400">
                Yes, we offer personal training sessions with our certified trainers. These can be purchased
                individually or in packages.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#FF3366]">What amenities are included?</h3>
              <p className="text-gray-400">
                All memberships include access to locker rooms, showers, and basic amenities. Premium and Elite
                memberships include additional perks.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Can I try before I join?</h3>
              <p className="text-gray-400">
                Yes, we offer a complimentary day pass for prospective members. Contact us to schedule your visit.
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
                READY TO TRANSFORM YOUR LIFE?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Take the first step towards a healthier, stronger you. Contact us today to schedule your visit and start
              your membership at The MeCCa Gym.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white px-8 py-6 text-lg">
                Call 0729779137
              </Button>
              {/* <Button
                variant="outline"
                className="border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC]/10 px-8 py-6 text-lg"
              >
                Email Us
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
