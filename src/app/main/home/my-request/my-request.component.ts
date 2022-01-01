import { HttpParams } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.scss'],
})
export class MyRequestComponent implements OnInit {
  requestedData: any;

  constructor(private apiService: ApiServicesService) {}

  ngOnInit(): void {
    let clientDetails = JSON.parse(localStorage.getItem('customerLogin')!);
    let clientId = clientDetails.client;
    this.getAllrequestedAppointment(clientId);
  }
  getAllrequestedAppointment(id: any) {
    this.apiService
      .get(`customers/myrequest?id=${id}`)
      .subscribe((res: any) => {
        this.requestedData = res.request;
        console.log(res);
      });
  }
  cancelRequest(data:any){
    console.log(data) 
    let body = {
      requestId:data._id,
      status:'cancel'
    }
    console.log(body)
     this.apiService.put(`customers/updateRequest`,body).subscribe((res:any)=>{
       console.log(res)
       this.ngOnInit()
     })
  }
}
