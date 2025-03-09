import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Briefcase, Umbrella, Truck, Users } from "lucide-react"

export default function UseCases() {
  const cases = [
    { icon: Briefcase, title: "Business Travel", description: "Reliable vehicles for your business trips" },
    { icon: Umbrella, title: "Vacation Rentals", description: "Perfect cars for your family vacations" },
    { icon: Truck, title: "Moving Assistance", description: "Vans and trucks for your moving needs" },
    { icon: Users, title: "Group Travel", description: "Spacious vehicles for group outings" },
  ]

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((useCase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <useCase.icon className="mr-2" />
                {useCase.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{useCase.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

