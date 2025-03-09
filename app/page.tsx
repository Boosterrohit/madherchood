
import { Shield, ThumbsUp, Clock, DollarSign, Sparkle, ArrowRight } from "lucide-react"
import { Button } from "./components/ui/button"
import VehicleSearch from "./components/element/VehicleSearch"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import AboutUs from "./components/element/AboutUs"
import OurServices from "./components/element/OurServices"
export default function Home() {
  return (
    
    <div className="container mx-auto px-4 py-8 mt-20">
      <section className="relative text-center mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/asset/videos/car.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 py-16 px-4">

        <div className="flex items-center justify-center my-4 gap-2">
            <Sparkle size={24} className="text-primary"/>
            <h1 className="text-4xl font-bold text-primary">Welcome to VehicleRent</h1>
       </div>
          <p className="text-white text-7xl font-bold flex flex-col leading-tight tracking-wide">
            <span>
            Looking to save more on
            </span>
            <span>
            your rental Vehicle?
            </span>
          </p>
          <p className="text-white flex flex-col py-10">
            <span>
            Whether you’re planning a weekend getaway, a business trip, or just need a reliable ride 
            </span>
            <span>
            for the day, we offers a wide range of vehicles to suit your needs.
            </span>
          </p>
          <div className="pb-10 flex items-center gap-6 justify-center">
            <div className="flex group">
              <Button className="bg-primary font-bold py-6 rounded-full px-6">Book A Rental</Button>
              <div className="bg-primary group-hover:bg-slate-800 transition-all duration-300 group-hover:rotate-45 font-bold w-12 h-12 rounded-full flex justify-center items-center">
                <ArrowRight size={30}  className="text-white -rotate-45" />
                </div>
            </div>
            <div className="flex group">
              <Button className="bg-white hover:bg-white text-black font-bold py-6 rounded-full px-6">Learn More</Button>
              <div className="bg-white group-hover:bg-slate-800 transition-all duration-300 group-hover:rotate-45 font-bold w-12 h-12 rounded-full flex justify-center items-center">
                <ArrowRight size={30}  className="text-black -rotate-45 group-hover:text-white" />
                </div>
            </div>
          </div>
          <div className="pt-16 pb-3">
          <VehicleSearch />
        </div>
        </div>
      </section>
      <AboutUs />
      <OurServices/>
      <section className="mb-12 mt-20">
      <div className="flex items-center justify-center my-4 gap-2 mb-6">
            <Sparkle size={24} className="text-primary"/>
            <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Safe and Reliable</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All our vehicles are regularly maintained and insured for your peace of mind.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ThumbsUp className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Wide Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose from a variety of vehicles to suit your needs and preferences.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Flexible Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Rent for as short as a day or as long as you need. You're in control.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="w-10 h-10 mb-2 text-primary" />
              <CardTitle>Competitive Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get the best value for your money with our transparent pricing.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

