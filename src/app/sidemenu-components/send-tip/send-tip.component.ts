import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-send-tip',
  templateUrl: './send-tip.component.html',
  styleUrls: ['./send-tip.component.scss']
})
export class SendTipComponent implements OnInit {
  clientId=JSON.parse(localStorage.getItem('customerLogin')!)
  historyList: any=[];
  tipCardId: any;
  tipImage: any;
  isDisabled:boolean=true
  selected:any=''
  therapistId: any;
  amount: any;
  day: any;
  _id: any;
  constructor(private service:ApiServicesService,
    private newToast:ToasterService,
    private active:ActivatedRoute,
    private router:Router) 
    {
      this.active.queryParams.subscribe((params)=>{
        this.tipCardId=params.tipCardId,
        this.tipImage=params.tipImage,
        this.amount=params.amount
        this.day=params.day
        this._id=params._id
        console.log(this.tipCardId);
        
      })
     }

  ngOnInit(): void {
    this.getHistoryList()
  }

  // api for schedule history list
  getHistoryList(){
    this.service.get(`customers/appointments/group/${this.clientId.result._id}`).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status==200){
        this.historyList=res.result.past;
      }
      console.log(this.historyList);
      
      
    },(err)=>{
      this.newToast.error("something went wrong")
    })
  }

  select(item:any){
    if(item._id){
      this.isDisabled=false
      this.selected=item._id;
      this.therapistId=item.staff.id
      // this.amount=item.price,
      // this.day=item.day
    }
    // else if(this.selected=false){
    //   this.selected=true
    // }
    console.log("dfd", this.selected);
    
  }
  // api for send tip card
  sendTip(){
    // if(this.selected=''){
    //   return;
    //   this.newToast.warning("Select therapist to send")
    // }
    // let day = moment(this.day).format("YYYY-MM-DD ");
    let data={
    "tipCard":this.tipCardId,
    "sent": true,
    "tipImage": this.tipImage,
    "therapistId": this.therapistId,
    "date": this.day,
    "amount": this.amount,
    "clientId": this.clientId.client,
    "_id":this._id
  }
   console.log(data);
   this.service.post(`customers/tipCard`,data).subscribe((res:any)=>{
    if(res.status==200){
      this.router.navigate(['/nav/my-backpack'])
      this.newToast.success("Tip Sent");
    }
  },(err)=>{
    this.newToast.error("something went wrong")
  })
  
  }

}
