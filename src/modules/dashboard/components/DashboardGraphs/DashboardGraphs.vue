<template>
  <div v-if="Object.keys(chartData).length">
    <UnderOverChart :chartData="chartData" />
    <PieChart :chartData="chartData" />
    <PddTable :chartData="chartData" />
  </div>
</template>
<script>
import PddTable from "../PddTable/PddTable.vue";
import PieChart from "../PieChart/PieChart.vue";
import UnderOverChart from "../UnderOverChart/UnderOverChart.vue";
export default {
  name: "DashboardGraphs",
  components: {
    PddTable,
    PieChart,
    UnderOverChart,
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
