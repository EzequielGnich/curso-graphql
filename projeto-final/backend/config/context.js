const jwt = require("jwt-simple");

module.exports = async ({ req }) => {
  // await require("./simularUsuarioLogado")(req);

  const auth = req.headers.authorization;
  const token = auth && auth.substring(7);

  let usuario = null;
  let admin = false;

  if (token) {
    try {
      let conteudoToken = jwt.decode(token, process.env.AUTH_SECRET);
      if (new Date(conteudoToken.exp * 1000) > new Date()) {
        usuario = conteudoToken;
      }
    } catch (e) {
      console.log(e);
    }
  }
  if (usuario && usuario.perfis) {
    admin = usuario.perfis.includes("admin");
  }

  const err = new Error("Acesso negado");

  return {
    usuario,
    admin,
    validarUsuario() {
      if (!usuario) throw err;
    },
    validarAdmin() {
      if (!admin) throw err;
    },
    validarUsuarioFiltro(filtro) {
      // Verificar se a flag admin está true, se sim permite alterar
      // usuario quando esta função for chamada
      if (admin) return;

      // Verifica se o usuario esta setado
      if (!usuario) throw err;

      // Verifica se o usuario enviou um filtro para poder fazer alterações
      if (!filtro) throw err;

      const { id, email } = filtro;
      // Se não foi passado nem id nem email e lançado um excessão
      if (!id && !email) throw err;
      // Se o usuario passou um id, mas o id é diferente do usuario logado
      // não é permitida a alteração
      if (id && id !== usuario.id) throw err;
      // Se o usuário enviou um email e o email é diferente do email do usuário
      // logado ele lança a excessão
      if (email && email !== usuario.email) throw err;
    }
  };
};
