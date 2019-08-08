import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelecallerdashboardComponent } from './telecallerdashboard/telecallerdashboard.component';
import { Routes, RouterModule } from '@angular/router';

const telecallerrouting:Routes=[{path:'telecallerdashboard',component:TelecallerdashboardComponent},]


@NgModule({
  declarations: [TelecallerdashboardComponent],
  exports: [TelecallerdashboardComponent],
  imports: [
    RouterModule.forChild(telecallerrouting),
    CommonModule
  ]
})
export class TelecallerModule { }
