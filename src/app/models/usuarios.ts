export class Usuarios{
    _id?: number;
    nombre: string;
    contraseña?: string;
    tipoUsuario?: string;
    email?: string;
    acercade?:string;
    constructor(nombre: string, contraseña: string){
        this.nombre=nombre;
        this.contraseña=contraseña;
    }
}