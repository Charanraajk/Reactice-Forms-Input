import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlphaService {

  constructor(private http: HttpClient) { }

  saveDetails(forms:any[]){
    return this.http.post("https://alphaforms-3ad70-default-rtdb.firebaseio.com/empdetails.json",forms)
  }
  // getDetails(){
  //   return this.http.get("https://alphaforms-3ad70-default-rtdb.firebaseio.com/empdetails.json")

  // }
  deleteDetails(){
    return this.http.delete("https://alphaforms-3ad70-default-rtdb.firebaseio.com/empdetails.json")
  }
  
  patchDetails(forms:any[]){
    return this.http.patch("https://alphaforms-3ad70-default-rtdb.firebaseio.com/empdetails.json",forms)
  }
}
