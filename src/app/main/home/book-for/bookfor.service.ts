import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class BookforService {


  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  constructor(private apiService : ApiServicesService) {
  }

  bookFor = () => this.apiService.get(`customers/findrelations/${this.clientId.client}`);
}
