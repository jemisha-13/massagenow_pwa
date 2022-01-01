import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.component.html',
  styleUrls: ['./report-bug.component.scss']
})
export class ReportBugComponent implements OnInit {

  constructor(private ngbModel:NgbModal) { }

  ngOnInit(): void {
  }

  // to open attach modal
  
  attchModal(content:any) {
    this.ngbModel.open(content, { size: 'sm' , centered:true,});
  }

}
