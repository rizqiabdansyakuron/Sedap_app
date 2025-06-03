import React from 'react';

const orders = Array.from({ length: 30 }, (_, i) => ({
  orderId: 1000 + i,
  customerName: `Customer ${i + 1}`,
  status: ['Pending', 'Completed', 'Cancelled'][i % 3],
  totalPrice: Math.floor(Math.random() * 1000000) + 50000,
  orderDate: `2025-04-${String((i % 30) + 1).padStart(2, '0')}`,
}));

export default function Orders() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Order List</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td className="border p-2">{order.orderId}</td>
              <td className="border p-2">{order.customerName}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">Rp {order.totalPrice.toLocaleString()}</td>
              <td className="border p-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}