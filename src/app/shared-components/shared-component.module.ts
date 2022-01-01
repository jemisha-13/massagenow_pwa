import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { SerachLocationComponent } from './serach-location/serach-location.component'
// import { GooglePlacesDirective } from '../directives/google-places.directive';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoyalitypointlistComponent } from './loyalitypointlist/loyalitypointlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonDatePickerComponent } from './common-date-picker/common-date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeSlotSelectedComponent } from './time-slot-selected/time-slot-selected.component';
import { DeleteFevoriteTherapistComponent } from './delete-fevorite-therapist/delete-fevorite-therapist.component';


@NgModule({
  declarations: [
    DynamicCardComponent,
    SerachLocationComponent,
    // GooglePlacesDirective,
    EditProfileComponent,
    LoyalitypointlistComponent,
    CommonDatePickerComponent,
    TimeSlotSelectedComponent,
    DeleteFevoriteTherapistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    DynamicCardComponent,
    SerachLocationComponent,
    CommonDatePickerComponent,
    TimeSlotSelectedComponent,
    DeleteFevoriteTherapistComponent
  ]
})
export class SharedComponentModule { }
