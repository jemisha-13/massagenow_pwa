import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { AddRelationComponent } from '../add-relation/add-relation.component';
import {BookforService} from './bookfor.service'
import { TimeSlotSelectedComponent } from 'src/app/shared-components/time-slot-selected/time-slot-selected.component';
import * as moment from 'moment';

@Component({
  selector: 'app-book-for',
  templateUrl: './book-for.component.html',
  styleUrls: ['./book-for.component.scss']
})
export class BookForComponent implements OnInit {


  bookList:any=[];
  loginData: any;
  isLoading: boolean = false;
  shopName: any;
  serviceName: any;
  serviceTime: any;
  servicePrice: any;
  therapistName: any;
  timeSlot: any;
  serviceId: any;
  therapistId: any;
  locationId: any;
  loyaltyPointCanRedeem: any;
  loyaltyPointRecieve: any;
  ownerId: any;
  loyalityPoint: any;
  servicePricingName: any;
  durationHour: any;
  durationMin: any;
  startDate: any;
  endDate: any;
  @Input() selectTimeData : any;
  @Output() bookForContent : EventEmitter<any> = new EventEmitter(); 
  ScreenWidth: any;
  ScreenHeight: any;
  ShowMobile: any;
  constructor(private router:Router,
    private NgbModal:NgbModal,
    private bookservice:BookforService,
    private active:ActivatedRoute,
    private service:ApiServicesService) 
    {
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
    console.log(this.selectTimeData);
    this.loginData = JSON.parse( localStorage.getItem('customerLogin')!)
    console.log(this.loginData)
    this.active.queryParams.subscribe((params)=>{
      this.durationHour= this.selectTimeData ? this.selectTimeData.durationHour : params.durationHour
      this.durationMin=  this.selectTimeData ? this.selectTimeData.durationMin : params.durationMin
      this.startDate=  this.selectTimeData ? this.selectTimeData.startDate : params.startDate
      this.endDate=  this.selectTimeData ? this.selectTimeData.endDate : params.endDate
      this.servicePricingName=  this.selectTimeData ? this.selectTimeData.servicePricingName : params.servicePricingName
      this.loyalityPoint=  this.selectTimeData ? this.selectTimeData.loyalityPoint : params.loyalityPoint
      this.ownerId=  this.selectTimeData ? this.selectTimeData.ownerId : params.ownerId
      this.loyaltyPointCanRedeem =  this.selectTimeData ? this.selectTimeData.loyaltyPointCanRedeem : params['loyaltyPointCanRedeem'];
      this.loyaltyPointRecieve =  this.selectTimeData ? this.selectTimeData.loyaltyPointRecieve : params['loyaltyPointRecieve'];
     this. serviceName= this.selectTimeData ? this.selectTimeData.serviceName :  params.serviceName,
     this.serviceId=  this.selectTimeData ? this.selectTimeData.serviceId : params.serviceId,
     this.therapistId= this.selectTimeData ? this.selectTimeData.therapistId : params.therapistId
     this.locationId= this.selectTimeData ? this.selectTimeData.locationId : params.locationId
     this. serviceTime= this.selectTimeData ? this.selectTimeData.serviceTime : params.serviceTime,
     this. servicePrice= this.selectTimeData ? this.selectTimeData.servicePrice : params.servicePrice,
     this. therapistName= this.selectTimeData ? this.selectTimeData.therapistName : params.therapistName,
     this. timeSlot= moment().format(this.selectTimeData ? this.selectTimeData.timeSlot : params.timeSlot);
    
     console.log(this.timeSlot);
     
    //  this. timeSlot=params.timeSlot
    });
    this.getBookDetails()
  }
  navigateBack(){
  }

  goToAddRelation(){
    const relationRef=this.NgbModal.open(AddRelationComponent,{
      
    });
  }
  getBookDetails(){
  this.isLoading=true;
  this.bookservice.bookFor().subscribe((res:any)=>{
  this.bookList=res.ClientRelations
  console.log(this.bookList);
  
  this.isLoading=false
  }, err => { console.log(err) })
  }

  bookForSelf() {

    let queryData = {
      durationHour:this.durationHour,
      durationMin:this.durationMin,
      startDate:this.startDate,
      endDate:this.endDate,
      ownerId : this.ownerId,
      shopName:this.shopName,
      serviceName:this.serviceName,
      serviceTime:this.serviceTime,
      servicePrice:this.servicePrice,
      therapistName:this.therapistName,
      timeSlot:this.timeSlot,
      serviceId:this.serviceId,
      therapistId:this.therapistId,
      locationId:this.locationId,
      loyaltyPointRecieve:this.loyaltyPointRecieve,
      loyaltyPointCanRedeem:this.loyaltyPointCanRedeem,
      loyalityPoint:this.loyalityPoint,
      servicePricingName:this.servicePricingName
  }
  if(this.ShowMobile){
    this.router.navigate(['main/home/intake-form'],{queryParams: queryData});
  }
  if(!this.ShowMobile) {
    this.bookForContent.emit(queryData);
  }
  }
  setDefaultPic(e: any) {
    e.target.src = './assets/images/no_image.png';
  }

}
