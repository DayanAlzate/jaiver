import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosPersonales } from '../../interface/DatosPersonales';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export  class DatosPersonalesService {

  constructor( private http:HttpClient) {

   }
      crearDatosPersonales(entity:any){

        return this.http.post<any>(`${environment.urlBaseolti}api/public/CrearDatosPersonales`,entity)

      }
}
