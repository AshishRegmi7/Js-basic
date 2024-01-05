//Date
//Date is an object

const today = new Date(); //Default CURRENT date and time

const newtoday = new Date("2000-12-11");
console.log(today, newtoday);

//ISO date time
const now = today.toISOString();
console.log(now);

// console.log(today.getHours());

const dayFinder = (date) => {
  const newdate = new Date(date).getDay();
  switch (newdate) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("No idea");
      break;
  }
};
console.log(dayFinder("2000-12-11"));
