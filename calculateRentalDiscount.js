
// Every day you rent the car costs $40. 
// If you rent the car for 7 or more days, you get $50 off your total. 
// Alternatively, if you rent the car for 3 or more days, 
// you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(days) {
    let totalCost = 40 * days; // base cost without discount
    
    if (days >= 7) {
      totalCost -= 50; // apply $50 discount for renting 7 or more days
    } else if (days >= 3) {
      totalCost -= 20; // apply $20 discount for renting 3 or more days
    }
    
    return totalCost;
  }
  
  // The function takes in the number of days as an argument 
  // and calculates the total cost using the base cost of $40 per day. 
  // It then applies the appropriate discount if the number of 
  // days rented meets the conditions. Finally, it returns 
  // the total cost.