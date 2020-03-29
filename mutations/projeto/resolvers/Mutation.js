const { usuarios, proximoId }  = require('../data/db');

module.exports = {
    novoUsuario(_, args /*{ nome, email, idade }*/) {
        const emailExistente = usuarios.some(u => u.email === args.email)

        if(emailExistente) throw new Error('Email já cadastrado')

        const novo = {
            id: proximoId(),
            ...args,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { id }) {
        const i = usuarios.findIndex(u => u.id === id)

        if (i < 0) return null

        // splice(param1, param2) no param1 vai o id do que eu quero excluir
        // e nome param2 vai a quantidade que eu gostaria de excluir
        const excluidos = usuarios.splice(i, 1)
        return excluidos ? excluidos[0] : null
    }
}