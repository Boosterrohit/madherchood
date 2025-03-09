"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import VehicleMarker from "./VehicleMarker"

// Dummy data for nearby vehicles
const nearbyVehicles: { id: number, name: string, type: "car" | "bike", position: [number, number], isAvailable: boolean, price: number }[] = [
  { 
    id: 1, 
    name: "Toyota Camry", 
    type: "car" as const, 
    position: [27.7172, 85.3240], // Kathmandu center
    isAvailable: true, 
    price: 50 
  },
  { 
    id: 2, 
    name: "Honda CBR", 
    type: "bike" as const, 
    position: [27.6818, 85.3182], // Patan area
    isAvailable: false, 
    price: 30 
  },
  { 
    id: 3, 
    name: "Tesla Model 3", 
    type: "car" as const, 
    position: [27.7024, 85.3078], // Swayambhu area
    isAvailable: true, 
    price: 80 
  },
  { 
    id: 4, 
    name: "Yamaha R1", 
    type: "bike" as const, 
    position: [27.6796, 85.3371], // Satdobato area
    isAvailable: true, 
    price: 40 
  },
  { 
    id: 5, 
    name: "BMW 3 Series", 
    type: "car" as const, 
    position: [27.7097, 85.3126], // Thamel area
    isAvailable: false, 
    price: 70 
  }
]

export default function RentalMap() {
  const handleBooking = (vehicleId: number) => {
    console.log("Booking vehicle:", vehicleId)
    // Implement booking logic
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Vehicles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] w-full">
          <MapContainer center={[40.7128, -74.006]} zoom={14} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {nearbyVehicles.map((vehicle) => (
              <VehicleMarker
                key={vehicle.id}
                position={vehicle.position}
                type={vehicle.type}
                name={vehicle.name}
                isAvailable={vehicle.isAvailable}
                price={vehicle.price}
                onBook={() => handleBooking(vehicle.id)}
                showBookButton
              />
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  )
}

