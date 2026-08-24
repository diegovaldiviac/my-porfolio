"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ActivityCalendar } from "react-activity-calendar";
import type { Activity } from "react-activity-calendar";
import type { YearData } from "../sections/GitHubActivity";

const DARK_THEME = ["#1c1c1f", "#5c2c00", "#8f4600", "#c76200", "#f97316"];
const LIGHT_THEME = ["#f4f4f5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"];

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

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-1.5">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`rounded-md border px-2.5 py-1 font-mono text-xs transition-colors ${
              year === selectedYear
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="no-scrollbar w-full overflow-x-auto">
        {activities.length > 0 ? (
          <ActivityCalendar
            data={activities}
            colorScheme={colorScheme}
            theme={{ light: LIGHT_THEME, dark: DARK_THEME }}
            labels={{
              totalCount: `${total} contributions in ${selectedYear}`,
            }}
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            showWeekdayLabels
          />
        ) : (
          <p className="font-mono text-xs text-muted-foreground">No contribution data available.</p>
        )}
      </div>
    </div>
  );
}
