import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { baseP } from '../models/baseProducto.model';
import { Producto } from '../models/producto.model';
import { Productos } from '../models/productos';

@Injectable()
export class ProductoService {
  constructor(private http: HttpClient) { }
  getProductoData(): Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.API_URL + 'producto');
  }

  getProductoId(id: number): Observable<Producto> {

    return this.http.get<Producto>(environment.API_URL + 'producto/' + id);
  }

  postProductoData(body: any): Producto {
    let bodyData = new Producto();
    bodyData.nombre = body.productoNombre;
    bodyData.precio = body.productoPrecio;
    bodyData.ruta = body.productoRuta;


    let result = new Producto();
    this.http.post<Producto>(environment.API_URL + 'producto', bodyData)
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

  update(id: number, nombre: string, precio: number, ruta: string): Observable<any> {

    let bodyData = new baseP();

    bodyData.nombre = nombre;

    bodyData.precio = precio;

    bodyData.ruta = ruta;

    return this.http.put(environment.API_URL + 'producto/' + id, bodyData);

  }
}
