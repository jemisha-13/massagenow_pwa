import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private apiService : ApiServicesService) { }
  notification = () => this.apiService.get('notify/customer');
}
