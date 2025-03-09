import React from 'react'
import AboutImg1 from '../../../public/asset/images/aboutImg1.jpg'
import AboutImg2 from '../../../public/asset/images/aboutImg2.jpg'
import booking from '../../../public/asset/images/booking.png'
import car from '../../../public/asset/images/car.png'
import { ArrowRight, ShipWheel, Sparkle, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
const AboutUs = () => {
  return (
    <section className='h-auto pb-32 pt-16'>
          <div className='grid grid-cols-2 gap-1 items-center'>
          <div className='relative h-full'>
                  <div>
                      <img src={AboutImg1.src} alt="image" className='rounded-full'/>
                      <img src={AboutImg2.src} alt="image" className='rounded-full absolute top-56   right-16'/>
                  </div>
                  <ShipWheel size={100} className='text-primary absolute top-20 right-32' />
                  <Sparkles className='absolute left-60 bottom-7' size={45}/>
          </div>
          <div className=''>
                  <h2 className='font-bold text-primary text-2xl flex items-center gap-2'>
                      <Sparkle />About us</h2>
                  <h3 className='font-bold text-5xl py-2 leading-tight'>
                  Your trusted partner in
                  reliable car rental
                  </h3>
                  <div>
                      <p className='text-gray-600 py-1'>
                      Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor Dolor
                      </p>
                      <div>
                          <div className='py-10'>
                              <div className='flex justify-between items-center gap-8 w-full'>
                                  <div className='flex justify-center items-center w-24 h-16 bg-primary-icon hover:bg-primary cursor-pointer transition-all duration-400 rounded-full'>
                                  <img src={booking.src} alt="booking" className='w-14 h-14 '/>
                                  </div>
                                  <div>
                                      <h6 className='font-bold text-xl py-2'>
                                      Easy Booking Process
                                      </h6>
                                      <p>
                                      We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service
                                      </p>
                                     </div>
                              </div>
                          </div>
                          <hr />
                          <div className='py-10'>
                              <div className='flex justify-between items-center gap-8 w-full'>
                                  <div className='flex justify-center items-center w-24 h-16 bg-primary-icon hover:bg-primary cursor-pointer transition-all duration-400 rounded-full'>
                                  <img src={car.src} alt="booking" className='w-14 h-14'/>
                                  </div>
                                  <div>
                                      <h6 className='font-bold text-xl py-2'>
                                      Convenient Pick-Up & Return Process
                                      </h6>
                                      <p className='text-gray-600'>
                                      We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service
                                      </p>
                                     </div>
                              </div>
                          </div>
                          <div className="flex group my-4 w-fit">
              <Button className="bg-primary font-bold py-6 rounded-full px-6">Contact Us</Button>
              <div className="bg-primary group-hover:bg-slate-800 transition-all duration-300 group-hover:rotate-45 font-bold w-12 h-12 rounded-full flex justify-center items-center">
                <ArrowRight size={30}  className="text-white -rotate-45" />
                </div>
            </div>
                      </div>
                  </div>
          </div>
</div>
    </section>
  )
}

export default AboutUs
