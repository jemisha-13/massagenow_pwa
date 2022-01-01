import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import * as _ from 'lodash';
import { BookingService } from 'src/app/services/booking.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DesktopModalComponent } from '../desktop-modal/desktop-modal.component';

@Component({
  selector: 'app-rated-therapist',
  templateUrl: './rated-therapist.component.html',
  styleUrls: ['./rated-therapist.component.scss']
})
export class RatedTherapistComponent implements OnInit {
  userData: any;
  theRapistDetails: any;
  hours: string | undefined;
  minutes: number | undefined;
  isFavouriteTherapist: boolean = false;
  isMobile: boolean = false;

  constructor(
    private httpService:ApiServicesService,
    private route :ActivatedRoute,
    private router:Router,
    private authService:AuthServiceService,
    private bookingService:BookingService,
    private ngbModal : NgbModal
    ) { }

  ngOnInit(): void {
    this.isMobile = this.bookingService.isMobileView();
    this.userData = this.authService.getUserData();

    this.route.queryParamMap.subscribe((res:any)=>{
      let theRapistId = res.params.therapistId

      this.httpService.get(`customers/therapist/${theRapistId}`).subscribe((res:any)=>{
        this.theRapistDetails = res.result
        this.hours =  this.theRapistDetails.workingHours.hour
      })
    })
  }

  // routing
  navigateBack(){}

  addTherapistToFavourite(){
    if (!this.userData) {
      let qParams: any;
      this.route.queryParams.subscribe(params => {
        qParams = params;
      });
      qParams = _.cloneDeep(qParams);
      qParams.pathUrl = window.location.pathname;
      this.router.navigate(['auth/login'], {queryParams : qParams});
      return false;
    }

    if (this.theRapistDetails.favFlag)
    {
      this.httpService.delete(`customers/therapist/${this.theRapistDetails._id}`).subscribe(res => {
        if (res && res.status == 200) {
          this.theRapistDetails.favFlag = false;
        }
      });
    }else{
      let payload = {
        "favTherapist": this.theRapistDetails._id
      };
      this.httpService.put(`customers?id=${this.userData.result._id}&clientId=${this.userData.client}`, payload).subscribe(res => {
        if (res && res.status == 200) {
          this.theRapistDetails.favFlag = true;
        }
      });
    }
  }

  bookTherapist(){
    this.route.queryParams.subscribe(params => {

      if (!this.authService.getToken()) {
        Object.assign(params, {'pathUrl': 'main/home/select-time'});
        this.router.navigate(['auth/login'], { queryParams: params });
        return false;
      }
      if(this.isMobile){
        this.router.navigate(['main/home/select-time'], { queryParams: params })
      }if(!this.isMobile){
       const modal = this.ngbModal.open(DesktopModalComponent,{
          size: 'xl',
          centered : true
        })

        modal.componentInstance.user = params;

      }
    });
  }
}
