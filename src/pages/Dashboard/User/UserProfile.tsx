import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const UserProfile = () => {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePic: File | null; // Allow both File and null
  }>({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, Springfield",
    profilePic: null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setProfile((prev) => ({ ...prev, profilePic: file }));
    }
  };

  const handleUpdate = () => {
    console.log("Profile updated:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 flex justify-center items-start bg-gray-50 min-h-screen my-12">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border border-gray-200">
        {/* Card Header */}
        <CardHeader className="bg-gray-800 text-white rounded-t-2xl">
          <CardTitle className="text-2xl text-center py-3">
            User Profile
          </CardTitle>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="p-6 bg-white rounded-b-2xl space-y-10">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-700">
              <img
                src={preview || "/default-profile.png"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label
              className="mt-4 text-md text-purple-700 font-semibold cursor-pointer"
              htmlFor="profilePicUpload"
            >
              Upload Profile Picture
            </label>
            <input
              id="profilePicUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* User Details Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 py-5 mt-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 py-5 mt-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 py-5 mt-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-1">
                Address
              </label>
              <Input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full p-3 py-5 mt-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
              />
            </div>

            {/* Update Button */}
            <div className="text-center">
              <Button
                onClick={handleUpdate}
                className="w-full my-4 py-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
              >
                Update Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
