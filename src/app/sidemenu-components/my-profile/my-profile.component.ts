import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { EditProfileComponent } from 'src/app/shared-components/edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, AfterViewInit {
  id: any;
  myProfiledata: any;
  clientId: any;
  loginData: any;
  isLoading:boolean = false;
 // loginData: any;


  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private NgbDialogService : NgbModal,
    private service:ApiServicesService

  ) {
    // this.service.getLoginDataa().subscribe((res:any)=>{
    //   console.log('here',res);
    //   this.id=res.result._id;
    //   this.myProfile();
    // })
    this.loginData=JSON.parse(localStorage.getItem('customerLogin')!)
    console.log(this.loginData);

    this.clientId=this.loginData.client;
    this.id=this.loginData.result._id
    console.log(this.clientId, this.id);
    this.myProfile();
  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {

  }

  navigateBack() {
    this.router.navigate(['main/home'],{queryParams: {title: 'profile'}});
  }

  // dialogue route
  editProfile(){
    const editProfileref= this.NgbDialogService.open(EditProfileComponent,{

    })
  }

  // to get api for my profile

  myProfile(){
    this.isLoading = true;
    this.service.get(`customers/${this.id}`).subscribe((res:any)=>{
      if(res.status==200){
        this.myProfiledata=res.result;
        this.isLoading = false;
      }
    })
  }
}
