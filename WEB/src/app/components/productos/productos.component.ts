import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] | null;

  constructor(private _productoService: ProductoService, private activeRoute: ActivatedRoute) {
    this.productos = null;
  }

  ngOnInit(): void {
    this._productoService.getProductoData().subscribe(apiProductos => this.productos = apiProductos);
  }

  /*PRODUCTOS: Productos[] = [
    {
      IDproducto: 1,
      nombre: 'Conjunto de colores',
      precio: 399,
      ruta: 'assets/img/Conjunto de colores.jpg'
    },
    {
      IDproducto: 2,
      nombre: 'Falda de colores',
      precio: 650,
      ruta: 'assets/img/Falda de colores.jpg'
    },
    {
      IDproducto: 3,
      nombre: 'Top verde azulado',
      precio: 299.98,
      ruta: 'assets/img/Top verde azulado.jpg'
    }
    
  ]

  PRODUCTOS2: Productos[] = [
    {
      IDproducto: 4,
      nombre: 'Camiseta negra',
      precio: 699,
      ruta: 'assets/img/Camiseta negra.jpg'
    },
    {
      IDproducto: 5,
      nombre: 'Conjunto verde',
      precio: 550,
      ruta: 'assets/img/Conjunto verde.jpg'
    },
    {
      IDproducto: 6,
      nombre: 'Camiseta camuflaje',
      precio: 399.99,
      ruta: 'assets/img/Camiseta camuflaje.jpg'
    }
    
  ];*/

}
