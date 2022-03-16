import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  tareas: Tarea | null;
  idTarea = 0;
  fecha = new Date();

  constructor(private fb: FormBuilder, private _tareaService: TareaService, private activatedRoute: ActivatedRoute) {
    this.tareas = null;
  }

  tareaForm = this.fb.group({
    tareaNombre: ['', Validators.required],
    tareaDescripcion: ['', Validators.required],
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
    
    this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
    window.location.href = "http://localhost:4200";
  }

}