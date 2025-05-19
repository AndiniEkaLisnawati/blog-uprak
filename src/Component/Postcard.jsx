export default function PostCard({ title, body }) {
  return (
    <div className="bg-white shadow-md p-4 rounded border border-gray-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{body}</p>
    </div>
  );
}