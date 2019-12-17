const { usuarios, perfis } = require("../data/db");

module.exports = {
  // query para retornar os valores da megasena
  numeroDaMegaSena() {
    // Retorno fixo dos valores
    // return [5, 12, 13, 15, 18, 24];

    // Utilizado função random do javascript para gerar os números
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },

  usuarios() {
    return usuarios;
  },

  // Resolver para busca com parametros
  //Utilizando destructiring
  usuario(_, { id }) {
    // Fazendo a chamada de todos os args que virem na consulta
    // usuario(_, args) {
    const selecionados = usuarios.filter(u => u.id == id);
    return selecionados ? selecionados[0] : null;
  },

  ola() {
    return "Hello World";
  },
  horaAtual() {
    return new Date();
    // return `${new Date()}`;
  },
  // Aqui realiza a consulta no banco para obter os retornos
  produtosEmDestaque() {
    return {
      nome: "Notebook",
      preco: 4875.45,
      desconto: 0.15
    };
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ezequiel Gnich",
      email: "ezequielgnich@live.com",
      idade: 23,
      salario_real: 2754.24,
      vip: true
    };
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const selecionados = perfis.filter(p => p.id == id);
    return selecionados ? selecionados[0] : null;
  }
};
