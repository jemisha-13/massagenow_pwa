import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() skeletonData : any = '';
  ngOnInit(): void {
    // console.log('hello world',this.skeletonData);
  }

  ngOnChanges() {
    // console.log('no data string value==>>>', this.skeletonData);
  }
}
