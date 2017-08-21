function forafewBillion(daysSelected) {

  var value = 0.01;
  for (var i = 0; i < daysSelected; i++) {
    value = (value * 2);
  }
  console.log("the amount of money after " + daysSelected + " days is " + value);
}




//forafewBillion(30) = 10.7Million
// 20 days for 10k


/*
There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

Use for loops to answer the following:

How much was the reward after 30 days?
remember, a penny isn't 1, but 0.01

Bonus (Only If You Have Time):

How many days would it take the servant to make $10,000?
How about 1 billion?
In JavaScript, there is a value Infinity, how many days until the servant has infinite money?

*/
