import { Calendar, Car, DollarSign } from "lucide-react"
import { ScrollArea } from "@/app/components/ui/scroll-area"

const notifications = [
  {
    id: 1,
    title: "New Booking Request",
    description: "Toyota Camry has been booked for 3 days",
    time: "5 minutes ago",
    icon: Calendar,
    read: false,
  },
  {
    id: 2,
    title: "Vehicle Return",
    description: "Honda Civic has been returned",
    time: "1 hour ago",
    icon: Car,
    read: false,
  },
  {
    id: 3,
    title: "Payment Received",
    description: "Payment of $150 received for booking #1234",
    time: "2 hours ago",
    icon: DollarSign,
    read: true,
  },
]

export function NotificationList() {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)] pr-6">
      <div className="space-y-4 mt-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${notification.read ? "bg-muted" : "bg-primary/5 border-primary"}`}
          >
            <div className="flex items-start gap-4">
              <notification.icon
                className={`h-5 w-5 ${notification.read ? "text-muted-foreground" : "text-primary"}`}
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

