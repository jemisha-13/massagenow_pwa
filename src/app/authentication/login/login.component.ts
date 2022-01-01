import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LocationService } from 'src/app/services/location.service';
import { LOGIN } from '../../shared/url';
declare var google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup
  submitted = false;
  currentLocation: any;
  lat: any;
  getAddress: any;
  lng: any;
  isLoading : boolean = true;
  bookingData: any;
  constructor(
              private formBuilder: FormBuilder,
              private apiService : ApiServicesService,
              private route : Router,
              private activatedRoute: ActivatedRoute,
              private locationService : LocationService,
              private authService: AuthServiceService,
              private toastService : ToasterService 
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    // this.instanceLoader(true);
  }

  ngOnInit(): void {
    this.instanceLoader(false);

    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.bookingData = params;
        window.history.pushState(null, '', 'auth/login')
      }
    });
  }

  ngAfterViewInit() : void {
    this.instanceLoader(false);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(form:any) {
    this.instanceLoader(true);
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.instanceLoader(false);
      return;
    }

    this.submitLogin(form);
  }

  submitLogin(form:any) {
    console.log(form);
    this.apiService.post(LOGIN,form.value).subscribe(res=>{
      console.log(res);
      this.instanceLoader(false);
      localStorage.setItem('customerLogin',JSON.stringify(res));
      localStorage.setItem('customerToken',res.token);
      if (this.bookingData && this.bookingData.pathUrl) {
        this.route.navigate([this.bookingData.pathUrl], { queryParams: this.bookingData });
      }else{
        this.route.navigateByUrl('main/home');
      }
      this.apiService.setLoginData(res);
      this.getPosition();
      // this.locationService.getPosition().then(res=>{
      //   console.log(res);
      //   this.locationService.getLocationPromise(res.lat,res.lng).then(res=>{
      //    console.log(res);
      //  },err=>{
      //   console.log(err);
      // });
      // //  console.log(this.locationService.getGeoLocation(res.lat, res.lng));
      // //  console.log(data);
      // })
      // console.log( this.apiService.setLoginData(res));
    },err=>{
      this.route.navigateByUrl('auth/login');
      this.toastService.error(err.body,false,1000);
      setTimeout(() => {
        this.instanceLoader(false);
      }, 1000);
      // window.location.reload();
      console.log(err);
    })
  }


  getPosition()
  {
    this.getGeoLocation( );
    // return new Promise((resolve, reject) => {

    //   navigator.geolocation.getCurrentPosition(resp => {
    //       console.log('something',resp);
    //       resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
    //       this.getGeoLocation( );
    //       // if(this.currentLocation != ''){
    //       //     return this.currentLocation;
    //       // }
    //     },
    //     err => {
    //       reject(err);
    //     });
    // });
  }

  getGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.getAddress = (this.lat, this.lng)
                console.log(position)
                // this.apiloader.load().then(() => {
                    let geocoder = new google.maps.Geocoder;
                    let latlng = {
                        lat: this.lat,
                        lng: this.lng
                    };
                    geocoder.geocode({
                        'location': latlng
                    },(results:any)=> {
                        console.log(results);
                        if (results[0]) {
                            this.currentLocation = results[0];
                            localStorage.setItem('customerLocation',JSON.stringify(results[0]));
                            console.log('current location ==>>',results[0]);
                            this.apiService.setCustomerLocation(results[0]);
                            if(this.currentLocation != ''){
                                return this.currentLocation;
                            }
                            console.log(this.assgin);
                        } else {
                            console.log('Not found');
                        }
                    });
        }
      },
        (error:any) => {
          return console.log(error);
        });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         if (position) {
    //             this.lat = position.coords.latitude;
    //             this.lng = position.coords.longitude;
    //             this.getAddress = (this.lat, this.lng)
    //             console.log('position yaha ayega',position)
    //             // this.apiloader.load().then(() => {
    //                 let geocoder = new google.maps.Geocoder;
    //                 let latlng = {
    //                     lat: this.lat,
    //                     lng: this.lng
    //                 };
    //                 geocoder.geocode({
    //                     'location': latlng
    //                 },(results:any)=> {
    //                     console.log(results);
    //                     if (results[0]) {
    //                         this.currentLocation = results[0];
    //                         localStorage.setItem('customerLocation',JSON.stringify(results[0]));
    //                         console.log('current location ==>>',results[0]);
    //                         if(this.currentLocation != ''){
    //                             return this.currentLocation;
    //                         }
    //                         console.log(this.assgin);
    //                     } else {
    //                         console.log('Not found');
    //                     }
    //                 });
    //             // });
    //         }
    //     })
    // }
    // if (navigator.geolocation) {
    //     let geocoder = new google.maps.Geocoder();
    //     let latlng = new google.maps.LatLng(lat, lng);
    //     let request = {
    //         latLng: latlng
    //     };
    //     geocoder.geocode(request, (results:any, status:any) => {
    //         console.log(results, status);
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             let result = results[0];
    //             let rsltAdrComponent = result.address_components;
    //             let resultLength = rsltAdrComponent.length;
    //             if (result != null) {
    //                 console.log('google geo location ===>>>',result);
    //                 // this.marker.buildingNum = rsltAdrComponent.find(x = > x.types == 'street_number').long_name;
    //                 // this.marker.streetName = rsltAdrComponent.find(x = > x.types == 'route').long_name;
    //             } else {
    //                 alert("No address available!");
    //             }
    //         }
    //     });
    // }
}
  assgin(assgin: any) {
    throw new Error('Method not implemented.');
  }


  // routing
  navigateToSignup() {
    console.log(this.route.navigateByUrl('auth/register'));
  }
  navigateToForgetPassword(){
    this.route.navigateByUrl('auth/forgot-password')
  }

  instanceLoader(type : boolean) {
    type ? setTimeout(() => {
      this.isLoading = type
    }, 1000) :  setTimeout(() => {
      this.isLoading = type;
    }, 1000);
  }

}
