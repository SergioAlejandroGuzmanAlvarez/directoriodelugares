import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { ListarLugaresComponent } from './components/listar-lugares/listar-lugares.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RutanayaritComponent } from './components/rutanayarit/rutanayarit.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { LoginComponent } from './components/login/login.component';
import { PaneladministradorComponent } from './components/paneladministrador/paneladministrador.component';
import { PanelusuarioComponent } from './components/panelusuario/panelusuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { SubirExperienciaComponent } from './components/subir-experiencia/subir-experiencia.component';
import { VerExperienciaComponent } from './components/ver-experiencia/ver-experiencia.component';
import { ListarExperienciaComponent } from './components/listar-experiencia/listar-experiencia.component';
@NgModule({
  declarations: [
    AppComponent,
    CrearLugarComponent,
    ListarLugaresComponent,
    PrincipalComponent,
    BuscadorComponent,
    RutanayaritComponent,
    ExperienciasComponent,
    LoginComponent,
    PaneladministradorComponent,
    PanelusuarioComponent,
    CrearUsuarioComponent,
    ListarUsuariosComponent,
    SubirExperienciaComponent,
    VerExperienciaComponent,
    ListarExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
