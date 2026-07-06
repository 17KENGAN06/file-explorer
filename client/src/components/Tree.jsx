import TreeItem from './TreeItem';

function Tree({ data }) {
  return (
    <div className="space-y-1">
      {Object.entries(data).map(([name, item]) => (
        <TreeItem key={name} name={name} item={item} />
      ))}
    </div>
  );
}

export default Tree;
