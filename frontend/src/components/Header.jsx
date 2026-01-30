import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">My Website</div>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-blue-200 transition duration-300"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
