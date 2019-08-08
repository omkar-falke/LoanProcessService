import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationExecutivedashboardComponent } from './operation-executivedashboard/operation-executivedashboard.component';
import { RouterModule, Routes } from '@angular/router';

const oerouting:Routes=[{path:'operationexecutivedashboard',component:OperationExecutivedashboardComponent},]


@NgModule({
  declarations: [OperationExecutivedashboardComponent],
  exports:[OperationExecutivedashboardComponent ],
  imports: [
    RouterModule.forChild(oerouting),
    CommonModule
  ]
})
export class OperationExecutiveModule { }
