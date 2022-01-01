import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Injectable({
  providedIn: 'root'
})
export class RatereviewsService {
  userData = JSON.parse(localStorage.getItem('customerLogin')!);

  constructor(private apiService : ApiServicesService) { }

  // getcomment = (locationId:any, sortType: any) => this.apiService.get(`pwa/get_shop_rating/${locationId}?byId=true`);
  likeComment = (data:any) => this.apiService.post(`customers/reviewComment`,data);
  dislikeComment = (data:any) => this.apiService.post(`customers/reviewComment`,data);
  comment = (data:any) => this.apiService.post(`customers/reviewComment`,data);

  getcomment(locationId: any, sortType?: any, search?: any){
    if (sortType == undefined) {
      sortType = 'byId';
    }
    if (search != '') {
      search = `&searchKeyword=${search}`;
    }
    return this.apiService.get(`pwa/get_shop_rating/${locationId}?${sortType}=true${search}`);
  }

  addReport(params: any){
    return this.apiService.post(`bug`, params);
  }
}

