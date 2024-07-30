import { Component } from '@angular/core';
import { routes} from '../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
@Component({
 selector: 'app-dashboar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidemenuComponent],
  templateUrl: './dashboar.component.html',
  styles: ``
})
export  default  class DashboarComponent {


}

