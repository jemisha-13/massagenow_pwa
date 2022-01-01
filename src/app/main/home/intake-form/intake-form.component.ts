import {
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import Stepper from 'bs-stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { ToasterService } from 'src/app/design-component/custom-toaster/toaster.service';
import { GlobalValidationService } from '../global-validation.service';
@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.scss'],
})
export class IntakeFormComponent implements OnInit, AfterViewInit {
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  private stepper: Stepper | any;
  intakeForm: FormGroup | any;

  validationMessages = {
    'firstName': {
      'required': 'First Name is required.',
      'pattern': 'Please provide valid Name avoide using special charecter'
    },
    'lastName': {
      'required': 'Last Name is required.',
      'pattern': 'Please provide valid Name avoide using special charecter'
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Please provide valid Email ID'
    },
    'phone1': {
      'required': 'Number is required.',
      'pattern': 'Please provide valid Phone Number avoide using special charecter'
    }, 
    'dob': {
      'required': 'Date is required.',
      'pattern': 'Please provide valid Date avoide using special charecter'
    },
    'area': {
      'required': 'Address is required.',
      'pattern': 'Please provide valid Address avoide using special charecter'
    },
    'city': {
      'required': 'City is required.',
      'pattern': 'Please provide valid City avoide using special charecter'
    },
    'state': {
      'required': 'State is required.',
      'pattern': 'Please provide valid State avoide using special charecter'
    },
    'emergencyContactName': {
      'required': 'Name is required.',
      'pattern': 'Please provide valid Name avoide using special charecter'
    },
    'emergencyContactRelation': {
      'required': 'Realtion is required.',
      'pattern': 'Please provide valid Relation Name avoide using special charecter'
    },
    'emergencyContactNo': {
      'required': 'Number is required.',
      'pattern': 'Please provide valid Number avoide using special charecter'
    }, 
    'medicationDetails': {
      'required': 'Details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'pregnancyDuration': {
      'required': 'Duration is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    },
    'pregnancyRiskFactor': {
      'required': 'Risk details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'chronicPainDetails': {
      'required': 'Pain details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    },
    'chronicPainMakesBetter': {
      'required': 'Description is reqired',
      'pattern': 'Please provide valid Details avoide using special charecter'
    },
    'chronicPainMakesWorse': {
      'required': 'Description is reqired',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'orthoInjuriesDetails': {
      'required': 'Details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'diseasesDescription': {
      'required': 'Description is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'allergiesDetails': {  
      'required': 'Details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
    'avoidingAreasDetails': {
      'required': 'Details is required.',
      'pattern': 'Please provide valid Details avoide using special charecter'
    }, 
  };
  formErrors:any = {};
  shopName: any;
  serviceName: any;
  serviceTime: any;
  servicePrice: any;
  therapistName: any;
  timeSlot: any;
  @Input() intakeFormData : any;
  @Output() intakeDataSelected : EventEmitter<any> = new EventEmitter();
  Desisese1: any = [
    { name: 'Cancer', selected: false },
    { name: 'Headaches/Migraines', selected: false },
    { name: 'Arthritis', selected: false },
    { name: 'Diabetes', selected: false },
    { name: 'Joint Replacement', selected: false },
    { name: 'High/Low Blood Pressure', selected: false },
    { name: 'Neuropathy', selected: false },
  ];
  Desisese2: any = [
    { name: 'Fibromyalgia', selected: false },
    { name: 'Stroke', selected: false },
    { name: 'Heart Attack', selected: false },
    { name: 'Kidney Dysfunction', selected: false },
    { name: 'Blood Clots', selected: false },
    { name: 'Numbness', selected: false },
    { name: 'Sprains or Strains', selected: false },
  ];
  massageArea1: any = [
    { name: 'Head', selected: false },
    { name: 'Neck', selected: false },
    { name: 'Face', selected: false },
    { name: 'Shoulder', selected: false },
    { name: 'Chest', selected: false },
    { name: 'Arms', selected: false },
  ];
  massageArea2: any = [
    { name: 'Abdomen', selected: false },
    { name: 'Heads', selected: false },
    { name: 'Thigh', selected: false },
    { name: 'Back', selected: false },
    { name: 'Inner Thighs', selected: false },
    { name: 'Hips', selected: false },
  ];
  /* signature config */
  option: Object = {};
  serviceId: any;
  therapistId: any;
  locationId: any;
  loyaltyPointCanRedeem: any;
  loyaltyPointRecieve: any;
  signature: any;
  shopDetails: any;
  diseaseArray: any = [];
  discomfortArray: any = [];
  clientDetails: any;
  ownerId: any;
  loyalityPoint: any;
  servicePricingName: any;
  durationHour: any;
  durationMin: any;
  startDate: any;
  endDate: any;
  intakeId: any;
  ScreenWidth: any;
  ScreenHeight: any;
  ShowMobile: any;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private active: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: ApiServicesService,
    private toasterService: ToasterService,
    private _validation: GlobalValidationService
  ) {
    this.getScreenSize();
   }
    
   getScreenSize() {
    this.ScreenWidth = window.innerWidth
    this.ScreenHeight = window.innerHeight
    if (this.ScreenWidth > 1024) {
      this.ShowMobile = false
    } else if (this.ScreenWidth < 1024) {
      this.ShowMobile = true
    }

  }

  ngOnInit(): void {
    console.log(this.intakeFormData); 
    this.active.queryParams.subscribe((params)=>{
      this.durationHour= this.intakeFormData ? this.intakeFormData.durationHour : params.durationHour
      this.durationMin= this.intakeFormData ? this.intakeFormData.durationMin : params.durationMin
      this.startDate= this.intakeFormData ? this.intakeFormData.startDate : params.startDate
      this.endDate= this.intakeFormData ? this.intakeFormData.endDate : params.endDate
      this.servicePricingName= this.intakeFormData ? this.intakeFormData.servicePricingName : params.servicePricingName
      this.loyalityPoint= this.intakeFormData ? this.intakeFormData.loyalityPoint : params.loyalityPoint
      this.ownerId= this.intakeFormData ? this.intakeFormData.ownerId : params.ownerId
      this.loyaltyPointCanRedeem = this.intakeFormData ? this.intakeFormData.loyaltyPointCanRedeem : params['loyaltyPointCanRedeem'];
      this.loyaltyPointRecieve = this.intakeFormData ? this.intakeFormData.loyaltyPointRecieve : params['loyaltyPointRecieve'];
      this.shopName = this.intakeFormData ? this.intakeFormData.shopName : params.shopName,
     this. serviceName=  this.intakeFormData ? this.intakeFormData.serviceName : params.serviceName,
     this.serviceId=  this.intakeFormData ? this.intakeFormData.serviceId :params.serviceId,
     this.therapistId=  this.intakeFormData ? this.intakeFormData.therapistId : params.therapistId
     this.locationId=  this.intakeFormData ? this.intakeFormData.locationId : params.locationId
     this. serviceTime=  this.intakeFormData ? this.intakeFormData.serviceTime : params.serviceTime,
     this. servicePrice=  this.intakeFormData ? this.intakeFormData.servicePrice : params.servicePrice,
     this. therapistName= this.intakeFormData ? this.intakeFormData.therapistName : params.therapistName,
     this. timeSlot= this.intakeFormData ? this.intakeFormData.timeSlot : params.timeSlot
    })

    this.shopDetails = JSON.parse(localStorage.getItem('shopSelected')!);
    this.clientDetails = JSON.parse(localStorage.getItem('customerLogin')!);

    this.stepper = new Stepper(document.querySelector('#stepper1') as any, {
      linear: true,
      animation: true,
    });
    this.intakeForm = this.fb.group({
      client_info: this.fb.group({
        personal: ['', Validators.required],
        firstName: ['', [Validators.required,Validators.pattern(this._validation.regex.name)]],
        lastName: ['', [Validators.required,Validators.pattern(this._validation.regex.name)]],
        email: ['', [Validators.required,Validators.pattern(this._validation.regex.email)]],
        phone1: ['', [Validators.required,Validators.pattern(this._validation.regex.number)]],
        gender: ['', Validators.required],
        dob: ['', [Validators.required,Validators.pattern(this._validation.regex.date)]],
        area: ['', Validators.required],
        city: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        state: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        emergencyContactName: ['', [Validators.required,Validators.pattern(this._validation.regex.name)]],
        emergencyContactRelation: ['', [Validators.required,Validators.pattern(this._validation.regex.name)]],
        emergencyContactNo: ['', [Validators.required,Validators.pattern(this._validation.regex.number)]],
      }),
      medical_info: this.fb.group({
        medicationStatus: ['', Validators.required],
        medicationDetails: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        pregnancyStatus: ['', Validators.required],
        pregnancyDuration: ['', [Validators.required,Validators.pattern(this._validation.regex.number)]],
        pregnancyRiskFactor: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        chronicPainStatus: ['', Validators.required],
        chronicPainDetails: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        chronicPainMakesBetter: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        chronicPainMakesWorse: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        orthoInjuriesStatus: ['', Validators.required],
        orthoInjuriesDetails: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        diseases: ['', Validators.required],
        diseasesDescription: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
      }),
      massage_info: this.fb.group({
        therapist: ['', Validators.required],
        therapistGender: ['', Validators.required],
        priorMassage: ['', Validators.required],
        pressure: ['', Validators.required],
        allergiesStatus: ['', Validators.required],
        allergiesDetails: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        avoidingAreasStatus: ['', Validators.required],
        avoidingAreasDetails: ['', [Validators.required,Validators.pattern(this._validation.regex.letter)]],
        not_massage: ['', Validators.required],
        client_sign: ['', Validators.required],
      }),
      ownerId: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.intakeForm.valueChanges.subscribe(
      (value:any )=> {
        this.logValidationErrors()
      }
    );
  }

  logValidationErrors() {
    this.formErrors = this._validation.getValidationErrors(this.intakeForm, this.validationMessages);
  }

  skipIntakeForm() {
    let queryData = {
      durationHour:this.durationHour,
      durationMin:this.durationMin,
      startDate:this.startDate,
      endDate:this.endDate,
      ownerId:this.ownerId,
      shopName:this.shopName,
      serviceName:this.serviceName,
      serviceTime:this.serviceTime,
      servicePrice:this.servicePrice,
      therapistName:this.therapistName,
      timeSlot:this.timeSlot,
      serviceId:this.serviceId,
     therapistId:this.therapistId,
     locationId:this.locationId,
     loyaltyPointCanRedeem:this.loyaltyPointCanRedeem,
     loyaltyPointRecieve:this.loyaltyPointRecieve,
     loyalityPoint:this.loyalityPoint,
     servicePricingName:this.servicePricingName,
     intakeId:this.intakeId

  }
if(this.ShowMobile){
  this.router.navigate(['main/home/book-appointment'],{queryParams: queryData});
}if(!this.ShowMobile){
  this.intakeDataSelected.emit(queryData);
}
  }

  onSubmit() {
    return false;
  }
  next() {
    this.stepper.next();
  }
  previous(step: any) {
    this.stepper.to(step);
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngAfterViewInit() {
    console.log(this.signaturePad); // defined!
  }

  drawComplete(event: any) {
    var canvas: any = document.querySelector('canvas');
    this.signature = canvas.toDataURL();
    console.log(this.signature);
  }

  drawClear() {
    var canvas: any = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  drawStart() {}
  setDiseases(name: string, isChecked: boolean) {
    if (isChecked) {
      this.diseaseArray.push(name);
    } else {
      for (var i = 0; i < this.diseaseArray.length; i++) {
        if (this.diseaseArray[i] === name) {
          this.diseaseArray.splice(i, 1);
        }
      }
    } 
    console.log(  this.diseaseArray)
  }
  setDiscomfortArea(name: string, isChecked: boolean) {
    if (isChecked) {
      this.discomfortArray.push(name);
    } else {
      for (var i = 0; i < this.discomfortArray.length; i++) {
        if (this.discomfortArray[i] === name) {
          this.discomfortArray.splice(i, 1);
        }
      }
    } 
    console.log( this.discomfortArray)
  }
  submitForm() {
    this.intakeForm.controls.massage_info.controls['client_sign'].setValue(
      this.signature
    );
    this.intakeForm.controls['type'].setValue('customer');
    this.intakeForm.controls.client_info.controls['personal'].setValue(this.clientDetails.client);
    this.intakeForm.controls['ownerId'].setValue(this.ownerId);
    this.intakeForm.controls.medical_info.controls['diseases'].setValue(
      this.diseaseArray
    );
    this.intakeForm.controls.massage_info.controls['not_massage'].setValue(
      this.discomfortArray
    );
    let dob = this.intakeForm.controls.client_info.controls['dob'].value;
    let finalDob = `${dob.year}-${dob.month}-${dob.day}`;
    this.intakeForm.controls.client_info.controls['dob'].setValue(finalDob);
    let postBody = this.intakeForm.value;
    this.httpService.post(`customers/intake`, postBody).subscribe(res=>{
     if(res.status === 200){
       console.log(res);
       this.intakeId=res.result._id
       console.log(this.intakeId);
       
       
      this.toasterService.success('Intake form has been submitted',false,2000)
      setTimeout(() => {
        this.skipIntakeForm() 
      }, 1000); 
     }
    });
  }
}
