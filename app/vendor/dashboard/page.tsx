"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Car, DollarSign, Users, MapPin, Calendar, FileText } from "lucide-react"
import TransactionHistory from "@/app/components/element/TransactionHistory"
import VehicleManagement from "@/app/components/element/VehicleManagement"
import Analytics from "@/app/components/element/Analytics"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import type React from "react"
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import NearbyVehiclesPage from "@/app/nearby-vehicles/page"

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const mapRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    // No need to delete _getIconUrl as it does not exist on L.Icon.Default
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    })
  }, [])
  const bagmatiCoordinates: [number, number] = [27.7172, 85.3240];
  const addVehicle = () => {
    router.push("/vendor/vehicles/add")
  }

  const viewBookings = () => {
    router.push("/vendor/bookings")
  }

  const generateReport = () => {
    router.push("/vendor/reports/generate")
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Vendor Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4">
          <TabsTrigger value="overview" className="w-full">
            Overview
          </TabsTrigger>
          <TabsTrigger value="vehicles" className="w-full">
            Vehicles
          </TabsTrigger>
          <TabsTrigger value="transactions" className="w-full">
            Transactions
          </TabsTrigger>
          <TabsTrigger value="analytics" className="w-full">
            Analytics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Vehicles"
              icon={<Car className="h-6 w-6" />}
              value="15"
              link="/vendor/vehicles"
            />
            <DashboardCard
              title="Total Revenue"
              icon={<DollarSign className="h-6 w-6" />}
              value="$5,230"
              link="/vendor/revenue"
            />
            <DashboardCard
              title="Active Rentals"
              icon={<Users className="h-6 w-6" />}
              value="8"
              link="/vendor/rentals"
            />
            <DashboardCard title="Locations" icon={<MapPin className="h-6 w-6" />} value="3" link="/vendor/locations" />
          </div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button onClick={addVehicle} className="flex-1">
                <Car className="mr-2 h-4 w-4" /> Add New Vehicle
              </Button>
              <Button onClick={viewBookings} variant="outline" className="flex-1">
                <Calendar className="mr-2 h-4 w-4" /> View Bookings
              </Button>
              <Button onClick={generateReport} variant="outline" className="flex-1">
                <FileText className="mr-2 h-4 w-4" /> Generate Report
              </Button>
            </CardContent>
          </Card>
          <Card>
            {/* <CardHeader>
              <CardTitle>Vehicle Locations</CardTitle>
            </CardHeader> */}
            <CardContent>
             <NearbyVehiclesPage />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vehicles">
          <VehicleManagement />
        </TabsContent>
        <TabsContent value="transactions">
          <TransactionHistory userType="vendor" />
        </TabsContent>
        <TabsContent value="analytics">
          <Analytics />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={[
                      { name: "Jan", revenue: 1000 },
                      { name: "Feb", revenue: 1500 },
                      { name: "Mar", revenue: 2000 },
                      { name: "Apr", revenue: 1800 },
                      { name: "May", revenue: 2200 },
                      { name: "Jun", revenue: 2500 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bookings by Vehicle Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { name: "Car", bookings: 65 },
                      { name: "SUV", bookings: 59 },
                      { name: "Van", bookings: 80 },
                      { name: "Truck", bookings: 81 },
                      { name: "Motorcycle", bookings: 56 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DashboardCard({
  title,
  icon,
  value,
  link,
}: {
  title: string
  icon: React.ReactNode
  value: string
  link: string
}) {
  return (
    <Link href={link}>
      <Card className="hover:shadow-lg transition-shadow bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-800">{value}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

