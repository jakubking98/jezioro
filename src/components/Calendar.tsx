"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DateRange {
  startDate: string;
  endDate: string;
}

const CalendarComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateRanges, setDateRanges] = useState<DateRange[]>([]);
  const [markedDates, setMarkedDates] = useState<Date[]>([]);
  const [startHalfMarkedDates, setStartHalfMarkedDates] = useState<Date[]>([]);
  const [endHalfMarkedDates, setEndHalfMarkedDates] = useState<Date[]>([]);
  const [fullCircleDates, setFullCircleDates] = useState<Date[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const q = query(
          collection(db, "busyDateRanges"),
          orderBy("startDate", "asc")
        );
        const querySnapshot = await getDocs(q);
        const rangesArray = querySnapshot.docs.map(
          (doc) => doc.data() as DateRange
        );
        setDateRanges(rangesArray);

        const fullDates: Date[] = [];
        const fullCircleDates: Date[] = [];
        const startHalfDates: Date[] = [];
        const endHalfDates: Date[] = [];

        // First, identify fullCircleDates
        rangesArray.forEach((range, index) => {
          const start = new Date(range.startDate);
          const end = new Date(range.endDate);

          // Check if the end date of the current range is the same as the start date of the next range
          if (index < rangesArray.length - 1) {
            const nextRange = rangesArray[index + 1];
            const nextStart = new Date(nextRange.startDate);
            if (end.toDateString() === nextStart.toDateString()) {
              fullCircleDates.push(new Date(end));
            }
          }

          // Check if the start date of the current range is the same as the end date of the previous range
          if (index > 0) {
            const prevRange = rangesArray[index - 1];
            const prevEnd = new Date(prevRange.endDate);
            if (start.toDateString() === prevEnd.toDateString()) {
              fullCircleDates.push(new Date(start));
            }
          }
        });

        // Then, populate other date arrays, excluding fullCircleDates
        rangesArray.forEach((range) => {
          const start = new Date(range.startDate);
          const end = new Date(range.endDate);

          if (
            !fullCircleDates.some(
              (fullCircleDate) =>
                fullCircleDate.toDateString() === start.toDateString()
            )
          ) {
            startHalfDates.push(new Date(start));
          }

          if (
            !fullCircleDates.some(
              (fullCircleDate) =>
                fullCircleDate.toDateString() === end.toDateString()
            )
          ) {
            endHalfDates.push(new Date(end));
          }

          for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            if (
              d.toDateString() !== start.toDateString() &&
              d.toDateString() !== end.toDateString()
            ) {
              fullDates.push(new Date(d));
            }
          }
        });

        setMarkedDates([...fullDates, ...fullCircleDates]);
        setStartHalfMarkedDates(startHalfDates);
        setEndHalfMarkedDates(endHalfDates);
        setFullCircleDates(fullCircleDates);
      } catch (error) {
        console.error("Error fetching date ranges:", error);
      }
    };

    fetchDates();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[480px] bg-white p-4 md:p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold font-sora mb-5">
        Kalendarz rezerwacji
      </h2>
      <Calendar
        tileClassName={({ date, view }) => {
          if (view === "month") {
            if (
              fullCircleDates.find(
                (d) => d.toDateString() === date.toDateString()
              )
            ) {
              return "full-circle-date";
            }
            if (
              markedDates.find((d) => d.toDateString() === date.toDateString())
            ) {
              return "marked-date";
            }
            if (
              startHalfMarkedDates.find(
                (d) => d.toDateString() === date.toDateString()
              )
            ) {
              return "start-half-marked-date";
            }
            if (
              endHalfMarkedDates.find(
                (d) => d.toDateString() === date.toDateString()
              )
            ) {
              return "end-half-marked-date";
            }
          }
          return null;
        }}
        locale="pl-PL"
      />
      <Legend />
    </div>
  );
};

const Legend: React.FC = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-center space-x-4 font-sora">
      <div className="flex items-center">
        <div className="legend-color-box marked-date"></div>
        <span className="ml-2">Zarezerwowane</span>
      </div>

      <div className="flex items-center">
        <div className="legend-color-box react-calendar__tile--now"></div>
        <span className="ml-2">Dzisiejsza data</span>
      </div>
    </div>
  );
};

export default CalendarComponent;
