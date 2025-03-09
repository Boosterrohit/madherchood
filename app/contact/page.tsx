import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"

export const metadata: Metadata = {
  title: "Contact Us | VehicleRent",
  description: "Get in touch with VehicleRent for any questions or support.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto pb-12 px-4 mt-32">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                <strong>Address:</strong>
                <br />
                123 VehicleRent Street
                <br />
                New York, NY 10001
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +1 (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                support@vehiclerent.com
              </p>
              <p>
                <strong>Business Hours:</strong>
                <br />
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

