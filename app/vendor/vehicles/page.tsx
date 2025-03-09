"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Trash2 } from "lucide-react"
import { VehicleMap } from "@/app/components/element/VehicleMap"

interface Vehicle {
  id: number
  name: string
  type: "car" | "bike"
  position: [number, number]
  isAvailable: boolean
  price: number
}

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
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
  ])

  const markerToRemove = useRef<any>(null)

  const removeVehicle = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
    if (markerToRemove.current) {
      markerToRemove.current.setMap(null)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Vehicles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>{vehicle.name}</TableCell>
                    <TableCell className="capitalize">{vehicle.type}</TableCell>
                    <TableCell>${vehicle.price}/hr</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        vehicle.isAvailable 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {vehicle.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => removeVehicle(vehicle.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <VehicleMap vehicles={vehicles} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default VehiclesPage