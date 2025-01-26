import React from "react";
import { Sidebar } from "./AdminSidebar";
import { UserTable } from "./AdminUserTable";
import { ProductTable } from "./AdminProductTable";
import { OrderTable } from "./AdminOrderTable";
import { Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const [selectedSection, setSelectedSection] = React.useState(() => {
    switch (currentPath) {
      case "manage-users":
        return "Manage Users";
      case "manage-products":
        return "Manage Products";
      case "manage-orders":
        return "Manage Orders";
      default:
        return "Dashboard";
    }
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onSelectSection={setSelectedSection} />
      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* <h1 className="text-3xl font-bold my-6">{selectedSection}</h1> */}
        {/* React Router will render the appropriate child route here */}
        <Outlet />
        {/* {selectedSection === "Manage Users" && <UserTable />}
        {selectedSection === "Manage Products" && <ProductTable />}
        {selectedSection === "Manage Orders" && <OrderTable />}
        {selectedSection === "Dashboard" && (
          <p>Welcome to the admin dashboard! Use the sidebar to manage resources.</p>
        )} */}
      </main>
    </div>
  );
};

export default AdminDashboard;
