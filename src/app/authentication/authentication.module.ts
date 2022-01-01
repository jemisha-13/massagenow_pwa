import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SkeletonModule } from '../design-component/skeleton/skeleton.module';
const routes: Routes = [
    { path:'login', component:LoginComponent},
    { path:'forgot-password', component:ForgotPasswordComponent},
    { path:'register', component:RegisterComponent},
    { path: '', redirectTo: 'login'},
    { path: 'verify-otp',component:VerifyOtpComponent},
    { path: 'reset-password',component:ResetPasswordComponent}
]


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        VerifyOtpComponent,
        ResetPasswordComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        NgOtpInputModule,
        SkeletonModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ]
})
export class AuthenticatonModule { }
