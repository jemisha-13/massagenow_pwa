import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  
  
  constructor(private apiService : ApiServicesService) { 
  }
  schedule = () => this.apiService.get(`customers/appointments/group/${this.clientId.result._id}`);
  search_company = (query: any) => this.apiService.get(`customers/search_company?`+query);
}
