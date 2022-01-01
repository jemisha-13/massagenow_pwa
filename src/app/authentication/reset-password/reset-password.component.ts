import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ConfirmPasswordValidator } from '../confirm-password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordFrom!:FormGroup
  submitted: boolean=false;
  email: any;
  apiOtp: any;
  constructor(private active:ActivatedRoute,
    private service:ApiServicesService,
    private router:Router,
    private formBuilder:FormBuilder,
    private newToast:ToasterService
    ) {
    this.resetPasswordFrom= this.formBuilder.group({
      password: ['',Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
      confirmpassword: ['',Validators.required],


    },
    {
      validator: ConfirmPasswordValidator("password", "confirmpassword")
    }
    );

    this.active.queryParams.subscribe((params)=>{
      this.email=params.email;
      this.apiOtp=params.apiOtp
      console.log(this.email, this.apiOtp);
      
    })

   }
   passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === 
    frm.controls['confirmpassword'].value ? null : {'mismatch': true};
        }

  ngOnInit(): void {
  }

  // api to reset password
  confirm(){
    this.submitted=true

    let data={
      'email':this.email,
      'otp':this.apiOtp,
      'password':this.resetPasswordFrom.value.password
    }
    if(this.resetPasswordFrom.valid){
    this.service.post(`customers/resetpass`,data).subscribe((res:any)=>{
      if(res.status==200){
        this.newToast.success(res.message)
        this.router.navigate(['auth/login']);
      } 
    },(err)=>{
      this.newToast.error("something went wrong")
    })
  }

  }

  // convenience getter for easy access to form fields
  get f() { return this.resetPasswordFrom.controls; }

  navigateBack(){
    this.router.navigateByUrl('auth/forgot-password')
  
  }
}
