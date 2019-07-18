import { Component } from '@angular/core';

@Component({
    selector: 'login-comp',
    templateUrl: 'Login.html'
})

export class LoginComponent {

    name:string="";
    address:string="";
    pincode:number;   
    status:string="INVALID";
   


    getData(){
        this.status="VALID";  
    }

    reset(){
        this.name="";
        this.address="";
        this.pincode=null;
        this.status="INVALID";  
    }
 }