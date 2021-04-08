const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const UsuarioCadastroServices = require("./src/services/UsuarioCadastroServices");

const server = new ApolloServer({
  ...graphql,
  context: () => ({
    UsuarioCadastroService: UsuarioCadastroServices,
  })
});

server.listen().then(({ url }) => console.log(url));
