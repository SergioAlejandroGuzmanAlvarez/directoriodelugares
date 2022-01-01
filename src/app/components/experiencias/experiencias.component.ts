import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencias } from 'src/app/models/experiencias';
import { Lugares } from 'src/app/models/lugares';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  listarLugares: Lugares[] = [];
  listarExperiencias: Experiencias[]=[];

  constructor(private _lugarService: LugaresService,
      private toastr: ToastrService, private _ExperienciaService: ExperienciaService) { }

  ngOnInit(): void {
      this.obtenerLugares();
      this.obtenerExperiencia();
  }
  obtenerExperiencia(){
    this._ExperienciaService.getExperiencia().subscribe(data =>{
      console.log(data);
      this.listarExperiencias = data;
    }, error =>{
      console.log(error);
    })
  }
  obtenerLugares(){
    this._lugarService.getLugares().subscribe(data =>{
      console.log(data);
      this.listarLugares = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminarLugar(id: any){
    this._lugarService.eliminarLugar(id).subscribe(data=>{
      this.toastr.error('El lugar fue eliminado con éxito','Lugar eliminado');
      this.obtenerLugares();
    }, error =>{
      console.log(error);
    })
  }

}
