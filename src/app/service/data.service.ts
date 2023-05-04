import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sdata="Service Data"

  constructor() { }

  checkData(){
    return "Hello Hi"
  }
}
