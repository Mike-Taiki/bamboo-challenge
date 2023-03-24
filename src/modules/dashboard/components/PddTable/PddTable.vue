<template>
  <Card class="card">
    <h1 class="card__title">PDD</h1>
    <span class="card__subtitle">Tabela</span>
    <table class="table">
      <thead class="thead">
        <tr>
          <th class="thead__item">Nível de Risco</th>
          <th class="thead__item">Intervalo</th>
          <th class="thead__item">Valor ($)</th>
          <th class="thead__item">Faixa PDD</th>
          <th class="thead__item">PDD (R$ mil)</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr
          v-for="(item, key) of chartData.inadimplency.pddTable"
          :key="key"
          class="tbody__row"
        >
          <td class="tbody__item">{{ item.ds_nivel_risco }}</td>
          <td class="tbody__item">{{ item.ds_faixa }}</td>
          <td class="tbody__item">
            {{ getBrazilianReal(item.vl_faixa) }}
          </td>
          <td class="tbody__item">{{ item.vl_percentual_faixa_pdd }}%</td>
          <td class="tbody__item">
            {{ getBrazilianReal(item.vl_total_pdd) }}
          </td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>
<script>
import Card from "../../../../components/Card.vue";
import { getBrazilianReal } from "../../../../helpers/currencyFormater";
export default {
  name: "PddTable",
  components: { Card },
  props: {
    chartData: {
      required: true,
      type: Object,
    },
  },
  methods: {
    getBrazilianReal(val) {
      return getBrazilianReal(val).replace("R$", "");
    },
  },
};
</script>

<style>
.card {
  max-width: 750px;
}

.card__title {
  font-size: var(--sm);
  font-weight: bolder;
}

.card__subtitle {
  font-size: var(--xs);
  color: var(--gray);
}

.table {
  width: 100%;
  margin-top: 30px;
}

.thead__item {
  font-weight: bolder;
  padding: 10px 0;
  font-size: var(--xs);
}

.tbody__item {
  text-align: center;
  font-size: var(--sm);
  color: var(--gray);
  padding: 10px 0;
}

.thead__item:nth-child(1) {
  text-align: left;
}

.tbody__row:nth-child(odd) {
  background-color: var(--light-gray);
}
</style>
