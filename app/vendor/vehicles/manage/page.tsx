"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { MapContainer, TileLayer } from "react-leaflet"
import VehicleMarker from "@/app/components/element/VehicleMarker"
import "leaflet/dist/leaflet.css"

// Dummy data for managed vehicles
const managedVehicles = [
  { id: 1, name: "Toyota Camry", type: "car" as const, position: [40.7128, -74.006], isAvailable: true, price: 50 },
  { id: 2, name: "Honda CBR", type: "bike" as const, position: [40.7148, -74.008], isAvailable: false, price: 30 },
]

export default function ManageVehiclesPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    type: "car",
    price: "",
  })

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement add vehicle logic
    console.log("Adding vehicle:", newVehicle)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Manage Vehicles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddVehicle} className="space-y-4">
              <div>
                <Label htmlFor="name">Vehicle Name</Label>
                <Input
                  id="name"
                  value={newVehicle.name}
                  onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="type">Vehicle Type</Label>
                <Select
                  value={newVehicle.type}
                  onValueChange={(value) => setNewVehicle({ ...newVehicle, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price">Daily Rate ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newVehicle.price}
                  onChange={(e) => setNewVehicle({ ...newVehicle, price: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Add Vehicle
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vehicle Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {managedVehicles.map((vehicle) => (
                  <VehicleMarker
                    key={vehicle.id}
                    position={vehicle.position}
                    type={vehicle.type}
                    name={vehicle.name}
                    isAvailable={vehicle.isAvailable}
                    price={vehicle.price}
                  />
                ))}
              </MapContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

