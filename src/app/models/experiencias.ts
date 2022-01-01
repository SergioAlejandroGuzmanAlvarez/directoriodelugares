export class Experiencias{
    _id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    calificacion: string;
    opinion: string;
    constructor(nombre: string, apellido: string, descripcion: string, calificacion: string, opinion: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.descripcion=descripcion;
        this.calificacion=calificacion;
        this.opinion=opinion;
    }
}