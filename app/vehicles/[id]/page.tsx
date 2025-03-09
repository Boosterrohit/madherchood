import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CheckIcon, MapPinIcon, StarIcon } from "lucide-react";
import Link from "next/link";

// This would typically come from a database
const vehicle = {
  id: 1,
  name: "Toyota Camry",
  type: "Car",
  price: 50,
  image: "/placeholder.svg?height=400&width=600",
  description: "A comfortable and reliable sedan, perfect for city driving and long trips.",
  features: ["Automatic transmission", "Air conditioning", "Bluetooth connectivity", "Backup camera"],
  vendor: {
    name: "ABC Rentals",
    rating: 4.5,
  },
}

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <Card className="md:w-3/4 mx-auto shadow-lg"> {/* Added shadow */}
        <CardHeader className="p-6 border-b border-gray-200"> {/* Added border */}
          <div className="flex items-center justify-between"> {/* Flexbox for title and price */}
            <div>
              <CardTitle className="text-2xl font-bold">{vehicle.name}</CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-1">{vehicle.type}</CardDescription> {/* Added margin top */}
            </div>
            <div className="text-xl font-bold text-gray-800">${vehicle.price}/day</div> {/* Price aligned to right */}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover mb-6"
              />
            </div>
            <div className="md:pl-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center"><MapPinIcon className="h-5 w-5 mr-2 text-gray-500" /> Description</h3> {/* Icon added */}
              <p className="text-gray-700 mb-5">{vehicle.description}</p>

              <h3 className="text-xl font-semibold mb-3 flex items-center"><CheckIcon className="h-5 w-5 mr-2 text-gray-500" /> Features</h3> {/* Icon added */}
              <ul className="list-disc list-inside text-gray-700 mb-5 pl-6"> {/* Added padding left for list */}
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3 flex items-center"><StarIcon className="h-5 w-5 mr-2 text-gray-500" /> Vendor</h3> {/* Icon added */}
              <div className="text-gray-700">
                <p className="mb-2">Name: {vehicle.vendor.name}</p>
                <div className="flex items-center"> {/* Flexbox for rating */}
                  <p>Rating: {vehicle.vendor.rating}/5</p>
                  <StarIcon className="h-5 w-5 ml-2 text-yellow-400" /> {/* Star icon for rating */}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 border-t border-gray-200"> {/* Added border */}
        <Link href="/booking/confirm" legacyBehavior> 
        <a className="w-full  hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300">
          Book Now
        </a>
</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

