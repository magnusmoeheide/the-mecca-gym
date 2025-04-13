import { Check } from "lucide-react"
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
            state-of-the-art facilities and expert trainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-gray-400 mb-6">Perfect for beginners</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">ksh 4,999</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Access to gym equipment</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>2 group classes per week</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Locker room access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Fitness assessment</span>
              </li>
            </ul>
            <Link href="start-now">
            <Button className="w-full bg-gradient-to-r from-[#FF3366] to-[#33CCCC] hover:from-[#FF3366]/90 hover:to-[#33CCCC]/90 text-white">
              Join Now
            </Button>
            </Link>
          </div>

          <div className="bg-black p-8 rounded-xl border-2 border-[#33CCCC] transform scale-105 relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF3366] to-[#33CCCC] text-white text-sm font-bold py-1 px-4 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-400 mb-6">Best value for serious fitness</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">ksh 7,999</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#33CCCC] mr-3" />
                <span>Unlimited gym access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#33CCCC] mr-3" />
                <span>Unlimited group classes</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#33CCCC] mr-3" />
                <span>1 personal training session/month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#33CCCC] mr-3" />
                <span>Nutrition consultation</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#33CCCC] mr-3" />
                <span>Access to premium amenities</span>
              </li>
            </ul>
            <Link href="/start-now">
            <Button className="w-full bg-gradient-to-r from-[#33CCCC] to-[#FF3366] hover:from-[#33CCCC]/90 hover:to-[#FF3366]/90 text-white">
             Join Now
            </Button>
            </Link>
          </div>

          {/* Elite Plan */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-[#FF3366] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <p className="text-gray-400 mb-6">For the dedicated athlete</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">ksh 11,999</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>24/7 gym access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Unlimited group classes</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>4 personal training sessions/month</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>Custom nutrition & workout plan</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-[#FF3366] mr-3" />
                <span>VIP amenities & priority booking</span>
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
