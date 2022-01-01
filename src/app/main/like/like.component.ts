import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteFevoriteTherapistComponent } from 'src/app/shared-components/delete-fevorite-therapist/delete-fevorite-therapist.component';
import {LikeService} from './like.service'

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  location=JSON.parse(localStorage.getItem('customerLocation')!)
  // locationName=location.formatted_address,

  isContentType: boolean = true;
  shopList:any=[];
  therapistList:any=[];
  currTab='shop'
  isLoading!: boolean;
  isMobile: boolean = false;


  constructor(
     private shopservice:LikeService,
     private NgbModal:NgbModal, 
     private router: Router
     ) { }

  ngOnInit(): void {
    if (window.innerWidth > 1024) {
      this.isMobile = false;
    }else{
      this.isMobile = true;
    }
     this.favioriteShop()
  }

  favioriteShop () {
    this.isLoading=true;
    this.shopservice.shop().subscribe((res:any)=>{
      console.log(res)
      this.shopList = res.result.favShop;
      console.log(this.shopList);
      
      this.isLoading=false
    },err=>{console.log(err)});
  }

  favioritetherapist(){
    this.isLoading=true;
    this.shopservice.therapist().subscribe((res:any)=>{
      this.therapistList = res.result.favTherapist;
      this.isLoading=false
    },err=>{console.log(err)});
  }
   
  showContent(type:any) {
    this.currTab =type
    if( this.currTab =='shop'){
    this.isContentType = true 
    }
    else
    setTimeout(() => {
      this.isContentType = false;
      }, );
      this.favioritetherapist()
      this.isContentType = true; 
  }
  setDefaultPic(e:any) {
    e.target.src = './assets/images/no_image.png'
  }

  displayPopup(data:any, deleteVal: any) {

    this.NgbModal.open(DeleteFevoriteTherapistComponent, { size: 'sm', centered: true , windowClass: 'delete-therapist-modal' })
    .result.then((result) => {
      
     console.log(result);
    }, (reason) => {
      if (reason ){
        if (deleteVal == 'sopeDelete') {
          this.shopservice.delFevShop(data._id).subscribe((res:any)=>{
            this.favioriteShop();
          },err=>{console.log(err)}); 
        } else {
          this.shopservice.delFevTherapist(data._id).subscribe((res:any)=>{
            this.favioritetherapist();
          },err=>{console.log(err)}); 
        }
       
      }
    }
    )
  }

  viewshopDetails(data: any) {
    console.log(data)
    this.router.navigate(['main/home/shop-details'], {
      queryParams: {
        locationId: data._id,
        ownerId: data.ownerId,
        shopName: data.name,
        categoryId: data.categoryId && data.categoryId[0]
      },
    });
  }

  viewTherapistDetails(e : any) {
    this.router.navigate(['main/home/therapist'],{queryParams:{
      theRapistId:e && e._id ? e._id : '123',
      }
    });
  } 
  tipTherapist(e : any) {
    this.router.navigate(['nav/my-backpack']);
  }
  
}
