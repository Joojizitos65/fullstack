import  Express  from "express"
import { User, criarTabelas } from "./db.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import cors from "cors"
import { registro_funcao } from "./controlador/controlador_autenticacao.js"
import { loginfuncao } from "./controlador/controlador_autenticacao.js"


const app = Express()
app.use(Express.json())

app.use(cors())


//criarTabelas()
app.post('/registro',registro_funcao )
app.post('/login', loginfuncao)

app.listen(8000)