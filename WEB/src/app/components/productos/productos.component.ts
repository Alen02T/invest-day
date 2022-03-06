import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../../domenico/css/bootstrap.css', './productos.component.css']
})
export class ProductosComponent implements OnInit {

  PRODUCTOS: Productos[] = [
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
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
