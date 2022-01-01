import { HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ScheduleService } from './schedule.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, AfterViewInit {
  isContentType: boolean = true;
  upcomingList: any = []
  historyList: any = []
  currTab:any='upcoming'
  isLoading!: boolean;
  rateing = 3.6;
  isMobile: boolean = false;
  historyDetails: boolean=false;
  serviceName: any;

  constructor(private scheduleservice: ScheduleService,
    private cdref: ChangeDetectorRef, private _route:Router,
    private httpService:ApiServicesService,
    private newToast:ToasterService) { }

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.isMobile = false;
    }else{
      this.isMobile = true;
    }
  }
  ngAfterViewInit() {
   this.getData()
  }
getData(){
  this.isLoading=true;
  this.scheduleservice.schedule().subscribe((res: any) => {
    console.log(res)
    this.upcomingList = res.result.upcoming;
    this.historyList = res.result.past;
    this.isLoading=false
  }, err => { console.log(err) });
  this.cdref.detectChanges()
}
  // for tab link
  showContent(type:any){
    this.currTab=type;
    if(this.currTab=='upcoming'){
      this.isContentType = true ;
    }else
    setTimeout(() => {
      this.isContentType = false ;
    }, );
    this.isContentType = true ;
  }
  setDefaultPic(e: any) {
    e.target.src = './assets/images/no_image.png';
  }
  reviewAppointment(data:any){
    console.log(data)
    // let reviewCredentials = {
    //   appointmentId:res.result[0]._id,
    //   companyId:res.result[0].location._id,
    //   clientId:res.result[0].ownerId
    // }
    // localStorage.setItem('reviewCredentials',JSON.stringify(reviewCredentials))
  }

  // api for sent invoice to email customers/send_invoice?invoice=RXBZ66NK
  sendInvoice(invoice:any){
    console.log('fdgfdgf');

    this.httpService.get(`customers/send_invoice?invoice=${invoice}`).subscribe((res:any)=>{
      console.log(res);
      if(res.status==200){
        this.newToast.success("Invoice Sent to Email")
      }

    },(err)=>{
      this.newToast.error("something went wrong")
    })

  }

  moveAddReview(){
    this._route.navigate(['main/review'])
   }
   goToSendrequest(){
     this._route.navigate(['/main/home/my-request'])
   }
   goToSelect(data:any){
     this._route.navigate(['/main/home/select-time'],{queryParams:{
      // serviceName:historyItem.service.name,
      // day:historyItem.day,
      // servicePrice:historyItem.price,
      // startTime:historyItem.startTime,
      // endTime:historyItem.endTime,
      // therapistName:historyItem.staff.firstName,
      // therapistId:historyItem.staff.id,
      // loyaltyPointRecieve:historyItem.service.loyaltyPointRecieve,
      // durationHour:historyItem.duration,
      // locationId:historyItem.location
          intakeId:data.intakeId,
          durationHour:data.duration,
          durationMin:data.duration,
          startDate:data.startTime,
          endDate:data.endTime,
          ownerId:data.ownerId,
          // servicePricingName:data.servicePricingName,
          loyalityPoint:data.service.loyalityPoint,
          loyaltyPointCanRedeem : data.service.loyaltyPointCanRedeem,
          loyaltyPointRecieve : data.service.loyaltyPointRecieve,
          shopName:data.shopName,
          serviceName:data.service.name,
          serviceTime:data.duration,
          servicePrice:data.price,
          therapistName:data.staff.firstName,
          // timeSlot:data.timeSlot,
          serviceId:data.service.id,
          therapistId:data.staff.id,
          locationId:data.location

     }})
   }
   cancelAppointment(clientId:any,booking_reference:any){
     console.log(clientId,booking_reference)
     let param = new HttpParams()
     .set('clientId',clientId)
     .set('booking_reference',booking_reference)
    this.httpService.deleteNew(`customers/appointment_delete`,param).subscribe((res:any)=>{
      console.log(res)
      this.getData()
    })
   }
   paymentMethod(data:any){
     this._route.navigate(['main/home/pay'],{
       queryParams:{

          intakeId:data.intakeId,
          durationHour:data.duration,
          durationMin:data.duration,
          startDate:data.startTime,
          endDate:data.endTime,
          ownerId:data.ownerId,
          // servicePricingName:data.servicePricingName,
          loyalityPoint:data.service.loyalityPoint,
          loyaltyPointCanRedeem : data.service.loyaltyPointCanRedeem,
          loyaltyPointRecieve : data.service.loyaltyPointRecieve,
          shopName:data.shopName,
          serviceName:data.service.name,
          // serviceTime:data.day,
          servicePrice:data.price,
          therapistName:data.staff.firstName,
          // timeSlot:data.timeSlot,
          serviceId:data.service.id,
          therapistId:data.staff.id,
          locationId:data.location

       }
    })
   }

   historyDetail(historyItem:any){
     this.historyDetails=true;
     console.log('fgfdgfd');
     this.serviceName=historyItem?.service.name,
     console.log(this.serviceName);
     
     

   }

   goToTip(){
    this._route.navigate(['nav/my-backpack'])
  }

   }
