import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuariosForm: FormGroup;
  titulo = 'Crear usuario';
  id: string;
  constructor( private fb: FormBuilder, 
      private router: Router, 
      private toastr: ToastrService, 
      private _usuarioForm: UsuariosService,
      private aRouter: ActivatedRoute) { 
    this.usuariosForm = this.fb.group({
        nombre:['', Validators.required],
        contraseña:['', Validators.required],
        email:['', Validators.required],
        acercade:['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }
  editarUsuario(){
    if(this.id !== null){
      this._usuarioForm.obtenerUsuarios(this.id).subscribe(data => {
        this.usuariosForm.patchValue({
          nombre: data.nombre,
          contraseña: data.contraseña,
          email: data.email,
          acercade: data.acercade
        })
      })
    }
  }//editarLugar
  ngOnInit(): void {
    this.editarUsuario();
  }
  agregarUsuario(){
    const USERS: Usuarios = {
      nombre: this.usuariosForm.get('nombre')?.value,
      contraseña: this.usuariosForm.get('contraseña')?.value,
      email: this.usuariosForm.get('email')?.value,
      acercade: this.usuariosForm.get('acercade')?.value
    }
    //Se edita un usuario
    if(this.id !== null){
      this._usuarioForm.editarUsuarios(this.id, USERS).subscribe(data => {
        this.toastr.info('El usuario se actualizo con éxito!', '¡Se actualizo un usuario!');
        this.router.navigate(['/panelusuario']);
    }, error =>{
      console.log(error);
      this.usuariosForm.reset();
    })
    }else{
        //Se agrega un lugar
        console.log(this.usuariosForm)
        console.log(USERS);
        this._usuarioForm.guardarUsuarios(USERS).subscribe(data =>{
          this.toastr.info('El usuario registro con éxito','¡Se registro un nuevo usuario!',);
          this.router.navigate(['/panelusuario']);
        }, error =>{
          console.log(error);
          this.usuariosForm.reset();
        })
    }
  }//agregarUSUARIO
}
