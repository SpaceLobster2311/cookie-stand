'use strict';

console.log('hello world');

// get each store elements by id.
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');

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
      let cookiesSold = Math.ceil(this.rngCustomerEachHour() * this.avgCookiesPerCustomer);
      this.cookiesSoldEachHour.push(cookiesSold);
      this.dailyStoreTotal = this.dailyStoreTotal + cookiesSold;
      console.log(this.cookiesSoldEachHour);
      console.log(this.dailyStoreTotal);
    }
  },

  render: function(){
    // do something
    this.calcCookiesSoldEachHour();
    //console.log('Im in the render method');

    for (let i = 0; i < hours.length; i++){
    // todo: need to render the following string as a list item
    // '6am: 16 cookies'
    // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // // append it to the DOM
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    seattleList.appendChild(li);
    // total:
  }

};

let tokyo = {
  name: 'Tokyo',
  // min cust per hour
  minCustomerPerHour: 3,
  // max cust per hour
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
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
      let cookiesSold = Math.ceil(this.rngCustomerEachHour() * this.avgCookiesPerCustomer);
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
    this.calcCookiesSoldEachHour();
    //console.log('Im in the render method');

    for (let i = 0; i < hours.length; i++){
    // todo: need to render the following string as a list item
    // '6am: 16 cookies'
    // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // // append it to the DOM
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    tokyoList.appendChild(li);
    // total:
  }

};

let dubai = {
  name: 'Dubai',
  // min cust per hour
  minCustomerPerHour: 11,
  // max cust per hour
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 3.7,
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
      let cookiesSold = Math.ceil(this.rngCustomerEachHour() * this.avgCookiesPerCustomer);
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
    this.calcCookiesSoldEachHour();
    //console.log('Im in the render method');

    for (let i = 0; i < hours.length; i++){
    // todo: need to render the following string as a list item
    // '6am: 16 cookies'
    // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // // append it to the DOM
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    dubaiList.appendChild(li);
    // total:
  }

};

let paris = {
  name: 'Paris',
  // min cust per hour
  minCustomerPerHour: 20,
  // max cust per hour
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 2.3,
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
      let cookiesSold = Math.ceil(this.rngCustomerEachHour() * this.avgCookiesPerCustomer);
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
    this.calcCookiesSoldEachHour();
    //console.log('Im in the render method');

    for (let i = 0; i < hours.length; i++){
    // todo: need to render the following string as a list item
    // '6am: 16 cookies'
    // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // // append it to the DOM
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    parisList.appendChild(li);
    // total:
  }

};

let lima = {
  name: 'Lima',
  // min cust per hour
  minCustomerPerHour: 2,
  // max cust per hour
  maxCustomerPerHour: 16,
  avgCookiesPerCustomer: 4.6,
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
      let cookiesSold = Math.ceil(this.rngCustomerEachHour() * this.avgCookiesPerCustomer);
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
    this.calcCookiesSoldEachHour();
    //console.log('Im in the render method');

    for (let i = 0; i < hours.length; i++){
    // todo: need to render the following string as a list item
    // '6am: 16 cookies'
    // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      // // append it to the DOM
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    limaList.appendChild(li);
    // total:
  }

};








seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

