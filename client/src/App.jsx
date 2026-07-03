import { useEffect, useState } from 'react';
import Tree from './components/Tree';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/files')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-6 py-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          <h1 className="text-lg font-semibold text-white tracking-wide">File Explorer</h1>

          <div className="text-sm text-slate-400">React + Express</div>
        </div>

        {/* Body */}

        <div className="p-6">
          <Tree data={data.root} />
        </div>
      </div>
    </div>
  );
}

export default App;
