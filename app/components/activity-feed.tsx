import { ScrollArea } from "@/app/components/ui/scroll-area"
import { Car, DollarSign, User } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "booking",
    title: "New Booking",
    description: "John Doe booked Toyota Camry",
    time: "10 minutes ago",
    icon: Car,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    description: "Payment for booking #1234",
    time: "1 hour ago",
    icon: DollarSign,
  },
  {
    id: 3,
    type: "user",
    title: "New Customer",
    description: "Jane Smith registered",
    time: "2 hours ago",
    icon: User,
  },
]

export function ActivityFeed() {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)] pr-6">
      <div className="relative mt-4">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-8">
              <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

