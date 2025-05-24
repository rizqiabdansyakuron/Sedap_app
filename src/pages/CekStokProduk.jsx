
import React, { useState } from 'react';
import data from '../pages/Data/ProdukMakan.json'


const CekStokProduk = () => {
  const [kode, setKode] = useState('');
  const [pesan, setPesan] = useState('');
  const [produk, setProduk] = useState(null);

  const cekProduk = (e) => {
    e.preventDefault();

    if (kode.trim() === '') {
      setPesan('Kode produk tidak boleh kosong.');
      setProduk(null);
      return;
    }

    if (kode.length < 4) {
      setPesan('Kode produk minimal 4 karakter.');
      setProduk(null);
      return;
    }

    const hasil = data.find(p => p.kode_produk.toLowerCase() === kode.toLowerCase());
    if (!hasil) {
      setPesan('❌ Kode produk tidak ditemukan.');
      setProduk(null);
    } else if (hasil.stok > 0) {
      setPesan(`✅ Produk ${hasil.title} tersedia dengan harga Rp${hasil.price}.
Stok tersedia: ${hasil.stok}`);
      setProduk(hasil);
    } else {
      setPesan(`⚠️ Produk ${hasil.title} saat ini sedang habis.`);
      setProduk({ ...hasil, habis: true });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Cek Ketersediaan Produk</h2>
      <form onSubmit={cekProduk} className="space-y-4">
        <input
          type="text"
          placeholder="Masukkan kode produk"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Cek
        </button>
      </form>
      {pesan && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>{pesan}</p>
          {produk && (
            <div className="mt-3 text-center">
              <img src={produk.src} alt={produk.title} className="w-32 h-32 object-cover mx-auto rounded" />
              {produk.habis && <p className="text-red-500 font-semibold mt-2">Out of Stock</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CekStokProduk;
