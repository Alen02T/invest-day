export class Tarea {

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.fecha_tarea = new Date();
    this.n_telefono = 0;
    this.link_maps = "";
    this.pagina_web = "";
    this.comentarios = "";
  }

  id: number;

  nombre: string;

  descripcion: string;

  fecha_tarea: Date;

  n_telefono: number;

  link_maps: string;

  pagina_web: string;

  comentarios: string;

}
