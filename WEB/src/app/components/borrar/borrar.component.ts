import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  tareas: Tarea | null;
  idTarea = 0;

  constructor(private fb: FormBuilder, private _tareaService: TareaService, private activatedRoute: ActivatedRoute) {
    this.tareas = null;
  }

  tareaForm = this.fb.group({
    tareaNombre: ['', Validators.required],
    tareaDescripcion: ['', Validators.required],
    tareaFecha: ['', Validators.required],
    tareaTelefono: ['', Validators.required],
    tareaMaps: ['', Validators.required],
    tareaWeb: ['', Validators.required],
    tareaComentario: ['', Validators.required],
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => { this.idTarea = parameters.get("id") });
    this._tareaService.getTareaId(this.idTarea).subscribe(apiIdTarea => this.tareas = apiIdTarea)
  }

  onSubmit() {
  }

  borrar() {
    this._tareaService.deletePost(this.idTarea);
    window.location.href = "http://localhost:4200";
  }

}