import React, { useState } from 'react';
import produk from "../data/produk.json"; 

const CheckStock = () => {
  const [kodeProduk, setKodeProduk] = useState('');
  const [message, setMessage] = useState('');
  const [imageStatus, setImageStatus] = useState(null);
  const handleCheckStock = () => {
    const product = produk.find(p => p.kode_produk === kodeProduk);
    if (!kodeProduk || kodeProduk.length < 4) {
      setMessage('❌ Kode produk tidak ditemukan.');
      setImageStatus("/img/salah.png");
      return;
    }
    if (product) {
      if (product.stok > 0) {
        setMessage(`✅ Produk ${product.nama_produk} tersedia dengan harga Rp${product.harga}. 
          Stok tersedia: ${product.stok}`);
          setImageStatus("/img/bnr.png");

      } else {
        setMessage(`⚠ Produk ${product.nama_produk} saat ini sedang habis.`);
        setImageStatus("/img/salah.png");

      }
    } else {
      setMessage('❌ Kode produk tidak ditemukan.');
      setImageStatus("/img/salah.png");

    }
  };
  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="heading text-center font-poppins-extrabold text-[36px] mb-10">Cek Ketersediaan Produk</h2>
      <input 
        type="text" 
        className="border-2 border-gray-300 px-4 py-2 rounded-lg mb-4 font-poppins" 
        placeholder="Masukkan Kode Produk" 
        value={kodeProduk} 
        onChange={(e) => setKodeProduk(e.target.value)} 
      />
      <button onClick={handleCheckStock} className="bg-green-700 text-white px-6 py-2 
      rounded-lg text-lg hover:bg-green-800 font-poppins">
        Cek Ketersediaan
      </button>
      <div className="mt-6">
        <p className="text-lg text-gray-700">{message}</p>
        {imageStatus && (
  <img 
    src={`${imageStatus}`} 
    alt="Status Produk" 
    className="mx-auto mt-4 w-48 h-auto"
  />
)}

      </div>
    </div>
  );
};

export default CheckStock;
