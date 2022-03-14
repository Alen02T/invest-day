import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  tareas: Tarea[] | null;
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
    this._tareaService.getTareaData().subscribe(apiDatosTareas => this.tareas = apiDatosTareas);
  }

  onSubmit() {
    this._tareaService.postTareaData(this.tareaForm.value, this.fecha);
    window.location.reload();
  }

}
