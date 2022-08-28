import { Component, OnInit, Input } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

interface childPosts {
  name: string;
  SurName: string;
  Age: number;
  DoRStart: string;
  DoREnd: string;
  Gender: string;
  Mobile: number;
  Mail: string;
  Department: string;
  Password: string;
  ConfirmPassword: string;
}




@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit { 
  displayedColumns: string[] = ['Name','SurName','Age','DoRStart','DoREnd','Gender','Mobile','Mail','Department','Password','ConfirmPassword'];



  @Input() childPosts: any[]= [];  
  
  
  ngOnInit(): void {    
  }  
  
}
