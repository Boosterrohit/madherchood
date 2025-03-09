"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Badge } from "@/app/components/ui/badge"
import { Calendar, Car, DollarSign, User, Search } from "lucide-react"

const activityData = [
  {
    id: 1,
    type: "booking",
    description: "New booking for Toyota Camry",
    date: "2023-06-15",
    user: "John Doe",
  },
  {
    id: 2,
    type: "return",
    description: "Vehicle returned: Honda Civic",
    date: "2023-06-14",
    user: "Jane Smith",
  },
  {
    id: 3,
    type: "payment",
    description: "Payment received for booking #1234",
    date: "2023-06-13",
    user: "Mike Johnson",
  },
  {
    id: 4,
    type: "maintenance",
    description: "Scheduled maintenance for Ford F-150",
    date: "2023-06-12",
    user: "System",
  },
  {
    id: 5,
    type: "user",
    description: "New user registration",
    date: "2023-06-11",
    user: "Emily Brown",
  },
]

export default function VendorActivityPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredActivity = activityData.filter(
    (activity) =>
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.user.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="h-4 w-4" />
      case "return":
        return <Car className="h-4 w-4" />
      case "payment":
        return <DollarSign className="h-4 w-4" />
      case "maintenance":
        return <Car className="h-4 w-4" />
      case "user":
        return <User className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Activity Log</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by description or user"
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
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredActivity.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <Badge variant="outline" className="flex items-center gap-2">
                      {getActivityIcon(activity.type)}
                      {activity.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{activity.description}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

