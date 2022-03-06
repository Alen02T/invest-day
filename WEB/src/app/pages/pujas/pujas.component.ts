import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTOS, PRODUCTOS2 } from 'src/app/utils/constProductos';

@Component({
  selector: 'app-pujas',
  templateUrl: './pujas.component.html',
  styleUrls: ['assets/css/bootstrap.min.css', 'assets/css/estilos.css', 'assets/css/flex-slider.css', 'assets/css/font-awesome.css', 'assets/css/templatemo-hexashop.css','./pujas.component.css']
})
export class PujasComponent implements OnInit {

  IDproducto = 0;

  productos: Productos={IDproducto:0, nombre:"",precio:0, ruta:""};

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any)=> {this.IDproducto=parameters.get("IDproducto")});
    this.productos=PRODUCTOS.filter((x: Productos) => x.IDproducto== this.IDproducto)[0] || PRODUCTOS2.filter((x: Productos) => x.IDproducto== this.IDproducto)[0];
  }

}
