import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class MybackpackService {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)

  constructor(private apiService : ApiServicesService) { }

  myBackPack =()=>this.apiService.get(`customers/findmygiftcard?clientId=${this.clientId.client}&sent=false&received=true`)
  point=()=>this.apiService.get(`customers/loyalty_points?id=${this.clientId.client}`)
  tip=()=>this.apiService.get(`customers/findmytipcard?clientId=${this.clientId.client}`)
}
