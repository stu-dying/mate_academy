function rentalCarCost(d) {
  // Your solution here
  var cost = 40;
  var total = cost * d;
  var sevenDayDiscount = 50;
  var threeDayDiscount = 20;
  
  // apply discounts
  
  if (d >= 7) {
    total -= sevenDayDiscount;
  } else if (d >= 3) {
    total -= threeDayDiscount; 
  } else if (d < 0) {
    return "wrong number of days"
  }
  return total;
}
