import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF3366]">ABOUT</span>{" "}
                <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                  THE MeCCa
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Where passion for fitness meets a supportive community. Learn about our journey, our mission, and the team that makes The MeCCa Gym special.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 mix-blend-overlay z-10 rounded-xl"></div>
                <Image
                  src="/images/about.jpeg"
                  alt="The MeCCa Gym"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                OUR STORY
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              The journey that led to creating one of the most innovative fitness centers in the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-transparent mix-blend-overlay z-10 rounded-xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gym Founding"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FF3366]">Founded with a Vision</h3>
              <p className="text-gray-300 mb-6">
                The MeCCa Gym was founded in 2015 with a clear vision: to create a fitness environment that caters to everyone, regardless of their fitness level or goals. Our founders, all passionate fitness enthusiasts, noticed a gap in the market for a gym that truly understood the diverse needs of its members.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small training facility has grown into two state-of-the-art locations - one dedicated to women and one for men - each designed to provide the optimal training environment for our members.
              </p>
              <p className="text-gray-300">
                Today, The MeCCa Gym stands as a testament to our commitment to excellence, community, and results-driven fitness programs that transform lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                OUR MISSION
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We're driven by a simple but powerful mission that guides everything we do.
            </p>
          </div>

          <div className="bg-gray-950 p-8 md:p-12 rounded-xl border border-gray-800 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-center italic text-gray-300 mb-8">
              "To empower individuals through fitness, fostering a supportive community where everyone can achieve their personal best and transform their lives."
            </blockquote>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <div className="bg-black p-6 rounded-xl border border-gray-800 flex-1 hover:border-[#FF3366] transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Excellence</h3>
                <p className="text-gray-400">We strive for excellence in everything we do, from our facilities to our training programs.</p>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gray-800 flex-1 hover:border-[#33CCCC] transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-[#33CCCC]">Community</h3>
                <p className="text-gray-400">We believe in the power of community to motivate, inspire, and support each member's journey.</p>
              </div>
              <div className="bg-black p-6 rounded-xl border border-gray-800 flex-1 hover:border-[#FF3366] transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-[#FF3366]">Transformation</h3>
                <p className="text-gray-400">We're committed to helping our members transform not just their bodies, but their lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                OUR TEAM
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Meet the dedicated professionals who make The MeCCa Gym special. Our team of certified trainers and staff are committed to helping you achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="John Davis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">John Davis</h3>
              <p className="text-[#FF3366] mb-3">Founder & Head Trainer</p>
              <p className="text-gray-400 mb-4">
                With over 15 years of experience in fitness training, John leads our team with passion and expertise.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 group">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-[#33CCCC] mb-3">Women's Facility Director</p>
              <p className="text-gray-400 mb-4">
                Sarah oversees our women's facility, bringing her expertise in women's fitness and nutrition.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Michael Torres"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Torres</h3>
              <p className="text-[#FF3366] mb-3">Men's Facility Director</p>
              <p className="text-gray-400 mb-4">
                Michael leads our men's facility with his background in strength training and sports science.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF3366]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 group">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Lisa Martinez"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Lisa Martinez</h3>
              <p className="text-[#33CCCC] mb-3">Head of Aerobics</p>
              <p className="text-gray-400 mb-4">
                Lisa brings energy and expertise to our aerobics programs, with certifications in multiple fitness disciplines.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#33CCCC]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
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
                JOIN THE MeCCa COMMUNITY
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Ready to transform your body and life? Visit one of our locations or contact us today to learn more about our membership options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/start-now">
                <Button className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white px-8 py-6 text-lg">
                Start Your Journey
              </Button>
                </Link>
            <Link href="/contact">
            <Button
                variant="outline"
                className="border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC]/10 px-8 py-6 text-lg"
              >
                Contact Us
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
