import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
              SUCCESS STORIES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our members who have transformed their lives through dedication and the support of The MeCCa Gym
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-950 p-8 rounded-xl relative">
            <div className="absolute -top-5 -left-5">
              <div className="text-6xl text-[#FF3366]">"</div>
            </div>
            <div className="pt-6">
              <p className="text-gray-300 mb-6">
                The MeCCa Gym changed my life. I've lost 30 pounds and gained so much confidence. The trainers are
                knowledgeable and supportive, and the community keeps me motivated.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Sarah J."
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah J.</h4>
                  <p className="text-sm text-gray-400">Member for 1 year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-950 p-8 rounded-xl relative">
            <div className="absolute -top-5 -left-5">
              <div className="text-6xl text-[#33CCCC]">"</div>
            </div>
            <div className="pt-6">
              <p className="text-gray-300 mb-6">
                As a boxing enthusiast, I've trained at many gyms, but The MeCCa stands out. The facilities are
                top-notch, and the boxing coaches really know their stuff.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Mike T."
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Mike T.</h4>
                  <p className="text-sm text-gray-400">Member for 2 years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-950 p-8 rounded-xl relative">
            <div className="absolute -top-5 -left-5">
              <div className="text-6xl text-[#FF3366]">"</div>
            </div>
            <div className="pt-6">
              <p className="text-gray-300 mb-6">
                The aerobics classes at The MeCCa are incredible! High energy, great music, and instructors who push you
                to your limits while making it fun.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Lisa M."
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Lisa M.</h4>
                  <p className="text-sm text-gray-400">Member for 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
