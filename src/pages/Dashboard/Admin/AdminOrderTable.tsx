import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";

export const OrderTable = () => {
  const [orders, setOrders] = useState([
    { id: 101, customer: "John Doe", product: "Smartwatch", status: "Pending" },
    { id: 102, customer: "Jane Smith", product: "Wireless Earbuds", status: "Pending" },
  ]);

  const handleApprove = (id: Number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "Shipping" } : order
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Orders</h2>
      </div>

      <Table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-800 text-white font-bold">
          <TableRow>
            <TableHead className="py-4">Order ID</TableHead>
            <TableHead className="py-4">Customer</TableHead>
            <TableHead className="py-4">Product</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-gray-50">
              <TableCell className="py-4">{order.id}</TableCell>
              <TableCell className="py-4">{order.customer}</TableCell>
              <TableCell className="py-4">{order.product}</TableCell>
              <TableCell
                className={`${
                  order.status === "Pending" ? "text-yellow-500" : "text-blue-500"
                }`}
              >
                {order.status}
              </TableCell>
              <TableCell className="flex space-x-2">
                {order.status === "Pending" && (
                  <Button
                    variant="ghost"
                    onClick={() => handleApprove(order.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <CheckCircle size={16} /> Approve
                  </Button>
                )}
                {order.status === "Shipping" && (
                  <Button variant="ghost" disabled className="text-gray-500">
                    <Clock size={16} /> Shipping
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
