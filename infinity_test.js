function togetInfinity() {
  daysNeeded = 0;
  value = 0.01;


  while (value < Infinity) {
    value = (value * 2);

    daysNeeded++;


  }


  console.log("the amount of days to get infinity is " + daysNeeded);

}
