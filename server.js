import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

// Criando o servidor
const server = fastify()

// Criando nosso Database
const database = new DatabaseMemory

// Rota para enviar um vídeo
// http://localhost:3333/videos/
server.post("/videos", (request, reply) => {
    database.create({
        title: 'Vídeo 01',
        description: 'Esse é o Vídeo 01',
        duration: 180,
    })

    console.log(database.list())

    return reply.status(201).send()

})

// Rota para recuperar um vídeo
// http://localhost:3333/videos/
server.get('/videos', () =>{

})

// Rota para editar um vídeo
// Route Parameter = :algumacoisa, no caso, vamos colocar o id do vídeo
// http://localhost:3333/videos/id
server.put('/videos/:id', () => {

})





server.listen({
    port: 3333,
})