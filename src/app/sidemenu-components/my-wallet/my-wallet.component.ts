import { Component, OnInit } from '@angular/core';
import {MywalletService} from './mywallet.service'
@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {

  walletList:any={}
  isLoading!: boolean;
  constructor(private walletservice:MywalletService) { }

  ngOnInit(): void {
    this.getWalletData()
  }

  getWalletData(){
    this.isLoading=true;
   this.walletservice.getWallet().subscribe((response:any)=>{
     this.walletList = response
     this.isLoading=false;
    },err=>{console.log(err)});
  }

}
