import React, { useState } from "react";
import { useItems } from "../context/ItemContex";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

const ViewItems = () => {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">View Items</h1>
          <p className="text-gray-600">
            Browse through your inventory collection
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <p className="text-gray-500 text-lg">
                No items found. Start by adding some items to your inventory.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default ViewItems;
