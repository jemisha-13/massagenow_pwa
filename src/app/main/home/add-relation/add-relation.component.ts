import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-add-relation',
  templateUrl: './add-relation.component.html',
  styleUrls: ['./add-relation.component.scss']
})
export class AddRelationComponent implements OnInit {
  addRelationForm:FormGroup;
  submitted = false
  loginData: any;
  clientId: any;
  
  constructor(private NgbModal:NgbModal,
    private newToast:ToasterService,
    private service:ApiServicesService,
    private route:Router,
    ) { 
    this.addRelationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      relation: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),

    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.addRelationForm.controls; }

  ngOnInit(): void {
    this.loginData = JSON.parse( localStorage.getItem('customerLogin')!)
    console.log("ddcd", this.loginData);
    this.clientId=this.loginData.client
    

  }
  // api for add relation
  onSubmit(){
    this.submitted=true;
    // stop here if form is invalid
    if (this.addRelationForm.invalid) {
      return;
      this.newToast.warning("form is invalid")
  } 
  let data={
    "id": this.clientId,
    "relations": [{
            "relationship": this.addRelationForm.value.relation,
            "firstName": this.addRelationForm.value.firstName,
            "lastName": this.addRelationForm.value.lastName,
            "email": this.addRelationForm.value.email,
            "phone": this.addRelationForm.value.mobile,
            "gender": this.addRelationForm.value.gender,
        }],
      }
      this.service.put(`customers/relationship`,data).subscribe((res)=>{
        console.log(res);
        if(res.status==200){
          this.newToast.success("Relation added successfully.")
          this.route.navigate(['/main/home/book-for'])
          this.NgbModal.dismissAll();
        }
      })
  } 

  // modal close
  navigateBack(){
    this.NgbModal.dismissAll();

  }
  selectGender(content:any) {
    this.NgbModal.open(content, { centered: true });
  }
  selectRelation(content:any){
    this.NgbModal.open(content, { centered: true });
  }
}
