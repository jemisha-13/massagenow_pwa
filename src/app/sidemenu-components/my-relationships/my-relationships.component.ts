import { Component, OnInit } from '@angular/core';
import { MyrelationshipsService } from './myrelationships.service'

@Component({
  selector: 'app-my-relationships',
  templateUrl: './my-relationships.component.html',
  styleUrls: ['./my-relationships.component.scss']
})
export class MyRelationshipsComponent implements OnInit {

  myRelationShipList: any = []
  isLoading!:boolean
  constructor(
    private myrelationshipsservice: MyrelationshipsService,
    
    ) { }

  ngOnInit(): void {
    this.myRelationship();
  }

  myRelationship() {
    this.isLoading=true;
    this.myrelationshipsservice.getMyRelationships().subscribe((response: any) => {
    this.myRelationShipList = response.ClientRelations
    this.isLoading=false;
    }, err => { console.log(err) });
  }
}
