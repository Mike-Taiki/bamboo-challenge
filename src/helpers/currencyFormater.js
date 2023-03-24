export function getBrazilianReal(val) {
  return parseFloat(val).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
