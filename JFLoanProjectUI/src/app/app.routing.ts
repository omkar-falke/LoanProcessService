import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LegalHeadModule } from './modules/legal-head/legal-head.module';
import { MRModule } from './modules/mr/mr.module';
import { OperationExecutiveModule } from './modules/operation-executive/operation-executive.module';
import { OperationHeadModule } from './modules/operation-head/operation-head.module';
import { TelecallerModule } from './modules/telecaller/telecaller.module';
import { RelationshipExecutiveModule } from './modules/relationship-executive/relationship-executive.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AccountHeadModule } from './modules/account-head/account-head.module';

const routes: Routes =[
   {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full',
   }, 
   {
    path: 'login',
    component: LoginComponent
   },
  
  {
    path: 'layout',
    component: AdminLayoutComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }  ]

    children:[
      {path:'relationshipexecutive',loadChildren:()=>RelationshipExecutiveModule},
      {path:'accounthead',loadChildren:() =>AccountHeadModule},
      {path:'legalhead',loadChildren:()=>LegalHeadModule},
      {path:'mr',loadChildren:()=>MRModule},
      {path:'operationhead',loadChildren:() =>OperationHeadModule},
      {path:'operationexecutive',loadChildren:()=>OperationExecutiveModule},
      {path:'telecaller',loadChildren:()=>TelecallerModule},
     

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
