<template>
  <PddTable v-if="Object.keys(chartData).length" :chartData="chartData" />
</template>
<script>
import PddTable from "./PddTable.vue";
export default {
  name: "DashboardGraphs",
  components: {
    PddTable,
  },
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
};
</script>
