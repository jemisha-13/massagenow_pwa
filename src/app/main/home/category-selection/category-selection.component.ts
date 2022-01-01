import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { CategoryService } from './category.service'



@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss']
})
export class CategorySelectionComponent implements OnInit {

  routeData: any;
  id: any;
  blogList: any = [];
  sponsoredList: any = [];
  shopList: any = [];
  topRatedShopList: any = []
  topRankedTherapistList: any = []
  videosList: any = []
  topRatedTherapistList: any = []
  location: any
  latPosition: any
  logPosition: any;
  safeSrc: SafeResourceUrl | undefined
  videoUrl: any;
  thumbnail: any;
  newVideoData: any = []
  isLoading: boolean = false;
  categoryId: any;
  isShowSearchBar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryservice: CategoryService,
    private sanitizer: DomSanitizer,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.location = JSON.parse(localStorage.getItem('customerLocation')!)
    this.latPosition = this.location && this.location.geo_location ? this.location.geo_location.coordinates[1] : this.location.geometry.location.lat
    this.logPosition = this.location && this.location.geo_location ? this.location.geo_location.coordinates[0] : this.location.geometry.location.lng
    // this.latPosition = -33.64932565271657;
    // this.logPosition = 115.34456527774769;
    this.route.queryParams.subscribe(res => {
      this.routeData = res.category;
      this.categoryId = res.categoryId
      console.log(res)
      this.id = res.id
    });
    this.getCategorydata();
    this.getShopDataBasedLocation();
  }

  getCategorydata() {
    this.isLoading = true
    this.categoryservice.category(this.id, this.latPosition, this.logPosition).subscribe((res: any) => {
      this.blogList = res.result.blogs
      this.sponsoredList = res.result.sponsoredShop
      this.shopList = res.result.shops
      console.log("dgfd", this.shopList);

      this.topRatedShopList = res.result.topRatedShop
      this.topRankedTherapistList = res.result.topRankedTherapist
      this.videosList = res.result.videos;
      for (let i = 0; i < res.result.videos.length; i++) {
        this.videoUrl = res.result.videos[i].url
        let finalUrl = this.videoUrl.replace("watch?v=", "embed/")
        this.topRatedTherapistList = res.result.topRatedTherapist
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
        let neoObj = {
          name: res.result.videos[i].name,
          url: this.safeSrc
        }
        this.newVideoData.push(neoObj)
      }
      this.isLoading = false
    });

  }

  // routing
  goToTherapist(item: any) {
    console.log(item);
    this.router.navigate(['main/home/therapist'], {
      queryParams: {
        therapistName: `${item.firstName} ${item.lastName}`,
        id: item._id,
      }
    })
  }

  viewShopDetails(details: any) {
    localStorage.setItem('shopSelected', JSON.stringify(details));
    console.log( 'hh',details)
    this.router.navigate(['main/home/shop-details'],
    {queryParams:{
      locationId:details._id,
      ownerId : details.ownerId,
      shopName:details.name,
      categoryId:this.categoryId
    }});
  }

  getShopDataBasedLocation(){
    this.locationService.getUserSelectionLocation().subscribe( (res: any) => {
      this.latPosition = res.latPosition;
      this.logPosition = res.logPosition;
      this.getCategorydata();
    });
  }
}
