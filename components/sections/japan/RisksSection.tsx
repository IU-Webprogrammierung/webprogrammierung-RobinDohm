"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import { risksContent } from "@/data/japan";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function RisksSection() {
  const [blockA, blockB] = risksContent.blocks;

  // === Chart 1: Naturkatastrophen ===
  const disastersSeries = blockA.chart.series.map((s) => ({
    name: s.name,
    data: s.data,
  }));

  const disastersOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
    },
    colors: ["#c81d25", "#0f3f3a"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 2,
      },
    },
    stroke: {
      width: 4,
      colors: ["#fff", "#fff"],
    },
    xaxis: {
      categories: blockA.chart.xLabels,
      labels: {
        style: { fontSize: "11px" },
      },
    },
    yaxis: {
      title: {
        text: "Ereignisse / Todesopfer",
        style: { fontSize: "11px", fontWeight: 500 },
      },
      labels: {
        style: { fontSize: "11px" },
        formatter: (val) => val.toLocaleString("de-DE"),
      },
      min: 0,
      max: 60000,
    },
    legend: {
      position: "top",
      fontSize: "11px",
      markers: { size: 10 },
      itemMargin: { horizontal: 8 },
    },
    dataLabels: { enabled: false },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => val.toLocaleString("de-DE"),
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      padding: { top: 8, right: 8, left: 4, bottom: 4 },
    },
  };

  // === Chart 2: Demografie ===
  const demographySeries = blockB.chart.series.map((s) => ({
    name: s.name,
    data: s.data,
  }));

  const demographyOptions: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "inherit",
    },
    colors: ["#c81d25", "#0f3f3a"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: blockB.chart.xLabels,
      labels: {
        rotate: -45,
        style: { fontSize: "10px" },
      },
      tickAmount: 8,
    },
    yaxis: [
      {
        seriesName: blockB.chart.series[0].name,
        min: 0,
        max: 4.5,
      },
      {
        seriesName: blockB.chart.series[1].name,
        opposite: true,
        min: 0,
        max: 40,
      },
    ],
    legend: {
      position: "top",
      fontSize: "11px",
      markers: { size: 10 },
      itemMargin: { horizontal: 8 },
    },
    dataLabels: { enabled: false },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      borderColor: "#e5e7eb",
      padding: { top: 8, right: 8, left: 4, bottom: 4 },
    },
  };

  return (
    <section id="jp-risks" className="py-custom text-text">
      <h2>{risksContent.heading}</h2>

      {/* Intro */}
      <div className="mb-4 space-y-3">
        {risksContent.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Block A – Text + Chart rechts */}
      <h3 className="mt-4 mb-2 text-xl font-bold">{blockA.title}</h3>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-5">
        <div className="my-auto space-y-4">
          {blockA.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="h-[220px] w-full rounded border border-line bg-white md:h-[260px] lg:h-[300px]">
          <ReactApexChart
            options={disastersOptions}
            series={disastersSeries}
            type="bar"
            height="100%"
            width="100%"
          />
        </div>
      </div>

      {/* Block B – Chart links, Text rechts (mobil: Text vor Chart) */}
      <h3 className="mt-4 mb-2 text-xl font-bold">{blockB.title}</h3>
      <div className="grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start lg:gap-5">
        <div className="order-2 h-[220px] w-full rounded border border-line bg-white md:h-[260px] lg:order-1 lg:h-[300px]">
          <ReactApexChart
            options={demographyOptions}
            series={demographySeries}
            type="line"
            height="100%"
            width="100%"
          />
        </div>
        <div className="order-1 my-auto space-y-4 lg:order-2">
          {blockB.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
