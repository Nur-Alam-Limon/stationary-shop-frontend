import { useNavigate } from "react-router-dom";

export const UserSidebar = ({ onSelectSection }: { onSelectSection: (section: string) => void }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Profile Settings", path: "/profile" },
    { name: "View Orders", path: "/orders" },
    
  ];

  const handleNavigation = (item: { name: string; path: string }) => {
    onSelectSection(item.name);
    navigate(`/dashboard/user${item.path}`);
  };

  return (
    <aside className="w-72 bg-gray-900 min-h-screen text-white flex flex-col border border-gray-700 shadow-lg">
      {/* Header */}
      <div className="text-2xl font-bold p-6 text-center border-b border-gray-700 bg-gray-800">
        User Panel
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
