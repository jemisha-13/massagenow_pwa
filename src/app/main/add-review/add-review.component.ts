import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgxStarsComponent } from 'ngx-stars';
import { ApiServicesService } from 'src/app/services/api-services.service';
declare var $: any;
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
  ratingData: any;
  reviewCredentials: any;
 
  constructor(private cd : ChangeDetectorRef, private apiService : ApiServicesService) { }
  @ViewChild('overall') overall! : NgxStarsComponent;
  @ViewChild('skill') skill! : NgxStarsComponent;
  @ViewChild('communication') communication! : NgxStarsComponent;
  @ViewChild('service') service! : NgxStarsComponent;
  currentRate = 3.4;
  valueHover = 0;
  redFlagCheck: boolean =false;
  anonymousCheck: boolean =false;
  reviewTheRapist: any
  reviewTheBusiness: any
  herbalMassageRating: number = 0
  overAllRating: number = 0
  communicationRating: number  = 0
  skillsRating: number  = 0
  serviceRating: number  = 0;
  customerDetails: any;
  isOverAllRating : boolean = true;
  isSkillRating : boolean = true;
  isCommunicationRating : boolean = true;
  isServiceRating: boolean = true; 
  ngOnInit(): void {
    this.customerDetails = JSON.parse( localStorage.getItem('customerLogin')!)
    this.reviewCredentials = JSON.parse( localStorage.getItem('reviewCredentials')!)
    console.log(this.customerDetails)

  }

  selectedStar(e:any){
    console.log(e.srcElement.defaultValue);
  }
  onRatingSet(e: any) {
    console.log(e,
  this.herbalMassageRating,
  this.overAllRating,
  this.communicationRating,
  this.skillsRating,
  this.serviceRating
    );
  }
  herbalMassageRate(herbalMassageData:number){
    console.log(herbalMassageData);
  this.herbalMassageRating = herbalMassageData
  this.cd.detectChanges();
  }
  overAllRate(overAllData:any){
    console.log(overAllData)
    this.isSkillRating = false;
    this.isCommunicationRating =false;
    this.isServiceRating = false;
    this.skillsRating = overAllData
    this.serviceRating = overAllData
    this.communicationRating = overAllData;
    this.overAllRating = overAllData
    // this.skill.rating =  overAllData;
    setTimeout(() => {
    this.isSkillRating = true;
    this.isCommunicationRating =true;
    this.isServiceRating = true;
    });
  }
  communicationRate(communicationData:any){
    console.log(communicationData);
    this.isSkillRating = true;
    this.communicationRating = communicationData;
    this.isOverAllRating = false;
    this.overAllRating = this.claculateOverAllRating()
    setTimeout(() => {
      this.isOverAllRating = true;
      });
  }
  skillsRate(skillsData:any){
    console.log(skillsData);
    this.skillsRating = skillsData;
    this.isOverAllRating = false;
    this.overAllRating = this.claculateOverAllRating()
    setTimeout(() => {
      this.isOverAllRating = true;
      });
  }
  serviceRate(serviceData:any){
    console.log(serviceData);
    this.serviceRating = serviceData;
    this.isOverAllRating = false;
    this.overAllRating = this.claculateOverAllRating()
    setTimeout(() => {
      this.isOverAllRating = true;
      });
  }

  claculateOverAllRating(){
    let overtAllValue =  this.skillsRating + this.serviceRating + this.communicationRating
    let overAllPercentage = overtAllValue / 3
    return overAllPercentage
  }
 
  submitReview() {
    if(this.herbalMassageRating !== 0 && this.overAllRating === 0 ){
      this.ratingData = 
    {
      anonymous:this.anonymousCheck,
      appointmentId:this.reviewCredentials.appointmentId,
      clientId: this.customerDetails.client, 
      companyId:this.reviewCredentials.companyId, 
      ratedTo:"company",
      star:this.herbalMassageRating,
      review:this.reviewTheBusiness,
    } 
    console.log('YAHA',this.ratingData )
    this.apiService.post(`rating/customers`,this.ratingData).subscribe(res=>{
      console.log(res)
    })
    }
    else if(this.overAllRating !== 0 && this.herbalMassageRating === 0){
      this.ratingData = 
      {
        anonymous:this.anonymousCheck,
        appointmentId:this.reviewCredentials.appointmentId,
        clientId: this.customerDetails.client,
        communication_star:this.communicationRating,
        companyId:this.reviewCredentials.companyId,
        massage_star:this.serviceRating,
        ratedTo:"therapist",
        redFlag:this.redFlagCheck,
        review:this.reviewTheRapist,
        skill_star:this.skillsRating,
        star:this.overAllRating,
        therapistId:this.reviewCredentials.clientId
      }
      console.log('nAHI YAHA',this.ratingData )
      this.apiService.post(`rating/customers`,this.ratingData).subscribe(res=>{
        console.log(res)
      })
    }else if(this.overAllRating !== 0 && this.herbalMassageRating !== 0){
      let promise = new Promise((resolve: any, reject: any)=>{
        this.ratingData = 
        {
          anonymous:this.anonymousCheck,
          appointmentId:this.reviewCredentials.appointmentId,
          clientId: this.customerDetails.client, 
          companyId:this.reviewCredentials.companyId,
          ratedTo:"company",
          star:this.herbalMassageRating,
          review:this.reviewTheBusiness,
        } 
        console.log('YATO',this.ratingData )
        this.apiService.post(`rating/customers`,this.ratingData).subscribe(res=>{
          if(res){
            resolve();
          }else
            reject();
        })
        promise.then(res =>{
          this.ratingData = 
          {
            anonymous:this.anonymousCheck,
            appointmentId:this.reviewCredentials.appointmentId,
            clientId: this.customerDetails.client,
            communication_star:this.communicationRating,
            companyId:this.reviewCredentials.companyId,
            massage_star:this.serviceRating,
            ratedTo:"therapist",
            redFlag:this.redFlagCheck,
            review:this.reviewTheRapist,
            skill_star:this.skillsRating,
            star:this.overAllRating,
            therapistId:this.reviewCredentials.clientId
          }
          console.log('YA PHIR',this.ratingData )
          this.apiService.post(`rating/customers`,this.ratingData).subscribe(res=>{
            console.log(res)
          })
        }).catch(error=>{
          console.log(error)
        })
   });
    }
  }
   
}
