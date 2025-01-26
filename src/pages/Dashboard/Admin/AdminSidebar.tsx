import { useNavigate } from "react-router-dom";

export const Sidebar = ({ onSelectSection }: { onSelectSection: (section: string) => void }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Manage Users", path: "/manage-users" },
    { name: "Manage Products", path: "/manage-products" },
    { name: "Manage Orders", path: "/manage-orders" },
  ];

  const handleNavigation = (item: { name: string; path: string }) => {
    onSelectSection(item.name);
    navigate(`/dashboard/admin${item.path}`);
  };

  return (
    <aside className="w-72 bg-gray-900 text-white h-screen flex flex-col border border-gray-700 shadow-lg">
  {/* Header */}
  <div className="text-2xl font-bold p-6 text-center border-b border-gray-700 bg-gray-800">
    Admin Panel
  </div>

  {/* Menu Items */}
  <ul className="flex-1 p-4 space-y-4">
    {menuItems.map((item, index) => (
      <li key={index} className="group">
        <div
          className="cursor-pointer p-4 rounded-md hover:bg-purple-500 flex items-center justify-between transition-colors duration-200"
          onClick={() => handleNavigation(item)}
        >
          <span className="group-hover:text-gray-100">{item.name}</span>
        </div>
        {/* Divider */}
        {index < menuItems.length - 1 && <hr className="border-gray-700" />}
      </li>
    ))}
  </ul>

</aside>

  );
};
