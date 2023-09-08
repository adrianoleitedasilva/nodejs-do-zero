import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    // Método para listar
    list() {
        return this.#videos.values()
    }

    // Método para criar
    create(video) {
        // UUID = Universal Unique ID
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    // Método para atualizar
    update(id, video) {
        this.#videos.set(id, video)
    }

    // Método para deletar
    delete(id) {
        this.#videos.delete(id)
    }

}