import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LikeComponent } from './like/like.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentModule } from '../shared-components/shared-component.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeServiceService } from './home/home-service.service'
import { SkeletonModule } from '../design-component/skeleton/skeleton.module';
import { AddReviewComponent } from './add-review/add-review.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarsModule } from 'ngx-stars';
// import { RateAndReviewsComponent } from './rate-and-reviews/rate-and-reviews.component';
import { CommentsComponent } from './comments/comments.component';
import {CommentsModule } from './comments/comments.module';

const route : Routes = [
  {
    path : 'home',
    loadChildren: ()=> import('./home/home.module').then(res=> res.HomeModule)
  },
  {
    path : 'like',
    loadChildren: ()=> import('./like/like.module').then(res=>res.LikeModule)
  },
  {
    path : 'notifications',
    loadChildren:()=> import('./notifications/notification.module').then(res=>res.NotificationModule)
  },
  {
    path : 'schedule',
    loadChildren:()=> import('./schedule/schedule.module').then(res=> res.ScheduleModule)
  },
  {
    path : 'review',
    loadChildren:()=> import('./add-review/add-review.module').then(res=> res.AddReviewModule)
  },
  {
    path : 'all-reviews',
    loadChildren:()=> import('./rate-and-reviews/rate-and-reviews.module').then(res=> res.RateAndReviewsModule)
  },
  {
    path : 'comment',
    loadChildren:()=> import('./comments/comments.module').then(res=> res.CommentsModule)
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ScheduleComponent,
    LikeComponent,
    NotificationsComponent,
    AddReviewComponent,
    // RateAndReviewsComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedComponentModule,
    FormsModule,
    SkeletonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxStarsModule,
    CommentsModule,
  ],
  exports : [
    HomeComponent,
    ScheduleComponent,
    LikeComponent,
    NotificationsComponent,
    AddReviewComponent,
    // RateAndReviewsComponent,
    CommentsComponent,
  ],
  providers:[HomeServiceService]
})
export class MainModule { }
