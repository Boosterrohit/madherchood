import VehicleCard from "../components/element/VehicleCard"

// This would typically come from a database
const vehicles = [
  { id: 1, name: "Toyota Camry", type: "Car", price: 50, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Honda CBR", type: "Bike", price: 30, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Ford Mustang", type: "Car", price: 80, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Yamaha R1", type: "Bike", price: 40, image: "/placeholder.svg?height=200&width=300" },
]

export default function VehiclesPage() {
  return (
    <div className="container mx-auto mt-32">
      <h1 className="text-3xl font-bold">Available Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

