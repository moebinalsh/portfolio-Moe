export function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}
