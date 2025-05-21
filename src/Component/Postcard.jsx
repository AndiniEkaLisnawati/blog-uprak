
export default function PostCard({ title, body }) {
  return (
    <div id="blog" className="bg-white-50 dark:bg-slate-800 shadow-md p-4 rounded-2xl border border-gray-200 dark:border-slate-700">
      <img src="https://www.petanikode.com/img/cover/cpp-enum.png" alt="" />
      <h3 className="text-xl text-black dark:text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-slate-300 text-sm">{body}</p>
    </div>
  );
}