import React from 'react';
import { useGetProductsQuery } from "@/features/products/productsApi"; 
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart/cartSlice'; 
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

interface ProductShowcaseProps {
  title: string;
  description?: string;
  sliceIndex?: number;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ title, description, sliceIndex }) => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const products = data?.data || [];
  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Product Added to Cart", {
      duration: 3000,
    });
  };

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (isError) {
    return <p>Failed to fetch products. Please try again later.</p>;
  }

  const displayProducts = sliceIndex === -4
    ? products.slice(-4)
    : products.slice(0, window.innerWidth >= 850 ? 4 : 3);

  return (
    <section className="py-20 bg-gray-100 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {title && <h2 className="text-4xl font-semibold mb-8 text-gray-800">{title}</h2>}
        {description && <p className="text-lg mb-12 text-gray-600">{description}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
            <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <Link to={`/product-details/${product._id}`}>
                <img
                  src={product.productImg}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p
                  className="text-gray-500 mb-4 line-clamp-2"
                  style={{ lineHeight: '1.5rem', minHeight: '3rem' }}
                >
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-gray-700">${product.price}</p>
              </Link>
              <Button
                variant="outline"
                className="w-full py-3 mt-4 btn-outline-purple btn-outline-purple:hover rounded-lg"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
