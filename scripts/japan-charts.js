document.addEventListener("DOMContentLoaded", () => {
  if (!window.Chart) return;

  const disastersCtx = document.getElementById("chart-disasters");
  if (disastersCtx) {
    // Erdbeben >= 5.0, aggregiert für die letzten 10 Jahre (2016–2025)
    const labels = ["Japan"];
    const events = [55000];
    const deaths = [18384];
    new Chart(disastersCtx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Erdbeben (Anzahl pro Jahr)",
            data: events,
            backgroundColor: "rgba(200, 29, 37, 0.6)",
            borderColor: "rgba(200, 29, 37, 1)",
            borderWidth: 1,
          },
          {
            label: "Todesopfer (2000-2025)",
            data: deaths,
            backgroundColor: "rgba(15, 63, 58, 0.35)",
            borderColor: "rgba(15, 63, 58, 0.8)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
        plugins: {
          legend: { position: "top" },
          tooltip: { mode: "index", intersect: false },
        },
      },
    });
  }

  const demogCtx = document.getElementById("chart-demography");
  if (demogCtx) {
    const years = [
      "1950",
      "1955",
      "1960",
      "1965",
      "1970",
      "1975",
      "1980",
      "1985",
      "1990",
      "1995",
      "2000",
      "2005",
      "2010",
      "2015",
      "2018",
      "2020",
      "2021",
      "2022",
      "2025",
      "2030",
      "2040",
      "2050",
    ];
    // Geburtenrate: Kinder je Frau
    const birthsPerWoman = [
      3.62, 2.35, 1.98, 2.09, 2.04, 1.92, 1.74, 1.74, 1.51, 1.41, 1.35, 1.25,
      1.36, 1.42, 1.3, 1.21, 1.22, 1.23, 1.26, 1.29, 1.31, 1.33,
    ];
    // Anteil 65+ in %
    const elderlyShare = [
      4.9, 5.2, 5.74, 6.3, 7.06, 8.2, 9.07, 10.6, 12.16, 14.0, 17.44, 20.5,
      23.1, 26.92, 28.0, 29.56, 29.8, 29.9, 29.99, 30.5, 32.7, 36.82,
    ];
    new Chart(demogCtx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Geburtenrate (Kinder je Frau)",
            data: birthsPerWoman,
            yAxisID: "y",
            borderColor: "rgba(200, 29, 37, 1)",
            backgroundColor: "rgba(200, 29, 37, 0.15)",
            tension: 0.25,
          },
          {
            label: "Anteil 65+ in %",
            data: elderlyShare,
            yAxisID: "y1",
            borderColor: "rgba(15, 63, 58, 1)",
            backgroundColor: "rgba(15, 63, 58, 0.15)",
            tension: 0.25,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        scales: {
          y: { type: "linear", position: "left" },
          y1: {
            type: "linear",
            position: "right",
            grid: { drawOnChartArea: false },
          },
        },
        plugins: { legend: { position: "top" } },
      },
    });
  }
});
