import { useState } from 'react';

function Tree({ data }) {
  return (
    <div className="space-y-1">
      {Object.entries(data).map(([name, item]) => (
        <TreeItem key={name} name={name} item={item} />
      ))}
    </div>
  );
}

function TreeItem({ name, item }) {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = item.type === 'folder';

  return (
    <div>
      <button
        onClick={() => isFolder && setIsOpen(!isOpen)}
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-lg
          px-3
          py-2
          text-left
          transition-all
          duration-200
          hover:bg-slate-800
        "
      >
        <span className="text-xl">{isFolder ? (isOpen ? '📂' : '📁') : '📄'}</span>

        <span className="text-slate-200">{name}</span>
      </button>

      {isFolder && isOpen && (
        <div className="ml-6 border-l border-slate-700 pl-4">
          <Tree data={item.children} />
        </div>
      )}
    </div>
  );
}

export default Tree;
