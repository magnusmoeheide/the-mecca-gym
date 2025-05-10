import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WomensFacility() {
  return (
    <div className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
    <div className="relative h-64 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/30 to-transparent z-10"></div>
      <Image
        src="/images/womens.jpeg"
        alt="Women's Gym Location"
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4 bg-[#FF3366] text-white px-4 py-2 rounded-lg z-20 font-bold">
        WOMEN ONLY
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-[#FF3366]">The MeCCa - Women's Facility</h3>
      <p className="text-gray-300 mb-6">
      At our Women’s Facility, we provide a supportive, empowering environment for women of all fitness levels. Our facility is fully equipped and designed to help you feel confident, comfortable, and focused on your goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-400">Nairobi Eastleigh, Muyuyu Lane Ramadan Apartment underground, next to Nur Hotel</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Hours</h4>
            <p className="text-gray-400">Mon-Sat: 6am - 9:30pm</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Contact</h4>
            <p className="text-gray-400">0729779137</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-1">Amenities</h4>
            <p className="text-gray-400">Spinning, aerobics, strength training, sauna</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact">
        <Button className="bg-[#FF3366] hover:bg-[#FF3366]/90 text-white">Schedule a Tour</Button>
        </Link>
        <Link href="/contact">
        <Button variant="outline" className="border-[#FF3366] text-[#FF3366] hover:bg-[#FF3366]/10">
          Get Directions
        </Button>
        </Link>
      </div>
    </div>
  </div>
  )
}
