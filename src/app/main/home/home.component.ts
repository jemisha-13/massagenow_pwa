import { HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { HomeServiceService } from './home-service.service'
import { LocationService } from '../../services/location.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  categoryList: any = [];
  categoryData: any = [];
  recentlyViewedList: any = [];
  loginData: any;
  isLoading: boolean = false;
  walletBalance: any;

  constructor(
    private homeService: HomeServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServicesService,
    private locationService: LocationService,
    private cdref: ChangeDetectorRef
  ) {}
  recentlyViewed: any = [
    {
      name: 'Massage',
    },
    {
      name: 'Nail',
    },
    {
      name: 'Hair',
    },
    {
      name: 'Beauty',
    },
  ]; 
  ngOnInit(): void {
    this.recentalyViewData();
    this.route.snapshot.queryParamMap.get('title');
    this.loginData = JSON.parse(localStorage.getItem('customerLogin')!);
  } 
  ngAfterViewInit() {
    this.isLoading = true;
    this.homeService.categories().subscribe(
      (res: any) => {
        console.log('category',res)
        this.categoryList = res.result;
        this.isLoading = false;
        let allData: any = [];
        this.categoryList.forEach((element: any) => {
          element.category.forEach((ele: any) => {
            let obj: any = {};
            if (ele.language === 'english') {
              obj['name'] = ele.name;
              obj['_id'] = element._id;
              obj['image'] = element.image;
              obj['categoryId']=ele._id
              allData.push(obj);
            }
          });
        });
        this.categoryData = allData;
      },
      (err) => {
        console.log(err);
      }
    );
    if (this.route.snapshot.queryParamMap.get('title') !== 'review') {
      this.fetchReviewCredentials();
    } 
    this.cdref.detectChanges();
  } 
  recentalyViewData() {
    let customerDetails = localStorage.getItem('customerToken')!;
    const obj = new HttpParams()
      .set("devicePlateform", "android")
      .set(" deviceToken", "this.customerDetails")
      this.homeService.recentlyView(obj).subscribe((response: any) => {
      this.recentlyViewedList = response.location,
      this.walletBalance=response.result.walletBalance,
      localStorage.setItem('walletbalance',JSON.stringify(this.walletBalance))
    })
  } 
  selectCategory(item: any) {
    console.log('here',item)
    localStorage.setItem('categorySelected', JSON.stringify(item));
    this.router.navigate(['main/home/category'], {
      queryParams: {
        category: item.name,
        id: item._id,
        categoryId:item.categoryId
      },
    });
  } 
  setDefaultPic(e: any) {
    e.target.src = './assets/images/no_image.png';
  }
  fetchReviewCredentials() {
    let param = new HttpParams()
      .set('clientId', this.loginData.client)
      .set('customerId', this.loginData.result._id);
    console.log(param);
    this.apiService
      .get(
        `customers/unreviewed?clientId=${this.loginData.client}&customerId=${this.loginData.result._id}`
      )
      .subscribe((res) => {
        console.log(res.result[0]);
        let reviewCredentials = {
          appointmentId: res.result[0]._id,
          companyId: res.result[0].location._id,
          clientId: res.result[0].ownerId,
        };
        localStorage.setItem(
          'reviewCredentials',
          JSON.stringify(reviewCredentials)
        ); 
      });
  } 
  viewshopDetails(data: any) {
    console.log(data)
    this.router.navigate(['main/home/shop-details'], {
      queryParams: {
        locationId: data._id,
        ownerId: data.ownerId,
        shopName: data.name,
        categoryId: data.categoryId[0]
      },
    });
  }
  navigateTosearchShop() {
    this.router.navigate(['main/home/search-shop']);
  }
}
