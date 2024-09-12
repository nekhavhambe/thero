"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function InvoiceModal() {
  const [isOpen, setIsOpen] = useState(false)

  const invoices = [
    { id: 'INV001', convertFrom: 'USD', date: '2023-05-01', supplier: 'Tech Solutions Inc.', item: 'Laptop', amount: 2000.00 },
    { id: 'INV002', convertFrom: 'EUR', date: '2023-05-03', supplier: 'Global Gadgets', item: 'Smartphone', amount: 1000.50 },
    { id: 'INV003', convertFrom: 'GBP', date: '2023-05-05', supplier: 'Office Supplies Ltd.', item: 'Printer', amount: 500.75 },
    { id: 'INV004', convertFrom: 'JPY', date: '2023-05-07', supplier: 'Electronics Co.', item: 'TV', amount: 100000.00 },
    { id: 'INV005', convertFrom: 'CAD', date: '2023-05-09', supplier: 'Mega Corp', item: 'Server', amount: 1000000.00 },
  ]

  const formatAmount = (amount: number) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Invoice Table</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%] max-h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Invoice Table</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead className="py-2">Convert From</TableHead>
              <TableHead className="py-2">Date</TableHead>
              <TableHead className="py-2">Supplier</TableHead>
              <TableHead className="py-2">Item</TableHead>
              <TableHead className="text-right py-2">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className="text-sm">
                <TableCell className="py-2">{invoice.convertFrom}</TableCell>
                <TableCell className="py-2">{invoice.date}</TableCell>
                <TableCell className="py-2">{invoice.supplier}</TableCell>
                <TableCell className="py-2">{invoice.item}</TableCell>
                <TableCell className="text-right py-2">{formatAmount(invoice.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}