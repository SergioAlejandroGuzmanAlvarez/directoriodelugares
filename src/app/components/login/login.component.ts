import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuariosForm: FormGroup;
  id: string;
  constructor( private fb: FormBuilder, 
      private router: Router, 
      private toastr: ToastrService, 
      private _usuarioForm: UsuariosService,
      private aRouter: ActivatedRoute) { 
    this.usuariosForm = this.fb.group({
        nombre:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
  }
  IniciarSesion(){
    const USERS: Usuarios = {
    nombre: this.usuariosForm.get('nombre')?.value}
   // if(USERS='admin')
    this.toastr.info('Bienvenido de nuevo','¡Iniciaste sesión con éxito!',);
  }
}// Clase Login
