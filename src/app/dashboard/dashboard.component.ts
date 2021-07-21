import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  user=localStorage.getItem("name");
  medicine="";
  quantity="";
  price=""
 
  constructor(private fb:FormBuilder, private service:ServicesService,private router:Router) { 
   
  }

  ngOnInit(): void {
  }
  
  addData(){
    var medicine=this.medicine;
     var quantity=this.quantity;
     var price=this.price;

    var email=localStorage.getItem("email");
     this.service.addData(email,medicine,quantity,price)
     .subscribe((result:any)=>{
     if(result){
      alert(result.message)
     
    }
  },
  (result)=>{
    alert(result.error.message)
  }
     )
     
     
  }

  

MedicineData(){
  document.getElementById("medical").style.display="block";
  var email=localStorage.getItem("email");
  console.log(email);
  
     this.service.DisplayMedicineData(email)
     .subscribe((result:any)=>{
     if(result){
      document.getElementById("medical").innerHTML=result.message;
   
    }
  },
  (result)=>{
    alert(result.error.message)
  }
     )
     
}
}
