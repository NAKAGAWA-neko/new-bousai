import Chart, { ChartConfiguration } from "chart.js/auto";

// 記録的短時間大雨情報
const rainRecordStChartConfig: ChartConfiguration<"bar", number[], string> = {
  type: "bar",
  data: {
    labels: ["2013", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [
      {
        label: "",
        data: [77, 53, 38, 58, 109, 123, 96, 109, 64, 161, 11],
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
      tooltip: {
        mode: "index",
        filter: function (item) {
          return item.raw !== 0; // '0'のデータポイントではツールチップを表示しない
        },
        callbacks: {
          title: function (context) {
            return context[0].label + "年";
          },
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "回";
            }
            return label;
          },

          // afterBody: function (context) {
          //   if (context[0].label === "60") {
          //     return "\n5月23日にチリでMw9.5の地震が発生。\n1900年以降で一番大きな地震";
          //   } else {
          //     return "";
          //   }
          // },
        },
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

// 大雨特別警報年別
const rainSpWarningYeChartConfig: ChartConfiguration<"bar", number[], string> = {
  type: "bar",
  data: {
    labels: ["2013", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    datasets: [
      {
        label: "",
        data: [89, 148, 137, 45, 64, 270, 497, 103, 78, 45, 17],
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
      tooltip: {
        mode: "index",
        filter: function (item) {
          return item.raw !== 0; // '0'のデータポイントではツールチップを表示しない
        },
        callbacks: {
          title: function (context) {
            return context[0].label + "年";
          },
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "回";
            }
            return label;
          },
        },
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};
// 大雨特別警報月別
const rainSpWarningMoChartConfig: ChartConfiguration<"bar", number[], string> = {
  type: "bar",
  data: {
    labels: ["7月", "8月", "9月", "10月"],
    datasets: [
      {
        label: "",
        data: [544, 178, 299, 472],
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
      tooltip: {
        mode: "index",
        filter: function (item) {
          return item.raw !== 0; // '0'のデータポイントではツールチップを表示しない
        },
        callbacks: {
          title: function (context) {
            return context[0].label + "年";
          },
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "回";
            }
            return label;
          },
        },
        bodyFont: {
          weight: "bold", // テキストを太字に設定
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};
// ---------------------------------

let rainRecordStChart: Chart | null = null;
let rainSpWarningYeChart: Chart | null = null;
let rainSpWarningMoChart: Chart | null = null;

// チャートを生成するための関数
const generateChart = (config: ChartConfiguration<"bar", number[], string>, canvasId: string): Chart => {
  let canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error(`Cannot find a canvas element with id ${canvasId}`);
  }
  let chart = new Chart(canvas, config);
  return chart;
};

const generateLineChart = (config: ChartConfiguration<"line", number[], string>, canvasId: string): Chart => {
  let canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error(`Cannot find a canvas element with id ${canvasId}`);
  }
  let chart = new Chart(canvas, config);
  return chart;
};

// 初期チャートの生成

rainRecordStChart = generateChart(rainRecordStChartConfig, "rainRecordStChart");

rainSpWarningYeChart = generateChart(rainSpWarningYeChartConfig, "rainSpWarningYeChart");

rainSpWarningMoChart = generateChart(rainSpWarningMoChartConfig, "rainSpWarningMoChart");

// ウィンドウサイズの変更時にチャートを再描画
window.addEventListener("resize", () => {
  if (rainRecordStChart) {
    rainRecordStChart.destroy();
    rainRecordStChart = generateChart(rainRecordStChartConfig, "rainRecordStChart");
  }

  if (rainSpWarningYeChart) {
    rainSpWarningYeChart.destroy();
    rainSpWarningYeChart = generateChart(rainSpWarningYeChartConfig, "rainSpWarningYeChart");
  }

  if (rainSpWarningMoChart) {
    rainSpWarningMoChart.destroy();
    rainSpWarningMoChart = generateChart(rainSpWarningMoChartConfig, "rainSpWarningMoChart");
  }
});
