import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseP } from '../models/baseProducto.model';
import { Puja } from '../models/puja.model';

@Injectable()
export class PujaService {
  constructor(private http: HttpClient) { }

  getPujaData(): Observable<Puja[]> {
    return this.http.get<Puja[]>(environment.API_URL + 'puja');
  }

  getAllPuja(id: number): Observable<Puja[]> {
    return this.http.get<Puja[]>(environment.API_URL + 'puja/p' + id);
  }

  getPujaId(id: number): Observable<Puja> {

    return this.http.get<Puja>(environment.API_URL + 'puja' + id);
  }

  postPujaData(cantidad: number, id_producto: number): Puja {
    let bodyData = new Puja();
    bodyData.cantidad = cantidad;
    bodyData.id_producto = id_producto;


    let result = new Puja();
    this.http.post<Puja>(environment.API_URL + 'puja', bodyData)
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
