
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
  templateUrl: './registro-dusuario.component.html',
  styleUrl: './registro-dusuario.component.css'
})
export default class  RegistroDusuarioComponent {

  dataUsuario:any={};


formdpersona = new FormGroup({

    idpersona: new FormControl(null, Validators.required),
    pnombre: new FormControl(null, Validators.required),
    snombre: new FormControl(null),
    papellido: new FormControl(null),
    sapellido: new FormControl(null, Validators.required),
    tdocumento: new FormControl(null, Validators.required),
    ndocumento:new FormControl(null, Validators.required),
    fnacimiento: new FormControl(null, Validators.required),
    ntelefono: new FormControl(null, Validators.required),
    usuemail:  new FormControl(null, Validators.required),
    password: new FormControl('', Validators.required),
     vpassword: new  FormControl(null, Validators.required)
},{
  validators: this.passwordMatchValidator
})

   constructor(private serviceDatosPerson:DatosPersonalesService,
    private toastr: ToastrService,
    private serviceUsuario: UsuariosService

   ){

  }
  saveUsuario(entity: any){
           if(entity !== null && entity !== undefined && entity.id){
            this.dataUsuario={
              idperson: entity.data.idpersona,
              password: this.formdpersona.get('password')?.value,
              usuemail: this.formdpersona.get('usuemail')?.value,
              usuide: this.formdpersona.get('ndocumento')?.value,

            }

              this.serviceUsuario.crearUsuario(this.dataUsuario).subscribe(
                (result)=> {
                  console.log(result)
                  if(result.id ==='200'){
                    this.toastr.success('Usuario creado correctamente!', 'Puede iniciar sesion');
                     }else{
                      if( result.data.message !== undefined){
                        this.toastr.info('Error', result.data.message);
                      }else{
                        this.toastr.info('Error', result.response);
                      }

                     }

                }
                ,(error) => {
                  this.toastr.error('Error al crear usuario!!','Error de servidor')
                }
              )


            }
  }
  save(){
   console.log(this.formdpersona.controls);
   if(this.formdpersona.valid){

    this.serviceDatosPerson.crearDatosPersonales(this.formdpersona.value)
    .subscribe((result)=>{
       console.log(result);
       this.saveUsuario(result);
    },
     (error)=>{
      this.toastr.error('Error al crear usuario!!','Error de servidor'
      );
      console.log(error);
     }

  )
    }else{
      this.toastr.info('Campos requerido','Debes completar todos los campos')
    }
  }
    passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const vpassword = control.get('vpassword')?.value;

  return password === vpassword ? null : { passwordMismatch: true };
}
}
