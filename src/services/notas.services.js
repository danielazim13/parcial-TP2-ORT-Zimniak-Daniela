import NotasModel from "../models/notas.models.js"

class NotasServices {
    constructor(){
        this.model = new NotasModel()
    }

    postNota = async (nota) => {
        const nuevaNota = await this.model.postNota(nota)
        return nuevaNota
    }

    getNotas = async () => {
        const nota = await this.model.getNotas()
        return nota
    }

    getNotasById = async (id) => {
        const nota = await this.model.getNotasById(id)
        return nota
    }


}

export default NotasServices