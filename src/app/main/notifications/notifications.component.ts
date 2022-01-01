import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NotificationService} from './notification.service'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, AfterViewInit {
  notificationList: any = [];
  isLoading!: boolean;
  constructor(
    private notificationservice: NotificationService,
    private router: Router,
    private cdref: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.isLoading=true;
    this.notificationservice.notification().subscribe(
      (res: any) => {
        this.notificationList = res.result;
        this.isLoading= false;
      },
      (err) => {
        console.log(err);
      }
    );
    this.cdref.detectChanges();
  }
  navigateTo(status: any) {
    var statusValue = JSON.parse(status)
    switch (statusValue) {
      case 1:
        this.router.navigate(['nav/my-backpack']);
        break;
      case 2:
        this.router.navigateByUrl(''); // add review
        break;
      case 3:
        this.router.navigate(['nav/my-score']);
        break;
      case 4:
        this.router.navigate(['main/schedule']);
        break;
      case 5:
        this.router.navigate(['main/schedule']);
        break;
      case 6:
        this.router.navigate(['nav/my-backpack']);
        break;
      case 7:
        this.router.navigateByUrl(''); // confusion hai but therapist app me bhejna hai
        break;
      case 8:
        this.router.navigate(['main/schedule']);
        break;
      case 9:
        this.router.navigateByUrl('');// add review modal 
        break;
      case 10:
        this.router.navigateByUrl('');// add review modal
        break;
      case 11:
        this.router.navigate(['nav/my-points']);
        break;
      case 12:
        this.router.navigateByUrl('');// page need to designe for palm levelup
        break;
    }
  }
}
