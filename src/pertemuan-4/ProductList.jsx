import ProductData from "./Product.json";

export default function ProductList() {
    return (
        <div className="p-8">
            {ProductData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    
                    <p className="text-gray-600"><strong>Category:</strong> {item.category}</p>
                    <p className="text-gray-600"><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                </div>
            ))}
        </div> 
    );
}