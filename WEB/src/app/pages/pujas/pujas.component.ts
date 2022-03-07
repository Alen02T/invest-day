import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { Puja } from 'src/app/models/puja.model';
import { ProductoService } from 'src/app/services/producto.service';
import { PujaService } from 'src/app/services/puja.service';


@Component({
  selector: 'app-pujas',
  templateUrl: './pujas.component.html',
  styleUrls: ['assets/css/bootstrap.min.css', 'assets/css/estilos.css', 'assets/css/flex-slider.css', 'assets/css/font-awesome.css', 'assets/css/templatemo-hexashop.css', './pujas.component.css']
})
export class PujasComponent implements OnInit {

  productos: Producto | null;
  pujas: Puja[] | null;
  idProducto = 0;
  maxPuja = 0;

  constructor(private fb: FormBuilder, private _pujaService: PujaService, private _productoService: ProductoService, private activatedRoute: ActivatedRoute) {
    this.productos = null;
    this.pujas = null;
  }

  productoForm = this.fb.group({
    productoPuja: ['', Validators.required],
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => { this.idProducto = parameters.get("id") });
    this._productoService.getProductoId(this.idProducto).subscribe(apiProductos => this.productos = apiProductos)
    this._pujaService.getAllPuja(this.idProducto).subscribe(apiPujas => (this.pujas = apiPujas) && this.guardarMax());
  }

  onSubmit() {
    if (this.productoForm.value.productoPrecio > this.productos?.precio!) {
      this._productoService.update(this.idProducto, this.productos?.nombre!, this.productoForm.value.productoPrecio, this.productos?.ruta!).subscribe(apiProductos => this.productos = apiProductos && this.productoForm.value.productoPuja <= this.maxPuja) {
        alert("Tienes que introducir un precio mayor que la actual puja máxima")
      }
    else {
        this._pujaService.postPujaData(this.productoForm.value.productoPuja, this.idProducto);
      }
    }

    guardarMax() {
      this.pujas?.forEach(element => {
        if (element.cantidad > this.maxPuja) {
          this.maxPuja = element.cantidad
        }
      });
    }

  }