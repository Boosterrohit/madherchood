"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Search } from "lucide-react"

// Dummy data for nearby vehicles in Bagmati Zone, Nepal
const nearbyVehicles: { id: number; name: string; type: string; position: [number, number]; isAvailable: boolean }[] = [
  { id: 1, name: "Toyota Camry", type: "car", position: [27.7172, 85.324], isAvailable: true },
  { id: 2, name: "Honda CBR", type: "bike", position: [27.6818, 85.3182], isAvailable: false },
  { id: 3, name: "Ford F-150", type: "car", position: [27.7024, 85.3078], isAvailable: true },
  { id: 4, name: "Vespa Primavera", type: "bike", position: [27.6796, 85.3371], isAvailable: true },
  { id: 5, name: "Tesla Model 3", type: "car", position: [27.7097, 85.3126], isAvailable: true },
]

export default function NearbyVehiclesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredVehicles, setFilteredVehicles] = useState(nearbyVehicles)

  useEffect(() => {
    delete L.Icon.Default.prototype.options.iconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    })
  }, [])

  useEffect(() => {
    setFilteredVehicles(
      nearbyVehicles.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehicle.type.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
  }, [searchTerm])

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Vehicle Locations</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Vehicles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by name or type"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] w-full">
            <MapContainer center={[27.7172, 85.324]} zoom={12} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredVehicles.map((vehicle) => (
                <Marker
                  key={vehicle.id}
                  position={vehicle.position}
                  icon={L.divIcon({
                    className: "custom-icon",
                    html: `
                      <div class="w-8 h-8 rounded-full ${vehicle.isAvailable ? "bg-green-500" : "bg-red-500"} flex items-center justify-center text-white">
                        ${vehicle.type === "car" ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.7a1 1 0 0 0-.8.4L2.2 11l-5.16.86a1 1 0 0 0-.84.99V16h3m16 0H6"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>'}
                      </div>
                    `,
                  })}
                >
                  <Popup>
                    <div>
                      <h3 className="font-bold">{vehicle.name}</h3>
                      <p>Type: {vehicle.type}</p>
                      <p>Status: {vehicle.isAvailable ? "Available" : "Not Available"}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

