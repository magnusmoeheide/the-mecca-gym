import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black pt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-09%20at%2022.22.44-4WoK4xo6OGZDzxy4uGCMaRdC6HLfTC.png"
                alt="The MeCCa Gym Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              The MeCCa Gym is dedicated to helping you achieve your fitness goals through expert guidance,
              state-of-the-art equipment, and a supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF3366] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  About Us
                </Link>
              </li> */}
              {/* <li>
                <Link href="/classes" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Trainers
                </Link>
              </li> */}
              {/* <li>
                <Link href="/membership" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Membership
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strength-training" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                 Strength Training
                </Link>
              </li>
              <li>
                <Link href="/aerobics" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Aerobics
                </Link>
              </li>
              <li>
                <Link href="/boxing" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Boxing
                </Link>
              </li>
              {/* <li>
                <Link href="/personal-training" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link href="/group-classes" className="text-gray-400 hover:text-[#33CCCC] transition-colors">
                  Group Classes
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF3366] mr-3 mt-1" />
                <span className="text-gray-400">Nairobi Eastleigh 4th Street Al Bait Apartment, 1st floor</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#FF3366] mr-3" />
                <span className="text-gray-400">0729779137</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#FF3366] mr-3" />
                <span className="text-gray-400">info@themeccagym.com</span>
              </li>
              <li>
                <h4 className="font-semibold mb-2">Hours:</h4>
                <p className="text-gray-400">Mon-Fri: 5am - 10pm</p>
                <p className="text-gray-400">Sat-Sun: 7am - 8pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} The MeCCa Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
