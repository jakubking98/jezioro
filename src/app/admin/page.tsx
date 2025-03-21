"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface DateRange {
  startDate: string;
  endDate: string;
  id: string;
}

const AdminPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [busyDateRanges, setBusyDateRanges] = useState<DateRange[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [wrongPassword, setWrongPassword] = useState<boolean>(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    if (isLoggedIn) {
      fetchBusyDateRanges();
    }
  }, [isLoggedIn]);

  const fetchBusyDateRanges = async () => {
    setIsLoading(true);
    try {
      const today = new Date().toISOString().split("T")[0];
      const q = query(
        collection(db, "busyDateRanges"),
        orderBy("startDate", "asc")
      );
      const querySnapshot = await getDocs(q);
      const ranges: DateRange[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const startDate =
          data.startDate instanceof Timestamp
            ? data.startDate.toDate().toISOString().split("T")[0]
            : data.startDate;
        const endDate =
          data.endDate instanceof Timestamp
            ? data.endDate.toDate().toISOString().split("T")[0]
            : data.endDate;

        return {
          startDate,
          endDate,
          id: doc.id,
        };
      }) as DateRange[];
      const filteredRanges = ranges.filter((range) => {
        return range.endDate >= today;
      });
      setBusyDateRanges(filteredRanges);
    } catch (error) {
      console.error("Error fetching busy date ranges:", error);
      setMessage("❌ Błąd pobierania danych.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setMessage("❌ Wybierz datę początkową i końcową.");
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setMessage("❌ Data początkowa nie może być po dacie końcowej.");
      return;
    }
    setIsAdding(true);
    try {
      await addDoc(collection(db, "busyDateRanges"), { startDate, endDate });
      setStartDate("");
      setEndDate("");
      setMessage("✅ Dodano nowy termin.");
      fetchBusyDateRanges();
    } catch (error) {
      console.error("Error adding busy date range:", error);
      setMessage("❌ Błąd dodawania terminu.");
    } finally {
      setIsAdding(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, "busyDateRanges", id));
      setMessage("✅ Usunięto termin.");
      fetchBusyDateRanges();
    } catch (error) {
      console.error("Error deleting busy date range:", error);
      setMessage("❌ Błąd usuwania terminu.");
    } finally {
      setIsDeleting(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const getMinEndDate = () => {
    return startDate ? startDate : "";
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Panel Administratora</h2>
        <form
          onSubmit={handlePasswordSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Hasło:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Zaloguj
          </button>
          {wrongPassword && (
            <p className="text-red-500 text-xs italic mt-2">
              Nieprawidłowe hasło.
            </p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Panel Administratora
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Dodaj zajęty termin</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="startDate" className="block mb-1">
                Data początkowa:
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="endDate" className="block mb-1">
                Data końcowa:
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2 w-full rounded"
                min={getMinEndDate()}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition-colors ${
              isAdding ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAdding}
          >
            {isAdding ? "Dodawanie..." : "Dodaj"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Obecnie zajęte terminy:</h3>
        {message && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
            {message}
          </div>
        )}
        {isLoading ? (
          <p className="text-gray-500">Ładowanie...</p>
        ) : busyDateRanges.length > 0 ? (
          <ul className="space-y-2">
            {busyDateRanges.map((range) => (
              <li
                key={range.id}
                className="border p-3 rounded flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div>
                  <span className="font-medium">Od:</span> {range.startDate}{" "}
                  <span className="font-medium">do:</span> {range.endDate}
                </div>
                <button
                  onClick={() => handleDelete(range.id)}
                  className={`bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors ${
                    isDeleting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Usuwanie..." : "Usuń"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Brak zajętych terminów.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
