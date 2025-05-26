import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express() //recomendado(escrito na domumentação do express)
app.use(express.json()) //o express por padrão não usar JASON, colocando essa linha o express vai entender que eu estou usando JASON


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.delete('/usuarios/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com Sucesso!'})
})

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

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