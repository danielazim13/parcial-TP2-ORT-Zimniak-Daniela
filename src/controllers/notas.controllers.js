import NotasServices from "../services/notas.services.js"

class NotasController {
    constructor(){
        this.services = new NotasServices()
    }

    postNota = async (req, res) => {
        const nuevaNota = req.body
        const nota = await this.services.postNota(nuevaNota)
        res.send(nota)
    }

    getNotas = async (req, res) => {
        const nota = await this.services.getNotas()
        res.send(nota)
    }

    getNotasById = async (req, res) => {
        const {id} = req.params
        const nota = await this.services.getNotasById(id)
        res.send(nota)
    }


}

export default NotasController