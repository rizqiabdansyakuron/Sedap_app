import { useState } from "react";
import frameworkData from "./framework.json";

function ShadowEffects({ children }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
      {children}
    </div>
  );
}

export default function Test() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      <div>
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.searchTerm}
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={dataForm.selectedTag}
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:gap-3">
        {filteredFrameworks.map((item) => (
          <ShadowEffects key={item.id}>
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">
              <strong>Developer:</strong> {item.details.developer}
            </p>
            <p className="text-gray-600">
              <strong>Official Website:</strong>{" "}
              <a
                href={item.details.officialWebsite}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.details.officialWebsite}
              </a>
            </p>
          </ShadowEffects>
        ))}
      </div>
    </div>
  );
}
