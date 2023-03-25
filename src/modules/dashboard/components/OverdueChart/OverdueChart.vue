<template>
  <Card class="card">
    <h1 class="card__title">Valores Vencidos</h1>
    <h2 class="card__subtitle">Em R$</h2>
    <Bar :data="data" :options="options" />
  </Card>
</template>
<script>
import Card from "../../../../components/Card.vue";
import { getBrazilianReal } from "../../../../helpers/currencyFormater";
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "OverdueChart",
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
  components: {
    Card,
    Bar,
  },
  data() {
    return {
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            type: "bar",
            label: "Range",
            backgroundColor: "#4fa700",
            data: this.getValues(),
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
          },
          {
            type: "line",
            label: "Range",
            backgroundColor: "#4fa700",
            data: this.getValueLines(),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              footer: (tooltipItems) => {
                const diff =
                  tooltipItems[0].parsed.y - tooltipItems[0].parsed.x;
                if (
                  tooltipItems[0].dataIndex >=
                  this.chartData.inadimplency.overdueChart.length
                ) {
                  return "Total: " + getBrazilianReal(tooltipItems[0].parsed.y);
                }
                return "Diferença: " + getBrazilianReal(diff);
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  methods: {
    getLabels() {
      const labels = this.chartData.inadimplency.overdueChart.map(
        (el) => el.label
      );
      labels.push("Total");
      return labels;
    },
    getValues() {
      const data = this.chartData.inadimplency.overdueChart.map((el) => [
        el.initValue,
        el.endValue,
      ]);
      const lastValue = data[data.length - 1][1];
      data.push([0, lastValue]);
      return data;
    },
    getValueLines() {
      const data = this.chartData.inadimplency.overdueChart.map(
        (el) => el.endValue
      );
      const lastValue = data[data.length - 1];
      data.push(lastValue);
      return data;
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 600px;
  height: 200px;
}
</style>
