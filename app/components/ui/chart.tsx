"use client"

import { useEffect, useRef } from "react"
import { Chart as ChartJS, registerables } from "chart.js"
import { nanoid } from "nanoid"

ChartJS.register(...registerables)

interface ChartProps {
  type: "line" | "bar"
  data: any
  options?: any
  height?: number
}

export function Chart({ type, data, options, height = 300 }: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<ChartJS | null>(null)
  const chartId = useRef(nanoid())

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (ctx) {
      chartInstanceRef.current = new ChartJS(ctx, {
        type,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          ...options,
        },
      })
    }

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
    }
  }, [data, options, type])

  return (
    <div style={{ height: `${height}px` }}>
      <canvas ref={chartRef} id={chartId.current} />
    </div>
  )
}

