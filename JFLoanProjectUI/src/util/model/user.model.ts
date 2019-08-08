import { Address } from "./Address.model";
import { Role } from "./Role.model";
import { Branch } from "./Branch.model";
import { UserDocuments } from "./UserDocuments.model";

export class User{
    userId: number;
    uName: string;
    userPaddress: Address;
    userLaddress:Address;
    userMobno : number;
    userAmobno : number;
    userEmail : string;
    userGender : string;
    userName : string;
    passWord : string;
    userRole:Role;
    userBranch:Branch;
    userDob : string;
    userDoj : string;
    userStatusCode : number;
    role:string;
    

    
    
}