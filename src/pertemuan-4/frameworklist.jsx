import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
            
                    <p className="text-gray-600"><strong>Developer:</strong> {item.details.developer}</p>

                    <p className="text-gray-600">
                        <strong>Official Website:</strong>{" "}
                        <a href={item.details.officialWebsite} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            {item.details.officialWebsite}
                        </a>
                    </p>
                </div>
            ))}
        </div> 
        
    
    );}
