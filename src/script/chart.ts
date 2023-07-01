import { Chart, ChartConfiguration } from "chart.js";

// Define jisin chart configuration
const jisinChartConfig: ChartConfiguration<"bar", number[], string> = {
  type: "bar",
  data: {
    labels: [
      "1919",
      "1920",
      "1921",
      "1922",
      "1923",
      "1924",
      "1925",
      "1926",
      "1927",
      "1928",
      "1929",
      "1930",
      "1931",
      "1932",
      "1933",
      "1934",
      "1935",
      "1936",
      "1937",
      "1938",
      "1939",
      "1940",
      "1941",
      "1942",
      "1943",
      "1944",
      "1945",
      "1946",
      "1947",
      "1948",
      "1949",
      "1950",
      "1951",
      "1952",
      "1953",
      "1954",
      "1955",
      "1956",
      "1957",
      "1958",
      "1959",
      "1960",
      "1961",
      "1962",
      "1963",
      "1964",
      "1965",
      "1966",
      "1967",
      "1968",
      "1969",
      "1970",
      "1971",
      "1972",
      "1973",
      "1974",
      "1975",
      "1976",
      "1977",
      "1978",
      "1979",
      "1980",
      "1981",
      "1982",
      "1983",
      "1984",
      "1985",
      "1986",
      "1987",
      "1988",
      "1989",
      "1990",
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
        label: " ",
        data: [
          3, 6, 4, 9, 36, 11, 15, 10, 21, 18, 13, 35, 21, 6, 9, 4, 8, 8, 17, 12, 13, 11, 10, 15, 23,
          17, 16, 8, 5, 4, 3, 5, 5, 10, 4, 7, 7, 12, 6, 5, 8, 12, 21, 77, 10, 19, 28, 62, 19, 30,
          10, 11, 11, 17, 16, 14, 13, 5, 11, 34, 7, 14, 12, 10, 24, 36, 12, 38, 20, 11, 11, 16, 27,
          52, 34, 26, 56, 31, 40, 29, 23, 357, 37, 28, 71, 105, 49, 28, 57, 42, 40, 37, 324, 81, 64,
          55, 44, 192, 40, 78, 40, 45, 54, 51, 29,
        ],
        backgroundColor: ["rgba(232, 195, 52, 0.7)"],
        borderColor: ["rgba(232, 195, 52, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },
      },
    },
  },
};

// Define eqdistrict chart configuration
const eqdistrictChartConfig: ChartConfiguration<"bar", number[], string> = {
  type: "bar",
  data: {
    labels: [
      "茨城県",
      "北海道",
      "福島県",
      "宮城県",
      "岩手県",
      "栃木県",
      "千葉県",
      "熊本県",
      "長野県",
      "鹿児島県",
      "埼玉県",
      "新潟県",
      "静岡県",
      "青森県",
      "神奈川県",
      "沖縄県",
      "東京都",
      "宮崎県",
      "群馬県",
      "山梨県",
      "大分県",
      "鳥取県",
      "山形県",
      "和歌山県",
      "秋田県",
      "兵庫県",
      "石川県",
      "三重県",
      "長崎県",
      "岐阜県",
      "京都府",
      "広島県",
      "香川県",
      "愛知県",
      "福井県",
      "高知県",
      "愛媛県",
      "奈良県",
      "山口県",
      "島根県",
      "福岡県",
      "徳島県",
      "大阪府",
      "滋賀県",
      "岡山県",
      "富山県",
      "佐賀県",
    ],
    datasets: [
      {
        label: "回数",
        data: [
          392, 373, 366, 280, 250, 243, 233, 223, 187, 164, 162, 161, 157, 151, 119, 112, 97, 83,
          76, 75, 69, 67, 64, 61, 59, 59, 57, 47, 46, 43, 40, 40, 39, 38, 36, 36, 33, 30, 30, 29,
          28, 26, 25, 24, 19, 15, 14,
        ],
        backgroundColor: ["rgba(232, 195, 52, 0.7)"],
        borderColor: ["rgba(232, 195, 52, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y" as const,
    responsive: true, // This will make the chart responsive
    maintainAspectRatio: false, // This will force the chart to not maintain the aspect ratio
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false, // 横軸のグリッド（縦線たち）を非表示
        },

        // ticks: {
        //   color: "#19170d",
        // },
      },
    },
  },
};

let jisinChart: Chart | null = null;
let eqdistrictChart: Chart | null = null;

// Function to generate chart
const generateChart = (
  config: ChartConfiguration<"bar", number[], string>,
  canvasId: string
): Chart => {
  let canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;

  if (!canvas) {
    throw new Error(`Cannot find a canvas element with id ${canvasId}`);
  }

  let chart = new Chart(canvas, config);

  return chart;
};

// Generate the initial charts
jisinChart = generateChart(jisinChartConfig, "jisinChart");
eqdistrictChart = generateChart(eqdistrictChartConfig, "eqdistrict");

// Redraw charts on window resize
window.addEventListener("resize", () => {
  if (jisinChart) {
    jisinChart.destroy();
    jisinChart = generateChart(jisinChartConfig, "jisinChart");
  }

  if (eqdistrictChart) {
    eqdistrictChart.destroy();
    eqdistrictChart = generateChart(eqdistrictChartConfig, "eqdistrict");
  }
});
