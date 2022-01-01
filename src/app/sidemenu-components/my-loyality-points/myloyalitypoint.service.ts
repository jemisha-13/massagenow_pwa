import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class MyloyalitypointService {

  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  constructor(private apiService : ApiServicesService) { }

  loyalityPoint=()=>this.apiService.get(`customers/loyalty_points?id=${this.clientId.client}`)
}
