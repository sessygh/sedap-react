import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeader1 from "../components/PageHeader1";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mengambil data pengguna dari API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Jika data masih dalam proses loading
  if (loading) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-green-600">Loading...</p>
      </div>
    );
  }

  // Jika terjadi error saat fetching data
  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-6">
      {/* Page Header */}
      <PageHeader1
        title="Data User"
        breadcrumb="User / Pages"
        children1="Add" // Gunakan Link di sini
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-lg">
          <thead className="bg-green-600 text-white rounded-t-lg">
            <tr>
              <th className="px-3 py-2 text-left text-sm rounded-tl-lg">No</th>
              <th className="px-3 py-2 text-left text-sm">Full Name</th>
              <th className="px-3 py-2 text-left text-sm">Username</th>
              <th className="px-3 py-2 text-left text-sm">Email</th>
              <th className="px-3 py-2 text-left text-sm rounded-tr-lg">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 text-gray-700">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="odd:bg-gray-100 even:bg-gray-200 hover:bg-green-100 transition duration-200"
              >
                <td className="px-3 py-2 text-sm">{index + 1}</td>
                <td className="px-3 py-2 text-sm">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-3 py-2 text-sm">{user.username}</td>
                <td className="px-3 py-2 text-sm">{user.email}</td>
                <td className="px-3 py-2 text-sm">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
