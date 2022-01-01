import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencias } from 'src/app/models/experiencias';
import { Lugares } from 'src/app/models/lugares';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  ExperienciasForm: FormGroup;
  id: string;
  constructor( private fb: FormBuilder, 
      private router: Router, 
      private toastr: ToastrService, 
      private _ExperService: ExperienciaService,
      private aRouter: ActivatedRoute) { 
    this.ExperienciasForm = this.fb.group({
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        descripcion:['', Validators.required],
        calificacion:['', Validators.required],
        opinion:['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.editarExperiencia();
  }
  editarExperiencia(){
    if(this.id !== null){
      this._ExperService.obtenerExperiencia(this.id).subscribe(data => {
        this.ExperienciasForm.patchValue({
          nombre: data.nombre,
          direccion: data.direccion,
          estado: data.estado,
          tipo: data.tipo,
          referencias: data.referencias,
          telefono: data.telefono
        })
      })
    }
  }//editarLugar
  agregarExperiencia(){
    const LUGARES: Experiencias = {
      nombre: this.ExperienciasForm.get('nombre')?.value,
      apellido: this.ExperienciasForm.get('apellido')?.value,
      descripcion: this.ExperienciasForm.get('descripcion')?.value,
      calificacion: this.ExperienciasForm.get('calificacion')?.value,
      opinion: this.ExperienciasForm.get('opinion')?.value
    }
    //Se edita un lugar
    if(this.id !== null){
        this._ExperService.editarExperiencia(this.id, LUGARES).subscribe(data => {
          this.toastr.info('Se ha añadido una nueva experiencia', '¡Experiencia actualizado!');
          this.router.navigate(['/experiencias']);
      }, error =>{
        console.log(error);
        this.ExperienciasForm.reset();
      })
    }else{
      //Se agrega un lugar
      console.log(this.ExperienciasForm)
      console.log(LUGARES);
      this._ExperService.guardarExperiencia(LUGARES).subscribe(data =>{
        this.toastr.info('Se ha añadido una nueva experiencia','¡Experiencia añadido!',);
        this.router.navigate(['/experiencias']);
      }, error =>{
        console.log(error);
        this.ExperienciasForm.reset();
      })
    }
  } 
}
