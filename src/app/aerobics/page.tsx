import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Flame, Clock, Users } from 'lucide-react'

export default function AerobicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] text-transparent bg-clip-text">
                  AEROBICS
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Boost your cardiovascular health, burn calories, and increase your stamina with our high-energy aerobics
                classes suitable for all fitness levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/start-now">
                <Button className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] hover:from-[#33CCCC]/90 hover:to-[#FF3366]/90 text-white">
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
                  src="/images/aerobics.jpeg"
                  alt="Aerobics Class"
                  fill
                  className="object-cover rounded-xl z-0"
                  priority
                />
                {/* overlay hidden on mobile */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#33CCCC]/20 to-transparent mix-blend-overlay z-10 rounded-xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] text-transparent bg-clip-text">
                CLASS TYPES
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our variety of aerobics classes designed to keep your workouts fun and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#33CCCC] to-[#33CCCC]/50 rounded-lg flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Step Aerobics</h3>
              <p className="text-gray-400">
                High-energy step routines that improve coordination, strengthen lower body muscles, and provide an
                excellent cardio workout.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#FF3366]/50 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dance Aerobics</h3>
              <p className="text-gray-400">
                Fun, rhythmic dance routines that combine fitness with choreography for a full-body workout that doesn't
                feel like exercise.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#33CCCC]/50 to-[#FF3366] rounded-lg flex items-center justify-center mb-6">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">HIIT Aerobics</h3>
              <p className="text-gray-400">
                High-Intensity Interval Training combined with aerobic movements for maximum calorie burn and
                cardiovascular benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] text-transparent bg-clip-text">
                BENEFITS
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Regular participation in our aerobics classes provides numerous health and fitness benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Physical Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Improved cardiovascular health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Increased stamina and endurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Enhanced coordination and balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Effective calorie burning and weight management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Toned muscles throughout the body</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Mental Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Reduced stress and anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Improved mood through endorphin release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Enhanced cognitive function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Better sleep quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Increased self-confidence and body image</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      {/* <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] text-transparent bg-clip-text">
                CLASS SCHEDULE
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find a class that fits your schedule and fitness goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-left">Day</th>
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Class</th>
                  <th className="py-3 px-4 text-left">Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Monday</td>
                  <td className="py-3 px-4">9:00 AM</td>
                  <td className="py-3 px-4">Step Aerobics</td>
                  <td className="py-3 px-4">Lisa M.</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Tuesday</td>
                  <td className="py-3 px-4">6:00 PM</td>
                  <td className="py-3 px-4">Dance Aerobics</td>
                  <td className="py-3 px-4">Sarah J.</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Wednesday</td>
                  <td className="py-3 px-4">7:30 AM</td>
                  <td className="py-3 px-4">HIIT Aerobics</td>
                  <td className="py-3 px-4">Mike T.</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Thursday</td>
                  <td className="py-3 px-4">5:30 PM</td>
                  <td className="py-3 px-4">Step Aerobics</td>
                  <td className="py-3 px-4">Lisa M.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Saturday</td>
                  <td className="py-3 px-4">10:00 AM</td>
                  <td className="py-3 px-4">Dance Aerobics</td>
                  <td className="py-3 px-4">Sarah J.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#33CCCC]/20 to-[#FF3366]/20 p-8 md:p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] text-transparent bg-clip-text">
                READY TO BOOST YOUR ENERGY?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join our aerobics classes today and experience the perfect blend of fun and fitness.
            </p>
            <Link href="/start-now">
            <Button className="bg-gradient-to-r from-[#33CCCC] to-[#FF3366] hover:from-[#33CCCC]/90 hover:to-[#FF3366]/90 text-white px-8 py-6 text-lg">
              Join Now
            </Button>
            </Link>
           
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
