'use client'

import Link from "next/link";

export default function NavBar() {
  return (
  <nav className="flex justify-center space-x-8 font-sans text-2xl bg-cyan-600 shadow-md text-white p-4">
    <Link href="/">Home</Link>
    <Link href="/browse">Browse</Link>
    <Link href="/grocery">Grocery List</Link>
  </nav>
  );
}