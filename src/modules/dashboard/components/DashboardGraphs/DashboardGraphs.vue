<template>
  <div v-if="Object.keys(chartData).length">
    <PieChart :chartData="chartData" />
    <PddTable :chartData="chartData" />
  </div>
</template>
<script>
import PddTable from "../PddTable/PddTable.vue";
import PieChart from "../PieChart/PieChart.vue";
export default {
  name: "DashboardGraphs",
  components: {
    PddTable,
    PieChart,
  },
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style scoped></style>
