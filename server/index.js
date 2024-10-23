import  Express  from "express"
import { User, criarTabelas } from "./db.js"
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())

//criarTabelas()
app.post('/registro', async function (req, res) {
  try{
    const {nome, sobrenome, email, senha, datanascimento} = req.body 
    if( !nome || !sobrenome || !email || !senha || !datanascimento ) {
      res.send('Todos os campos devem estar preenchidos.')
    }

    if(await User.findOne({where :{email:email}})){
      res.status(400).send('Usuário já existe no sistema')
      return
    }
    const senhaSegura = bcryptjs.hashSync(senha, 10)

    const novoUsuario = User.create({
      nome :nome,
      sobrenome : sobrenome,
      email : email,
      senha : senhaSegura,
      dataNasc : datanascimento,
    })
    res.status(201).send('Usuário criado com sucesso.')
  } catch(err){

  }
})

app.listen(8000)