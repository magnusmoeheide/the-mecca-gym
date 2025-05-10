import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#FF3366]">TRANSFORM</span> YOUR BODY AT{" "}
              <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
                THE MeCCa
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Where fitness meets community. Join us for weight lifting, aerobics, and boxing classes designed to push
              your limits and achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="w-full md:w-1/2 relative">
  <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl">
    <Image
      src="/images/hero.jpeg?height=500&width=600"
      alt="Gym Training"
      fill
      className="object-cover rounded-xl z-0"
      priority
    />
    <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#FF3366]/20 to-[#33CCCC]/20 mix-blend-overlay z-10 rounded-xl pointer-events-none" />
  </div>
  <div className="absolute bottom-5 left-5 md:-bottom-5 md:-left-5 bg-black p-4 rounded-lg border border-gray-800 z-20">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] rounded-full p-1">
        <div className="bg-black rounded-full p-2">
          <span className="text-2xl font-bold">500+</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">Happy Members</p>
        <p className="text-white font-semibold">Join the community</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
