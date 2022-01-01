import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})

export class VerifyOtpComponent implements OnInit {

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  otp: any;
  apiOtp: any;
  email: any;
  constructor(private active:ActivatedRoute, 
    public router:Router,
    private service:ApiServicesService,
    private newToast:ToasterService
    ) 
  {
    this.active.queryParams.subscribe((params)=>{
      this.apiOtp=params.apiOtp;
      this.email=params.email
      console.log('dfs', this.email);
      
    })
   }

  ngOnInit(): void {
  }

  onOtpChange(otp:any){
    this.otp=otp;
    console.log(this.otp);
  }
  // otp verify check and route to reset password
  verify(){
    if(this.apiOtp=this.otp){
      // this.newToast.success("Otp verified successfully.")
      
        this.router.navigate(['auth/reset-password'],{queryParams:{email:this.email,apiOtp:this.apiOtp}})
      
    }
    // else if(this.apiOtp!=this.otp){
    //   this.newToast.warning(" Enter valid otp ")
    // }
  }
  // api for resend otp 
  resend(){
    let data={
      "email":this.email
    }
    
    this.service.post(`customers/forgetpass`, data).subscribe((res:any)=>{
      if(res.status==200){
        this.newToast.success(res.message)
      }
      else if(res.status==400){
        // this.newToast.info('')
      }
    },(err)=>{
      this.newToast.error("something went wrong.")
    })

  }

  navigateBack(){
    this.router.navigateByUrl('auth/forgot-password')
  
  }
 
  
}
