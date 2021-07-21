import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({ 
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder, private service:ServicesService,private router:Router) { }
 
  ngOnInit(): void {
  }
  

  login(){
    if(this.loginForm.valid){
    
      var email=this.loginForm.value.email;
      var password=this.loginForm.value.password;
      this.service.login(email,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
          this.router.navigateByUrl("dashboard") 
          localStorage.setItem("email",email);
          localStorage.setItem("name",result.name);
          console.log(email);
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
          
    else{
      alert("Invalid Form")
    } 
  }

  register(){
      this.router.navigateByUrl("register");
  }
}
