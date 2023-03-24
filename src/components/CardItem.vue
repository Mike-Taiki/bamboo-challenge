<template>
  <div v-if="Object.keys(chartData).length" class="wrapper">
    <div class="card">
      <h1 class="card__title">Saldo Devedor</h1>
      <p class="card__value">
        {{
          getBrazilianReal(chartData.inadimplency.summary[0].vl_saldo_devedor)
        }}
      </p>
    </div>

    <div class="card">
      <h1 class="card__title">Vencidos</h1>
      <p class="card__value">
        {{
          getBrazilianReal(
            chartData.inadimplency.summary[0].vl_total_inadimplencia
          )
        }}
      </p>
    </div>

    <div class="card">
      <h1 class="card__title">Vencidos até 90 dias</h1>
      <h1 class="card__subtitle">(% saldo devedor)</h1>
      <p class="card__value">
        {{ getBrazilianReal(chartData.inadimplency.summary[0].vencidosAte90) }}
      </p>
    </div>

    <div class="card">
      <h1 class="card__title">Vencidos acima de 90 dias</h1>
      <h1 class="card__subtitle">(% Saldo devedor)</h1>
      <p class="card__value">
        {{ getPercentage(chartData.inadimplency.summary[0].vencidosAcima90) }}
      </p>
    </div>

    <div class="card">
      <h1 class="card__title">Maior % Vencidos acima 90 dias</h1>
      <h1 class="card__subtitle">(% Saldo Devedor) (LTM)</h1>
      <p class="card__value">
        {{
          getBrazilianReal(
            chartData.inadimplency.summary[0].vl_total_pdd_sobre_saldo_devedor
          )
        }}
      </p>
    </div>
  </div>
</template>
<script>
import { api } from "../services/api";
export default {
  name: "CardItem",
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
    getBrazilianReal(val) {
      const brNumber = parseFloat(val).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return this.getNumberGreatness(brNumber);
    },
    getNumberGreatness(val) {
      const commaQuantity = val.split(".").length;
      const translateGreatness = {
        0: "",
        1: "",
        2: "mil",
        3: "mil",
        4: "milhões",
      };
      const greatness = translateGreatness[commaQuantity];
      return val.slice(0, 8) + " " + greatness;
    },
    getPercentage(val) {
      return `${val.toFixed(2).replace(/,/g, ".").replace(/\./g, ",")}%`;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.card {
  max-width: 400px;
  border: 1px solid var(--medium-gray);
  border-radius: 8px;
  padding: 15px 15px 40px 15px;
  font-family: "Roboto", sans-serif;
  min-width: 250px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.card__title {
  padding-bottom: 20px;
  font-size: 12px;
  color: var(--dark-gray);
  line-height: 15px;
}

.card__subtitle {
  margin-top: -20px;
  padding-bottom: 10px;
  font-size: 11px;
  color: var(--dark-gray);
}
.card__value {
  border-top: 2px solid var(--medium-gray);
  padding-top: 15px;
  font-weight: bolder;
  font-size: 24px;
}
</style>
