import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoyalitypointlistService {

  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  constructor(private apiService : ApiServicesService) { }

  loyalityPointList=(id:any)=>this.apiService.get(`customers/loyaltytransact?clientId=${this.clientId.client}&locationId=${id}`)
  }
 

