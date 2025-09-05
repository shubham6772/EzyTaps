export const LineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly CTR",
      data: [300, 500, 400, 600, 700, 500],
      tension: 0.4, // smooth line
    },
  ],
};

export const BarChartDataCountry = {
  labels: [
    "India", "Japan", "USA", "UK",
  ],
  datasets: [
    {
      label: "Country CTR",
      data: [500, 870, 102, 1288,],
    },
  ],
};

export const BarChartDataState = {
  labels: [
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Uttar Pradesh",
  ],
  datasets: [
    {
      label: "State CTR",
      data: [1200, 950, 870, 1500],
    },
  ],
};

// pure data (no color dependency)
export const polarData = {
  labels: ["Direct", "Google", "Facebook", "Twitter/X", "LinkedIn", "Other"],
  datasets: [
    {
      label: "Referrers",
      data: [120, 300, 180, 90, 60, 40],
    },
  ],
};

export const deviceTrafficData = {
  labels: ["Mobile", "Desktop", "Tablet", "Other"],
  datasets: [
    {
      label: "Device Traffic",
      data: [450, 300, 120, 30],
    },
  ],
};












