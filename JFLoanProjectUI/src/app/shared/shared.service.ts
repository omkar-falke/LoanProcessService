import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoanProces} from 'util/model/LoanProces.model';
import { Observable } from 'rxjs';

const headerOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  save(currentLoanProcess:LoanProces ) {
    this.http.post(this.mockurl,currentLoanProcess).subscribe(()=>{})
  }
  mockurl="http://desktop-qdm92as:8083/sendnoticedata";
  getalldata():Observable<LoanProces[]> {
return this.http.get<LoanProces[]>("http://desktop-qdm92as:8083/getdata");
  }
   
  
   constructor(private http:HttpClient) { 
   }

   currentLoanProcess: LoanProces = {
    legalId: null,
    EMI:null,
    emiPaidDate: '',
    count_Bucket: null, 
    customerName: '',
    loanAmount: null,
    emailId :'',
    firstNoticeSend:null
  }

  sendNotice(currentLoanProcess:LoanProces):Observable<LoanProces>
  {    
    return this.http.put<LoanProces>(this.mockurl + '/' + currentLoanProcess.legalId,currentLoanProcess);
  }
}

