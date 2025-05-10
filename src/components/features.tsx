import { Dumbbell, Activity, BoxIcon as Boxing } from "lucide-react"

export default function Features() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
              OUR SPECIALTIES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          At The Mecca, we specialize in results-driven training that fuels both body and mind. Whether you’re here to build strength, boost endurance, or sharpen your fighting edge, our expert-led programs are designed to take you to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Lifting */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#FF3366]/50 rounded-lg flex items-center justify-center mb-6 group-hover:from-[#FF3366] group-hover:to-[#33CCCC] transition-all duration-300">
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Strength Training</h3>
            <p className="text-gray-400 mb-6">
            From beginners to seasoned lifters, our strength training programs are built to help you gain muscle, increase power, and improve functional fitness. Every session is focused on form, progress, and performance.
            </p>
            <a href="/weight-lifting" className="text-[#FF3366] font-semibold flex items-center">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Aerobics */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#33CCCC] to-[#33CCCC]/50 rounded-lg flex items-center justify-center mb-6 group-hover:from-[#33CCCC] group-hover:to-[#FF3366] transition-all duration-300">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Aerobics</h3>
            <p className="text-gray-400 mb-6">
            Energize your body and elevate your mood with our dynamic aerobics classes. Perfect for improving cardiovascular health, burning fat, and increasing overall stamina — all in a fun, high-energy group environment.
            </p>
            <a href="/aerobics" className="text-[#33CCCC] font-semibold flex items-center">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Boxing */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366]/50 to-[#33CCCC] rounded-lg flex items-center justify-center mb-6 group-hover:from-[#FF3366] group-hover:to-[#33CCCC] transition-all duration-300">
              <Boxing className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Boxing</h3>
            <p className="text-gray-400 mb-6">
            Unleash your inner fighter. Our boxing sessions blend technique, conditioning, and discipline to build speed, coordination, and confidence. Whether you’re training for fitness or the ring, we’ve got your corner.
            </p>
            <a href="/boxing" className="text-[#FF3366] font-semibold flex items-center">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
