import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

// This would typically come from a database or state management
const bookingDetails = {
  id: "B12345",
  vehicleName: "Toyota Camry",
  startDate: "2023-06-15",
  endDate: "2023-06-20",
  totalPrice: 250,
  vendor: "ABC Rentals",
}

export default function BookingConfirmationPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
          <CardDescription>Your booking has been successfully placed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>
              <strong>Booking ID:</strong> {bookingDetails.id}
            </p>
            <p>
              <strong>Vehicle:</strong> {bookingDetails.vehicleName}
            </p>
            <p>
              <strong>Start Date:</strong> {bookingDetails.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {bookingDetails.endDate}
            </p>
            <p>
              <strong>Total Price:</strong> ${bookingDetails.totalPrice}
            </p>
            <p>
              <strong>Vendor:</strong> {bookingDetails.vendor}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/user/bookings">
            <Button variant="outline">View All Bookings</Button>
          </Link>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

