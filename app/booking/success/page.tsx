import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function BookingSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <Card className="max-w-lg mx-auto text-center">
        <CardContent className="pt-16 pb-12 space-y-6">
          <CheckCircle2 className="h-16 w-16 text-secondary mx-auto" />
          <h1 className="text-3xl font-bold text-primary">Booking Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Your booking has been successfully confirmed. We've sent a confirmation email with all the details.
          </p>
          <div className="bg-muted p-4 rounded-lg mt-6">
            <p className="font-medium">Booking Reference:</p>
            <p className="text-2xl font-bold text-primary">BK12345</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/user/bookings">
            <Button variant="outline">View Booking</Button>
          </Link>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

