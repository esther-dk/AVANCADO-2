const express = require('express')
const rotaUsuario = require('./rotas/usuarios.rota')
const rotaPost = require('./rotas/posts.rota')

const app = express()
app.use(express.json())

app.use('/usuarios', rotaUsuario)
app.use('/posts', rotaPost)

app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})