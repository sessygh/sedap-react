import React, { useState } from "react";

function AddOrder({ onSubmit, onCancel }) {
  const [orderData, setOrderData] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderData); // Kirim data order ke parent component
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Tambah Order Baru</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="orderId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Order ID:
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={orderData.orderId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="customerName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama Pelanggan:
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={orderData.customerName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={orderData.status}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Pending">Menunggu</option>
            <option value="Completed">Selesai</option>
            <option value="Cancelled">Dibatalkan</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="totalPrice"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Total Harga:
          </label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={orderData.totalPrice}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
          <label
            htmlFor="orderDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tanggal Order:
          </label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            value={orderData.orderDate}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddOrder;
