import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]]
  })
  constructor( private fb:FormBuilder, private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      var username=this.registerForm.value.username;
      var password=this.registerForm.value.password;
      var email=this.registerForm.value.email;
     this.service.register(email,username,password)
     .subscribe((result:any)=>{
       if(result){
         alert(result.message);
         this.router.navigateByUrl('');
       }
     },
     (result)=>{
       alert(result.error.message);
     }
     )
      
    }
   else{
     alert("Invalid form")
   }
  }
}
