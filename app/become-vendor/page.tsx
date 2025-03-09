"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import { api } from "@/utils/api"
import { Shield, DollarSign, Settings, Users } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Protected Revenue",
    description: "Secure payments and insurance coverage for your vehicles.",
  },
  {
    icon: DollarSign,
    title: "Earn More",
    description: "Set your own rates and maximize your vehicle earnings.",
  },
  {
    icon: Settings,
    title: "Easy Management",
    description: "Powerful tools to manage your fleet and bookings.",
  },
  {
    icon: Users,
    title: "Large Customer Base",
    description: "Access thousands of potential customers looking for rentals.",
  },
]

export default function BecomeVendorPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    documents: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.becomeVendor(formData)
      console.log("Vendor application submitted:", response)
      // Handle success (show success message, redirect, etc.)
    } catch (error) {
      console.error("Error submitting vendor application:", error)
      // Handle error (show error message)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Become a Vendor</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join our platform as a vendor and start earning by renting out your vehicles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="flex items-start p-6">
                  <benefit.icon className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Apply as a Vendor</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="documents">Business Documents</Label>
                  <Input
                    id="documents"
                    type="file"
                    onChange={(e) => setFormData({ ...formData, documents: e.target.files?.[0] || null })}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Please upload business registration, insurance documents, etc.
                  </p>
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

