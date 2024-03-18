"use client";
import { ApiGetDataBalance } from "@/app/server";
import React, { useEffect, useState } from "react";
import BalaceStatisticCard from "@/app/Organism/BalanceStatisticCard";
import { getDataForCurrentMonth, summarizeDataByMonth } from "@/app/utlis";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await ApiGetDataBalance();
        setData(fetchedData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [error]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const summarizedData = summarizeDataByMonth(data);
      setSummaryData(summarizedData);
    } else {
      console.error("Transactions data is null or not an array.");
    }
  }, [data]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth() + 1;
  const filteredData = summaryData?.filter((item) => {
    const monthIndex =
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ].indexOf(item.month) + 1;
    return item.year === currentYear && monthIndex <= currentMonthIndex;
  });

  return (
    <div>
      <div>
        <h1>Hello, Junnie !</h1>
        <span>View your control finance here!</span>
      </div>
      <BalaceStatisticCard dataThisMonth={getDataForCurrentMonth(data)} dataBalance={filteredData} />
    </div>
  );
}
