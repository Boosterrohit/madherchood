import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Badge } from "@/app/components/ui/badge"
import Link from "next/link"

const rentals = [
  { id: 1, vehicle: "Toyota Camry", startDate: "2023-06-01", endDate: "2023-06-05", status: "Active", totalCost: 250 },
  { id: 2, vehicle: "Honda CBR", startDate: "2023-06-10", endDate: "2023-06-12", status: "Upcoming", totalCost: 150 },
  {
    id: 3,
    vehicle: "Ford Mustang",
    startDate: "2023-05-20",
    endDate: "2023-05-25",
    status: "Completed",
    totalCost: 400,
  },
]

export default function UserRentalsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Your Rentals</h1>
      <Card>
        <CardHeader>
          <CardTitle>Rental History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentals.map((rental) => (
                <TableRow key={rental.id}>
                  <TableCell className="font-medium">{rental.vehicle}</TableCell>
                  <TableCell>{rental.startDate}</TableCell>
                  <TableCell>{rental.endDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        rental.status === "Active" ? "default" : rental.status === "Upcoming" ? "secondary" : "outline"
                      }
                    >
                      {rental.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${rental.totalCost}</TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href={`/user/rentals/${rental.id}`}>View Details</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

