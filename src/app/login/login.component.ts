import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data="Your Perfect Banking Partner"

  placeHolderData="Enter Acno"
  
  uname:any
  psw:any

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
    // alert("login clicked")
  }

  unameChange(event:any){
    console.log(event.target.value);
    

  }
}
