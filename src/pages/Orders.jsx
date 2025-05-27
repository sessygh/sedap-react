import React, { useState, useEffect } from 'react';
import ordersData from './orders.json';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';
import PageHeader1 from "../components/PageHeader1";
import AddButton from '../components/AddButton';

function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(value);
  };

  const renderStatusBadge = (status) => {
    let style = '', icon = null, label = '';
    switch (status) {
      case 'Completed':
        style = 'bg-green-200 text-green-800';
        icon = <FaCheckCircle className="mr-1" />;
        label = 'Selesai';
        break;
      case 'Pending':
        style = 'bg-yellow-200 text-yellow-800';
        icon = <FaHourglassHalf className="mr-1" />;
        label = 'Menunggu';
        break;
      case 'Cancelled':
      default:
        style = 'bg-red-200 text-red-800';
        icon = <FaTimesCircle className="mr-1" />;
        label = 'Dibatalkan';
        break;
    }

    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${style}`}>
        {icon} {label}
      </span>
    );
  };

  const breadscrumb = ['Orders', '/', 'Data Orders'];

  return (
    <div id="pageheader-container" className="py-6 px-4 md:px-8 lg:px-12">
      <PageHeader1
        title="Data Orders"
        breadscrumb={breadscrumb}
        children={<AddButton name="add-button" label="Add Orders" to="/addorders" />}
      />

      <p className="mt-2 text-gray-600">Daftar lengkap semua pesanan pelanggan.</p>

      <div className="mt-4 overflow-x-auto rounded-lg shadow-md max-h-[600px] overflow-y-auto">
        <table className="min-w-full bg-green-100 border-separate border-spacing-0">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">Pelanggan</th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">Tanggal</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-green-300">
            {orders.map((order, index) => (
              <tr
                key={order.orderId}
                className={`${
                  index % 2 === 0 ? 'bg-green-50' : 'bg-white'
                } hover:bg-green-200 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-sm text-gray-800 text-center font-medium">
                  {order.orderId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-center">{order.customerName}</td>
                <td className="px-6 py-4 text-sm text-center">{renderStatusBadge(order.status)}</td>
                <td className="px-6 py-4 text-sm text-gray-800 text-center font-semibold">
                  {formatCurrency(order.totalPrice)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-center">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderTable;
