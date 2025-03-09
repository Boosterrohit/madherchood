import { ArrowRight, Sparkle } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import {SERVICE_CARD} from '../../../data'
import { Button } from '../ui/button'
const OurServices = () => {
  return (
    <section className='bg-primary-icon p-14 rounded-3xl'>
    <h2 className=' font-bold text-primary text-2xl'>
              <span className='flex items-center gap-2 justify-center'>
              <Sparkle />Our Services
              </span>
          </h2>
          <h3 className='text-5xl font-bold flex flex-col justify-center items-center leading-tight py-5'>
              <span>
              Explore our wide range of
         </span>
              <span>
              rental services
         </span>
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
              {SERVICE_CARD.map((card) => (
                  <Card key={card.id} className='bg-white shadow-md rounded-2xl group hover:bg-primary transition-all duration-300'>
                      <CardHeader>
                          <div className='bg-primary-icon group-hover:bg-white w-16 h-16 rounded-full flex justify-center items-center my-3'>
                          <img src={card.img.src} alt="services" className='w-14 h-14'/>
                          </div>
                          <CardTitle className='py-2 text-xl font-bold tracking-wide group-hover:text-white'>{card.name}</CardTitle>
                          <CardDescription className='group-hover:text-white'>{card.paragraph}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                      <div className="flex group w-fit">
              <Button className="bg-primary group-hover:bg-slate-800 transition-all duration-300 group-hover:rotate-45 font-bold w-12 h-12 rounded-full flex justify-center items-center">
                <ArrowRight size={30}  className="text-white -rotate-45" />
                </Button>
            </div>
                      </CardFooter>
                  </Card>
              ))}
          </div>
          <div className='flex flex-col justify-center items-center py-14'>
              <p className='flex flex-col text-center'>
                  <span>
                  Discover our range of car rental services designed to meet all your travel needs.
                  </span> 
                  <span>
                  From a diverse fleet of vehicles to flexible rental plans.
                  </span>
              </p>
              <div className="flex group pt-8">
              <Button className="bg-primary font-bold py-6 rounded-full px-6">View All Services</Button>
              <div className="bg-primary group-hover:bg-slate-800 transition-all duration-300 group-hover:rotate-45 font-bold w-12 h-12 rounded-full flex justify-center items-center">
                <ArrowRight size={30}  className="text-white -rotate-45" />
                </div>
            </div>
          </div>
    </section>
  )
}

export default OurServices
