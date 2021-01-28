'use strict';

console.log('hello world');

// get each store elements by id.

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  // min cust per hour
  minCustomerPerHour: 23,
  // max cust per hour
  maxCustomerPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  // will hold calculated number of cookies sold each hour
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,



  rngCustomerEachHour: function() {
    // do something // return math here
    console.log('Im in randomCustomerEachHour');
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
  },



  calcCookiesSoldEachHour: function(){
    for(var i = 0; i < hours.length; i++ ){
    // do something // return some math here
      let cookiesSold = Math.ceil(this.rngCustomerEachHour()/ this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesSold);
      this.dailyStoreTotal = this.dailyStoreTotal + cookiesSold;
      console.log(this.cookiesSoldEachHour);
      console.log(this.dailyStoreTotal);
    }
  },

  // a method (function) calculate random number of customers per hour - completed
  // a ,method to calculate and populate our number of cookies sold per hour array - completed
  // a method to render the list items - in progress

  // do something maybe use a for loop - looped
  //multiply cust number by avg - divided but works
  //handle the number do some rounding - rounded
  //push into the cookiessoldperhour array - pushed



  render: function(){
    // do something
    // this.calcCookiesSoldEachHour();
    console.log('Im in the render method');
  }


};

seattle.render();

