import { ILineChartProps } from "./types";

interface IDataLineChartProps {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }>;
}

export const optionsLineChart = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
};

export const dataLineChart = (
  data: ILineChartProps[]
): IDataLineChartProps => ({
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "€",
      data: data.map((item) => item.euros),
      borderColor: "rgba(6,147,227,1)",
      backgroundColor: "rgba(6,147,227,1)",
    },
  ],
});
