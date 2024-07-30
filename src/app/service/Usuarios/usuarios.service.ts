import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Usuarios } from '../../interface/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor( private http:HttpClient) {

  }
     crearUsuario(entity: any){

       return this.http.post<any>(`${environment.urlBaseolti}api/public/crearusuario`,entity)

     }
     sesio(entity: any){

     }
}
