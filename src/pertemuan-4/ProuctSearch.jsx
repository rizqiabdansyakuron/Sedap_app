import { useState } from "react";
import productData from "./Product.json";

function ShadowEffects({ children }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
      {children}
    </div>
  );
}
export default function ProductSearch() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedCategory: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesCategory = dataForm.selectedCategory
      ? product.category === dataForm.selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const allCategories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  return (
    <div className="p-8">
      <div>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search product..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.searchTerm}
          onChange={handleChange}
        />

        <select
          name="selectedCategory"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.selectedCategory}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {allCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:gap-3">
        {filteredProducts.map((item) => (
          <ShadowEffects key={item.id}>
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="text-gray-600">
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
          </ShadowEffects>
        ))}
      </div>
    </div>
  );
}