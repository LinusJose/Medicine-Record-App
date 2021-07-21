import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  options={
    withCredentials: true
  }
  
  UserDetails:any = {
    "userone@mail.com": {  email:"userone@mail.com" ,username: "userone", password: "userone"},
    "usertwo@mail.com" :{   email:"userone@mail.com", username: "usertwo", password: "usertwo"},
  
  };
  constructor(private http:HttpClient) { }

  login(email: string,password: any){
    const data={
      email,
      password
      }
  
     return this.http.post("http://localhost:8080/login/",data,this.options);
  
 }

 register(email: any,username: any,password: any){

  const data={
    email,
    username,
    password
    }

   return this.http.post("http://localhost:8080/register/",data);


 }

 addData(email:any,medicine:any,quantity:any,price:any){

  const data={
    email,
    medicine,
    quantity,
    price
      }

   return this.http.post("http://localhost:8080/addData/",data,this.options);
 
 }

 DisplayMedicineData(email){
   
  const data={
    email
  }
    return this.http.post("http://localhost:8080/DisplayMedicineData/",data,this.options);
 }



}


