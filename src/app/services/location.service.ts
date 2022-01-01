import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
declare var google: any;

@Injectable({
    providedIn: 'root'
})

export class LocationService {
    lat: number = 0;
    lng: number = 0;
    getAddress: any;
    currentLocation: any = {};
    assgin: any;
    userLocation = new Subject();
    getPosition(): Promise<any>
    {
      return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(resp => {
            console.log(resp);
            resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            this.getGeoLocation(resp.coords.longitude,resp.coords.latitude);
            // if(this.currentLocation != ''){
            //     return this.currentLocation;
            // }
          },
          err => {
            reject(err);
          });
      });

    }

    getLocationPromise(lat: number, lng: number): Promise<any> {
        return new Promise((resolve, reject)=>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: Position) => {
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
                                    console.log('current location ==>>',this.currentLocation);
                                    if(this.currentLocation != ''){
                                        localStorage.setItem('customerLocation',JSON.stringify(this.currentLocation));
                                        resolve({data : this.currentLocation});
                                    }
                                    console.log(this.assgin);
                                } else {
                                    console.log('Not found');
                                }
                            });
                        // });
                    }
                },err=>{
                    reject(err)
                })
            }
        })
    }

    getGeoLocation(lat: number, lng: number) {
        console.log(lat,lng);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
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
                                localStorage.setItem('customerLocation',JSON.stringify(this.currentLocation));
                                console.log('current location ==>>',this.currentLocation);
                                if(this.currentLocation != ''){
                                    return this.currentLocation;
                                }
                                console.log(this.assgin);
                            } else {
                                console.log('Not found');
                            }
                        });
                    // });
                }
            })
        }
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

    setUserSelectionLocation(obj?: any) {
      this.userLocation.next(obj);
    }

    getUserSelectionLocation() {
      return this.userLocation.asObservable();
    }
}
