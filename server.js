import { fastify } from "fastify"
import { DatabaseMemory } from "./database-memory.js"

// Criando o servidor
const server = fastify()

// Rota para enviar um vídeo
// http://localhost:3333/videos/
server.post("/videos", () => {
    return 'Hello World'
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