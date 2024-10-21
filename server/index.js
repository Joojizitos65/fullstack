import  Express  from "express"

const app = Express()
app.use(Express.json())


app.get('/pegar', function (req, res) {
    res.send('Hello World')
})
  app.get('/pegaroutracoisa', function (req, res) {
    res.send('Hello World2')
})

app.post('/registro', function (req, res) {
  try{
    const {nome, sobrenome, email, senha, datanascimento} = req.body 
    if( !nome || !sobrenome || !email || !senha || !datanascimento ) {
      res.send('Todos os campos devem estar preenchidos.')
    }
    console.log('Criar usuário')
  } catch(err){

  }
})

app.listen(8000)