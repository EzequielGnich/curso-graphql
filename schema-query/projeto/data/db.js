const perfis = [
  { id: 1, nome: "comum" },
  { id: 2, nome: "administrador" }
];

const usuarios = [
  {
    id: 1,
    nome: "João Aoadee",
    email: "joaoaoa@zemail.com",
    idade: 29,
    perfil_id: 1,
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Aline Acaca",
    email: "alineacaca@hemail.com",
    idade: 45,
    perfil_id: 2,
    status: "Inativo"
  },
  {
    id: 3,
    nome: " Alonsio Amanci",
    email: "aloisioaman@cemail.com",
    idade: 21,
    perfil_id: 2,
    status: "Bloqueado"
  }
];

module.exports = { usuarios, perfis };
