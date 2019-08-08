import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodashboardComponent } from './lodashboard/lodashboard.component';
import { CustomerenquiryComponent } from './customerenquiry/customerenquiry.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from '../admin/customerdetails/customerdetails.component';

const lorouting:Routes=[{path:'lodashboard',component:LodashboardComponent},
{path:'customerenquirydetails',component:CustomerenquiryComponent}]

@NgModule({
  declarations: [LodashboardComponent, CustomerenquiryComponent],
  exports:[ LodashboardComponent, CustomerenquiryComponent],
  imports: [
    RouterModule.forChild(lorouting),
    CommonModule
  ]
})
export class LoModule { }
