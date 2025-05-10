import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Target, Award } from "lucide-react"

export default function BoxingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                  BOXING
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Learn proper boxing techniques, improve your coordination, and get a full-body workout with our boxing
                classes taught by professional trainers.
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
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-transparent mix-blend-overlay z-10 rounded-xl"></div>
                <Image
                  src="/images/boxing.jpeg"
                  alt="Boxing Training"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Levels */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                SKILL LEVELS
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our boxing program caters to all skill levels, from complete beginners to advanced fighters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#FF3366]/50 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Beginner</h3>
              <p className="text-gray-400 mb-4">
                Learn the fundamentals of boxing including stance, footwork, basic punches, and defensive techniques.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>No experience required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Focus on proper form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Build foundational fitness</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#33CCCC] to-[#33CCCC]/50 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intermediate</h3>
              <p className="text-gray-400 mb-4">
                Advance your skills with combination punches, counter techniques, and more complex footwork patterns.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Some boxing experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Focus on speed and power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Introduction to sparring</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366]/50 to-[#33CCCC] rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced</h3>
              <p className="text-gray-400 mb-4">
                Refine your technique with advanced combinations, strategic sparring, and competition preparation.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Significant boxing experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Advanced defensive techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Competition preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                EQUIPMENT PROVIDED
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide all the necessary equipment for your boxing training at The MeCCa Gym.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Training Equipment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Boxing gloves (various weights)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Hand wraps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Heavy bags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Speed bags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF3366] mr-2">•</span>
                  <span>Focus mitts</span>
                </li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Protective Gear</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Headgear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Mouthguards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Body protectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Groin protectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33CCCC] mr-2">•</span>
                  <span>Boxing shoes (available for rent)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 p-8 md:p-12 rounded-xl border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                READY TO STEP IN THE RING?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join our boxing program today and discover the physical and mental benefits of this challenging sport.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/start-now"></Link>
              <Button className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
                Start Now
              </Button>
      
             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
