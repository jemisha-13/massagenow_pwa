 import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { SerachLocationComponent } from 'src/app/shared-components/serach-location/serach-location.component';

declare var $: any;
import { Location } from '@angular/common';
import { BookingService } from 'src/app/services/booking.service';
import { filter } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit {
  isHomeHeader: boolean = false;
  presentUrl: any;
  authHeader: boolean = true;
  customerDetails: any;
  @ViewChild('sidenav', { static: true }) sidenav!: ElementRef;
  route_title: any = '';
  sheildData: any;
  categoryRoute: any = '';
  locationList = '';
  locationData = '';
  ScreenWidth: number | undefined;
  ScreenHeight: number | undefined;
  ShowMobile: boolean | undefined;
  isLocation: boolean | undefined;

  /* Booking Timer */
  bookingDetails:any;
  startBookingTime:boolean = false;
  bookingTimeConfig = { leftTime: 300, format: 'm:s' };
  userLocation: any = '';
  isShowSearchBar: any;
  customerLocation: any;

  constructor(
    private router: Router,
    private service: ApiServicesService,
    private route: ActivatedRoute,
    private NgbDialogService: NgbModal,
    private location : Location,
    private bookingService:BookingService,
    private locationService: LocationService
  ) {
    setInterval(() => {
      this.getScreenSize();
    }, 100);
  }
  getScreenSize() {
    this.ScreenWidth = window.innerWidth
    this.ScreenHeight = window.innerHeight
    if (this.ScreenWidth > 1024) {
      this.ShowMobile = false
    } else if (this.ScreenWidth < 1024) {
      this.ShowMobile = true
    }

  }
  ngOnInit(): void {
    this.setUserLocation();
    // this.router.events.subscribe((res) => {
    //   this.categoryRoute = '';
    //   if (this.router.url.includes('home')) {
    //     this.isHomeHeader = true; //home page
    //     if(this.router.url.includes('therapist')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'therapist'
    //     }
    //     if(this.router.url.includes('shop-details')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Shop Details'
    //     }
    //     if(this.router.url.includes('select-service')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Select Service'
    //     }
    //     if(this.router.url.includes('pick-therapist')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Pick Therapist'
    //     }
    //     if(this.router.url.includes('select-time')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Select Time'
    //     }
    //     if(this.router.url.includes('send-request')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Send Request'
    //     }
    //     if(this.router.url.includes('pay')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Payment'
    //     }
    //     if(this.router.url.includes('book-for')){
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Book For'
    //     }
    //     if(this.router.url.includes('book-appointment')) {
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Book Appointment'
    //     }
    //     if(this.router.url.includes('intake-form')) {
    //       this.isHomeHeader = false;
    //       this.categoryRoute = 'Intake Form'
    //     }
    //   } else {
    //     this.isHomeHeader = false;
    //     (!this.router.url.includes('auth')) ?
    //       (this.presentUrl = this.router.url.split('/')[2], this.authHeader = false)
    //       : (this.presentUrl = '',
    //         this.authHeader = true)
    //   }
    //   let newData : any = [];
      if (this.route && this.route.queryParams) {
        this.route.queryParams.subscribe(resp => {
          if (resp && resp.title) {
            this.route_title = resp.title;
            this.sidenav.nativeElement.style.width = '100%';
          } else {
            this.route_title = '';
            if (resp && resp.category) {
              this.categoryRoute = resp.category;
            }
            if(resp && resp.therapistName) {
              // console.log(resp.therapistName);
              this.categoryRoute = resp.therapistName;
              // newData = resp.therapistName.split('%');
              // this.categoryRoute = newData[0] + newData[1];
              // console.log(this.categoryRoute);
            }
            this.sidenav.nativeElement.style.width = '0%';
          }
        })
      }


    // })
    this.customerDetails = JSON.parse(localStorage.getItem('customerLogin')!);
    this.service.getLoginData.subscribe(res => {
      (res) ? (this.customerDetails = res) : '';
    }, err => {
      console.log(err);
    })
    let result = JSON.parse(localStorage.getItem('customerLogin')!);
    this.sheildData = result.result.shield


    this.bookingService.getSlotBookingTime().subscribe((obj:any)=>{
      if (obj.data == null) {
        this.startBookingTime = false;
      }else{
        this.bookingDetails = obj;
        this.startBookingTime = false;
        setTimeout(() => {
          this.startBookingTime = true;
        }, 1000);
      }
    })
  }

  ngAfterViewInit() : void {
    console.log('afterview');
    this.isLocation = false;

    this.service.getCustomerLocationData.subscribe(res=>{
      console.log('LOCATIONN=================>>',res);
    })
    // setTimeout(() => {
      this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
        this.categoryRoute = '';
        this.locationList = '';
        let data;
        data = JSON.parse(localStorage.getItem('customerLocation')!)
        this.locationList =  data && data.formatted_address;
        console.log(this.locationList);
        this.service.getLocationData().subscribe((res: any) => {
          this.locationData = res && res.formatted_address ? res.formatted_address : '';
          console.log(this.locationData);
        })
        this.isLocation = true;




        if (this.router.url.includes('home')) {
          this.isHomeHeader = true; //home page
          this.authHeader = false;
          if(this.router.url.includes('therapist')){
            this.isHomeHeader = false;
            if (!this.ShowMobile) {
              this.isHomeHeader = true;
            }
            this.categoryRoute = 'therapist'
          }
          if(this.router.url.includes('shop-details')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Shop Details'
          }
          if(this.router.url.includes('select-service')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Select Service'
          }
          if(this.router.url.includes('pick-therapist')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Pick Therapist'
          }
          if(this.router.url.includes('select-time')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Select Time'
          }
          if(this.router.url.includes('send-request')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Send Request'
          }
          if(this.router.url.includes('pay')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Payment'
          }
          if(this.router.url.includes('book-for')){
            this.isHomeHeader = false;
            this.categoryRoute = 'Book For'
          }
          if(this.router.url.includes('book-appointment')) {
            this.isHomeHeader = false;
            this.categoryRoute = 'Book Appointment'
          }
          if(this.router.url.includes('intake-form')) {
            this.isHomeHeader = false;
            this.categoryRoute = 'Intake Form'
          }
          if(this.router.url.includes('all-reviews')) {
            this.isHomeHeader = false;
            this.categoryRoute = 'All Reviews';
            this.presentUrl = 'All Reviews'
          }
          if(this.router.url.includes('recent')) {
            this.isHomeHeader = false;
            this.categoryRoute = 'Recent View';
            this.presentUrl = 'Recent View';
          }
          if(this.router.url.includes('search-shop')) {
            this.isHomeHeader = false;
            this.categoryRoute = 'Search Shop';
            this.presentUrl = 'Search Shop';
          }
        } else {
          console.log('router-->>',this.router.url.includes('auth'))
          this.isHomeHeader = false;
          if(this.router.url.includes('auth')){
            this.presentUrl = '';
            this.authHeader = true;
          }else if(!this.router.url.includes('auth')){
            this.presentUrl = this.router.url.split('/')[2];
            this.authHeader = false;
          }
        }

        if(this.route && this.route.queryParams){
          this.route.queryParams.subscribe(resp=>{
            // console.log(response);
            // if(response && response.therapistName){
            //   this.categoryRoute = response.therapistName;
            //   this.presentUrl = response.therapistName;
            // }

            if (resp && resp.title) {
              this.route_title = resp.title;
              this.sidenav.nativeElement.style.width = '100%';
            } else {
              this.route_title = '';
              // if (resp && resp.category) {//
              //   this.categoryRoute = resp.category;
              // }
              if(resp && resp.therapistName) {
                // console.log(resp.therapistName);
                this.categoryRoute = resp.therapistName;
                // newData = resp.therapistName.split('%');
                // this.categoryRoute = newData[0] + newData[1];
                // console.log(this.categoryRoute);
              }
              if(resp && resp.locationId){
                if(this.router.url.includes('all-reviews')){
                  this.presentUrl = 'All Reviews';
                  this.isHomeHeader = false;
                  if (!this.ShowMobile) {
                    this.isHomeHeader = true;
                    this.authHeader = false;
                  }

                }
              }
              if(resp && resp.category && resp.id && resp.categoryId) {
                if(this.router.url.includes('category')){
                  this.isHomeHeader = false;
                  this.authHeader = false;
                  this.categoryRoute = resp.category;
                  this.presentUrl = resp.category;
                }
              }
              this.sidenav.nativeElement.style.width = '0%';
            }

          })
        }

        if (this.router.url.includes('login')) {
          this.isHomeHeader = false;
          this.categoryRoute = null;
          this.authHeader = true;
        }
      })
  }

  openLocationComponent() {
    const openLocationRef = this.NgbDialogService.open(SerachLocationComponent, {

    });
    openLocationRef.componentInstance.name = 'Location';
  }

  showSidemenu(type: string) {
    this.sidenav.nativeElement.style.width = '100%';
    let result = JSON.parse(localStorage.getItem('customerLogin')!);
    this.sheildData = result.result.shield;
  }

  closeNav() {
    this.hideNavbar();
  }

  navigateTo(path: string) {
    this.hideNavbar();
    path ?
      this.router.navigateByUrl(`nav/${path}`) : '';
  }

  logoutUser() {
    this.hideNavbar();
    localStorage.clear();
    setTimeout(() => {
      this.router.navigateByUrl('auth/login');
    }, 1000);
  }

  navigateToHome(url: string) {
    this.goBack();
    // this.router.navigate(['main/home'], { queryParams: { title: url } });//
  }

  hideNavbar() {
    this.sidenav.nativeElement.style.width = '0%';
  }

  goBack() {
    this.location.back();
  }

  handleEvent(event:any, content:any){
    // console.log(event);
    if (event.action == 'done') {
      this.startBookingTime = false;
      this.NgbDialogService.open(content ,{ centered: true });
    }
  }

  selectAnotherTimeSlot(){
    this.router.navigate(['main/home/select-time'],{queryParams:this.bookingDetails.data});
    this.NgbDialogService.dismissAll();
  }

  // routing
  goToScore(){
    this.router.navigate(['/nav/my-score'])
  }

  navigateToHomePage() {
    this.router.navigate(['/main/home']);
  }

  setUserLocation(){
    this.customerLocation = JSON.parse(localStorage.getItem('customerLocation')!);
    this.userLocation = this.getGeoCity(this.customerLocation);
  }

  setAddress(obj: any) {
    let latPosition = obj && obj.geo_location ? obj.geo_location.coordinates[1] : obj.geometry.location.lat;
    let logPosition = obj && obj.geo_location ? obj.geo_location.coordinates[0] : obj.geometry.location.lng;
    this.userLocation = this.getGeoCity(obj);
    this.isShowSearchBar = false;
    this.locationService.setUserSelectionLocation({
      'latPosition' : latPosition,
      'logPosition' : logPosition,
    });
    localStorage.setItem('customerLocation', JSON.stringify(obj));
  }

  getGeoCity(results: any){
    if (!results.address_components) {
      return results.locality;
    }

    let matches = results.address_components.filter((address_component: any) =>
			["locality", "colloquial_area"].some(word => ~address_component.types.indexOf(word)))
    if (!matches || !matches.length) {
    } else {
      return matches[0].short_name;
    }
    return '';
  }
  goToSchedule(){
    this.router.navigate(['/main/schedule']);
  }

  goToFavourite(){
    this.router.navigate(['/main/like']);
  }

  goToNotification(){
    this.router.navigate(['/main/notifications']);

  }

}
