import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"

interface Vehicle {
  id: number
  name: string
  type: string
  price: number
  image: string
  isAvailable: boolean
}

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p>Type: {vehicle.type}</p>
        <p>Price: ${vehicle.price}/day</p>
        <p className={`text-sm ${vehicle.isAvailable ? "text-green-600" : "text-red-600"}`}>
        {vehicle.isAvailable ? "Available" : "Not Available"}
      </p>
      </CardContent>
      <CardFooter> 
        <Link href={vehicle.isAvailable ? `/vehicles/${vehicle.id}` : "#"}>
          <Button disabled={!vehicle.isAvailable}>View Details</Button>
        </Link>
      
      </CardFooter>
    </Card>
  )
}

