class NotasModel{
    constructor(){
        this.notas = [

        ]
    }

    postNota = async (data) => {
        try {
            data.id = this.notas.length + 1
            await this.notas.push(data)
            return data
        } catch (error) {
            console.log("Error al insertar la nota: ", error);
        }
    }

    getNotas = async () => {
        try {
            if(this.notas.length <= 0){
                return "La lista de notas actualmente está vacía"
            } else {
                return await this.notas
            }
        } catch (error) {
            console.log("Error al obtener las notas: ", error);
        }
    }

    getNotasById = async (id) => {
        try {
            const calificacion = await this.notas.find((nota) => nota.id == id)
            if(calificacion==undefined){
                return "La nota solicitada no existe!"
            } else {
                const nombre = calificacion.nombre
                const nota = calificacion.nota
                return `¡Hola ${nombre}! Tu nota es ${nota}`
            }
        } catch (error) {
            console.log("Error al obtener la nota: ", error);
        }
    }

    

}

export default NotasModel