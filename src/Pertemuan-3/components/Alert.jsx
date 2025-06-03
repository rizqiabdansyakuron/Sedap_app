export default function Alert({ tipe, message }) {
    return (
      <div className="mb-3">
        {tipe === "error" ? (
          <div className="mt-4 p-3 bg-red-100 border border-red-500 text-red-700 rounded">
            <p className="font-semibold">{message}</p>
          </div>
        ) : tipe === "success" ? (
          <div className="mt-4 p-3 bg-blue-100 border border-blue-500 text-blue-700 rounded">
            <p className="font-semibold">{message}</p>
          </div>
        ) : null}
      </div>
    );
  }
  