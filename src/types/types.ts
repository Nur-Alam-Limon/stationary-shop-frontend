export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
    category: string;
    description: string;
    quantity: number;
    inStock: boolean;
  }
  
  export interface Order {
    _id: string;
    email: string;
    product: string; // This will be a product ID
    quantity: number;
    totalPrice: number;
    createdAt: string;
  }

  export interface User {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    role: 'admin' | 'customer'; // Role of the user (can be extended as needed)
    createdAt: string; // Timestamp of user creation
    updatedAt: string; // Timestamp of the last update
  }
  
  