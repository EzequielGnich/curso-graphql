const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "João Aoadee",
    email: "joaoaoa@zemail.com",
    idade: 29
  },
  {
    id: 2,
    nome: "Aline Acaca",
    email: "alineacaca@hemail.com",
    idade: 45
  },
  {
    id: 3,
    nome: " Alonsio Amanci",
    email: "aloisioaman@cemail.com",
    idade: 21
  }
];

const typeDefs = gql`
  type Produto {
    nome: String!
    preco: Float!
    desconto: Int
    precoComDesconto: Float
  }
  # ---------------------------------------------------------------------------------------------
  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }
  # ---------------------------------------------------------------------------------------------
  scalar Date
  # ---------------------------------------------------------------------------------------------
  # Aqui é os pontos de entrada da API
  type Query {
    ola: String
    horaAtual: Date
    # horaAtual: String
    usuarioLogado: Usuario
    produtosEmDestaque: Produto
    # ---------------------------------------------------------------------------------------------
    # Duas exclamações obrigatóriamente será retornado um array de inteiros e obrigatóriamente
    # não poderá estar vazio
    numeroDaMegaSena: [Int!]!

    usuarios: [Usuario]
  }
`;

const resolvers = {
  // Resolver para definir o valor do produto com desconto
  Produto: {
    precoComDesconto(parent) {
      if (parent.desconto) {
        return parent.preco * (1 - parent.desconto);
      }
      return parent.preco;
    }
  },
  // Resolver para definir salario como salario_real que veio do DB com nome diferente
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    }
  },
  Query: {
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
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Executando ${url}`);
});
