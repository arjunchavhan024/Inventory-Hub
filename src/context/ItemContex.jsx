import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext(undefined);

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
};

const initialItems = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    type: "Shirt",
    description:
      "High-quality cotton t-shirt with a comfortable fit. Perfect for casual wear and everyday activities.",
    coverImage:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalImages: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Classic Denim Jeans",
    type: "Pant",
    description:
      "Stylish denim jeans with a modern cut. Durable and comfortable for all-day wear.",
    coverImage:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalImages: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Running Sneakers",
    type: "Shoes",
    description:
      "Lightweight running shoes designed for comfort and performance. Perfect for daily runs and workouts.",
    coverImage:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalImages: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    createdAt: new Date("2024-01-25"),
  },
  {
    id: "4",
    name: "Yoga Mat",
    type: "Sports Gear",
    description:
      "Premium yoga mat with excellent grip and cushioning. Ideal for yoga, pilates, and general fitness.",
    coverImage:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400",
    additionalImages: [
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    createdAt: new Date("2024-02-01"),
  },
];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (itemData) => {
    const newItem = {
      ...itemData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const getItemById = (id) => {
    return items.find((item) => item.id === id);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, getItemById }}>
      {children}
    </ItemContext.Provider>
  );
};
