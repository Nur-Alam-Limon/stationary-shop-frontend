
import { RootState } from "@/app/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetchUserOrdersQuery } from "@/features/orders/orderApi";
import { useSelector } from "react-redux";

export const UserOrders = () => {
  const userEmail = useSelector((state: RootState) => state.auth.user?.email);

  // Fetching orders for the user with email passed as a prop
  const { data, error, isLoading } = useFetchUserOrdersQuery(
    userEmail as string
  );

  // If loading, display a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If there's an error fetching data, display an error message
  if (error) {
    return <div>Error loading orders</div>;
  }

  // If no orders data, display a message indicating no orders
  if (!data || !data.success || data.data.length === 0) {
    return <div>No orders found.</div>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Orders</h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <Table className="w-full border border-gray-300 rounded-lg">
          {/* Table Header */}
          <TableHeader className="bg-gray-800 text-white font-bold">
            <TableRow>
              <TableHead className="py-4">Order ID</TableHead>
              <TableHead className="py-4">Product ID</TableHead>
              <TableHead className="py-4">Quantity</TableHead>
              <TableHead className="py-4">Total Price</TableHead>
              <TableHead className="py-4">Status</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data.data.map((order: any) => (
              <TableRow key={order._id} className="hover:bg-gray-50">
                <TableCell className="py-4">{order._id}</TableCell>
                <TableCell className="py-4">{order.product}</TableCell>{" "}
                {/* Product is ID */}
                <TableCell className="py-4">{order.quantity}</TableCell>
                <TableCell className="py-4">{order.totalPrice}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
