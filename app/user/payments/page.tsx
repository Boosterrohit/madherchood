import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Badge } from "@/app/components/ui/badge"
import Link from "next/link"

const payments = [
  { id: 1, date: "2023-06-05", amount: 250, method: "Credit Card", status: "Completed" },
  { id: 2, date: "2023-06-10", amount: 150, method: "PayPal", status: "Pending" },
  { id: 3, date: "2023-05-25", amount: 400, method: "Debit Card", status: "Completed" },
]

export default function UserPaymentsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Your Payments</h1>
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "Completed" ? "default" : "secondary"}>{payment.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href={`/user/payments/${payment.id}`}>View Details</Link>
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

