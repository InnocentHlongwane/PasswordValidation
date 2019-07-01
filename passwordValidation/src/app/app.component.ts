import { Component } from '@angular/core';
import{ FormBuilder, Validators, FormGroup, FormControl, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password Validation';

  //title = 'PasswordValid';
  LoginForm
  
  userInfo=[]
  
  Email:string="";
  Password:string;
  confirmpass:string;
  constructor (public FormBuilder: FormBuilder) {
    this.LoginForm = FormBuilder.group({
      Email:["",Validators.email],
      Password:["",[Validators.required,Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
      
     });
     const ConfirmPasswordControl = new FormControl('',{
      validators:samevalueAs(this.LoginForm,'Password')
    });
    this.LoginForm.addControl('CornfirmPasswrd',ConfirmPasswordControl);
    function samevalueAs(group:FormGroup, controlName : string): ValidatorFn{
      return (control:FormControl)=>{
        const myValue=control.value;
        const compareValue=group.controls[controlName].value;
        return(myValue===compareValue)? null:{valueofDifferentFrom:controlName};
      }
    }
   }

   Login(){
     this.userInfo.push({
       Email: this.Email, 
       Password:this.Password, 
       CornfirmPasswrd:this.confirmpass 
     })
   }

}
