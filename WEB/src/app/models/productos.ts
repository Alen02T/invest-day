export class Productos {
    constructor(IDproducto: number, nombre: string, precio: number, ruta: string) {
        this.IDproducto = IDproducto;
        this.nombre = nombre;
        this.precio = precio;
        this.ruta = ruta;
    }

    IDproducto: number;
    nombre: string;
    precio: number;
    ruta: string;
}