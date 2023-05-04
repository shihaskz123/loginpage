import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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

  constructor(private ds:DataService) {    
  }

  ngOnInit(): void {
    
  }

  login(){
    // alert("login clicked")
    console.log("Name :",this.uname,);
    console.log("Password :",this.psw);

    alert(this.ds.sdata)

    alert(this.ds.checkData())

    alert(`${this.ds.checkData()} ${this.ds.sdata}`)
    
  }
}
