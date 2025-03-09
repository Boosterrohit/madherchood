import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Search, Calendar, Car, CreditCard, Star } from "lucide-react"

export default function BusinessProcess() {
  const steps = [
    { icon: Search, title: "Search", description: "Find the perfect vehicle" },
    { icon: Calendar, title: "Book", description: "Choose your dates" },
    { icon: Car, title: "Pickup", description: "Get your vehicle" },
    { icon: Star, title: "Enjoy", description: "Have a great trip" },
    { icon: CreditCard, title: "Return", description: "Drop off and pay" },
  ]

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <step.icon className="mr-2" />
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

