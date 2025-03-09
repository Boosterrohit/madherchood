"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { MapPin, Car, Building, Route } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const locations = [
  {
    id: 1,
    name: "Downtown Branch",
    address: "123 Main St, New York, NY",
    coordinates: [40.7128, -74.006],
    activeVehicles: 5,
    totalBookings: 150,
  },
  {
    id: 2,
    name: "Airport Terminal",
    address: "456 Airport Rd, New York, NY",
    coordinates: [40.7148, -73.996],
    activeVehicles: 8,
    totalBookings: 220,
  },
  // Add more locations as needed
]

export default function LocationsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Location Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Routes</CardTitle>
            <Route className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coverage Area</CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 mi</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <MapContainer center={[40.7128, -74.006]} zoom={12} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location) => (
                  <Marker key={location.id} position={location.coordinates}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">{location.name}</h3>
                        <p className="text-sm">{location.address}</p>
                        <p className="text-sm">Active Vehicles: {location.activeVehicles}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Location Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {locations.map((location) => (
                <Card key={location.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{location.name}</h3>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      <Badge variant="default" className="bg-primary">
                        {location.activeVehicles} vehicles
                      </Badge>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Total Bookings: {location.totalBookings}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

