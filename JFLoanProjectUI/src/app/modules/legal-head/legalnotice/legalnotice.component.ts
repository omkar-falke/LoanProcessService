import { Component, OnInit } from '@angular/core';
import { LoanProces } from 'util/model/LoanProces.model';
import { SharedService } from 'app/shared/shared.service';
import { HttpHeaders } from '@angular/common/http';
import { Button } from 'protractor';
import { NgModel } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Routes, Router } from '@angular/router';
import { Observable,interval, Subscription } from 'rxjs';

// const headerOption={
//   headers: new HttpHeaders({'Content-Type':'application/json'})
// }
          






@Component({
  selector: 'app-legalnotice',
  templateUrl: './legalnotice.component.html',
  styleUrls: ['./legalnotice.component.scss']
})
export class LegalnoticeComponent implements OnInit {
  
   
    
    displayedColumns: string[] = ['customername', 'EMI', 'emiPaidDate', 'count_Bucket',' loanAmount','emailId',''];
  dataSource = new MatTableDataSource;
//na:boolean=true;
idd:number=1;
noticesend=2;
noticesend3=3;

allDatarow:LoanProces[];
  allDatacolume:Array<any>;
  updateSubscription: Subscription;
  constructor(private ser:SharedService,private router:Router) {
   
  }
  dis(id){
      if(id===this.idd || id>0&&this.idd<=3)
      { 
        return true;
      }
   return false;
  }

  dis1(id){
      if(id===this.noticesend||id>1&&this.noticesend<=3)
      { 
        return true;
      }
   return false;
  }

  dis2(id){
      if(id===this.noticesend3&&id>2&&this.noticesend3<=3)
      { 
        return true;
      }
   return false;
  }

  ngOnInit() {
    console.log('11');
    
   this.getalldata();
   
   this.updateSubscription = interval(1000).subscribe(
    (val) => { this.updateStats()
  }
);


  
}
updateStats() {
  throw new Error("Method not implemented.");
}

  


  createAndUpdate(currentLoan:LoanProces ) {
    alert("Notice Send")
this.idd=currentLoan.legalId;
    // console.log(currentEmployee);
    // if (currentLoan.legalId === null) {
    //   console.log('update');
    //   this.ser.save(currentLoan);
    // } else {
       console.log('update');
      this.ser.sendNotice(currentLoan).subscribe( 
        (data) =>{
          console.log(data);

     this.router.navigateByUrl("layout/legalhead/legalheaddashnotice");
console.log('okkk');

      }) 

  }
  getalldata() {
 this.ser.getalldata().subscribe(
   (data) =>{
     console.log(data);
this.allDatarow=data;
console.log(this.allDatarow);
 })
}
}
