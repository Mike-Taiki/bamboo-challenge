<template>
  <div class="card">
    <slot />
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style>
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
</style>
