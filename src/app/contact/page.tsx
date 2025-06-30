"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    insuranceType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const phoneRegex = /^\d{10,12}$/;
    if (!formData.name.trim()) return "Name is required.";
    if (!phoneRegex.test(formData.phone)) return "Phone number must be 10–12 digits.";
    if (!formData.address.trim()) return "Address is required.";
    if (!formData.insuranceType) return "Please select an insurance type.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) return toast.error(error);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwItycWpDKKBRt1BxWV1aR-xjQIoo1Utiq75F5J1ejjV1p7Sw6ndO7j8W4b-esIPvw/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.result === "success") {
        toast.success("Submitted successfully!");
        setFormData({ name: "", phone: "", address: "", insuranceType: "" });
      } else {
        toast.error("Submission failed.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <Toaster />
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-6">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-3 border border-gray-300 rounded-xl"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="p-3 border border-gray-300 rounded-xl"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="p-3 border border-gray-300 rounded-xl"
        />
        <select
          name="insuranceType"
          value={formData.insuranceType}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-xl"
        >
          <option value="">Select Insurance Type</option>
          <option value="Health">Health</option>
          <option value="Life">Life</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Property">Property</option>
        </select>
        <button
          type="submit"
          className="bg-blue-700 text-white py-3 px-6 rounded-xl hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
