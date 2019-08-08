import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'util/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User={
    userId:null ,
    uName: '',
    userPaddress: null,
    userLaddress:null,
    userMobno : null,
    userAmobno : null,
    userEmail : '',
    userGender : '',
    userName : '',
    passWord : '',
    userRole:null,
    userBranch:null,
    userDob : '',
    userDoj : '',
    userStatusCode : null,
    role:''
  
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(user)
  { if(user.userName === 're' && user.passWord === 're')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/relationshipexecutive/relationshipexecutivedashboard');
      
      sessionStorage.setItem('layout','relationshipexecutive')
    }
    if(user.userName === 'ah' && user.passWord === 'ah')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/accounthead/accountheaddashboard');
        sessionStorage.setItem('layout','accounthead')
    }
    if(user.userName === 'oe' && user.passWord=== 'oe')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/operationexecutive/operationexecutivedashboard');
        sessionStorage.setItem('layout','operationexecutive')
    }
    if(user.userName === 'oh' && user.passWord === 'oh')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/operationhead/operationheaddashboard');
        sessionStorage.setItem('layout','operationhead')
    }
    if(user.userName === 'tc' && user.passWord=== 'tc')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/telecaller/telecallerdashboard');
        sessionStorage.setItem('layout','telecaller')
    }
    if(user.userName=== 'mr' && user.passWord=== 'mr')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/mr/mrdashboard');
        sessionStorage.setItem('layout','mr')
    }
    if(user.userName === 'lh' && user.passWord=== 'lh')
    {
      console.log("------------------------------------------------------")
      this.router.navigateByUrl('layout/legalhead/legalheaddashboard');
        sessionStorage.setItem('layout','legalhead')
    }
  }

 

}
