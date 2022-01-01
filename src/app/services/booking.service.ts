import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private slotBookingTime = new Subject<any>();
  constructor() { }

  startSlotBookingTime(obj:any){
    this.slotBookingTime.next(obj)
  }

  getSlotBookingTime(): Observable<any> {
    return this.slotBookingTime.asObservable();
  }

  isMobileView(){
    // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //   return true;
    // }else{
    //   return false;
    // }
    if (window.innerWidth  >= 768) {
      return false;
    }else{
      return true;
    }
  }
}
