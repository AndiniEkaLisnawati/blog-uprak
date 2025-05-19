export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between">
      <h1 className="text-xl font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}