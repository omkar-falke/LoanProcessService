import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { DefaulterdetailsComponent } from './defaulterdetails/defaulterdetails.component';
import { EnquirydetailsComponent } from './enquirydetails/enquirydetails.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { Routes, RouterModule } from '@angular/router';

const adminrouting:Routes=[{path:'admindashboard',component:AdmindashboardComponent},
{path:'',component:CustomerdetailsComponent},
{path:'defaulterdetails',component:DefaulterdetailsComponent},
{path:'enquirydetails',component:EnquirydetailsComponent},
{path:'loandetails',component:LoandetailsComponent},]

@NgModule({
  declarations: [AdmindashboardComponent, , DefaulterdetailsComponent, EnquirydetailsComponent, LoandetailsComponent],
  exports:[AdmindashboardComponent, CustomerdetailsComponent, DefaulterdetailsComponent, EnquirydetailsComponent, LoandetailsComponent],
  imports: [
    RouterModule.forChild(adminrouting),
    CommonModule
  ]
})
export class AdminModule { }
