import { Check, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Membership() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-transparent bg-clip-text">
              MEMBERSHIP PLANS
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the membership plan that fits your fitness goals and lifestyle. All plans include access to our
            state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">

          {/* Basic Plan */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Ladies Membership</h3>
            <p className="text-gray-400 mb-6">Strong women lift each other — and themselves.</p>
            <div className="mb-6 space-y-3">
            <div>
              <span className="text-4xl font-bold text-white">Ksh 4,000</span>
              <span className="text-gray-400 text-lg"> /month</span>
            </div>
            <div className="space-y-2 text-base">
              <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-white">2 months</span>
                <span className="text-gray-300">Ksh 7,000</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-white">3 months</span>
                <span className="text-gray-300">Ksh 9,000</span>
              </div>
            </div>
          </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Access to gym equipment</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Weekly group classes</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Locker room access</span>
              </li>
              <li className="flex items-center">
                <PlusCircle className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Boxing at a surcharge of ksh 500/month</span>
              </li>
            </ul>
            <Link href="start-now">
            <Button className="w-full bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
              Join Now
            </Button>
            </Link>
          </div>

          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Men's Membership</h3>
            <p className="text-gray-400 mb-6">Discipline is the bridge between goals and gains.</p>
   
            <div className="mb-6 space-y-3">
              <div>
                <span className="text-4xl font-bold text-white">Ksh 4,500</span>
                <span className="text-gray-400 text-lg"> /month</span>
              </div>
              <div className="space-y-2 text-base">
                <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-semibold text-white">2 months</span>
                  <span className="text-gray-300">Ksh 8,000</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-semibold text-white">3 months</span>
                  <span className="text-gray-300">Ksh 10,500</span>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Access to gym equipment</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Weekly group classes</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Locker room access</span>
              </li>
              <li className="flex items-center">
              <PlusCircle className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Boxing at a surcharge of ksh 500/month</span>
              </li>
            </ul>
            <Link href="/start-now">
            <Button className="w-full bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
             Join Now
            </Button>
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  )
}
