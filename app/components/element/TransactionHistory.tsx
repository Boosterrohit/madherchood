import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"

interface Transaction {
  id: number
  date: string
  description: string
  amount: number
  type: "credit" | "debit"
}

export default function TransactionHistory({ userType }: { userType: "customer" | "vendor" }) {
  const transactions: Transaction[] = [
    {
      id: 1,
      date: "2023-06-01",
      description: "Vehicle Rental - Toyota Camry",
      amount: 150,
      type: userType === "customer" ? "debit" : "credit",
    },
    {
      id: 2,
      date: "2023-06-05",
      description: "Late Return Fee",
      amount: 25,
      type: userType === "customer" ? "debit" : "credit",
    },
    {
      id: 3,
      date: "2023-06-10",
      description: "Refund - Cancelled Booking",
      amount: 75,
      type: userType === "customer" ? "credit" : "debit",
    },
    {
      id: 4,
      date: "2023-06-15",
      description: "Vehicle Rental - Honda CBR",
      amount: 200,
      type: userType === "customer" ? "debit" : "credit",
    },
  ]

  return (
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      transaction.type === "credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type === "credit" ? "Credit" : "Debit"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

