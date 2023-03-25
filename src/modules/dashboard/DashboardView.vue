<template>
  <div>
    <DashboardCards :chartData="chartData" />
    <DashboardGraphs :chartData="chartData" />
  </div>
</template>
<script>
import DashboardCards from "./components/DashboardCards/DashboardCards.vue";
import DashboardGraphs from "./components/DashboardGraphs/DashboardGraphs.vue";
import { api } from "../../services/api";

export default {
  name: "DashboardView",
  components: {
    DashboardCards,
    DashboardGraphs,
  },
  data() {
    return {
      chartData: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      api.get().then((data) => (this.chartData = data));
    },
  },
};
</script>
