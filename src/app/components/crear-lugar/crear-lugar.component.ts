import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Lugares } from 'src/app/models/lugares';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css']
})
export class CrearLugarComponent implements OnInit {
  lugaresForm: FormGroup;
  titulo = 'Crear lugar';
  id: string;
  constructor( private fb: FormBuilder, 
      private router: Router, 
      private toastr: ToastrService, 
      private _lugarService: LugaresService,
      private aRouter: ActivatedRoute) { 
    this.lugaresForm = this.fb.group({
        nombre:['', Validators.required],
        direccion:['', Validators.required],
        estado:['', Validators.required],
        tipo:['', Validators.required],
        referencias:['', Validators.required],
        telefono:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.editarLugar();
  }
  editarLugar(){
    if(this.id !== null){
      this.titulo = 'Editar lugar';
      this._lugarService.obtenerLugar(this.id).subscribe(data => {
        this.lugaresForm.patchValue({
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
  agregarLugar(){
    const LUGARES: Lugares = {
      nombre: this.lugaresForm.get('nombre')?.value,
      direccion: this.lugaresForm.get('direccion')?.value,
      estado:this.lugaresForm.get('estado')?.value,
      tipo:this.lugaresForm.get('tipo')?.value,
      referencias:this.lugaresForm.get('referencias')?.value,
      telefono: this.lugaresForm.get('telefono')?.value
    }
    //Se edita un lugar
    if(this.id !== null){
        this._lugarService.editarLugar(this.id, LUGARES).subscribe(data => {
          this.toastr.info('El lugar fue actualizado con éxito!', '¡Lugar actualizado!');
          this.router.navigate(['/listar-lugares']);
      }, error =>{
        console.log(error);
        this.lugaresForm.reset();
      })
    }else{
      //Se agrega un lugar
      console.log(this.lugaresForm)
      console.log(LUGARES);
      this._lugarService.guardarLugar(LUGARES).subscribe(data =>{
        this.toastr.info('Se ha añadido un nuevo lugar','¡Lugar añadido!',);
        this.router.navigate(['/listar-lugares']);
      }, error =>{
        console.log(error);
        this.lugaresForm.reset();
      })
    }
  } 
}
