import { useState } from "react";
import InputGaji from "./components/InputGaji";
import Alert from "./components/Alert";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState(""); // Menambahkan state untuk gaji
  const Pajak = 0.11;
  const totalGaji = gaji ? gaji - gaji * Pajak : 0;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <div className="mb-4">
          <InputGaji
            label="Gaji Pokok"
            type="number"
            placeholder="Masukkan jumlah Gaji"
            onChange={(e) => setGaji(parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b className="text-red-500">11%</b>
          </label>
        </div>

        {!gaji || gaji <= 0 ? (
          <Alert
            tipe="error"
            message="Silakan masukkan gaji yang valid (tidak boleh kosong atau negatif)."
          />
        ) : (
          <Alert
            tipe="success"
            message={`Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}`}
          />
        )}
      </div>
    </div>
  );
}
