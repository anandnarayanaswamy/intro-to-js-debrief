/* Find out the variable is a number or not */
let myNumber = 31;
if (typeof myNumber !== 'number')
  console.log('THis is not a number');
if (myNumber % 3 == 0){
  console.log('Gen');
  if (myNumber % 3 == 0 && myNumber % 5 == 0) 
  console.log('GenBuzz');}
else if (myNumber % 5 == 0){ 
  console.log('Buzz');
  if (myNumber % 3 == 0 && myNumber % 5 == 0) 
  console.log('GenBuzz');}
else
  console.log('My Number is: '+myNumber);  

/* Display the price of the item */
let myItem = 'Jeans';
switch(myItem){
  case('Shoes'):
    console.log('Price of Shoes are: $50');
    break;
  case('Jeans'):
    console.log('Price of Jeans are: $25');
    break; 
  case('Hat'):
    console.log('Price of Hat are: $12');
    break;
  case('Socks'):
    console.log('Price of Socks are: $2');
    break;
  default:
    console.log('Invalid Item');
}

/* Print a random integer between 50 & 100 */
let randNumber = Math.floor(Math.random() * 100);
if(randNumber> 50 && randNumber < 100)
   console.log(`Random Number: ${randNumber}`);