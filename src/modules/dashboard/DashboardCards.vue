<template>
  <div v-if="Object.keys(chartData).length" class="wrapper">
    <CardItem
      :title="`Saldo Devedor`"
      :value="chartData.inadimplency.summary[0].vl_saldo_devedor"
    />
    <CardItem
      :title="`Vencidos`"
      :value="chartData.inadimplency.summary[0].vl_total_inadimplencia"
    />
    <CardItem
      title="Vencidos até 90 dias"
      subtitle="(% saldo devedor)"
      :value="chartData.inadimplency.summary[0].vencidosAte90"
    />

    <CardItem
      title="Vencidos até 90 dias"
      subtitle="(% saldo devedor)"
      is-percentage
      :value="chartData.inadimplency.summary[0].vencidosAcima90"
    />

    <CardItem
      title="Maior % Vencidos acima 90 dias"
      subtitle="(% Saldo Devedor) (LTM)"
      is-percentage
      :value="
        chartData.inadimplency.summary[0].vl_total_pdd_sobre_saldo_devedor
      "
    />
  </div>
</template>
<script>
import CardItem from "./CardItem.vue";
import { api } from "../../services/api";

export default {
  name: "DashboardCards",
  components: {
    CardItem,
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
<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
