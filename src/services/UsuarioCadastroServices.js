const db = require('../db')

class UsuarioCadastroService {
  contatos = async () => await db('contatos')
  criarContato = async (data) => 
  await (await db('contatos').insert(data).returning('*'))[0]

  atualizarContato = async (id, data) => 
  await (await db('contatos').where({ id }).update(data).returning('*'))[0]

  deletarContato = async (filtro) => {
    const { id, email } = filtro
    if(id){
      return await db('contatos').where({id: id}).delete();
    }
    if(email){
      return await db('contatos').where({email: email}).delete();
    }
    
    throw new Error('nenhum parâmetro encontrado, impossível deletar contato!')
  }
}

module.exports = new UsuarioCadastroService();