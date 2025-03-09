"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { formatDate } from "@/utils/date"

// Mock data for bookings
const bookings = [
  {
    id: 1,
    customerName: "John Doe",
    vehicleName: "Toyota Camry",
    startDate: "2023-06-01",
    endDate: "2023-06-05",
    status: "Active",
    totalAmount: 250,
  },
  {
    id: 2,
    customerName: "Jane Smith",
    vehicleName: "Honda Civic",
    startDate: "2023-06-10",
    endDate: "2023-06-15",
    status: "Upcoming",
    totalAmount: 300,
  },
  {
    id: 3,
    customerName: "Bob Johnson",
    vehicleName: "Ford Mustang",
    startDate: "2023-05-20",
    endDate: "2023-05-25",
    status: "Completed",
    totalAmount: 400,
  },
]

export default function ViewBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedBooking, setSelectedBooking] = useState<(typeof bookings)[0] | null>(null)

  const filteredBookings = bookings.filter(
    (booking) =>
      (booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || booking.status.toLowerCase() === statusFilter),
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">View Bookings</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Booking Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input
              placeholder="Search by customer or vehicle"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Booking List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>{booking.vehicleName}</TableCell>
                  <TableCell>{formatDate(booking.startDate)}</TableCell>
                  <TableCell>{formatDate(booking.endDate)}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>${booking.totalAmount}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedBooking(booking)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Booking Details</DialogTitle>
                          <DialogDescription>Detailed information about the booking.</DialogDescription>
                        </DialogHeader>
                        {selectedBooking && (
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Booking ID:</span>
                              <span className="col-span-3">{selectedBooking.id}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Customer:</span>
                              <span className="col-span-3">{selectedBooking.customerName}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Vehicle:</span>
                              <span className="col-span-3">{selectedBooking.vehicleName}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Start Date:</span>
                              <span className="col-span-3">{formatDate(selectedBooking.startDate)}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">End Date:</span>
                              <span className="col-span-3">{formatDate(selectedBooking.endDate)}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Status:</span>
                              <span className="col-span-3">{selectedBooking.status}</span>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <span className="font-bold">Total Amount:</span>
                              <span className="col-span-3">${selectedBooking.totalAmount}</span>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
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

