"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  revenue: [4200, 5300, 6200, 7800, 8200, 9100],
  bookings: [42, 53, 62, 78, 82, 91],
}

const vehiclePerformance = {
  labels: ["Toyota Camry", "Honda Civic", "BMW 3 Series", "Tesla Model 3", "Yamaha R1"],
  revenue: [12500, 9800, 15200, 18500, 7500],
  utilization: [75, 68, 82, 88, 62],
}

export default function Analytics() {
  const revenueChartRef = useRef<HTMLCanvasElement>(null)
  const bookingsChartRef = useRef<HTMLCanvasElement>(null)
  const vehicleRevenueChartRef = useRef<HTMLCanvasElement>(null)
  const utilizationChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (revenueChartRef.current) {
      const ctx = revenueChartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: monthlyData.labels,
            datasets: [
              {
                label: "Monthly Revenue ($)",
                data: monthlyData.revenue,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.1)",
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Monthly Revenue Trend",
              },
            },
          },
        })
      }
    }

    if (bookingsChartRef.current) {
      const ctx = bookingsChartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: monthlyData.labels,
            datasets: [
              {
                label: "Number of Bookings",
                data: monthlyData.bookings,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Monthly Bookings",
              },
            },
          },
        })
      }
    }

    if (vehicleRevenueChartRef.current) {
      const ctx = vehicleRevenueChartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: vehiclePerformance.labels,
            datasets: [
              {
                label: "Revenue per Vehicle ($)",
                data: vehiclePerformance.revenue,
                backgroundColor: "rgba(153, 102, 255, 0.5)",
                borderColor: "rgb(153, 102, 255)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Revenue by Vehicle",
              },
            },
          },
        })
      }
    }

    if (utilizationChartRef.current) {
      const ctx = utilizationChartRef.current.getContext("2d")
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: vehiclePerformance.labels,
            datasets: [
              {
                label: "Utilization Rate (%)",
                data: vehiclePerformance.utilization,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 206, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(153, 102, 255)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Vehicle Utilization Rates",
              },
            },
          },
        })
      }
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={revenueChartRef}></canvas>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Booking Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={bookingsChartRef}></canvas>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={vehicleRevenueChartRef}></canvas>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Utilization Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={utilizationChartRef}></canvas>
        </CardContent>
      </Card>
    </div>
  )
}

