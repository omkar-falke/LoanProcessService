import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationHeaddashboardComponent } from './operation-headdashboard/operation-headdashboard.component';
import { RouterModule, Routes } from '@angular/router';

const ohrouting:Routes=[{path:'operationheaddashboard',component:OperationHeaddashboardComponent},]



@NgModule({
  declarations: [OperationHeaddashboardComponent],
  exports:[ OperationHeaddashboardComponent],
  
  imports: [
    RouterModule.forChild(ohrouting),
    CommonModule
  ]
})
export class OperationHeadModule { }
