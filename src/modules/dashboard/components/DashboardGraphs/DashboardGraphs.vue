<template>
  <div v-if="Object.keys(chartData).length" class="graphs">
    <OverdueChart :chartData="chartData" />
    <PieChart :chartData="chartData" />
    <UnderOverChart :chartData="chartData" />
    <PddTable :chartData="chartData" />
  </div>
</template>
<script>
import PddTable from "../PddTable/PddTable.vue";
import PieChart from "../PieChart/PieChart.vue";
import UnderOverChart from "../UnderOverChart/UnderOverChart.vue";
import OverdueChart from "../OverdueChart/OverdueChart.vue";
export default {
  name: "DashboardGraphs",
  components: {
    PddTable,
    PieChart,
    UnderOverChart,
    OverdueChart,
  },
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style scoped>
.graphs {
  display: grid;
  grid-template-columns: 600px 600px;
}

@media (max-width: 1199px) {
  .graphs {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
