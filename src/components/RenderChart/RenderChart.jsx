import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Bar, Pie } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "white",
        font: {},
      },
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: "Weekday",
        color: "white",
        padding: 5,
        font: {
          size: 17,
          family: "quicksand",
        },
      },
      ticks: {
        color: "white",
        font: {
          weight: "bold",
          family: "quicksand",
        },
      },
    },
    y: {
      title: {
        display: false,
        text: "Amount",
        color: "white",
        padding: 5,
        font: {
          size: 17,
          family: "quicksand",
        },
      },
      ticks: {
        color: "white",
        font: {
          weight: "bold",
          family: "quicksand",
        },
      },
    },
  },
}

const pieChartOptions = {
  animation: {
    animateScale: true,
    animateRotate: true,
  },

  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
      color: "#fff",
      font: {
        family: "quicksand",
        weight: "bolder",
        size: "10",
      },
    },
  },
}

export default function RenderChart({
  type = "pie",
  data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
}) {
  return type === "bar" ? (
    <Bar data={data} options={barChartOptions} />
  ) : (
    <Pie
      data={data}
      plugins={[ChartDataLabels]}
      options={pieChartOptions}></Pie>
  )
}
