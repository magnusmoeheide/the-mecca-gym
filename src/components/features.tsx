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
            The MeCCa Gym offers a variety of fitness programs designed to help you reach your goals, whether you're
            looking to build muscle, improve cardio, or learn self-defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Lifting */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#FF3366]/50 rounded-lg flex items-center justify-center mb-6 group-hover:from-[#FF3366] group-hover:to-[#33CCCC] transition-all duration-300">
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Weight Lifting</h3>
            <p className="text-gray-400 mb-6">
              Build strength, increase muscle mass, and improve your overall physique with our comprehensive weight
              training programs led by expert trainers.
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
              Boost your cardiovascular health, burn calories, and increase your stamina with our high-energy aerobics
              classes suitable for all fitness levels.
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
              Learn proper boxing techniques, improve your coordination, and get a full-body workout with our boxing
              classes taught by professional trainers.
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
