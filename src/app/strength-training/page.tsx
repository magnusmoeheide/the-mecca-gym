import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, Dumbbell, Award, ArrowRight } from 'lucide-react'

export default function WeightLiftingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF3366]">STRENGTH</span>{" "}
                <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                  TRAINING
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Build strength, increase muscle mass, and improve your overall physique with our comprehensive strength
                training programs led by expert trainers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/start-now">
                    <Button className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
                    Join a Class
                    </Button>
                </Link>
                <Link href="/contact">
                <Button variant="outline" className="border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC]/10">
                    Learn More
                </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
    <Image
      src="/images/strength-training.jpeg"
      alt="Strength Training"
      fill
      className="object-cover rounded-xl z-0"
      priority
    />
    {/* only show overlay on md-up so mobile sees the image unfiltered */}
    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#FF3366]/20 to-transparent mix-blend-overlay z-10 rounded-xl pointer-events-none" />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                PROGRAM DETAILS
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our strength training program is designed for all fitness levels, from beginners to advanced lifters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#FF3366]/50 rounded-lg flex items-center justify-center mb-6">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Equipment</h3>
              <p className="text-gray-400">
                Access to state-of-the-art equipment including free weights, machines, power racks, and specialized
                strength training tools.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#33CCCC] to-[#33CCCC]/50 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Coaching</h3>
              <p className="text-gray-400">
                Our certified trainers provide guidance on proper form, technique, and personalized training programs
                tailored to your goals.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366]/50 to-[#33CCCC] rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Results</h3>
              <p className="text-gray-400">
                Achieve measurable results including increased strength, improved muscle definition, better posture, and
                enhanced overall fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                CLASS SCHEDULE
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our strength training classes at times that fit your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-[#FF3366] mr-3" />
                <h3 className="text-xl font-bold">Morning Sessions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span>6:00 AM - 10:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span>9:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-[#33CCCC] mr-3" />
                <h3 className="text-xl font-bold">Evening Sessions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span>4:00 PM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span>2:00 PM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span>2:00 PM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 p-8 md:p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                READY TO BUILD YOUR STRENGTH?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join our strength training program today and start your journey to a stronger, more powerful you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/start-now">
                    <Button className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
                        Start Now
                    </Button>
                </Link>
            
         
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
