import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class MywalletService {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)

  constructor(private apiService : ApiServicesService) { }

  getWallet=()=>this.apiService.get(`transaction/findtransactions?customerId=${this.clientId.result._id}`)
}
