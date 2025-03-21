"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
  time?: string;
  arrivalDate: string;
  departureDate: string;
  phoneNumber: string;
  numberOfPeople: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    arrivalDate: "",
    departureDate: "",
    phoneNumber: "",
    numberOfPeople: "1",
  });

  const [status, setStatus] = useState<string>("");
  const [minArrivalDate, setMinArrivalDate] = useState<string>("");
  const [minDepartureDate, setMinDepartureDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    setMinArrivalDate(formattedToday);
    setMinDepartureDate(formattedToday);
  }, []);

  useEffect(() => {
    if (formData.arrivalDate) {
      setMinDepartureDate(formData.arrivalDate);
    }
  }, [formData.arrivalDate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString("pl-PL", {
      dateStyle: "long",
      timeStyle: "short",
    });

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: currentTime,
      arrivalDate: formData.arrivalDate,
      departureDate: formData.departureDate,
      phoneNumber: formData.phoneNumber,
      numberOfPeople: formData.numberOfPeople,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email wysłany pomyślnie:", response);
      setStatus("✅ Wiadomość wysłana!");
      setFormData({
        name: "",
        email: "",
        message: "",
        arrivalDate: "",
        departureDate: "",
        phoneNumber: "",
        numberOfPeople: "1",
      });
    } catch (error) {
      console.error("❌ Błąd wysyłania wiadomości", error);
      setStatus("Błąd wysyłania. Spróbuj ponownie.");
    }
  };

  const getPeopleDeclension = (number: number): string => {
    if (number === 1) {
      return "Osoba";
    } else if (number >= 2 && number <= 4) {
      return "Osoby";
    } else {
      return "Osób";
    }
  };

  return (
    <div className="w-full max-w-[480px] h-full bg-white p-4 md:p-6 rounded-xl shadow-md mt-0 font-sora">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Formularz kontaktowy
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Twoje imię"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full p-3 border font-sora border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[...Array(8)].map((_, index) => {
              const number = index + 1;
              return (
                <option key={number} value={number}>
                  {number} {getPeopleDeclension(number)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Numer kontaktowy"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Twój email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="arrivalDate"
            placeholder="Data przyjazdu"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
            min={minArrivalDate}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="departureDate"
            placeholder="Data wyjazdu"
            value={formData.departureDate}
            onChange={handleChange}
            required
            min={minDepartureDate}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Twoja wiadomość"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Wyślij
        </button>
      </form>
      <h5 className="text-TextN font-sora text-lg md:text-lg pt-2 md:pt-5 text-center">
        Rezerwacje potwierdzimy po otrzymaniu od Ciebie maila.
      </h5>
      {status && <p className="mt-4 text-center font-semibold">{status}</p>}
    </div>
  );
};

export default ContactForm;
