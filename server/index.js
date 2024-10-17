import  Express  from "express"

const app = Express()


app.get('/pegar', function (req, res) {
    res.send('Hello World')
  })
  app.get('/pegaroutracoisa', function (req, res) {
    res.send('Hello World2')
  })

app.listen(8000)