import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseT } from '../models/baseTarea.model';
import { Tarea } from '../models/tarea.model';

@Injectable()
export class TareaService {
  constructor(private http: HttpClient) { }

  getTareaData(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(environment.API_URL + 'tarea');
  }

  getAllTarea(id: number): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(environment.API_URL + 'tarea/p' + id);
  }

  getTareaId(id: number): Observable<Tarea> {

    return this.http.get<Tarea>(environment.API_URL + 'tarea/' + id);
  }

  public deletePost(id :number) {
    this.http.delete(environment.API_URL +'tarea/'+id).subscribe(data => {     
      console.log(data);     
    });
  }

  update(id : number , nombre : string, descripcion : string, fecha_tarea : Date, n_telefono : number, link_maps : string, pagina_web : string, comentarios : string): Observable<any> {
    let bodyData =new baseT();
    bodyData.nombre=nombre;
    bodyData.descripcion=descripcion;
    bodyData.fecha_tarea=fecha_tarea;
    bodyData.n_telefono=n_telefono;
    bodyData.link_maps=link_maps;
    bodyData.pagina_web=pagina_web;
    bodyData.comentarios=comentarios;
    return this.http.put(environment.API_URL + 'tarea/'+id, bodyData);
  }

  postTareaData(body : any, fecha_tarea : Date): Tarea {
    let bodyData = new Tarea();
    bodyData.nombre=body.tareaNombre;
    bodyData.descripcion=body.tareaDescripcion;
    bodyData.fecha_tarea=fecha_tarea;
    bodyData.n_telefono=body.tareaTelefono;
    bodyData.link_maps=body.tareaMaps;
    bodyData.pagina_web=body.tareaWeb;
    bodyData.comentarios=body.tareaComentario;


    let result = new Tarea();
    this.http.post<Tarea>(environment.API_URL + 'tarea', bodyData)
      .subscribe(
        (response) => {
          console.log('response received')
          result = response;
        },
        (error) => {
          console.error('error caught in component')
        }
      )
    return result;
  }
  
}
