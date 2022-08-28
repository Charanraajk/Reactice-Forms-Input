import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
// import { EmailValidator, PasswordVali } from 'validators';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscriber } from 'rxjs';
import { AlphaService } from '../service/alpha.service';
// import { PasswordStrengthValidator } from "./password-strength.validators"

// import { MustMatch } from './_helpers/must-match.validator';
// import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  userForm: FormGroup;
  userData: any[]=[];
  hide = true;    
  parentPosts: any[] =[];
  // datarange: FormGroup;

  // email = new FormControl('', [Validators.required, Validators.email])
  

  // getErrorMessage() {
  //   if (this.email.hasError('email')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('required') ? 'Not a valid email' : '';
  // }
  constructor(public formBuilder: FormBuilder , public dialog: MatDialog, private dateAdapter: DateAdapter<Date>, public alpha:AlphaService ) {
  
  
  
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    
    this.userData= []; 
    this.parentPosts= [];
  
  this.userForm =  this.formBuilder.group({
    name : new FormControl("", [
      Validators.required,
      Validators.minLength(4)]), 
    sname : new FormControl('', [Validators.required]),
    age : new FormControl('', [Validators.required, Validators.maxLength(2)]),
    // dob : new FormControl(),
    start: new FormControl(new Date(year, month, 23) ),
    end: new FormControl(new Date(year, month, 26)),
    gen :new FormControl(),
    pwd : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+;',.?\":{}|<>])([a-zA-Z0-9!@#$%^&*()-_=+;',.?\":{}|<>]+)")]),
    dept : new FormControl(),
    num : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email : new FormControl("", [Validators.required, Validators.email]),
    cpwd : new FormControl('', Validators.required),
    // TC   : new FormControl(),
      // Python: new FormControl(), 
    // Angular: new FormControl(), 
    // React: new FormControl(),
    // Java : new FormControl(),
    
  },
  
  { 
    validators: this.MustMatch('pwd','cpwd')
  });
}
  MustMatch(controlName: string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors.MustMatch){
      return
    }     
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  


  
  ngOnit(){

  }
  onSubmit()
  {
    console.log(this.userForm.value);
    this.parentPosts.push(this.userForm.value);
    
    this.alpha.saveDetails(this.userForm.value)
    .subscribe(sub=>{
      console.log(sub);
    })
    //  this.alpha.getDetails()
    //  .subscribe((sub)=>{
    //    console.log(sub)
    //  })

    // this.alpha.patchDetails(this.userForm.value)
    // .subscribe(sub =>{
    //   console.log(sub);
    // })

    //  this.alpha.deleteDetails()
    //  .subscribe((sub)=>{
    //    console.log(sub)
    //  })
      this.userData.push(this.userForm.value);
  
 
    // console.log(this.userForm.value.Angular);
    // console.log(this.userForm.value.Python);
    // console.log(this.userForm.value.React);
    // console.log(this.userForm.value.Java);
  }
  
onPost(){
  this.alpha.patchDetails(this.userForm.value)
    .subscribe(sub =>{
      console.log(sub);
    })
}
 onDelete(){
  this.alpha.deleteDetails()
   .subscribe((sub)=>{
     console.log(sub)
   })  
 }
}  

