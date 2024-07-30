
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'home',
    loadComponent: () => import('./dashboar/dashboar.component'),
    children:[
           {
            path: 'registro',
            title: 'registro dusuario',
            loadComponent: () => import('./dashboar/pages/login/registro-dusuario/registro-dusuario.component'),
           },
           {
             path: 'iniciar-sesion',
             title: 'iniciar sesion',
             loadComponent: () => import('./dashboar/pages/login/iniciar-sesion /iniciar-sesion.component'),
           },

           {
            path:'',redirectTo:'home',pathMatch:'full',
           }
    ]
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  }
];
