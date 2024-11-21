"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button } from "@mui/material";
import Link from "next/link";

const otherSetting = {
  height: 300,
  yAxis: [{ label: "users" }],
  grid: { horizontal: true },
};

// Just for example
const dataset = [
  {
    users: 42,
    date: new Date(2024, 11, 10),
  },
  {
    users: 57,
    date: new Date(2024, 11, 11),
  },
  {
    users: 35,
    date: new Date(2024, 11, 12),
  },
  {
    users: 99,
    date: new Date(2024, 11, 13),
  },
  {
    users: 15,
    date: new Date(2024, 11, 14),
  },
  {
    users: 39,
    date: new Date(2024, 11, 15),
  },
];

export default function UserStatisticsWidget() {
  return (
    <>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "date",
          },
        ]}
        series={[{ dataKey: "users", label: "Users" }]}
        {...otherSetting}
      />
      <Button variant="outlined">
        <Link href="/onboarding">Onboarding</Link>
      </Button>
    </>
  );
}
