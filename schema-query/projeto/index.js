const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ola: String
    horaAtual: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Hello World";
    },
    horaAtual() {
      return `${new Date()}`;
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
