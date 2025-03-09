import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
})

interface Location {
  id: number
  name: string
  address: string
  coordinates: [number, number]
  activeVehicles: number
}

interface LocationMapProps {
  locations: Location[]
}

export default function LocationMap({ locations }: LocationMapProps) {
  // Center on Bagmati Zone, Nepal
  const center: [number, number] = [27.7172, 85.324]

  return (
    <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.coordinates}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{location.name}</h3>
              <p className="text-sm">{location.address}</p>
              <p className="text-sm">Active Vehicles: {location.activeVehicles}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

