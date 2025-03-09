"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Label } from "@/app/components/ui/label"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Input } from "@/app/components/ui/input"
import Line from '@/app/components/element/Line'
import Bar from '@/app/components/element/Bar'

export default function GenerateReportPage() {
  const [isClient, setIsClient] = useState(false)
  const [reportType, setReportType] = useState("revenue")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([])

  const metrics = [
    { id: "totalRevenue", label: "Total Revenue" },
    { id: "bookingsCount", label: "Number of Bookings" },
    { id: "averageBookingValue", label: "Average Booking Value" },
    { id: "topVehicles", label: "Top Performing Vehicles" },
    { id: "occupancyRate", label: "Occupancy Rate" },
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleGenerateReport = () => {
    console.log("Generating report:", { reportType, startDate, endDate, selectedMetrics })
  }

  if (!isClient) return null

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Generate Report</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Report Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="reportType">Report Type</Label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger id="reportType">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue Report</SelectItem>
                  <SelectItem value="bookings">Bookings Report</SelectItem>
                  <SelectItem value="vehicles">Vehicle Performance Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
            </div>
            <div>
              <Label>Metrics to Include</Label>
              <div className="grid grid-cols-2 gap-2">
                {metrics.map((metric) => (
                  <div key={metric.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={metric.id}
                      checked={selectedMetrics.includes(metric.id)}
                      onCheckedChange={(checked) => {
                        setSelectedMetrics(
                          checked ? [...selectedMetrics, metric.id] : selectedMetrics.filter((id) => id !== metric.id),
                        )
                      }}
                    />
                    <label
                      htmlFor={metric.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {metric.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={handleGenerateReport}>Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bookings by Vehicle Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
