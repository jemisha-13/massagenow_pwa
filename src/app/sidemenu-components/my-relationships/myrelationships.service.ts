import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class MyrelationshipsService {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  constructor(private apiService : ApiServicesService) { }

  getMyRelationships=()=>this.apiService.get(`customers/findrelations/${this.clientId.client}`)
}
