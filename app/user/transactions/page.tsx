import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Badge } from "@/app/components/ui/badge"
import Link from "next/link"

const transactions = [
  { id: 1, date: "2023-06-05", description: "Toyota Camry Rental", amount: 250, type: "Debit" },
  { id: 2, date: "2023-06-10", description: "Refund - Cancelled Booking", amount: 150, type: "Credit" },
  { id: 3, date: "2023-05-25", description: "Ford Mustang Rental", amount: 400, type: "Debit" },
  { id: 4, date: "2023-05-20", description: "Late Return Fee", amount: 50, type: "Debit" },
]

export default function UserTransactionsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Your Transactions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.type === "Credit" ? "default" : "destructive"}>
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href={`/user/transactions/${transaction.id}`}>View Details</Link>
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

