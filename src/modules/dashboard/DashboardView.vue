<template>
  <div>
    <DashboardCards />
    <DashboardGraphs />
  </div>
</template>
<script>
import DashboardCards from "./DashboardCards.vue";
import DashboardGraphs from "./DashboardGraphs.vue";
export default {
  name: "DashboardView",
  components: {
    DashboardCards,
    DashboardGraphs,
  },
};
</script>
