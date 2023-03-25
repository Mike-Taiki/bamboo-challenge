<template>
  <Card class="card">
    <h1 class="card__title">PDD por Faixa de Atraso</h1>
    <h2 class="card__subtitle">Em %</h2>
    <Pie class="chart" :data="data" :options="options" />
  </Card>
</template>
<script>
import Card from "../../../../components/Card.vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "PieChart",
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
  components: {
    Card,
    Pie,
  },
  data() {
    return {
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            label: "My First Dataset",
            data: this.getData(),
            backgroundColor: [
              "#b4fb73",
              "#cccccc",
              "#a7ff57",
              "#4fa700",
              "#93fe32",
              "#00d4ff",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    };
  },
  methods: {
    getLabels() {
      return this.chartData.inadimplency.pddByDelayRange.map(
        (el) => el.ds_pdd_faixa_atraso
      );
    },
    getData() {
      return this.chartData.inadimplency.pddByDelayRange.map(
        (el) => el.percent
      );
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 600px;
  height: 200px;
}
.card__title {
  font-size: var(--sm);
}

.card__subtitle {
  font-size: var(--xs);
}
</style>
