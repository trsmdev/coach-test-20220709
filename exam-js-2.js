function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(leapYear(2020));
console.log(leapYear(2021));

// console.log(leapYear(2100));
// console.log(leapYear(2400));
