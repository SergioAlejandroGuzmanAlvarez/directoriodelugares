export class Lugares{
    _id?: number;
    nombre: string;
    direccion: string;
    estado: string;
    tipo: string;
    referencias: string;
    telefono: string;
    constructor(nombre: string, direccion: string, estado: string, tipo: string, referencias: string, telefono: string){
        this.nombre=nombre;
        this.direccion=direccion;
        this.estado=estado;
        this.tipo=tipo;
        this.referencias=referencias;
        this.telefono=telefono;
    }
}