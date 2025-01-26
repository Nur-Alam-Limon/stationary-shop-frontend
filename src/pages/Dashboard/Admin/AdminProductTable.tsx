import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Plus } from "lucide-react";

// Define types for Product and FormData
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
};

type FormData = {
  name: string;
  price: string;
  stock: string;
};

export const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 101, name: "Notebook", price: "$5", stock: 100 },
    { id: 102, name: "Pen", price: "$2", stock: 200 },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    stock: "",
  });

  const openModal = (product: Product | null = null) => {
    setEditingProduct(product);
  
    // Ensure stock is converted to string when setting formData
    setFormData(product
      ? { name: product.name, price: product.price, stock: product.stock.toString() }
      : { name: "", price: "", stock: "" });
  
    setModalOpen(true);
  };
  

  const closeModal = () => {
    setModalOpen(false);
    setEditingProduct(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...formData, id: editingProduct.id, stock: Number(formData.stock) }
            : p
        )
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { ...formData, id: Date.now(), stock: Number(formData.stock) },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-gray-700 font-bold">Manage your product inventory</h2>
        <Button
          onClick={() => openModal()}
          className="flex items-center space-x-2 bg-purple-600 text-white hover:bg-purple-700"
        >
          <Plus size={16} />
          <span>Create Product</span>
        </Button>
      </div>

      <Table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-800 text-white font-bold">
          <TableRow>
            <TableHead className="py-4">Product ID</TableHead>
            <TableHead className="py-4">Name</TableHead>
            <TableHead className="py-4">Price</TableHead>
            <TableHead className="py-4">Stock</TableHead>
            <TableHead className="py-4">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-gray-50">
              <TableCell className="py-4">{product.id}</TableCell>
              <TableCell className="py-4">{product.name}</TableCell>
              <TableCell className="py-4">{product.price}</TableCell>
              <TableCell className="py-4">{product.stock}</TableCell>
              <TableCell className="flex space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => openModal(product)}
                  className="text-purple-500 hover:text-purple-700 py-4"
                >
                  <Edit size={16} />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="bg-white p-8 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Create Product"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 my-4">
            <Input
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              className="py-6"
            />
            <Input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="py-6"
            />
            <Input
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="py-6"
            />
          </div>
          <DialogFooter>
            <Button onClick={closeModal} variant="outline" className="mr-2 btn-outline-purple btn-outline-purple:hover">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="outline" className="btn-outline-purple btn-outline-purple:hover">{editingProduct ? "Update" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
