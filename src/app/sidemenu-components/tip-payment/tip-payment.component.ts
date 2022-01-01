import { Component, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  PaymentIntent,
  StripeCardElementOptions,
  StripeCardNumberElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { timeInterval, timeout } from 'rxjs/operators';
@Component({
  selector: 'app-tip-payment',
  templateUrl: './tip-payment.component.html',
  styleUrls: ['./tip-payment.component.scss']
})
export class TipPaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  isDisabledCard=true;
  creditCard: any;
  showDetail: any = 'card';

  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        color: '#303238',
        fontSize: '16px',
        fontFamily: '"Open Sans", sans-serif',
        // border: '1px solid #303238',
        padding: '20px 0px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#e5424d',
        ':focus': {
          color: '#303238',
        },
      },
    },
  };
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };
  amount: any;
  stripeId: any;
  tokenId: any;

  constructor(
    private stripeService: StripeService,
    private active:ActivatedRoute,
    private service:ApiServicesService,
    private route:Router,
    private newToast:ToasterService
  ) 
  { 
    this.active.queryParams.subscribe((params)=>{
    this.amount=params.amount
    })
  }

  ngOnInit(): void {
    this.stripeClient();
  }

  stripeClient(){
    this.service.get(`customers/stripe_client`).subscribe((res)=>{
      console.log(res);
      this.stripeId=res.result.id
      
    })
  }

  //  for stripe token create
  createToken(): void {
    this.stripeService
      .createToken(this.card.element)
      .subscribe((result) => {
        if (result.token) {
          this.tokenId=result.token.id
          // Use the token
          this.checkOut();
          console.log(this.tokenId);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
      
  }

  // 
  checkOut(){
    let data={
      "amount":Number(this.amount),
      "currency":"usd",
      "stripeId":this.stripeId,
      "token":this.tokenId
    }
    console.log(data);
    this.service.post('customers/stripe_checkout', data).subscribe((res:any)=>{
      console.log(res);
      if(res.status==200){
        // this.newToast.success("")
      }
      
    },(err)=>{
      this.newToast.error("something went wrong")
    })
    

  }

  paymentFortip(){
    
  }

}
