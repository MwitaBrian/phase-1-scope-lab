var customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
   bestCustomer = "not bob";
   console.log(bestCustomer)
}

function overwriteBestCustomer() {
  return  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'never bob';

function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer = 'deborah'
}

