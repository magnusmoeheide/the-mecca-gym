"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/mecca-logo.jpeg"
              alt="The MeCCa Gym Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FF3366] transition-colors">
              Home
            </Link>
            <Link href="/strength-training" className="text-white hover:text-[#FF3366] transition-colors">
              Strength Training
            </Link>
            <Link href="/aerobics" className="text-white hover:text-[#FF3366] transition-colors">
              Aerobics
            </Link>
            <Link href="/boxing" className="text-white hover:text-[#FF3366] transition-colors">
              Boxing
            </Link>
            {/* <Link href="/about" className="text-white hover:text-[#FF3366] transition-colors">
              About
            </Link> */}
            <Link href="/contact" className="text-white hover:text-[#FF3366] transition-colors">
              Contact
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white"
            >
              <Link href="/start-now">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/strength-training"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Strength Training
            </Link>
            <Link
              href="/aerobics"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Aerobics
            </Link>
            <Link
              href="/boxing"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Boxing
            </Link>
            {/* <Link
              href="/about"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link> */}
            <Link
              href="/contact"
              className="text-white hover:text-[#FF3366] py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/start-now">Join Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
