import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Shield, Users, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | VehicleRent",
  description: "Learn about VehicleRent - your trusted platform for car and bike rentals.",
  openGraph: {
    title: "About Us | VehicleRent",
    description: "Learn about VehicleRent - your trusted platform for car and bike rentals.",
    images: ["/og-image.jpg"],
  },
}

const features = [
  {
    icon: Shield,
    title: "Secure Rentals",
    description: "All vehicles are insured and regularly maintained for your safety.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of satisfied users in our growing community.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our customer support team is always here to help you.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "All our vendors are verified and vehicles are quality checked.",
  },
]

const stats = [
  { label: "Active Users", value: "10,000+" },
  { label: "Cities", value: "50+" },
  { label: "Vehicles", value: "5,000+" },
  { label: "Successful Rentals", value: "25,000+" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto pb-12 px-4 my-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About VehicleRent</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're revolutionizing the way people rent vehicles by connecting trusted vendors with users looking for
          convenient and reliable transportation solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            // src="/about-image.jpg"
            src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww'
            alt="About VehicleRent"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4">
            <p>
              Founded in 2020, VehicleRent emerged from a simple idea: make vehicle rental accessible, transparent, and
              hassle-free for everyone.
            </p>
            <p>
              What started as a small platform in one city has now grown into a nationwide network of trusted vendors
              and satisfied customers.
            </p>
            <p>
              Our mission is to provide reliable, affordable, and convenient vehicle rental solutions while building a
              sustainable and trustworthy community.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="text-center py-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="w-8 h-8 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

