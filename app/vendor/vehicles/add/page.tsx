"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Textarea } from "@/app/components/ui/textarea"
import { Switch } from "@/app/components/ui/switch"

export default function AddNewVehiclePage() {
  const router = useRouter()
  const [vehicleData, setVehicleData] = useState({
    name: "",
    type: "",
    make: "",
    model: "",
    year: "",
    color: "",
    licensePlate: "",
    dailyRate: "",
    capacity: "",
    transmission: "automatic",
    fuelType: "",
    mileage: "",
    features: "",
    description: "",
    isAvailable: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setVehicleData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setVehicleData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setVehicleData((prev) => ({ ...prev, isAvailable: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Submitting vehicle data:", vehicleData)
    // After successful submission, redirect to the vehicles list
    router.push("/vendor/vehicles")
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Add New Vehicle</h1>
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Vehicle Name</Label>
                <Input id="name" name="name" value={vehicleData.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="type">Vehicle Type</Label>
                <Select name="type" value={vehicleData.type} onValueChange={handleSelectChange("type")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="make">Make</Label>
                <Input id="make" name="make" value={vehicleData.make} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" name="model" value={vehicleData.model} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  value={vehicleData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <Input id="color" name="color" value={vehicleData.color} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="licensePlate">License Plate</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  value={vehicleData.licensePlate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="dailyRate">Daily Rate ($)</Label>
                <Input
                  id="dailyRate"
                  name="dailyRate"
                  type="number"
                  value={vehicleData.dailyRate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="capacity">Capacity (persons)</Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  value={vehicleData.capacity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="transmission">Transmission</Label>
                <Select
                  name="transmission"
                  value={vehicleData.transmission}
                  onValueChange={handleSelectChange("transmission")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select transmission type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Select name="fuelType" value={vehicleData.fuelType} onValueChange={handleSelectChange("fuelType")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gasoline">Gasoline</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mileage">Mileage</Label>
                <Input
                  id="mileage"
                  name="mileage"
                  type="number"
                  value={vehicleData.mileage}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="features">Features (comma-separated)</Label>
              <Input id="features" name="features" value={vehicleData.features} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={vehicleData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="isAvailable" checked={vehicleData.isAvailable} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="isAvailable">Available for Rent</Label>
            </div>
            <Button type="submit">Add Vehicle</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

