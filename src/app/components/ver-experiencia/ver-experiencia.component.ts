import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencias } from 'src/app/models/experiencias';
import { Lugares } from 'src/app/models/lugares';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-ver-experiencia',
  templateUrl: './ver-experiencia.component.html',
  styleUrls: ['./ver-experiencia.component.css']
})
export class VerExperienciaComponent implements OnInit {
  listarExperiencias: Experiencias[] = [];
  constructor(private toastr: ToastrService, private _ExperienciaService: ExperienciaService) { }
  ngOnInit(): void {
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
  eliminarExperiencia(id: any){
    this._ExperienciaService.eliminarExperiencia(id).subscribe(data=>{
      this.toastr.error('La experiencia fue eliminada con éxito','Experiencia eliminado');
      this.obtenerExperiencia();
    }, error =>{
      console.log(error);
    })
  }


}
