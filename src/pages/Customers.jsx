import React, { useState, useEffect } from 'react';
import customersData from './customers.json';
import PageHeader1 from "../components/PageHeader1";
import AddButton from '../components/AddButton';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const breadscrumb = ['Customers', '/', 'Data Customer'];
  return (
    <div id="pageheader-container" className="py-6 px-4 md:px-8 lg:px-12">
      <PageHeader1 
        title="Data Customer" 
        breadscrumb={breadscrumb} 
        children={<AddButton name="add-button" label="Add Customer" to="/addcustomers" />}
      />    

      <p className="mt-2 text-gray-600">Halaman ini adalah halaman customers.</p>

      <div className="mt-4 overflow-x-auto rounded-lg shadow-md max-h-[600px] overflow-y-auto">
        <table className="min-w-full bg-green-100 border-separate border-spacing-0">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                Customer ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider">
                Loyalty
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-green-300">
            {customers.slice(0, 30).map((customer, index) => (
              <tr
                key={customer.customerId}
                className={`${
                  index % 2 === 0 ? 'bg-green-50' : 'bg-white'
                } hover:bg-green-200 transition-colors duration-200`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                  {customer.customerId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                  {customer.customerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                  {customer.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                  {customer.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      customer.loyalty === 'Gold'
                        ? 'bg-yellow-200 text-yellow-800'
                        : customer.loyalty === 'Silver'
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-orange-200 text-orange-800'
                    }`}
                  >
                    {customer.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
