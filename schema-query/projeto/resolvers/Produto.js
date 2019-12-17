module.exports = {
  precoComDesconto(parent) {
    if (parent.desconto) {
      return parent.preco * (1 - parent.desconto);
    }
    return parent.preco;
  }
};
