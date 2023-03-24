<template>
  <Card class="card"><canvas id="acquisitions"></canvas></Card>
</template>
<script>
import Card from "../../../../components/Card.vue";
import Chart from "chart.js/auto";
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
  },
  created() {
    this.buildGraph();
  },
  methods: {
    buildGraph() {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      new Chart(document.getElementById("acquisitions"), {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    },
  },
};
</script>
<style scoped>
.card {
  width: 800px;
}
</style>
