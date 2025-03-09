import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function VehicleManagement() {
  const vehicles = [
    { id: 1, name: "Toyota Camry", type: "Car", status: "Available" },
    { id: 2, name: "Honda CBR", type: "Bike", status: "Rented" },
    { id: 3, name: "Ford Mustang", type: "Car", status: "Maintenance" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Vehicles</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {vehicles.map((vehicle) => (
            <li key={vehicle.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-semibold">{vehicle.name}</p>
                <p className="text-sm text-gray-500">{vehicle.type}</p>
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    vehicle.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : vehicle.status === "Rented"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {vehicle.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

