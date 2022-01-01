import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component'
import { CustomSpinnerComponent } from '../custom-spinner/custom-spinner.component'
import { CustomSpinnerModule } from '../custom-spinner/customer-spinner.module'
import { SidemenuComponentsModule } from 'src/app/sidemenu-components/sidemenu-components.module';


@NgModule({
  declarations: [SkeletonComponent,CustomSpinnerComponent],
  imports: [
    CommonModule,
    CustomSpinnerModule
  ],
  exports : [
    SkeletonComponent,CustomSpinnerComponent
  ]
})
export class SkeletonModule { }
