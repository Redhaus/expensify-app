


const isAdult = (age) => age >= 18;


const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };

// console.log(isSenior(65));
// set up function export 
// grab it and call it