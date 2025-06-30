import React from "react";
import Link from "next/link";

const services = [
  { name: "Car Insurance", route: "car" },
  { name: "Bike Insurance", route: "bike" },
  { name: "Commercial Vehicle Insurance", route: "commercial" },
  { name: "Health Insurance", route: "health" },
  { name: "Term Insurance", route: "term" },
  { name: "Industrial Insurance", route: "industrial" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Insurance Services</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((item) => (
          <div
            key={item.name}
            className="relative group bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600">Click below to explore more about {item.name}.</p>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href={`/services/${item.route}`}
                className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600"
              >
                Expand
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
