import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  //encapsulation: ViewEncapsulation.None,
  selector: 'app-pagina-bienvenida',
  templateUrl: './pagina-bienvenida.component.html',
  styleUrls: ['./pagina-bienvenida.component.css']
})
export class PaginaBienvenidaComponent implements OnInit {

  title="Bienvenido a Invest-Day";
  myimage:string="assets/img/espacio.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
