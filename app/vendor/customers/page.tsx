"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Badge } from "@/app/components/ui/badge"
import { Search } from "lucide-react"

const customersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    joinDate: "2023-01-15",
    totalBookings: 5,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 987 654 321",
    joinDate: "2023-02-20",
    totalBookings: 3,
    status: "inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 555 123 456",
    joinDate: "2023-03-10",
    totalBookings: 8,
    status: "active",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    phone: "+1 444 789 012",
    joinDate: "2023-04-05",
    totalBookings: 2,
    status: "active",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    phone: "+1 333 456 789",
    joinDate: "2023-05-01",
    totalBookings: 6,
    status: "inactive",
  },
]

export default function VendorCustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Customers</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by name, email, or phone"
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
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Total Bookings</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.joinDate}</TableCell>
                  <TableCell>{customer.totalBookings}</TableCell>
                  <TableCell>
                    <Badge variant={customer.status === "active" ? "default" : "secondary"} className="capitalize">
                      {customer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

