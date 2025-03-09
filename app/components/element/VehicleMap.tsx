import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Vehicle {
  id: number
  name: string
  type: string
  position: [number, number]
  isAvailable: boolean
}

interface VehicleMapProps {
  vehicles: Vehicle[]
}

export function VehicleMap({ vehicles }: VehicleMapProps) {
  useEffect(() => {
    delete L.Icon.Default.prototype.options.iconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] w-full">
          <MapContainer center={[27.7172, 85.324]} zoom={12} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {vehicles.map((vehicle) => (
              <Marker
                key={vehicle.id}
                position={vehicle.position}
                icon={L.divIcon({
                  className: "custom-icon",
                  html: `
                    <div class="w-8 h-8 rounded-full ${vehicle.isAvailable ? "bg-green-500" : "bg-red-500"} flex items-center justify-center text-white">
                      ${vehicle.type === "car" ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.7a1 1 0 0 0-.8.4L2.2 11l-5.16.86a1 1 0 0 0-.84.99V16h3m16 0H6"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>'}
                    </div>
                  `,
                })}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold">{vehicle.name}</h3>
                    <p>Type: {vehicle.type}</p>
                    <p>Status: {vehicle.isAvailable ? "Available" : "Not Available"}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  )
}