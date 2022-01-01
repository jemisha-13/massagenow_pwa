import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { SkeletonModule } from 'src/app/design-component/skeleton/skeleton.module';
import { RatedTherapistComponent } from './rated-therapist/rated-therapist.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceSelectionComponent } from './service-selection/service-selection.component';
import { PickTherapistComponent } from './pick-therapist/pick-therapist.component';
import { SelectTimeComponent } from './select-time/select-time.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SharedComponentModule } from 'src/app/shared-components/shared-component.module';
import { BookForComponent } from './book-for/book-for.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './payment/payment.component';
import { AddRelationComponent } from './add-relation/add-relation.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';
import { AuthGuard } from '../../guard/auth.guard';
import { RecentViewComponent } from './recent-view/recent-view.component';
import { DesktopModalComponent } from './desktop-modal/desktop-modal.component';
import { SearchShopComponent } from './search-shop/search-shop.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { RateAndReviewsComponent } from '../rate-and-reviews/rate-and-reviews.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: CategorySelectionComponent,
  },
  {
    path: 'therapist',
    component: RatedTherapistComponent,
  },
  {
    path: 'shop-details',
    component: ShopDetailComponent,
  },
  {
    path: 'select-service',
    component: ServiceSelectionComponent,
  },
  {
    path: 'pick-therapist',
    component: PickTherapistComponent,
  },
  {
    path: 'send-request',
    component: SendRequestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'select-time',
    component: SelectTimeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'book-for',
    component: BookForComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'book-appointment',
    component: BookAppointmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'intake-form',
    component : IntakeFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pay',
    component:PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recent',
    component:RecentViewComponent
  },
  {
    path: 'search-shop',
    component:SearchShopComponent },
{
    path: 'my-request',
    component:MyRequestComponent
  },
  {
    path: 'shop-detail',
    component: ShopDetailComponent,
  },

]

@NgModule({
  declarations: [
    CategorySelectionComponent,
    RatedTherapistComponent,
    ShopDetailsComponent,
    ServiceSelectionComponent,
    PickTherapistComponent,
    SelectTimeComponent,
    SendRequestComponent,
    BookForComponent,
    BookAppointmentComponent,
    IntakeFormComponent,
    AddRelationComponent,
    PaymentComponent,
    ScrollSpyDirective,
    RecentViewComponent,
    DesktopModalComponent,
    SearchShopComponent,
    MyRequestComponent,
    ShopDetailComponent,
    RateAndReviewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    SkeletonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    SharedComponentModule,
    NgxStripeModule.forRoot('pk_test_VK47XeSEIbfr4iKhfmVHAtsr00cnZhNzel'),
    SignaturePadModule,
  ],
  exports: [
    DesktopModalComponent,
    RateAndReviewsComponent
  ],
  providers: [DatePipe],
})
export class HomeModule {}
