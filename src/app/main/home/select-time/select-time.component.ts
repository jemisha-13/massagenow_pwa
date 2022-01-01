import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { BookingService } from 'src/app/services/booking.service';
import { TimeSlotSelectedComponent } from 'src/app/shared-components/time-slot-selected/time-slot-selected.component';
import * as moment from 'moment';

@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.component.html',
  styleUrls: ['./select-time.component.scss'],
})
export class SelectTimeComponent implements OnInit {
  timeData!: any;
  @Input() private queryParamsObj : any;
  @Output() changeContent : EventEmitter<any> = new EventEmitter();
  queryParamsData: any = {};
  bookingDetails: any;
  shopName: any;
  serviceName: any;
  therapistName: any;
  serviceTime: any;
  servicePrice: any;
  timeSlot: any;
  serviceId: any;
  therapistId: any;
  locationId: any;
  loyaltyPointCanRedeem: any;
  loyaltyPointRecieve: any;
  ownerId: any;
  loyalityPoint: any;
  servicePricingName: any;
  slotData: any;
  startTime: any;
  endTime: any;
  durationHour: any;
  ScreenWidth: any;
  ScreenHeight: any;
  ShowMobile: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ApiServicesService,
    private NgbModal: NgbModal,
    private bookingService: BookingService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    this.ScreenWidth = window.innerWidth;
    this.ScreenHeight = window.innerHeight;
    if (this.ScreenWidth > 1024) {
      this.ShowMobile = false;
    } else if (this.ScreenWidth < 1024) {
      this.ShowMobile = true;
    }
  }

  ngOnInit(): void {
    console.log(this.queryParamsObj);
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res)
      this.startTime = this.queryParamsObj
        ? this.queryParamsObj.startTime
        : res.startTime;
      this.endTime = this.queryParamsObj
        ? this.queryParamsObj.endTime
        : res.endTime;
      this.durationHour = this.queryParamsObj
        ? this.queryParamsObj.durationHour
        : res.durationHour;
      this.bookingDetails = this.queryParamsObj ? this.queryParamsObj : res;
      this.timeSlot = this.queryParamsObj ? this.queryParamsObj.day : res.day;
      this.servicePricingName = this.queryParamsObj
        ? this.queryParamsObj.servicePricingName
        : res.servicePricingName;
      this.loyalityPoint = this.queryParamsObj
        ? this.queryParamsObj.loyalityPoint
        : res.loyalityPoint;
      this.ownerId = this.queryParamsObj
        ? this.queryParamsObj.ownerId
        : res.ownerId;
      this.loyaltyPointCanRedeem = this.queryParamsObj
        ? this.queryParamsObj.loyaltyPointCanRedeem
        : res['loyaltyPointCanRedeem'];
      this.loyaltyPointRecieve = this.queryParamsObj
        ? this.queryParamsObj.loyaltyPointRecieve
        : res['loyaltyPointRecieve'];
      (this.shopName = this.queryParamsObj
        ? this.queryParamsObj.shopName
        : res.shopName),
        (this.serviceId = this.queryParamsObj
          ? this.queryParamsObj.serviceId
          : res.serviceId);
      this.locationId = this.queryParamsObj
        ? this.queryParamsObj.locationId
        : res.locationId;
      (this.serviceName = this.queryParamsObj
        ? this.queryParamsObj.serviceName
        : res.serviceName),
        (this.serviceTime = this.queryParamsObj
          ? this.queryParamsObj.serviceTime
          : res.serviceTime);
      this.servicePrice = this.queryParamsObj
        ? this.queryParamsObj.servicePrice
        : res.servicePrice;
      (this.therapistName = this.queryParamsObj
        ? this.queryParamsObj.therapistName
        : res.therapistName),
        (this.therapistId = this.queryParamsObj
          ? this.queryParamsObj.therapistId
          : res.therapistId);
      this.queryParamsData.locationId = this.queryParamsObj
        ? this.queryParamsObj.locationId
        : res.locationId;
      this.queryParamsData.ownerId = this.queryParamsObj
        ? this.queryParamsObj.ownerId
        : res.ownerId;
      this.queryParamsData.serviceId = this.queryParamsObj
        ? this.queryParamsObj.serviceId
        : res.serviceId;
      this.queryParamsData.therpaistId = this.queryParamsObj
        ? this.queryParamsObj.therapistId
        : res.therapistId;
      this.queryParamsData.serviceTime = '30';
      let date: any = new Date().toLocaleDateString().split('/').reverse();
      let data: any = moment().format('YYYY-MM-DD');
      setTimeout(() => {
        this.selectedTime(data, date,true);
      });
    });
  } 
  dateSelected(e: any) {
    console.log(e);
    let data: any = `${e.year}-${this.appendZero(e.month)}-${this.appendZero(
      e.day
    )}`;
    let newDate : any;
    newDate = new Date().toLocaleDateString().split('/')[0]
    if(newDate == e.day){
      this.selectedTime(data, e,true);
    }else{
      this.selectedTime(data, e,false);
    }
    // console.log(new Date(e));
    // let date : any = e.toLocaleDateString().split('/').reverse();
    // console.log(date);
    // let data : any = `${date[0]}-${date[1]}-${date[2]}`
    // console.log(data);//
  }

  selectSpecificTime(e: any) {
    console.log('fdsfds', e);
    this.timeSlot = e.slot;
    this.displayPopup(e);
    this.bookingService.startSlotBookingTime({
      data: {
        shopName: this.shopName,
        serviceName: this.serviceName,
        serviceTime: this.serviceTime,
        servicePrice: this.servicePrice,
        therapistName: this.therapistName,
        timeSlot: this.timeSlot,
        serviceId: this.serviceId,
        therapistId: this.therapistId,
        locationId: this.locationId,
        loyaltyPointRecieve: this.loyaltyPointRecieve,
        loyaltyPointCanRedeem: this.loyaltyPointCanRedeem,
      },
    });
  }

  displayPopup(data: any) {
    this.NgbModal.open(TimeSlotSelectedComponent, {
      size: 'sm',
      centered: true,
      windowClass: 'min3-modal',
    }).result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        this.bookSlotTime(data);
        console.log(reason);
      }
    );
  }

  bookSlotTime(data: any) {
    console.log(data.slot);
    console.log(this.serviceTime);
    // let params = new HttpParams();
    let obj: any = {};

    obj['staff_id'] = this.queryParamsData.therpaistId;
    obj['location_id'] = this.queryParamsData.locationId;
    obj['service_time'] = this.minuteCalculate(this.serviceTime);
    obj['ownerId'] = this.queryParamsData.ownerId;
    obj['service_id'] = this.serviceId;
    obj['service_name'] = this.serviceName;
    obj['bookedFrom'] = 'PWA';
    obj['startTime'] = data.slot;
    obj['price'] = this.servicePrice;

    console.log(obj);

    this.service.post('customers/slots', obj).subscribe((res) => {
      console.log('yaha',res);
      this.slotData = res.result;
      let queryParamData = {
        durationHour: this.slotData.duration.hour,
        durationMin: this.slotData.duration.min,
        startDate: this.slotData.startTime,
        endDate: this.slotData.endTime,
        ownerId: this.ownerId,
        shopName: this.shopName,
        serviceName: this.serviceName, 
        serviceTime: this.serviceTime,
        servicePrice: this.servicePrice,
        therapistName: this.therapistName,
        timeSlot: this.timeSlot,
        serviceId: this.serviceId,
        therapistId: this.therapistId,
        locationId: this.locationId,
        loyaltyPointRecieve: this.loyaltyPointRecieve,
        loyaltyPointCanRedeem: this.loyaltyPointCanRedeem,
        loyalityPoint: this.loyalityPoint,
        servicePricingName: this.servicePricingName,
      };
      if (!this.ShowMobile) {
        this.changeContent.emit(queryParamData);
      }
      if (this.ShowMobile) {
        this.router.navigate(['main/home/book-for'], {
          queryParams: queryParamData,
        });
      }
    });
  } 
  minuteCalculate(i: any) {
    // var service = this.appointmentForm["controls"]["booking"]["controls"][i]["controls"]["service"].value;
   console.log(i)
    var duration = i.split(' '); 
    let min = 0;
    if (duration.length == 2 && duration[1] == 'min') {
      min = Number(duration[0]);
    }
    if (duration.length == 2 && duration[1] != 'min') {
      let h = duration[0].replace('h', '');
      let hourMin = Number(h) * 60;
      let minute = duration[1].replace('min', '');
      min = Number(hourMin) + Number(minute);
    }
    if (duration.length === 1) {
      let h = duration[0].replace('h', '');
      let hourMin = Number(h) * 60;
      min = Number(hourMin);
    }
    return min;
  } 
  appendZero(data: any) {
    return data < 10 ? `0${data}` : data;
  }

  selectedTime(date: any, event?: any, presentDate?: any) {
    console.log('time==>>', date);
    console.log(presentDate);
    // this.router.navigate(['main/home/book-for'],{queryParams: {id : date}})
    let params = new HttpParams();
    params = params.set('staff_id', this.queryParamsData.therpaistId);
    params = params.set('location_id', this.queryParamsData.locationId);
    params = params.set('service_time', '30');
    params = params.set('ownerId', this.queryParamsData.ownerId);
    params = params.set('date', date); 
    this.service.get('customers/slots', params).subscribe((res) => {
      console.log(res);
      // 1) date selected
      let newDataList: any = [];
      newDataList = res.result.filter((resp: any) => {
        let data: any = [];
        let todayDate: any = [];
        data = resp.slot.split('T');
        todayDate = date;
        // console.log(data[0]);
        // console.log(todayDate);
        if (data[0] == todayDate) {
          if(presentDate){
            // var er : any;
            var er = moment(resp.slot).format('h:mma');
            // var st : any;
             var st = moment().format('h:mma')
            // console.log(er.isBefore())
            // console.log(moment('2010-10-20').isBefore('2010-10-21'))
            console.log(moment(resp.slot).isAfter(moment()));
            // console.log(er.isBefore(st));
            if(moment(resp.slot).isAfter(moment())) {
          // if(moment(resp.slot).format('LT') > moment().format('LT')){//
            return resp
            }        
          }if(!presentDate){
            return resp
          }
        }
      });
      console.log(newDataList);
      this.timeData = newDataList;
    });
  }

  sendRequest() {
    console.log(this.bookingDetails);
    if (!this.ShowMobile) {
      this.changeContent.emit({request: this.bookingDetails});
    }
    if (this.ShowMobile) {
      this.router.navigate(['main/home/send-request'], {
        queryParams: {
          locationId: this.bookingDetails.locationId,
          ownerId: this.bookingDetails.ownerId,
          serviceId: this.bookingDetails.serviceId,
          therapistId: this.bookingDetails.therapistId,
          categoryId: this.bookingDetails.categoryId,
          loyalityPoint: this.bookingDetails.loyalityPoint,
          loyaltyPointCanRedeem: this.bookingDetails.loyaltyPointCanRedeem,
          loyaltyPointRecieve: this.bookingDetails.loyaltyPointRecieve,
          serviceName: this.bookingDetails.serviceName,
          servicePrice: this.bookingDetails.servicePrice,
          servicePricingName: this.bookingDetails.servicePricingName,
          serviceTime: this.bookingDetails.serviceTime,
          shopName: this.bookingDetails.shopName,
          therapistName: this.bookingDetails.therapistName,
        },
      });
    }
    
  }

  // goToBookFor(item:any){
  //   this.router.navigate(['main/home/book-for']);

  // }

  //http://3.139.122.234:8090/api/customers/slots?staff_id=5fec2f7eb2c08f001271a6de&location_id=5fc78dd88d1b250012c39fb2&service_time=30&date=2021-03-24&ownerId=5fc78dd88d1b250012c39fb1
}
