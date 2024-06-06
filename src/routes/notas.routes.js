import express from "express"
import NotasController from "../controllers/notas.controllers.js"

class Router {
    constructor(){
        this.router = express.Router()
        this.controller = new NotasController()
    }

    start(){
        this.router.post("/notas", this.controller.postNota)
        this.router.get("/notas", this.controller.getNotas)
        this.router.get("/notas/:id", this.controller.getNotasById)

        return this.router
    }
}

export default Router