"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Car, Calendar, CreditCard, User } from "lucide-react"
import {
  LineChart,
  BarChart as RechartsBarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 1000 },
  { month: "Feb", revenue: 1500 },
  { month: "Mar", revenue: 1200 },
  { month: "Apr", revenue: 1800 },
  { month: "May", revenue: 2000 },
  { month: "Jun", revenue: 2400 },
]

const bookingData = [
  { month: "Jan", bookings: 10 },
  { month: "Feb", bookings: 15 },
  { month: "Mar", bookings: 12 },
  { month: "Apr", bookings: 18 },
  { month: "May", bookings: 20 },
  { month: "Jun", bookings: 24 },
]

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4">
          <TabsTrigger value="overview" className="w-full">
            Overview
          </TabsTrigger>
          <TabsTrigger value="rentals" className="w-full">
            Rentals
          </TabsTrigger>
          <TabsTrigger value="bookings" className="w-full">
            Bookings
          </TabsTrigger>
          <TabsTrigger value="payments" className="w-full">
            Payments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard title="Active Rentals" icon={<Car className="h-6 w-6" />} value="2" link="/user/rentals" />
            <DashboardCard
              title="Upcoming Bookings"
              icon={<Calendar className="h-6 w-6" />}
              value="1"
              link="/user/bookings"
            />
            <DashboardCard
              title="Total Spent"
              icon={<CreditCard className="h-6 w-6" />}
              value="$350"
              link="/user/payments"
            />
            <DashboardCard
              title="Loyalty Points"
              icon={<User className="h-6 w-6" />}
              value="250 pts"
              link="/user/profile"
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rental History</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
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
                <CardTitle>Booking Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="#82ca9d" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="rentals">
          <RentalsList />
        </TabsContent>
        <TabsContent value="bookings">
          <BookingsList />
        </TabsContent>
        <TabsContent value="payments">
          <PaymentHistory />
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
}: { title: string; icon: React.ReactNode; value: string; link: string }) {
  return (
    <Link href={link}>
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

function RentalsList() {
  const rentals = [
    { id: 1, vehicle: "Toyota Camry", startDate: "2023-06-01", endDate: "2023-06-05", status: "Active" },
    { id: 2, vehicle: "Honda CBR", startDate: "2023-06-10", endDate: "2023-06-12", status: "Upcoming" },
    { id: 3, vehicle: "Ford Mustang", startDate: "2023-05-20", endDate: "2023-05-25", status: "Completed" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Rentals</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {rentals.map((rental) => (
            <li key={rental.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">{rental.vehicle}</p>
                <p className="text-sm text-muted-foreground">
                  {rental.startDate} - {rental.endDate}
                </p>
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    rental.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : rental.status === "Upcoming"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {rental.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function BookingsList() {
  const bookings = [
    { id: 1, vehicle: "Tesla Model 3", date: "2023-07-01", status: "Confirmed" },
    { id: 2, vehicle: "BMW X5", date: "2023-07-15", status: "Pending" },
    { id: 3, vehicle: "Harley Davidson", date: "2023-08-05", status: "Confirmed" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">{booking.vehicle}</p>
                <p className="text-sm text-muted-foreground">{booking.date}</p>
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function PaymentHistory() {
  const payments = [
    { id: 1, amount: 150, date: "2023-06-05", method: "Credit Card" },
    { id: 2, amount: 200, date: "2023-05-20", method: "PayPal" },
    { id: 3, amount: 100, date: "2023-04-15", method: "Debit Card" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {payments.map((payment) => (
            <li key={payment.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">${payment.amount}</p>
                <p className="text-sm text-muted-foreground">{payment.date}</p>
              </div>
              <div>
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{payment.method}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

