import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatosPersonalesService } from '../../../../service/datospersonales/datos-personales.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from '../../../../interface/Usuario';
import { UsuariosService } from '../../../../service/Usuarios/usuarios.service';



@Component({
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.componet.css'
})
export default class niciarSesionComponent {



  dataUsuario:any={};


formsesion = new FormGroup({


    usuemail:  new FormControl(null, Validators.required),
    password: new FormControl('', Validators.required),

})
 sesion(){
  this.formsesion.value
  console.log(this.formsesion.value);
 }
}

