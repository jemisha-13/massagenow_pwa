import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isHomeFooter: boolean = false;
  presentUrl: any;
  ScreenWidth!: number;
  ScreenHeight!: number;
  ShowMobile!: boolean;

  constructor(
    private route : Router
  ) {
    setInterval(() => {
      this.getScreenSize();
      }, 100);
   }
   getScreenSize(){
    this.ScreenWidth = window.innerWidth
    this.ScreenHeight = window.innerHeight
    if(this.ScreenWidth >1024){
     this.ShowMobile = false
    }else if(this.ScreenWidth <1024){
      this.ShowMobile = true
    }

  }

  ngOnInit(): void {
    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
          this.route.url.split('/').length >= 3 ? this.presentUrl = this.route.url.split('/')[2] : this.presentUrl = 'home' ;
          // console.log(this.presentUrl);
          if(this.route.url.includes('auth')){
            this.isHomeFooter = false;
          }else  if(this.route.url.includes('online-support')) {
            this.isHomeFooter = false;
          }else  if(this.route.url.includes('report-bug')) {
            this.isHomeFooter = false;
          }else  if(this.route.url.includes('my-backpack')) {
            this.isHomeFooter = false;
          }else {
            if(this.route.url.includes('home')){
              if(this.route.url == "/main/home"){
                this.isHomeFooter = true;
              }
              if(this.route.url.includes('category')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('therapist')){
                this.isHomeFooter = false;
                if (!this.ShowMobile) {
                  this.isHomeFooter = true;
                }
              }
              if(this.route.url.includes('shop-details')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('select-service')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('pick-therapist')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('select-time')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('send-request')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('book-for')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('book-for')){
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('book-appointment')) {
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('intake-form')) {
                this.isHomeFooter = false;
              }
              if(this.route.url.includes('recent')) {
                if (!this.ShowMobile) {
                  this.isHomeFooter = true;
                }else{
                  this.isHomeFooter = false;
                }
              }
            }else{
              this.isHomeFooter = true;
            }
          }
        })
  }

  navigate(url:string) {
    // console.log(url);//
    this.presentUrl = url;
    this.route.navigateByUrl(`main/${url}`);
  }

}
