import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UserOrders = () => {
  const [orders] = useState([
    {
      id: 201,
      product: "Smartwatch",
      status: "Shipping",
      date: "2025-01-15",
    },
    {
      id: 202,
      product: "Wireless Earbuds",
      status: "Delivered",
      date: "2025-01-12",
    },
    {
      id: 203,
      product: "Gaming Mouse",
      status: "Pending",
      date: "2025-01-20",
    },
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Orders</h2>
      </div>

      {/* Orders Table */}
      <Table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <TableHeader className="bg-gray-800 text-white font-bold">
          <TableRow>
            <TableHead className="py-4">Order ID</TableHead>
            <TableHead className="py-4">Product</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Date</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-gray-50">
              <TableCell className="py-4">{order.id}</TableCell>
              <TableCell className="py-4">{order.product}</TableCell>
              <TableCell
                className={`py-4 ${
                  order.status === "Pending"
                    ? "text-yellow-500"
                    : order.status === "Shipping"
                    ? "text-blue-500"
                    : "text-green-500"
                }`}
              >
                {order.status}
              </TableCell>
              <TableCell className="py-4">{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
