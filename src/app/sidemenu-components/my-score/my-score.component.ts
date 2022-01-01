import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-my-score',
  templateUrl: './my-score.component.html',
  styleUrls: ['./my-score.component.scss']
})
export class MyScoreComponent implements OnInit {
  sheildData: any;
  scoreData: any;
  scoreBadge: any;
  maxBadgeScore: any;
  customerId: any;

  constructor(private newToast:ToasterService, private service:ApiServicesService) { }

  ngOnInit(): void {
    let result = JSON.parse(localStorage.getItem('customerLogin')!);
    this.customerId=result.result._id
    console.log(this.customerId);
    
    this.sheildData = result.result.shield;
    this.getMyScore()
  }

  // api for my score
  getMyScore(){
    this.service.get(`badgeScore?customerId=${this.customerId}`).subscribe((res:any)=>{
      console.log(res);
      if(res.status==200){
        this.maxBadgeScore=res.maxBadgeScore
        this.scoreData=res.result;
        this.scoreBadge=res.score
      }

    },(err)=>{
      this.newToast.error("something went wrong")
    })

  }

}
