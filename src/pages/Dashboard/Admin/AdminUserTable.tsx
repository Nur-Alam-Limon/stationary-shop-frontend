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
import { CheckCircle, XCircle } from "lucide-react";

export const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Deactivated" },
  ]);

  const handleDeactivate = (id: Number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Deactivated" : "Active" } : user
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage your user accounts</h2>
        
      </div>

      <Table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-800 text-white font-bold">
          <TableRow>
            <TableHead className="py-4">User ID</TableHead>
            <TableHead className="py-4">Name</TableHead>
            <TableHead className="py-4">Email</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell className="py-4">{user.id}</TableCell>
              <TableCell className="py-4">{user.name}</TableCell>
              <TableCell className="py-4">{user.email}</TableCell>
              <TableCell className={user.status === "Active" ? "text-green-500" : "text-red-500"}>
                {user.status}
              </TableCell>
              <TableCell className="flex space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => handleDeactivate(user.id)}
                  className={`${
                    user.status === "Active" ? "text-red-500 hover:text-red-700" : "text-green-500 hover:text-green-700"
                  }`}
                >
                  {user.status === "Active" ? (
                    <><XCircle size={16} /> Deactivate</> // Representing deactivation action
                  ) : (
                    <><CheckCircle size={16} /> Activate</> // Representing activation action
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
