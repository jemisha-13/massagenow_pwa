import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { MyBackpackComponent } from './my-backpack/my-backpack.component';
import { MyRelationshipsComponent } from './my-relationships/my-relationships.component';
import { MyLoyalityPointsComponent } from './my-loyality-points/my-loyality-points.component';
import { ReportBugComponent } from './report-bug/report-bug.component';
import { OnlineSupportComponent } from './online-support/online-support.component';
import { FaqCompComponent } from './faq-comp/faq-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MyScoreComponent } from './my-score/my-score.component';
import { SkeletonModule } from '../design-component/skeleton/skeleton.module';
import { CustomSpinnerModule } from '../design-component/custom-spinner/customer-spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SendTipComponent } from './send-tip/send-tip.component';
import { BuyTipComponent } from './buy-tip/buy-tip.component';
import { NgxStripeModule } from 'ngx-stripe';
import { TipPaymentComponent } from './tip-payment/tip-payment.component';



const route : Routes = [
    {
      path : 'my-profile',
      component : MyProfileComponent,
    },
    {
        path : 'Wallet',
        component : MyWalletComponent,
      },
      {
        path : 'my-backpack',
        component : MyBackpackComponent,
      },
      {
        path : 'my-relationship',
        component : MyRelationshipsComponent,
      },
      {
        path : 'my-points',
        component : MyLoyalityPointsComponent,
      },
      {
        path : 'report-bug',
        component : ReportBugComponent,
      },
      {
        path : 'online-support',
        component : OnlineSupportComponent,
      },
      {
        path : 'faq',
        component : FaqCompComponent,
      },
      {
        path : 'my-score',
        component : MyScoreComponent,
      },
      {
        path:'send-tip',
        component:SendTipComponent
      },
      {
        path:'buy-tip',
        component:BuyTipComponent
      },
      {
        path:'buy-tip-pay',
        component:BuyTipComponent
      },
      {
        path:'tip-payment',
        component:TipPaymentComponent
      },
      
  ]

  
@NgModule({
  declarations: [
   MyProfileComponent,
    MyWalletComponent,
    MyBackpackComponent,
    MyRelationshipsComponent,
    MyLoyalityPointsComponent,
    ReportBugComponent,
    OnlineSupportComponent,
    FaqCompComponent,
    MyScoreComponent,
    SendTipComponent,
    BuyTipComponent,
    TipPaymentComponent,
    TipPaymentComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    // CustomSpinnerModule,
    RouterModule.forChild(route),
    NgbModule,
    NgxStripeModule.forRoot('pk_test_VK47XeSEIbfr4iKhfmVHAtsr00cnZhNzel'),

  ],
  exports: [
    MyProfileComponent,
    MyWalletComponent,
    MyBackpackComponent,
    MyRelationshipsComponent,
    MyLoyalityPointsComponent,
    ReportBugComponent,
    OnlineSupportComponent,
    FaqCompComponent,
  ]
})
export class SidemenuComponentsModule { }