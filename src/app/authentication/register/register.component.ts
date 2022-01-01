import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ConfirmPasswordValidator} from '../confirm-password.validator'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  loginData: any={};
  map:any;
  lat:any;
  lng: any;
  

  constructor(private formBuilder: FormBuilder,
     private route: Router,
     private service:ApiServicesService,
     private newToast:ToasterService
     
     ) {
      this.GetCurrentLocation();

    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])],
      lastname: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$')])],
      mobile: ['',Validators.compose([Validators.required,Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')])],
      email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['',Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
      confirmpassword: ['',Validators.required]
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmpassword")
    }
    );
    // this.loginData=JSON.parse(localStorage.getItem('customerLogin')!)
    
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === 
    frm.controls['confirmpassword'].value ? null : {'mismatch': true};
        }

  ngOnInit(): void {
  }

  // code to allow location permission
  public GetCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)  =>            { 
         this.ShowLocation(position, this.map);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  private ShowLocation(position: any, map: any): void {
    this.lng = +position.coords.longitude;
    this.lat = +position.coords.latitude;
    console.log(position.coords.latitude);
  }



  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    // for sign up api
    else {
      let data = {
        "email":this.registerForm.value.email,
        "firstName":this.registerForm.value.firstname,
        "geo_location":{
          "coordinates":[this.lat ,this.lng],
          "type":"Point"
        },
        "lastName":this.registerForm.value.lastname,
        "mobile":this.registerForm.value.mobile,
        "password":this.registerForm.value.password,
        "notifyBy":"Email",

      }
       if(this.registerForm.valid){
      this.service.post(`customers`,data).subscribe((res:any)=>{
        if(res.status==200){
          this.newToast.success(res.message)
          // this.redirectLogin();
          this.route.navigateByUrl('/auth/login');
        }
        if(res.status==409){
          this.newToast.info("customer already register.")
          // customer already register
        }
      },(err)=>{
        this.newToast.error("something went wrong")
      })
      
    }
  }
}
  redirectLogin() {
    this.route.navigateByUrl('auth/login');
  }

}
