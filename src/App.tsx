import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen grid gap-4 justify-center content-center bg-gradient-to-bl from-indigo-300 to-purple-900  text-center">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-rose-700 mb-4">
        Vite + React + TS + Tailwind
      </h1>
      <div className="grid gap-4 grid-cols-3">
        <button
          onClick={() => setCount((p) => p + 1)}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded"
        >
          +1
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((p) => p - 1)}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded"
        >
          -1
        </button>
      </div>
      <p className="text-lg text-white">Count: {count}</p>
    </div>
  );
}

export default App;
