//Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers:number[] = [1,2,3,4,5,6];

const doubleNumbers:number[] = numbers.map((num:number) => num*2);
console.log("Array of Numbers: "+numbers+ "\nArray of doubleNumbers: "+doubleNumbers);
//Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const words:string[] = ["Hallo","Hello","Ola","Konichiwa","Sawadee Krab"];
const wordsWithMoreThan5Letter:string[] = words.filter((word:string):boolean => word.length>5);
console.log("Here are greetings with more than 5 Letter: "+wordsWithMoreThan5Letter);
//Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const sumOfNumbers:number = numbers.reduce(
    (accumulator, currentValue) => accumulator+currentValue
);
console.log("sum of Array: "+sumOfNumbers);
//Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const numbers2:number[] = [1,2,3,4,5,6,11];
const biggerThan10 = (element):boolean => element > 10;
const numbers2WithNumberMoreThan10:boolean = numbers2.some(biggerThan10);
console.log("Array of numbers2: "+numbers2+"\nIs there a number more than 10?: "+numbers2WithNumberMoreThan10);
//Bonus
const list:number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const result = list
    .slice()                                                      // Make a copy of the list
    .sort((a, b) => b - a)            // Sort in descending order.
    .map(num => num * num)                              // Square these numbers.
    .slice(4, -2)                                               // Remove the lowest two numbers and the highest 4 numbers from the list.
    .filter(num => num % 4 !== 0)                      // Remove all numbers that are divisible by 4.
    .reduce((acc, num) => acc + num, 0);     // Add up all the numbers.

console.log(result);
