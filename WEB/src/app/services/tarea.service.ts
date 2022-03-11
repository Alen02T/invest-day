import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarea } from '../models/tarea.model';

@Injectable()
export class TareaService {
  constructor(private http: HttpClient) { }
  getTareaData(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(environment.API_URL + 'tarea');
  }

  getTareaId(id: number): Observable<Tarea> {

    return this.http.get<Tarea>(environment.API_URL + 'tarea/' + id);
  }

  public deletePost(id :number) {
    this.http.delete(environment.API_URL +'tarea/'+id).subscribe(data => {
      console.log(data);
    });
  }

  /*update(id :number , nombre : string, nuevoP : number ,rutaimg : string): Observable<any> {
    let bodyData =new baseP();
    bodyData.nombre=nombre;
    bodyData.precio=nuevoP;
    bodyData.rutaimg=rutaimg;
    return this.http.put(environment.API_URL + 'producto/'+id, bodyData);
  }*/

  postTareaData(body: any): Tarea {
    let bodyData = new Tarea();
    bodyData.nombre = body.nombre;
    bodyData.descripcion = body.descripcion;
    bodyData.fecha_tarea = body.fecha_tarea;
    bodyData.n_telefono = body.n_telefono;
    bodyData.link_maps = body.link_maps;
    bodyData.pagina_web = body.pagina_web;
    bodyData.comentarios = body.comentarios;


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
