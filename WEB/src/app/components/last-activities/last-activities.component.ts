import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from 'src/app/models/tarea.model';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-last-activities',
  templateUrl: './last-activities.component.html',
  styleUrls: ['./last-activities.component.css']
})
export class LastActivitiesComponent implements OnInit {
  tareas: Tarea[] | null;
  idTarea = 0;
  fecha = new Date();
  numeroTareas :number;
  @Input() filter: string | null;

  constructor(private fb: FormBuilder, private _tareaService: TareaService, private activatedRoute: ActivatedRoute) {
    this.tareas = null;
    this.numeroTareas=0;
    this.filter=null;
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => { this.idTarea = parameters.get("id") });
    this._tareaService.getTareaData().subscribe((apiDatosTareas) => (this.tareas = apiDatosTareas) && this.updateNumero());
  }

  updateNumero() {
    if (this.tareas != null) {
      this.tareas.forEach((element) => {
        this.numeroTareas++;
      })
    }
  }

}
