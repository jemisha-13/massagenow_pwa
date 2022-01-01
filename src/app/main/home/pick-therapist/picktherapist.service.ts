import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class PicktherapistService {

  constructor(private apiService : ApiServicesService) { }

  pickTherapist = (locationId:any,ownerId:any,serviceId:any) =>{
    // console.log(locationId, serviceId,ownerId)
    return this.apiService.get(`pwa/get_therapist_list?shop_owner=${ownerId}&location_id=${locationId}&service=${serviceId}&app=true`)
  }
}
