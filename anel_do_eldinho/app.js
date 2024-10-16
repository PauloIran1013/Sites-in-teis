import express from 'express'
import knexdb from './knex.js'
import { assert } from 'console';
const app = express()
const port = 3000

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bem vindo ao Anel do Eldinho!')
})

app.get('/jogadores',async (req,res) => {
    const jogadores = await knexdb ('jogadores').select('*')
    res.status(200).json({jogadores})
})

app.post('/jogadores',async (req,res) =>{
    const {id_jogador,nome,email,senha} = req.body
    const jogadores = await knexdb ('jogadores').insert({id_jogador,nome,email,senha})
    res.status(200).json({jogadores})
})

app.get('/jogadores/:id_jogador',async (req,res) => {
    const {id_jogador} = req.params
    const jogadores = await knexdb ('jogadores').select('*').where({id_jogador})
    if (jogadores == '') {
        res.send("Jogador não encontrado.")
    }
    res.status(200).json({jogadores})
})

app.delete('/jogadores', async(req,res)=>{
    const {id_jogador}= req.body
    const jogaddores = await knexdb ('jogadores').where({id_jogador}).del()
    res.send("BAAAANIDO!!!")
})

app.get('/personagem', async(req,res)=>{
    const personagem = await knexdb ('personagem').select('*') 
    res.status(200).json({personagem})
})

 app.post('/personagem', async(req,res)=>{
    const {id_personagem,id_jogador,nome,raca,classe,nivel,pontoVida,pontoMagia} = req.body
    const personagem = await knexdb ('personagem').insert({id_personagem,id_jogador,nome,raca,classe,nivel,pontoVida,pontoMagia})
    res.status(200).json({personagem})
 })

 app.get('/personagem/:id_personagem',async (req,res)=>{
    const {id_personagem} = req.params
    const personagem = await knexdb ('personagem').select('*').where({id_personagem})
        if (personagem == '') {
            res.send('Personagem não encontrado!!!')
        }
    res.status(200).json({personagem})
 })

 app.delete('/personagem', async (req, res) => {
    const { id_personagem } = req.body;
    const personagem = await knexdb('personagem').where({ id_personagem }).del();
    res.send('Nunca é um adeus.');
});

 app.get('/missoes', async(req,res)=>{
    const missoes = await knexdb ('missoes').select('*')
    res.status(200).json({missoes})
 })

 app.post('/missoes', async(req,res)=>{
    const {nome,descricao,recompensa,nivelDificuldade} = req.body
    const missoes = await knexdb ('missoes').insert({nome,descricao,recompensa,nivelDificuldade})
    res.status(200).json({missoes})
})

app.delete('/personagem', async (req, res) => {
    const { id_personagem } = req.body;
    const personagem = await knexdb('personagem').where({ id_personagem }).del();
    res.send('Nunca é um adeus.');
});

app.get('/missoes/:id_missao', async(req,res)=>{
    const {id_missao} = req.params
    const missoes = await knexdb ('missoes').select('*').where({id_missao})
    if (missoes == '') {
      res.send('Missão não encontrada')
    }
    res.status(200).json({missoes})
})

app.get('/itens',async (req,res)=>{
    const itens = await knexdb ('itens').select('*')
    res.status(200).json({itens})
})

app.post('/itens',async(req,res)=>{
    const {nome,descricao,tipo,efeito} = req.body
    const itens = await knexdb ('itens').select('*').insert({nome,descricao,tipo,efeito})
    res.status(200).json({itens})
})

app.delete('/itens', async (req, res) => {
    const { id_item } = req.body;
    const itens = await knexdb('itens').where({ id_item }).del();
    res.send('Item deletado');
});
 app.get('/itens/:id_item', async(req,res)=>{
    const {id_item} = req.params
    const itens = await knexdb ('itens').select('*').where({id_item})
    if (itens == '') {
        res.send('Item não encontrada')
    }
    res.status(200).json({itens})
 })

app.get('/inventarios',async(req,res)=>{
    const inventario = await knexdb('inventarios').select('*')
    res.status(200).json({inventario})
})

app.post('/inventarios', async(req,res)=>{
    const {id_personagem,id_item,quantidade} = req.body
    const inventario = await knexdb ('inventarios').select('*').insert({id_personagem,id_item,quantidade})
    res.status(200).json({inventario})
})

app.delete('/inventarios',async(req,res)=>{
    const {id_inventario} = req.body
    const inventario = await knexdb ('inventarios').where().del()
    res.send('Deletado')
})

app.get('/inventarios/:id_inventario',async(req,res)=>{
    const {id_inventario} = req.params
    const inventario = await knexdb('inventarios').select('*').where({id_inventario})
    if (inventario == '') {
        res.send("Não encontrado")
    }
    res.status(200).json({inventario})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



