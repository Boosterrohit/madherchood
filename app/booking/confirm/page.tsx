"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { DateRangePicker } from "@/app/components/ui/date-range-picker"
import type { DateRange } from "react-day-picker"
import { Car, Calendar, CreditCard, MapPin, Clock, Shield, Info } from "lucide-react"

export default function BookingConfirmationPage() {
  const router = useRouter()
  const [date, setDate] = useState<DateRange>()
  const [loading, setLoading] = useState(false)

  const handleConfirmBooking = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/booking/success")
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">Confirm Your Booking</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Vehicle Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Vehicle</span>
                  <span>Toyota Camry 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">License Plate</span>
                  <span>ABC-1234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Location</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Kathmandu, Bagmati
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Rental Period
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DateRangePicker date={date} onDateChange={setDate} />
                <div className="flex items-center justify-between mt-4">
                  <span className="font-medium">Duration</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-secondary" />3 Days
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Insurance & Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span>Basic Insurance included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-secondary" />
                    <span>24/7 Roadside Assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Daily Rate</span>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration (3 days)</span>
                  <span>$150.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <span>$30.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>$20.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$200.00</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleConfirmBooking} disabled={loading}>
                  {loading ? "Processing..." : "Confirm Booking"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

