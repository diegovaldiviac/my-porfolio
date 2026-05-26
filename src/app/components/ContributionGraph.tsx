"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ActivityCalendar } from "react-activity-calendar";
import type { Activity } from "react-activity-calendar";
import type { YearData } from "../sections/GitHubActivity";

const DARK_THEME = ["#1D1E20", "#7c3a00", "#c06200", "#e07a00", "#ff941a"];
const LIGHT_THEME = ["#F9FAFB", "#bfdbfe", "#93c5fd", "#3b82f6", "#1d4ed8"];

export default function ContributionGraph({
  yearData,
  years,
}: {
  yearData: Record<number, YearData>;
  years: number[];
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState(years[1]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-32 w-full" />;

  const { activities, total } = yearData[selectedYear] ?? { activities: [] as Activity[], total: 0 };
  const colorScheme = resolvedTheme === "dark" ? "dark" : "light";

  const isLight = resolvedTheme === "light";
  const activeBg = isLight ? "bg-blue-500 text-white" : "bg-orange-500 text-white";
  const inactiveBg = isLight
    ? "text-gray-600 hover:bg-gray-200"
    : "text-gray-400 hover:bg-gray-700";

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
              year === selectedYear ? activeBg : inactiveBg
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="w-full overflow-x-auto flex justify-center">
        {activities.length > 0 ? (
          <ActivityCalendar
            data={activities}
            colorScheme={colorScheme}
            theme={{ light: LIGHT_THEME, dark: DARK_THEME }}
            labels={{
              totalCount: `${total} contributions in ${selectedYear}`,
            }}
            blockSize={16}
            blockMargin={5}
            fontSize={14}
            showWeekdayLabels
          />
        ) : (
          <p className="text-sm text-gray-500">No contribution data available.</p>
        )}
      </div>
    </div>
  );
}
