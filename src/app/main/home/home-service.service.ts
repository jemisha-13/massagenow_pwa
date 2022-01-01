import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  constructor(private apiService : ApiServicesService) { }

 categories = () => this.apiService.get('category');

 recentlyView(data:any){
   return this.apiService.put(`customers?id=${this.clientId.result._id}&clientId=${this.clientId.client}`,data)
 }

 pickTherapist = (locationId:any,ownerId:any,serviceId:any) =>{
  // console.log(locationId, serviceId,ownerId)
  return this.apiService.get(`pwa/get_therapist_list?shop_owner=${ownerId}&location_id=${locationId}&service=${serviceId}&app=true`)
}

}
