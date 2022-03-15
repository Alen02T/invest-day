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

  nombreForm = this.fb.group({
    tareaNombre: ['', Validators.required]
  });

  descripcionForm = this.fb.group({
    tareaDescripcion: ['', Validators.required]
  });

  telefonoForm = this.fb.group({
    tareaTelefono: ['', Validators.required]
  });

  mapsForm = this.fb.group({
    tareaMaps: ['', Validators.required]
  });

  webForm = this.fb.group({
    tareaWeb: ['', Validators.required]
  });

  comentarioForm = this.fb.group({
    tareaComentario: ['', Validators.required]
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => { this.idTarea = parameters.get("id") });
    this._tareaService.getTareaId(this.idTarea).subscribe(apiIdTarea => this.tareas = apiIdTarea)
  }
  onSubmit() {

  }

  actualizarNombre() {
    if(this.nombreForm.value.tareaNombre == this.tareas?.nombre) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.nombreForm.value.tareaNombre, this.tareas?.descripcion!, this.tareas?.fecha_tarea!, this.tareas?.n_telefono!, this.tareas?.link_maps!, this.tareas?.pagina_web!, this.tareas?.comentarios!).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

  actualizarDescripcion() {
    if(this.descripcionForm.value.tareaDescripcion == this.tareas?.descripcion) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.tareas?.nombre!, this.descripcionForm.value.tareaDescripcion, this.tareas?.fecha_tarea!, this.tareas?.n_telefono!, this.tareas?.link_maps!, this.tareas?.pagina_web!, this.tareas?.comentarios!).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

  actualizarTelefono() {
    if(this.telefonoForm.value.tareaTelefono == this.tareas?.n_telefono) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.tareas?.nombre!, this.tareas?.descripcion!, this.tareas?.fecha_tarea!, this.telefonoForm.value.tareaTelefono, this.tareas?.link_maps!, this.tareas?.pagina_web!, this.tareas?.comentarios!).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

  actualizarMaps() {
    if(this.mapsForm.value.tareaMaps == this.tareas?.link_maps) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.tareas?.nombre!, this.tareas?.descripcion!, this.tareas?.fecha_tarea!, this.tareas?.n_telefono!, this.mapsForm.value.tareaMaps, this.tareas?.pagina_web!, this.tareas?.comentarios!).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

  actualizarWeb() {
    if(this.webForm.value.tareaWeb == this.tareas?.pagina_web) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.tareas?.nombre!, this.tareas?.descripcion!, this.tareas?.fecha_tarea!, this.tareas?.n_telefono!, this.tareas?.link_maps!, this.webForm.value.tareaWeb, this.tareas?.comentarios!).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

  actualizarComentario() {
    if(this.comentarioForm.value.tareaComentario == this.tareas?.comentarios) {
      alert("Para actualizar el campo tienes que poner un valor diferente al que ya estaba")
    }
    else {
      this._tareaService.update(this.idTarea, this.tareas?.nombre!, this.tareas?.descripcion!, this.tareas?.fecha_tarea!, this.tareas?.n_telefono!, this.tareas?.link_maps!, this.tareas?.pagina_web!, this.comentarioForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      //this._tareaService.update(this.idTarea, this.tareaForm.value.tareaNombre, this.tareaForm.value.tareaDescripcion, this.fecha, this.tareaForm.value.tareaTelefono, this.tareaForm.value.tareaMaps, this.tareaForm.value.tareaWeb, this.tareaForm.value.tareaComentario).subscribe(apiTareas => this.tareas=apiTareas)
      window.location.href = "http://localhost:4200";
    }
  }

}
