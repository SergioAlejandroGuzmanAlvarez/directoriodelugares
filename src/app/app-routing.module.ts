import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ListarExperienciaComponent } from './components/listar-experiencia/listar-experiencia.component';

// Componentes
import { ListarLugaresComponent } from './components/listar-lugares/listar-lugares.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { PaneladministradorComponent } from './components/paneladministrador/paneladministrador.component';
import { PanelusuarioComponent } from './components/panelusuario/panelusuario.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RutanayaritComponent } from './components/rutanayarit/rutanayarit.component';
import { SubirExperienciaComponent } from './components/subir-experiencia/subir-experiencia.component';
import { VerExperienciaComponent } from './components/ver-experiencia/ver-experiencia.component';

const routes: Routes = [
  {path: '',component: PrincipalComponent},
  // Crear lugares desde el administrador
  {path: 'crear-lugar', component: CrearLugarComponent},
  {path: 'editar-lugar/:id', component: CrearLugarComponent},
  {path: 'listar-lugares', component: ListarLugaresComponent},

  {path: 'principal', component: PrincipalComponent},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'rutanay', component: RutanayaritComponent},
  {path: 'experiencias', component: ExperienciasComponent}, // Listar foto
  {path: 'login', component: LoginComponent},
  {path: 'paneladmin', component: PaneladministradorComponent},
  {path: 'panelusuario', component: PanelusuarioComponent},

  // Crear usuario 
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  
  // Editar y listar los usuarios desde el administrador
  {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
  {path: 'experiencia/opinion', component: ListarUsuariosComponent},

    //Crear, editar y listar experiencias
  {path: 'listar-experiencias', component: ListarExperienciaComponent}, //Listar Foto
  {path: 'experiencias/crear', component: SubirExperienciaComponent},
  {path: 'opiniones', component: VerExperienciaComponent},
  {path: '**', redirectTo: 'principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
