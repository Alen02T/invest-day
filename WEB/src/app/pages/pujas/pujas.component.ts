import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-pujas',
  templateUrl: './pujas.component.html',
  styleUrls: ['assets/css/bootstrap.min.css', 'assets/css/estilos.css', 'assets/css/flex-slider.css', 'assets/css/font-awesome.css', 'assets/css/templatemo-hexashop.css','./pujas.component.css']
})
export class PujasComponent implements OnInit {

  @Output() likeEvent = new EventEmitter<string>();
  productos: Producto[] | null;

  @Input() filter: string | null;

  constructor(private _productoService: ProductoService) {
    this.productos = null;
    this.filter = null;
  }

  like() {
    this.likeEvent.emit();
  }
  ngOnInit(): void {
     this._productoService.getProductoData().subscribe(apiProductos => this.productos=apiProductos);
  }

}