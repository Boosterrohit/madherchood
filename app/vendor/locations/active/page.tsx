"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { MapPin, Car, Route, Building } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const MapWithNoSSR = dynamic(() => import("@/app/components/location-map"), {
  ssr: false,
})

const locations = [
  {
    id: 1,
    name: "Kathmandu Branch",
    address: "Thamel, Kathmandu",
    coordinates: [27.7172, 85.324],
    activeVehicles: 5,
    totalBookings: 150,
  },
  {
    id: 2,
    name: "Lalitpur Branch",
    address: "Patan, Lalitpur",
    coordinates: [27.6588, 85.3247],
    activeVehicles: 8,
    totalBookings: 220,
  },
]

export default function ActiveLocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Active Locations</h1>
        <Button>Add New Location</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{locations.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
            <Car className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{locations.reduce((acc, loc) => acc + loc.activeVehicles, 0)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Routes</CardTitle>
            <Route className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Coverage Area</CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 km²</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Location Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full rounded-lg overflow-hidden">
              <MapWithNoSSR locations={locations} />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Location Details</CardTitle>
              <div className="w-72">
                <Label htmlFor="search" className="sr-only">
                  Search locations
                </Label>
                <Input
                  id="search"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {locations
                .filter((location) => location.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((location) => (
                  <Card key={location.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{location.name}</h3>
                          <p className="text-sm text-muted-foreground">{location.address}</p>
                        </div>
                        <Badge variant="secondary">{location.activeVehicles} vehicles</Badge>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Total Bookings:</span> {location.totalBookings}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
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

