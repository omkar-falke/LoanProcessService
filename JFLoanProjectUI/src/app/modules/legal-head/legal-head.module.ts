import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalHeaddashboardComponent } from './legal-headdashboard/legal-headdashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'app/shared/shared.service';
import { LegalheadsendnoticeComponent } from './legalheadsendnotice/legalheadsendnotice.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { NgxSpinnerModule } from "ngx-spinner";

const legalheadrouting:Routes=[{path:'legalheaddashboard',component:LegalHeaddashboardComponent},
{path:'legalheaddashnotice',component:LegalnoticeComponent},
{path:'legalheadsentnotice',component:LegalheadsendnoticeComponent}

]


@NgModule({
  declarations: [LegalHeaddashboardComponent, LegalnoticeComponent, LegalheadsendnoticeComponent],
  exports:[LegalHeaddashboardComponent,LegalnoticeComponent,LegalheadsendnoticeComponent],
  providers:[SharedService],
  imports: [
    RouterModule.forChild(legalheadrouting),
    NgxSpinnerModule, 

CommonModule,HttpClientModule, FormsModule, MatRadioModule,MatTableModule
  ]
})
export class LegalHeadModule { }
