<template>
  <Card class="card">
    <div class="graph">
      <h1 class="graph__title">PDD</h1>
      <span class="graph__subtitle">Tabela</span>
      <table class="graph-table">
        <thead class="graph-thead">
          <tr>
            <th class="graph-thead__item">Nível de Risco</th>
            <th class="graph-thead__item">Intervalo</th>
            <th class="graph-thead__item">Valor ($)</th>
            <th class="graph-thead__item">Faixa PDD</th>
            <th class="graph-thead__item">PDD (R$ mil)</th>
          </tr>
        </thead>
        <tbody class="graph-tbody">
          <tr
            v-for="(item, key) of chartData.inadimplency.pddTable"
            :key="key"
            class="graph-tbody__row"
          >
            <td class="graph-tbody__item">{{ item.ds_nivel_risco }}</td>
            <td class="graph-tbody__item">{{ item.ds_faixa }}</td>
            <td class="graph-tbody__item">{{ item.vl_faixa }}</td>
            <td class="graph-tbody__item">
              {{ item.vl_percentual_faixa_pdd }}
            </td>
            <td class="graph-tbody__item">{{ item.vl_total_pdd }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
</template>
<script>
import Card from "../../components/Card.vue";
import { chartData } from "../../services/api";
export default {
  name: "PddChart",
  components: { Card },
  data() {
    return {
      chartData,
    };
  },
};
</script>

<style>
.card {
  max-width: 750px;
}

.graph-table {
  width: 100%;
  margin-top: 30px;
}

.graph-thead__item {
  font-weight: bolder;
  padding: 10px 0;
}

.graph-tbody__item {
  text-align: center;
  font-size: 14px;
  color: var(--gray);
  padding: 10px 0;
}

.graph-thead__item:nth-child(1) {
  text-align: left;
}

.graph-tbody__row:nth-child(odd) {
  background-color: var(--light-gray);
}
</style>
