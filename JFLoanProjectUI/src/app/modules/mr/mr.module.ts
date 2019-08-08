import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrdashboardComponent } from './mrdashboard/mrdashboard.component';
import { Routes, RouterModule } from '@angular/router';

const mrrouting:Routes=[{path:'mrdashboard',component:MrdashboardComponent},]


@NgModule({
  declarations: [MrdashboardComponent],
  exports:[MrdashboardComponent ],
  imports: [
    RouterModule.forChild(mrrouting),
    CommonModule
  ]
})
export class MRModule { }
