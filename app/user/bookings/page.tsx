"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"
import { MapContainer, TileLayer } from "react-leaflet"
import VehicleMarker from "@/app/components/element/VehicleMarker"
import "leaflet/dist/leaflet.css"
import { VehicleMap } from "@/app/components/element/VehicleMap"

// Dummy data for bookings
const bookings = [
  {
    id: 1,
    vehicle: "Toyota Camry",
    type: "car" as const,
    startDate: "2024-02-15",
    endDate: "2024-02-18",
    status: "Active",
    location: [27.6796, 85.3371] as [number, number],
    price: 150,
  },
  {
    id: 2,
    vehicle: "Honda CBR",
    type: "bike" as const,
    startDate: "2024-02-20",
    endDate: "2024-02-22",
    status: "Upcoming",
    location: [27.7097, 85.3126] as [number, number],
    price: 80,
  },
]

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState(bookings[0])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Bookings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Current & Upcoming Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedBooking.id === booking.id ? "bg-primary/10 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedBooking(booking)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{booking.vehicle}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {booking.startDate} - {booking.endDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: 3 days
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      New York City
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Location</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="h-[400px] w-full">
                <VehicleMap 
                  vehicles={bookings.map(booking => ({
                    id: booking.id,
                    name: booking.vehicle,
                    type: booking.type,
                    position: booking.location,
                    isAvailable: booking.status === "Active",
                    price: booking.price
                  }))}
                />
              </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

