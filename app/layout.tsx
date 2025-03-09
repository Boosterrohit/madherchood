import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/element/Header"
import Footer from "./components/element/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VehicleRent - Car and Bike Rentals",
  description: "Rent cars and bikes from local vendors",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen p-4 md:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

