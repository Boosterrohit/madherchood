"use client"

import { useState, useEffect, useRef } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { MapPin, Calendar, Car } from "lucide-react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import VehicleCard from "./VehicleCard"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface Vehicle {
  id: number
  name: string
  type: string
  price: number
  position: [number, number]
  isAvailable: boolean
  image: string
}

const vehicles: Vehicle[] = [
  { id: 1, name: "Toyota Camry", type: "car", position: [27.7172, 85.3240], isAvailable: true, price: 50, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Honda CBR", type: "bike", position: [27.6818, 85.3182], isAvailable: false, price: 30, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Tesla Model 3", type: "car", position: [27.7024, 85.3078], isAvailable: true, price: 80, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Yamaha R1", type: "bike", position: [27.6796, 85.3371], isAvailable: true, price: 40, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "BMW 3 Series", type: "car", position: [27.7097, 85.3126], isAvailable: false, price: 70, image: "/placeholder.svg?height=200&width=200" }
]

export default function VehicleSearch() {
  const [location, setLocation] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const locationInputRef = useRef<HTMLInputElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!location) {
      setSuggestions([])
      return
    }
    fetch(`https://nominatim.openstreetmap.org/search?q=${location},Nepal&format=json&countrycodes=np`)
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data.map((item: any) => item.display_name))
      })
  }, [location])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = vehicles.filter(
      (vehicle) => (vehicleType ? vehicle.type === vehicleType : true) && vehicle.isAvailable
    )
    setFilteredVehicles(filtered)
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-3xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              ref={locationInputRef}
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
            {isClient && suggestions.length > 0 && (
              <ul className="absolute bg-white border w-full mt-1 z-10 max-h-40 overflow-y-auto rounded-md shadow-md transition-all ease-in-out duration-200">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer transition duration-200"
                    onClick={() => {
                      setLocation(suggestion)
                      setSuggestions([])
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Vehicle Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="bike">Bike</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="pl-10" />
          </div>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="pl-10" />
          </div>
        </div>
        <Button type="submit" className="w-full mt-4">Search Vehicles</Button>
      </form>

      {isClient && filteredVehicles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  )
}

