import { Injectable } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)

  constructor(private apiService : ApiServicesService) { 
  }

  shop =()=>this.apiService.get(`customers/${this.clientId.result._id}?shop=true`)
  therapist =()=>this.apiService.get(`customers/${this.clientId.result._id}?therapist=true`)
  delFevTherapist =(id:any)=>this.apiService.delete(`customers/therapist/${id}`)
  delFevShop =(id:any)=>this.apiService.delete(`customers/shop/${id}`)
}
