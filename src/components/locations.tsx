import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

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
          <div className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF3366] transition-all duration-300 group">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/30 to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
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
                Our women's facility offers a supportive, empowering environment designed specifically for women of all
                fitness levels. With dedicated trainers and specialized equipment, we're committed to helping you
                achieve your fitness goals in comfort.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">123 Fitness Boulevard, Gym City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400">Mon-Fri: 5am - 10pm</p>
                    <p className="text-gray-400">Sat-Sun: 7am - 8pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-gray-400">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-[#FF3366] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Amenities</h4>
                    <p className="text-gray-400">Women's locker rooms, spa, childcare</p>
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

          {/* Men's Location */}
          <div className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#33CCCC] transition-all duration-300 group">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#33CCCC]/30 to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
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
                    <p className="text-gray-400">456 Strength Avenue, Gym City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400">Mon-Fri: 5am - 11pm</p>
                    <p className="text-gray-400">Sat-Sun: 6am - 9pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#33CCCC] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-gray-400">(123) 456-7891</p>
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
        </div>
      </div>
    </section>
  )
}
