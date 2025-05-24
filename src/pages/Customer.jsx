import React from 'react';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '081234567890',
    loyalty: 'Gold',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '081234567891',
    loyalty: 'Silver',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '081234567892',
    loyalty: 'Bronze',
  },
  // ... lanjutkan hingga 30 data
  ...Array.from({ length: 27 }, (_, i) => ({
    id: i + 4,
    name: `Customer ${i + 4}`,
    email: `customer${i + 4}@mail.com`,
    phone: `0812345678${String(i + 4).padStart(2, '0')}`,
    loyalty: ['Gold', 'Silver', 'Bronze'][i % 3],
  })),
];

export default function Customers() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customer List</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id}>
              <td className="border p-2">{cust.id}</td>
              <td className="border p-2">{cust.name}</td>
              <td className="border p-2">{cust.email}</td>
              <td className="border p-2">{cust.phone}</td>
              <td className="border p-2">{cust.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}