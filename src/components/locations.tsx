import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import WomensFacility from "./womens-facility"
import MensFacility from "./mens-facility"

export default function Locations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
              OUR LOCATIONS
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The MeCCa Gym offers dedicated facilities for both women and men, each designed to provide the optimal
            training environment for our members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Women's Location */}
        <WomensFacility/>

          {/* Men's Location */}
        <MensFacility />
        </div>
      </div>
    </section>
  )
}
