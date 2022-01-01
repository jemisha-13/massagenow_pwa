import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BookingService } from 'src/app/services/booking.service';
import { DesktopModalComponent } from '../desktop-modal/desktop-modal.component';
import { HomeServiceService } from '../home-service.service';
import {PicktherapistService } from './picktherapist.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-pick-therapist',
  templateUrl: './pick-therapist.component.html',
  styleUrls: ['./pick-therapist.component.scss'],
})
export class PickTherapistComponent implements OnInit {

  pickTherapistList: any = [];
  locationId: any;
  ownerId: any;
  serviceId: any;
  serviceTime : any;
  isLoading: boolean = false;
  categoryId: any;
  shopName: any;
  serviceName: any;
  servicePrice: any;
  loyaltyPointCanRedeem: any;
  loyaltyPointRecieve: any;
  loyalityPoint: any;
  servicePricingName: any;
  ScreenWidth: any;
  ScreenHeight: any;
  ShowMobile: any;
  showMore: boolean = false;
  copyPickTherapistList: any;

  @Input() shopDetail?: any;
  @Input() selectedService?: any;
  constructor(
    private router: Router,
    private homeService: HomeServiceService ,
    private activatedRoute: ActivatedRoute,
    private picktherapistservice: PicktherapistService,
    private bookingService: BookingService,
    private authService: AuthServiceService,
    private ngbModal : NgbModal
    ) {
      this.getScreenSize();
     }

     getScreenSize() {
      this.ScreenWidth = window.innerWidth
      this.ScreenHeight = window.innerHeight
      if (this.ScreenWidth > 1024) {
        this.ShowMobile = false
      } else if (this.ScreenWidth < 1024) {
        this.ShowMobile = true
      }

    }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      params = (this.shopDetail) ? this.selectedService : params;
      this.servicePricingName=params.servicePricingName
      this.loyalityPoint=params.loyalityPoint
      this.shopName = params['shopName'];
      this.serviceName = params['serviceName'];
      this.locationId = params['locationId'];
      this.ownerId = params['ownerId'];
      this.serviceId = params['serviceId'];
      this.serviceTime = params['serviceTime'];
      this.categoryId = params['categoryId'];
      this.servicePrice = params['servicePrice'];
      this.loyaltyPointCanRedeem = params['loyaltyPointCanRedeem'];
      this.loyaltyPointRecieve = params['loyaltyPointRecieve'];
      this.getPickTherapistDetails();
      console.log(this.shopName,this.serviceName,this.categoryId);

      this.bookingService.startSlotBookingTime({
        data : null
      });
    });

  }

   getPickTherapistDetails() {
    this.isLoading=true;
    this.picktherapistservice.pickTherapist(this.locationId,this.ownerId,this.serviceId).subscribe((res: any) => {
      console.log(res)
      this.pickTherapistList = res.result;
      this.copyPickTherapistList = _.cloneDeep(this.pickTherapistList);
      this.setTherapistListPagination();
      this.isLoading=false
  }, err => { console.log(err) });
  }

  bookTherapist(item: any) {
    let bookingDetail = {
      shopName:this.shopName,
      serviceName:this.serviceName,
      serviceTime : this.serviceTime,
      servicePrice: this.servicePrice,
      therapistName:item.firstName,
      locationId : this.locationId,
      ownerId : this.ownerId,
      serviceId : this.serviceId,
      therapistId : item && item._id ? item._id : '123',
      categoryId: this.categoryId,
      loyaltyPointRecieve:this.loyaltyPointRecieve,
      loyaltyPointCanRedeem:this.loyaltyPointCanRedeem,
      loyalityPoint:this.loyalityPoint,
      servicePricingName:this.servicePricingName
    };

    if (!this.authService.getToken()) {
      Object.assign(bookingDetail, {'pathUrl': 'main/home/select-time'});
      this.router.navigate(['auth/login'], { queryParams: bookingDetail });
      return false;
    }
    if(this.ShowMobile){
      this.router.navigate(['main/home/select-time'], { queryParams: bookingDetail })
    }if(!this.ShowMobile){
     const modal = this.ngbModal.open(DesktopModalComponent,{
        size: 'xl',
        centered : true
      })

      modal.componentInstance.user = bookingDetail;

    }
    // localStorage.setItem('selectedTherapist', JSON.stringify({therapist : '', _id : ''}));
  }


  viewTherapistDetails(e : any) {
    this.router.navigate(['main/home/therapist'],{queryParams:{
        shopName:this.shopName,
        serviceName:this.serviceName,
        serviceTime : this.serviceTime,
        servicePrice: this.servicePrice,
        therapistName: e.firstName,
        locationId : this.locationId,
        ownerId : this.ownerId,
        serviceId : this.serviceId,
        therapistId : e && e._id ? e._id : '123',
        categoryId: this.categoryId,
        loyaltyPointRecieve:this.loyaltyPointRecieve,
        loyaltyPointCanRedeem:this.loyaltyPointCanRedeem,
        loyalityPoint:this.loyalityPoint,
        servicePricingName:this.servicePricingName
      }
    });
  }

  setDefaultPic(e: any) {
    e.target.src = './assets/images/cust_icon_bg.png';
    // e.target.addClass('imgPositionNew');
    e.currentTarget.classList.add("imgPosition");
    e.currentTarget.classList.remove("imgPositionNew");
  }

  setTherapistListPagination(){
    if (this.pickTherapistList.length > 0 && this.shopDetail) {
      if (!this.showMore) {
        this.pickTherapistList = this.pickTherapistList.slice(0, 3);
      } else {
        this.pickTherapistList = this.copyPickTherapistList;
      }
    }
  }

  showMoreList(){
    this.showMore = !this.showMore;
    this.setTherapistListPagination();
  }
}
