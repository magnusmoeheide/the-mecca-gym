import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MensFacility() {
  return (
    <div className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 group">
    <div className="relative h-64 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#33CCCC]/30 to-transparent z-10"></div>
      <Image
        src="/images/mens.jpeg"
        alt="Men's Gym Location"
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4 bg-[#33CCCC] text-white px-4 py-2 rounded-lg z-20 font-bold">
        MEN ONLY
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-[#33CCCC]">The MeCCa - Men's Facility</h3>
      <p className="text-gray-300 mb-6">
        Our men's facility features heavy-duty equipment, specialized training zones, and expert coaches to help
        you build strength, improve performance, and reach your fitness potential in a motivating atmosphere.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-400">Nairobi Eastleigh 4th Street Al Bait Apartment, 1st floor</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Hours</h4>
            <p className="text-gray-400">Mon-Fri: 5:40am - 10:30pm</p>
            <p className="text-gray-400">Sunday: 8:30am - 6pm</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Contact</h4>
            <p className="text-gray-400">0729779137</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Amenities</h4>
            <p className="text-gray-400">Men's locker rooms, sauna, protein bar</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
          <Button className="bg-[#33CCCC] hover:bg-[#33CCCC]/90 text-white">Schedule a Tour</Button>
        </Link>
        <Link href="/contact">
        <Button variant="outline" className="border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC]/10">
          Get Directions
        </Button>
        </Link>
       
      </div>
    </div>
  </div>
  )
}
