import { H2 } from "../components/Headings";
import { getTranslations } from "next-intl/server";
import ContributionGraph from "../components/ContributionGraph";
import type { Activity } from "react-activity-calendar";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

export type YearData = {
  activities: Activity[];
  total: number;
};

function toLevel(count: number): Activity["level"] {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

async function fetchYearContributions(
  username: string,
  token: string,
  year: number
): Promise<YearData> {
  const now = new Date();
  const from = `${year}-01-01T00:00:00Z`;
  const to =
    year === now.getFullYear()
      ? now.toISOString()
      : `${year}-12-31T23:59:59Z`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }`,
      variables: { username, from, to },
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return { activities: [], total: 0 };

  const json = await res.json();
  const calendar =
    json?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) return { activities: [], total: 0 };

  const activities: Activity[] = (calendar.weeks as Week[]).flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: toLevel(day.contributionCount),
    }))
  );

  return { activities, total: calendar.totalContributions as number };
}

export default async function GitHubActivitySection() {
  const t = await getTranslations("github");
  const token = process.env.GITHUB_TOKEN ?? "";
  const username = process.env.GITHUB_USERNAME ?? "diegovaldiviac";

  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

  const results = await Promise.all(
    years.map((year) => fetchYearContributions(username, token, year))
  );

  const yearData: Record<number, YearData> = {};
  years.forEach((year, i) => {
    yearData[year] = results[i];
  });

  return (
    <div className="section-container">
      <div className="divide-y">
        <H2>{t("title")}</H2>
        <div className="py-4">
          <ContributionGraph yearData={yearData} years={years} />
        </div>
      </div>
    </div>
  );
}
