"use client"

import L from "leaflet"
import { Marker, Popup } from "react-leaflet"
import { Button } from "@/app/components/ui/button"

interface VehicleMarkerProps {
  position: [number, number]
  type: "car" | "bike"
  name: string
  isAvailable: boolean
  price: number
  onBook?: () => void
  showBookButton?: boolean
}

export default function VehicleMarker({
  position,
  type,
  name,
  isAvailable,
  price,
  onBook,
  showBookButton = false,
}: VehicleMarkerProps) {
  const icon = L.divIcon({
    className: "custom-marker",
    html: `
      <div class="p-2 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"} text-white">
        ${
          type === "car"
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.7a1 1 0 0 0-.8.4L2.2 11l-5.16.86a1 1 0 0 0-.84.99V16h3m16 0H6"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bike"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>'
        }
      </div>
    `,
  })

  return (
    <Marker position={position} icon={icon}>
      <Popup>
        <div className="p-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm">Type: {type}</p>
          <p className="text-sm">Status: {isAvailable ? "Available" : "Rented"}</p>
          <p className="text-sm">Price: ${price}/day</p>
          {showBookButton && isAvailable && (
            <Button onClick={onBook} className="mt-2 w-full">
              Book Now
            </Button>
          )}
        </div>
      </Popup>
    </Marker>
  )
}

