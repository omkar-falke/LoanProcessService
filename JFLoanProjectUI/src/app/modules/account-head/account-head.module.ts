import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHeaddashboardComponent } from './account-headdashboard/account-headdashboard.component';
import { Routes, RouterModule } from '@angular/router';


const AccountHeadrouting:Routes=[{path:'accountheaddashboard',component:AccountHeaddashboardComponent}]


@NgModule({
  declarations: [AccountHeaddashboardComponent],
  exports:[ AccountHeaddashboardComponent],
  imports: [
    RouterModule.forChild(AccountHeadrouting),
    CommonModule
  ]
})
export class AccountHeadModule { }
