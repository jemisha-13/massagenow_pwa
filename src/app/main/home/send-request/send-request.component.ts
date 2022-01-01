import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss'],
})
export class SendRequestComponent implements OnInit {
  @ViewChild('content') content: ElementRef<HTMLElement> | any;
  @Input() private sendRequestData : any;
  @Output() requestData : EventEmitter<any> = new EventEmitter();
  model: NgbDateStruct | undefined;
  today = this.calendar.getToday();
  orderForm: FormGroup | any;
  date: FormArray | any;
  storeDetails: any;
  clientdata: any;
  constructor(
    private calendar: NgbCalendar,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpService: ApiServicesService,
    public datepipe: DatePipe,
    private modalService: NgbModal
  ) {} 

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      this.storeDetails = this.sendRequestData ? this.sendRequestData.request : res.params;
      // console.log(res)
      // console.log(this.storeDetails)
      this.clientdata = JSON.parse(localStorage.getItem('customerLogin')!);
    });
    this.orderForm = this.formBuilder.group({
      date: this.formBuilder.array([this.createItem()]),
    });
  } 
  createItem(): FormGroup {
    return this.formBuilder.group({
      date: [''],
      time: this.formBuilder.group({
        startTime: [''],
        endTime: [''],
      }),
    });
  }
  addItem(): void {
    this.date = this.orderForm.get('date') as FormArray;
    this.date.push(this.createItem());
  }
  submit() { 
    this.orderForm.value.date.forEach((ele:any) => {
      let newDate = `${ele.date.day}.${ele.date.month}.${ele.date.year}` 
      ele.date = `${ele.date.year}-${ele.date.month}-${ele.date.day}`
    let formattedStartDate = ele.time.startTime = `${newDate} ${ele.time.startTime}:00`
     let formattedEndDate =  ele.time.endTime = `${newDate} ${ele.time.endTime}:00`
     let startTime = moment(formattedStartDate, 'DD.MM.YYYY H:mm:ss').toISOString()
     let endTime = moment(formattedEndDate, 'DD.MM.YYYY H:mm:ss').toISOString()
   ele.time.startTime = startTime
   ele.time.endTime = endTime 
    });
    let body = {
      categoryId: this.storeDetails.categoryId,
      locationId: this.storeDetails.locationId,
      ownerId: this.storeDetails.ownerId,
      clientId: this.clientdata.client,
      serviceId: this.storeDetails.serviceId,
      therapistId: this.storeDetails.therapistId,
      date: this.orderForm.value.date,
    };
    console.log(body)
     this.httpService.post(`customers/request`,body).subscribe((res:any)=>{
       console.log(res)
       this.openVerticallyCentered(this.content)
     })
  }
  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      console.log("result", result)
      this.requestData.emit(true)
    }, (reason) => {
      console.log("reason", reason)
    });
  }
  
}