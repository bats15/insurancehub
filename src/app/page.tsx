import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4">Welcome to InsuranceHub</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Your one-stop platform for all insurance solutions. Get the best premium rates, fast estimates, and trusted service — all in one place.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-12 text-blue-900">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">All-In-One Insurance</h3>
            <p>Car, Bike, Health, Term — every type of coverage in one place.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Best Premiums</h3>
            <p>Discounted insurance premium rates across top providers.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Instant Estimates</h3>
            <p>Get your insurance estimates in seconds — no long forms.</p>
          </div>
        </div>
      </section>
    </main>
  );
}