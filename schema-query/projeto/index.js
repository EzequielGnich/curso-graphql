const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }
  scalar Date
  type Query {
    ola: String
    horaAtual: Date
    # horaAtual: String
    usuarioLogado: Usuario
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Hello World";
    },
    horaAtual() {
      return new Date();
      // return `${new Date()}`;
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: "Ezequiel Gnich",
        email: "ezequielgnich@live.com",
        idade: 23,
        salario: 2754.24,
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
