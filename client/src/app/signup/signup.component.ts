import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http: HttpClient, private router:Router) { }

  username: string = '';
  fullname: string = '';
  email: string = '';
  phone_number: string = '';
  password: string = '';
  adrress: string ="";
  paymentHandler:any = null;
  ngOnInit() {
    this.invokeStripe();
  }

  signup() {
    console.log( '--------', this.username,this.email)
    let url = "http://localhost:5000/users/signup"
    this.http.post(url, {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      phone_number: this.phone_number,
      password: this.password,
      adrress:this.adrress
    }).subscribe((data) => {
      console.log(data);
    })
  }
phone(){    let url = "http://localhost:5000/users/phone"
this.http.post(url,{phone_number: this.phone_number
}).subscribe((data) => {
  console.log(data);
})}
  makePayment(amount:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51K5AeAI8HBYKtbzFQjaXDSmaCOcULlIcKAqn8hsX2xe12CgeoXY8C4GpTbkDY2ZaU4rLAfWplKjP2dMpk4xXGGQv00NLMjIBbM',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
      }
    })
  
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100
    })
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51K5AeAI8HBYKtbzFQjaXDSmaCOcULlIcKAqn8hsX2xe12CgeoXY8C4GpTbkDY2ZaU4rLAfWplKjP2dMpk4xXGGQv00NLMjIBbM',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
     
        
      window.document.body.appendChild(script);
    }
  }
  // login(){
  //       var url= "http://localhost:5000/google"
  //   this.http.get(url).subscribe( ()=>{  console.log("hi")}   )
  //     }
}
 
 
 


