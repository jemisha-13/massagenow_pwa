import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { SerachLocationComponent } from '../serach-location/serach-location.component';
declare var $: any
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, AfterViewInit {

  @ViewChild("video")
  public video!: ElementRef;

  @ViewChild("canvas")
  public canvas!: ElementRef;

  public captures: any;
  closeResult: any = '';
  editProfileForm!: FormGroup;
  submitted: boolean = false;
  id: any;
  loginData: any = {};
  clientId: any;
  cameraOn: boolean=false;
  image: any;
  constructor(
    public router: Router,
    public NgbDialogService: NgbModal,
    public service: ApiServicesService,
    public route: Router
  ) {
    this.loginData = JSON.parse(localStorage.getItem('customerLogin')!)
    console.log(this.loginData);
    this.clientId = this.loginData.client;
    this.id = this.loginData.result._id;
    this.captures=[]
    this.editProfileForm = new FormGroup({
      'firstName': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),
      'lastName': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),
      'DOB': new FormControl(''),
      'gender': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),
      'phone': new FormControl('',Validators.compose([Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])),
      'email': new FormControl('',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
      'area': new FormControl('',Validators.required),
      'street': new FormControl('',Validators.required),
      'city': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),
      'state': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),
      'pinCode': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[1-9][0-9]{5}$')])),
      'country': new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])),

    })

  }

   ngAfterViewInit() {
    
  }

  selectImage(content: any) {
    this.NgbDialogService.open(content,{size:'sm', centered: true})
    
  }
  cameraOpen(){
    this.cameraOn=true;
    
    setTimeout(function(){
      
    },50000);
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
      });
  }
  }

  


  public capture() {
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
      console.log(this.captures);
      this.image=this.captures[0]
      console.log(this.image);
      
      
      this.cameraOn=false;
      // this.video.nativeElement.hide();
  }

  // back method
  navigateBack() {
    this.NgbDialogService.dismissAll();

  }

  // location map route
  locationBox() {
    const locationRef = this.NgbDialogService.open(SerachLocationComponent, {

    })
  }





  ngOnInit(): void {
    this.patchProfile();

  }
 
  // to patch data
  patchProfile() {
    this.editProfileForm.patchValue({
      "area": this.loginData.result.address.area,
      "city": this.loginData.result.address.city,
      "country": this.loginData.result.address.country,
      "state": this.loginData.result.address.state,
      "street": this.loginData.result.address.street,
      "pinCode": this.loginData.result.address.zip,
      "DOB": this.loginData.result.dob,
      "email": this.loginData.result.email,
      "firstName": this.loginData.result.firstName,
      "gender": this.loginData.result.gender,
      "geo_location": {
        "coordinates": [0.0, 0.0], "type": "Point"
      },
      "image": this.loginData.result.image,
      "lastName": this.loginData.result.lastName,
      "phone": this.loginData.result.mobile,
    });
    console.log(this.editProfileForm.value);

  }


  // convenience getter for easy access to form fields
  get f() { return this.editProfileForm.controls; }

  // to update api for edit profile
  onSubmit() {
    this.submitted = true;
    console.log(this.editProfileForm.value);

    // to stop if form is valid
    if (this.editProfileForm.invalid) {
      return;
    }
    else {
      // api
      let data = {
        "address": {
          "area": this.editProfileForm.value.area,
          "city": this.editProfileForm.value.city,
          "country": this.editProfileForm.value.country,
          "state": this.editProfileForm.value.state,
          "street": this.editProfileForm.value.street,
          "zip": this.editProfileForm.value.pinCode,
        },
        "dob": this.editProfileForm.value.DOB,
        "email": this.editProfileForm.value.email,
        "firstName": this.editProfileForm.value.firstName,
        "gender": this.editProfileForm.value.gender,
        "geo_location": {
          "coordinates": [0.0, 0.0], "type": "Point"
        },
        "image": this.image,
        "lastName": this.editProfileForm.value.lastName,
        "mobile": this.editProfileForm.value.phone,
        "notifyBy": "Email"
      }
      console.log(data);


      this.service.put(`customers?id=${this.id}&clientId=${this.clientId}`, data).subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
            this.NgbDialogService.dismissAll();

        }

      })
    }

  }

}
