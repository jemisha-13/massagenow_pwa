import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../../schedule/schedule.service'

@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.component.html',
  styleUrls: ['./search-shop.component.scss']
})
export class SearchShopComponent implements OnInit, AfterViewInit {
  @ViewChild('serachIt') private elementRef!: ElementRef;
  isLoading: boolean = false;
  autofocus = true;
  shopList:any = [];
  searchText = "";
  constructor(private scheduleservice: ScheduleService,private router: Router) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  serachShop(){
    if(this.searchText.length < 2) {
      this.shopList = [];
      return;
    }
    this.isLoading=true;
    this.scheduleservice.search_company('search='+this.searchText).subscribe((res: any) => {
      this.shopList = res.result;
      this.isLoading=false
    }, err => { console.log(err) });
  }

  setDefaultPic(e: any) {
    e.target.src = './assets/images/no_image.png';
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
}
