"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Car,
  MapPin,
  FileText,
  Settings,
  Bell,
  Activity,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Users,
  Calendar,
  DollarSign,
  Menu,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet"
import { NotificationList } from "@/app/components/notification-list"
import { ActivityFeed } from "@/app/components/activity-feed"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/vendor/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Vehicles",
    href: "/vendor/vehicles",
    icon: Car,
  },
  {
    title: "Bookings",
    href: "/vendor/bookings",
    icon: Calendar,
  },
  {
    title: "Revenue",
    href: "/vendor/revenue",
    icon: DollarSign,
  },
  {
    title: "Locations",
    href: "/vendor/locations",
    icon: MapPin,
  },
  {
    title: "Reports",
    href: "/vendor/reports",
    icon: FileText,
  },
  {
    title: "Customers",
    href: "/vendor/customers",
    icon: Users,
  },
  {
    title: "Activity",
    href: "/vendor/activity",
    icon: Activity,
  },
  {
    title: "Settings",
    href: "/vendor/settings",
    icon: Settings,
  },
]

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showActivity, setShowActivity] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside
        className={`hidden md:flex flex-col fixed inset-y-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h1 className={`text-2xl font-bold text-primary ${sidebarCollapsed ? "hidden" : "block"}`}>VehicleRent</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-gray-500 hover:text-gray-700"
          >
            {sidebarCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </Button>
        </div>
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {sidebarNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100 ${
                      isActive ? "bg-gray-100 text-primary font-medium" : "text-gray-700"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {!sidebarCollapsed && item.title}
                  </span>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
        <div className="p-4 border-t border-gray-200">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary" asChild>
            <Link href="/logout">
              <LogOut className="mr-2 h-5 w-5" />
              {!sidebarCollapsed && "Logout"}
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-4">
            {sidebarNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <span
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100 ${
                      isActive ? "bg-gray-100 text-primary font-medium" : "text-gray-700"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </span>
                </Link>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className={`flex-1 ${sidebarCollapsed ? "md:ml-20" : "md:ml-64"}`}>
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-4">
            <Sheet open={showNotifications} onOpenChange={setShowNotifications}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                </SheetHeader>
                <NotificationList />
              </SheetContent>
            </Sheet>
            <Sheet open={showActivity} onOpenChange={setShowActivity}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Activity className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Activity</SheetTitle>
                </SheetHeader>
                <ActivityFeed />
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  )
}

