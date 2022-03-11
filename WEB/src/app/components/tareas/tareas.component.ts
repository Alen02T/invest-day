import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[] | null;
  idTarea = 0;

  constructor(private fb: FormBuilder, private _tareaService: TareaService, private activeRoute: ActivatedRoute) {
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
    this.activeRoute.paramMap.subscribe((parameters: any) => { this.idTarea = parameters.get("id") });
    this._tareaService.getTareaData().subscribe(apiTareas => this.tareas = apiTareas);
  }

  onSubmit() {
    this._tareaService.postTareaData(this.tareaForm.value);
    window.location.reload();
  }
  
  borrar() {
    this._tareaService.deletePost(this.idTarea);
    window.location.reload();
  }

}
