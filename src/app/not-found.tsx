"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Przekieruj na stronę główną
    redirect("/");
  }, []);

  // Możesz opcjonalnie zwrócić null lub jakiś komunikat ładowania,
  // ale przekierowanie nastąpi niemal natychmiast.
  return null;
  // Lub np.:
  // return <p>Przekierowywanie na stronę główną...</p>;
}
