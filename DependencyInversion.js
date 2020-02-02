// SOLID - Dependency Inversion principle
/*

For example

Online clothing store app -> Payment through Stripe API [Direct dependency. A high level module should not be dependent on a low level module]
Solution: introduce a payment manager like this
Online clothing store app -> Payment manager -> [Payment through Stripe API, Payment through PayPal]

*/


/*
Assumptions:
Stripe accepts dollars
Paypal accepts rupees

*/
/* class OnlineMarket{

  constructor(user){
    this.stripe = new Stripe(user);
  }


  buyTees(quantity){
    this.stripe.makePayment(100*quantity);
  }

  buyJeans(quantity){
   this.stripe.makePayment(500 * quantity);
  }

}

class Stripe{
constructor(user){
this.user = user;
}

makePayment(amountInDollars){
  console.log(`Payment made with stripe`);
}
}
 */



// Now change to Paypal

/* class OnlineMarket {

  constructor(user) {
    //this.stripe = new Stripe(user);
    this.user = user;
    this.paypal = new Paypal();
  }


  buyTees(quantity) {
    //this.stripe.makePayment(100 * quantity);
    this.paypal.makePayment(this.user, 100 * quantity);
  }

  buyJeans(quantity) {
    //this.stripe.makePayment(500 * quantity);
    this.paypal.makePayment(this.user, 500 * quantity);
  }

}


class Paypal {
  makePayment(user, amountInRupees) {
    console.log(`Payment made with Paypal`);
  }
}

const marketPlace = new OnlineMarket('Sam');
marketPlace.buyJeans(20);
marketPlace.buyTees(100); */

/*

Change was difficult.In large systems it's much more difficult
*/

//Solution

class OnlineMarket {

  constructor(paymentManager) {
    this.paymentManager = paymentManager;
  }

  buyTees(quantity) {
    this.paymentManager.pay(100 * quantity);
  }

  buyJeans(quantity) {
    this.paymentManager.pay(500 * quantity);
  }

}

class StripePaymentManager{

constructor(user){
this.stripe = new Stripe(user);
}

pay(amount){
  this.stripe.makePayment(amount)
}


}
class PaypalPaymentManager{

constructor(user){
  this.user = user;
this.paypal = new Paypal();
}

pay(amount){
  this.paypal.makePayment(this.user,amount)
}


}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInDollars) {
    console.log(`Payment made with stripe`);
  }
}
class Paypal {
  makePayment(user, amountInRupees) {
    console.log(`Payment made with Paypal`);
  }
}


const marketPlaceWithStripe = new OnlineMarket(new StripePaymentManager('Sam'));
const marketPlaceWithPaypal = new OnlineMarket(new PaypalPaymentManager('John'));
marketPlaceWithStripe.buyJeans(20);
marketPlaceWithStripe.buyTees(100);
marketPlaceWithPaypal.buyJeans(20);
marketPlaceWithPaypal.buyTees(100);
