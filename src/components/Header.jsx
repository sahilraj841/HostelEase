import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Left - Brand */}
      <div className="text-2xl font-bold">HostelEase</div>

      {/* Middle - Nav Buttons */}
      <nav className="space-x-6 hidden md:flex">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Contact Us</button>
        <button className="hover:underline">About Us</button>
      </nav>

      {/* Right - Auth Buttons and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-blue-800">
          Log In
        </button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
