<template>
  <Card class="card">
    <h1 class="card__title">Over / Under 90d</h1>
    <h2 class="card__subtitle">Em %</h2>
    <LineChart class="chart" :data="data" :options="options" />
  </Card>
</template>
<script>
import Card from "../../../../components/Card.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
import { Line as LineChart } from "vue-chartjs";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "UnderOverChart",
  components: {
    Card,
    LineChart,
  },
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            label: "12 meses",
            borderColor: "#4fa700",
            backgroundColor: "#4fa700",
            data: this.getDataUnder(),
            tension: 0.4,
          },
          {
            label: "24 meses",
            borderColor: "#003b45",
            backgroundColor: "#003b45",
            data: this.getDataOver(),
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => `${val}%`,
            },
          },
        },
      },
    };
  },
  methods: {
    sort(data) {
      return [...data].reverse();
    },
    getLabels() {
      const sortedData = this.sort(this.chartData.inadimplency.underOver);
      return sortedData.map((el) => {
        const month = el.date.slice(5, 7);
        const year = el.date.slice(2, 4);
        el = `${month}/${year}`;
        return el;
      });
    },
    getDataUnder() {
      return this.chartData.inadimplency.underOver.map((el) => el.under);
    },
    getDataOver() {
      return this.chartData.inadimplency.underOver.map((el) => el.over);
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 600px;
  min-width: 300px;
  height: 200px;
}
.card__title {
  font-size: var(--sm);
}

.card__subtitle {
  font-size: var(--xs);
}
</style>
