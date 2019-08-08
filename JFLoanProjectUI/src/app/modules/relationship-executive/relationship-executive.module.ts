import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipExecutivedashboardComponent } from './relationship-executivedashboard/relationship-executivedashboard.component';
import { Routes, RouterModule } from '@angular/router';
const rerouting:Routes=[{path:'relationshipexecutivedashboard',component:RelationshipExecutivedashboardComponent},]



@NgModule({
  declarations: [RelationshipExecutivedashboardComponent],
  exports: [RelationshipExecutivedashboardComponent],
  imports: [
    RouterModule.forChild(rerouting),
    CommonModule
  ]
})
export class RelationshipExecutiveModule { }
