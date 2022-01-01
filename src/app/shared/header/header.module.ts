import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { GooglePlacesDirective } from '../../directives/google-places.directive';

@NgModule({
  declarations: [HeaderComponent, GooglePlacesDirective],
  imports: [
    CommonModule,
    NgbModule,
    CountdownModule,
    FormsModule,
  ],
  exports : [
      HeaderComponent,
  ]
})
export class HeaderModule { }
