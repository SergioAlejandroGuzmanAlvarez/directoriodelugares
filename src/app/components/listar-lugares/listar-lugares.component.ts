import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Lugares } from 'src/app/models/lugares';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-listar-lugares',
  templateUrl: './listar-lugares.component.html',
  styleUrls: ['./listar-lugares.component.css']
})
export class ListarLugaresComponent implements OnInit {
  listarLugares: Lugares[] = [];

  constructor(private _lugarService: LugaresService,
      private toastr: ToastrService) { }

  ngOnInit(): void {
      this.obtenerLugares();
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
