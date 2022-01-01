import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordFrom!:FormGroup;
  submitted:boolean=false
  apiOtp: any;
  constructor(private router:Router,
     private service:ApiServicesService,
     private newToast:ToasterService,
     
     )
   {
    this.forgetPasswordFrom= new FormGroup({
      'email':new FormControl('',Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]))
    })
   }

  ngOnInit(): void {
  }

  // for forget password api
  onSubmit(){
    this.submitted=true;
    var data={
      "email":this.forgetPasswordFrom.value.email
    }
    if(this.forgetPasswordFrom.valid){
    this.service.post(`customers/forgetpass`, data).subscribe((res:any)=>{
      if(res.status==200){
        this.newToast.success(res.message)
        this.apiOtp=res.otp
        console.log(this.apiOtp);
        
        this.router.navigate(['auth/verify-otp'],{queryParams:{apiOtp:this.apiOtp,email:data.email}})
      }
      else if(res.status==400){
        this.newToast.warning("email Id not registered.")
      }
    },(err)=>{
      this.newToast.error("something went wrong")
    })
  }
  }


  // convenience getter for easy access to form fields
  get f() { return this.forgetPasswordFrom.controls; }


  // routing
  navigateToLogin(){
    this.router.navigateByUrl('auth/login')
  }
  navigateBack(){
  this.router.navigateByUrl('auth/login')

}
}
