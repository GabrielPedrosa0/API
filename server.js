import express from 'express'

const app = express() //recomendado(escrito na domumentação do express)
app.use(express.json()) //o express por padrão não usar JASON, colocando essa linha o express vai entender que eu estou usando JASON

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)

/*
    Criar uma API de usuários

    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuário
    -Deletar um usuário

    
*/ 