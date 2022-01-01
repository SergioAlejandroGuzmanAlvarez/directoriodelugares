import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Lugares } from 'src/app/models/lugares';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
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
}
