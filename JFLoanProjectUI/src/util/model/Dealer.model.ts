import { Address } from "./Address.model";
import { DealerAccountDetail } from "./DealerAccountDetail.model";

export class Dealer{
    dealerId:number;
    dealerName: string;
    dealerEmail:string;
    dealerMobno: number;
    dealerGender:string;
    dealerAddress:Address;
    dealerBankAccount: DealerAccountDetail;
    
}