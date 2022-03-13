export class baseT {

  nombre: string | null;

  descripcion: string | null;

  fecha_tarea: Date | null;

  n_telefono: number;

  link_maps: string | null;

  pagina_web: string | null;

  comentarios: string | null;

  constructor() {
    this.nombre = null;
    this.descripcion = null;
    this.fecha_tarea=null;
    this.n_telefono = 0;
    this.link_maps = null;
    this.pagina_web = null;
    this.comentarios = null;
  }
}
