<template>
  <div class="card">
    <h1 class="card__title">{{ title }}</h1>
    <h1 v-if="subtitle" class="card__subtitle">{{ subtitle }}</h1>
    <p class="card__value">
      {{ isPercentage ? getPercentage(value) : getBrazilianReal(value) }}
    </p>
  </div>
</template>
<script>
export default {
  name: "CardItem",
  props: {
    title: {
      required: true,
      type: String,
    },
    subtitle: {
      requred: false,
      type: String,
    },
    value: {
      required: true,
      type: Number,
    },
    isPercentage: {
      required: false,
      type: Boolean,
    },
  },
  methods: {
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
