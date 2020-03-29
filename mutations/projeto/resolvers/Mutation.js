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
    }
}