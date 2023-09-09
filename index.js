"use strict";
// var a:number=23;
// var b:number=54;
// console.log("Area is :",a*b);
// var a:number=12;
// console.log("Volume of cube is :",a*a*a);
// var a:number=12;
// if(a%2==0)
// console.log("Positive number")
// else if(a%2!=0)
// console.log("Negative number")
// else
// console.log("number is zero")
// var a:number=12;
// if(a%2==0)
// console.log("Even  number")
// else if(a%2!=0)
// console.log("odd number")
// var a:number=43;
// if(a>18)
// console.log("Add vote")
// else
// console.log("Not add vote")
// var a:number=((10+5)*3-2)/((4%3)-7)
// console.log(a) 
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// var tep:number=35;
// var result:number;
// console.log("Result is :",35−32)*5/9);
// function convertTemperature(value: number, unit: string): void {
//     if (unit === "C") {
//         const fahrenheit = (value * 9/5) + 32;
//         console.log(`${value}°C is equal to ${fahrenheit.toFixed(2)}°F`);
//     } else if (unit === "F") {
//         const celsius = (value - 32) * 5/9;
//         console.log(`${value}°F is equal to ${celsius.toFixed(2)}°C`);
//     } else {
//         console.log("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
//     }
// }
// convertTemperature(25, "C");
// convertTemperature(68, "F");
// const celsiusToFahrenheit = (celsius: number) => celsius * 9 / 5 + 32;
// const fahrenheitToCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;
// const temperature = 25; 
// console.log(`${temperature}°C is ${celsiusToFahrenheit(temperature)}°F`);
// console.log(`${temperature}°F is ${fahrenheitToCelsius(temperature)}°C`);
// var temperature:number=10;
// var celsius:number;
// var fahrenheit:number;
// celsius=temperature * 9 / 5 + 32;
// fahrenheit=(temperature - 32) * 5 / 9;
// console.log("Temperature of fahrenheit to celsius is :",celsius);
// console.log("Temperature of celsius to fahrenheit   is :",fahrenheit);
// console.log("\n");
// //- Write a program that calculates the percentage.
// var student:number=654;
// var total:number=1100;
// var percentage:number;
// percentage=(student/total)*100;
// console.log("Persentage of student mark is :",percentage);
// // - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// // const days = 17; 
// // const weeks = Math.floor(days / 7);
// // const remainingDays = days % 7;
// // console.log(`${days} days = ${weeks} weeks and ${remainingDays} days`);
// // const totalDays = 17; 
// // const weeks = (totalDays / 7);
// // const remainingDays = totalDays % 7;
// // console.log(`${totalDays} days = ${weeks} weeks and ${remainingDays} days`);
// var totaldays:number=17;
// var weeks:number;
// var remainingdays:number;
// weeks=Math.floor(totaldays/7);
// remainingdays=totaldays%7;
// console.log("Total days is :",totaldays);
// console.log("Weeks is :",weeks);
// console.log("Remaining days is :",remainingdays);
// // - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// var price:number=500;
// var discount:number;
// var discountamount:number;
// var discountpersentage:number;
// if(price>100)
//  discount=0.1;
//  else
//  discount=0.5;
//  discount=
// discountamount=discount*price;
// discountpersentage=discount-price;
// console.log("Discount amount is :",discountamount);
// console.log("Discount persentages  is :",discountpersentage);
// //Chapgpt program below
// const productPrice = 120; 
// let discountPercentage: number;
// if (productPrice > 100) {
//     discountPercentage = 0.1; // 10% discount
// } else {
//     discountPercentage = 0.05; // 5% discount
// }
// const discountAmount = productPrice * discountPercentage;
// const discountedPrice = productPrice - discountAmount;
// console.log(`Original Price: $${productPrice}`);
// console.log(`Discount Percentage: ${discountPercentage * 100}%`);
// console.log(`Discount Amount: $${discountAmount}`);
// console.log(`Discounted Price: $${discountedPrice}`);
// var num:number=34;
// var num1:string="54";
// console.log("Result is :",num+ +num1);
// // What is array in typescript and why we used in typescritp
// // Array is collection of statement and collection of memory location for store memory address of variables in one data type and one variable name.
// var studentname:string[]=["hussnian","mulazam","asad","ajaz","ali","sultan","talha"]
// studentname[7]="sunny"
// console.log(studentname);
// console.log(studentname.length);
// var sunnyJanjua:string[]=["ali","hussnain","ahmad","talha","rahman","mulazam","sultan"]
// console.log(sunnyJanjua);
// sunnyJanjua.push("zeshan")
// // Where we used push keyword in typescript
// sunnyJanjua.pop();
// sunnyJanjua.unshift("sunny")
// // Used shift keyword.
// sunnyJanjua.shift();
// console.log(sunnyJanjua);
// // We used unshift keyword in array function.
// sunnyJanjua.unshift("umair")
// console.log(sunnyJanjua);
// // Wer used splice in array function.
// var sunnyJanjua:string[]=["ali","hussnain","ahmad","talha","rahman","mulazam","sultan"]
// sunnyJanjua.splice(1,1,"Programming make a good life")
// console.log(sunnyJanjua,sunnyJanjua.length);
// Write a program having an array of todos if the todos are in odd delete on from the centre of array otherwise remove two todos from the conter of the array?
// var todosarray:string[]=["ali","awais","afzal","hussnain","mulazam","sunny janjua"]
// if(todosarray.length%2==0)
// {
//     todosarray.splice(3,2)
//     console.log(todosarray);
// }
// else
// {
//     todosarray.splice(2,1)
//     console.log(todosarray);
// }
// A program that display table and two number add numtiply nad divide.
// var numb1:number=12;
// var numb2:number=54;
// var numb:number=1;
//using while loop
// while(numb<=10)
// {
//     console.log("I Love You WARDA.I really love you");
//     numb++
// }
// var sum=numb1+numb2;
// var average=(numb1+numb2)/2;
// var multiplication=numb1*numb2;
// console.log(sum);
// console.log(average);
// console.log(multiplication);
// var numb3:number=5;
// var i:number;
// using for loop
// for(i=1; i<=10; i++)
// {
//     console.log(numb3,"*",i,"=",numb3*i);
// }
// Using function in program
// function index( num:number ,num1:number ,num3:number)
// {
//     var result:number;
//     var result=num*num1*num3;
//     return result;
// }
// console.log(index(54,65,54));
// var printnumber:string[]=["ali","hussnain","talha"]
// console.log(printnumber);
// printnumber.push("Warda is my only and only my")
// console.log(printnumber); 
// var cleanestCities:string[] = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for (var i = 0; i <= 4; i++)
// if ("Islambad" == cleanestCities[i]) 
// {
//  console.log("It's one of the cleanest cities"); 
// }
// else
// {
//  console.log("Not clean city");
//  }
//  // --Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// var Names:string[]=["Ali","Ahmad","Wali"];
// function Modified_Array(Names:string[],index:number,New_Name:string):string[]
// {
//     Names.splice(index,0,New_Name);
// return Names;
// }
// var Arraay:string[]=Modified_Array(Names,1,"Sultan");
// console.log(Arraay);
// console.log();// For New Line 
// //-- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
// var Shopping_Cart:string[]=["2-Lux Soap","1kg-Rice","2_Dozen-Egg"];
// function Add_Item(Shopping_Cart:string[],index:number,New_Thing:string)
// {
//     if(index>=0 && index<Shopping_Cart.length)
//     {
//     Shopping_Cart.splice(index,0,New_Thing);
//     console.log(Shopping_Cart);
//     }
//     else
//     {
//         console.log("Invalid Index")
//     }
// }
// function Remove_Item(Shopping_Cart:string[],index:number)
// {
//     if(index>=0 && index<Shopping_Cart.length)
//     {
//         Shopping_Cart.splice(index,1);
//         console.log(Shopping_Cart);
//     }
//     else
//     {
//         console.log("Invalid Index")
//     }
// }
// function Update_Item(Shopping_Cart:string[],index:number,New_Thing:string)
// {
//     if(index>=0 && index<Shopping_Cart.length)
//     {
//     Shopping_Cart.splice(index,1,New_Thing);
//     console.log(Shopping_Cart);
//     }
//     else
//     {
//         console.log("Invalid Index")
//     }
// }
// // Test Function 
// Add_Item(Shopping_Cart,0,"Tooth Paste");
// Remove_Item(Shopping_Cart,1);
// Update_Item(Shopping_Cart,2,"1_Dozen-Egg");
// console.log();// For New Line 
// // - Write a program that uses a while loop to print the first 25 integers.
// var count:number=1;
// while(count<=25)
// {
//     console.log(count);
// count++;
// }
// console.log();// For New Line 
// //-- - Write a program that uses a while loop to print the first 10 even numbers.
// var i:number=1;
// var count:number=0;
// while(i<=50)
// {
//     if(i%2==0 )
//     {
//         count++;
//         console.log(count+" Even Number-> "+i);
//         if(count==10)
//         {
//             break;
//         }
//     }
// i++;
// }
// console.log();// For New Line 
// //--- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function Calculate_Factorial(Value:number)
// {
// if(Value>=0)
// {
// var i:number=1;
// var fact:number=1;
// while(i<=Value)
// {
// fact=fact*i;
// i++;
// }
// return fact
// }
// else
// {
//    return -1;
// }
// }
// var result:number=Calculate_Factorial(5);
// if(result>=0)
// {
//     console.log("Your Answer Of Factorial Is : "+result)
// }
// else
// {
//     console.log("Kindly Enter Positive Number!.")
// }
// console.log();// For New Line 
// //-- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
// var Array_Marks:number[]=[12,13,-2,12,-3,31];
// var SizeofArray =Array_Marks.length;
// var i:number=0;
// while(i<SizeofArray)
// {
// if(Array_Marks[i]<0)
// {
//     Array_Marks.splice(i,1);
// }
// i++; 
// }
// console.log("Your Answer After Removing Negative Number : "+Array_Marks);
// console.log();// For New Line 
// //-- - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array
// var array:number[]=[1,2,3,4,5];
// function Sum_of_Array(array:number[]):number
// {
// var i:number=0;
// var sum:number=0;
// var sizearray:number=array.length;
// while(i<sizearray)
// {
// sum=sum+array[i];
// i+=1;
// }
// return sum
// }
// var TotalSum:number=Sum_of_Array(array);
// console.log("Sum Of Array "+TotalSum);
// console.log();// For New Line 
// //-- - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature
// var Temp_In_Celcius:number[]=[40,38,39,30,25];
// var Temp_In_Fahrenheit:number[]=[];
// var i:number=0;
// while(i<Temp_In_Celcius.length)
// {
//     Temp_In_Fahrenheit[i]= (Temp_In_Celcius[i] * 9/5) + 32 ;
//     i++;
// }
// console.log("Array Of Temp in Celcius "+Temp_In_Celcius);
// console.log("Array Of Temp in Cel To Fahrenheit "+Temp_In_Fahrenheit);
// console.log();// For New Line 
// "use strict";
// //problem 1
// var cel = 37;
// var far = 212;
// console.log("conterting celcious to farenheit:\n");
// var f = (cel * 9) / 5 + 32;
// var c = (far * 5) / 9 - 32;
// console.log("temp in celcious=", cel);
// console.log("cel to far= ", f);
// console.log("temp in farenheit=", far);
// console.log("far to cel= ", c);
// //problem 2
// var days = 234;
// var rd = days % 7;
// var w = (days - rd) / 7;
// console.log("entered num of days", days);
// console.log("entered days =\n", w, " weeks\t", rd, " days");
// //problem 3
// var days = 234;
// var rd = days % 7;
// var w = (days - rd) / 7;
// console.log("entered num of days", days);
// console.log("entered days =\n", w, " weeks\t", rd, " days");
// //problem 4
// var p1 = 110;
// var p2 = 50;
// console.log("price of product 1 before discount:\t", p1, "\nprice of product 2 before discount:\t", p2);
// if (p1 >= 100 || p2 >= 100) {
//     var dis = p1 * 0.1;
//     p1 = p1 - dis;
// }
// if (p1 <= 100 || p2 <= 100) {
//     var dis2 = p2 * 0.05;
//     p2 = p2 - dis2;
// }
// console.log("\nprice of product 1 after discount:\t", p1);
// console.log("\nprice of product 2 after discount:\t", p2);
// //problem 5
// var age1 = 7;
// var age2 = 17;
// var age3 = 29;
// if (age3 > 20) {
//     console.log("adult");
// }
// else if (age2 >= 13 && age2 <= 19) {
//     console.log("teenager");
// }
// else if (age1 == 0 && age1 <= 12) {
//     console.log("child");
// }
// //problem 6
// var temp = 17;
// if (temp < 27) {
//     console.log("You should wear some warm clothes..\n");
// }
// else
//     console.log("Its' gettinging warmer outiside....Warm clothes might not be a good option");
// //problem 7
// var num = 120;
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log(num, " is divisible by 3 and 5");
// }
// else if (num % 3 == 0) {
//     console.log(num, " is divisible by 3");
// }
// else if (num % 5 == 0) {
//     console.log(num, " is divisible by 5");
// }
// // problem 8
// var year = 2016;
// if (year % 100 != 0 && year % 4 == 0) {
//     console.log(year, " is a leap year");
// }
// // problem 9
// var day = 1;
// if (day == 1) {
//     console.log("monday");
// }
// else if (day == 2) {
//     console.log("tuesday");
// }
// else if (day == 2) {
//     console.log("wednesday");
// }
// else if (day == 4) {
//     console.log("thursday");
// }
// else if (day == 5) {
//     console.log("friday");
// }
// else if (day == 6) {
//     console.log("saturday");
// }
// else if (day == 7) {
//     console.log("sunday");
// }
// else {
//     console.log("invalid input");
// }
// //problem 10
// var units = -17;
// var priceOfunit = 40;
// var calculated = (units * priceOfunit);
// if (units >= 0 && units <= 100) {
//     // formula to add tax
//     var billCalculation = calculated + (10 / 100) * calculated;
//     console.log(`Total units Consumed: ${units} and total bill with 10% tax:${billCalculation}`);
// }
// else if (units > 100 && units <= 200) {
//     // formula to add tax
//     var billCalculation = calculated + (15 / 100) * calculated;
//     console.log(`Total units consumed: ${units} and total bill with 15% tax: ${billCalculation}`);
// }
// else if (units > 200 && units <= 500) {
//     var billCalculation = calculated + (15 / 100) * calculated;
//     console.log(`Total units consumed ${units} and total bill with 25% tax: ${billCalculation}`);
// }
// else {
//     var billCalculation = calculated + (35 / 100) * calculated;
//     console.log(`Total units consumed ${units} and total bill with 35% tax: ${billCalculation}`);
// }
// //problem 1
// var cel=37;
// var far=212;
// console.log("conterting celcious to farenheit:\n");
// var f= (cel*9)/5+32;
// var c= (far*5)/9-32;
// console.log ("temp in celcious=",cel);
// console.log("cel to far= ",f);
// console.log ("temp in farenheit=",far);
// console.log("far to cel= ",c);
// //problem 2
// var days=234;
// var rd=days%7;
// var w=(days - rd)/7;
// console.log("entered num of days",days);
// console.log("entered days =\n",w," weeks\t",rd," days");
// //problem 3
// var days=234;
// var rd=days%7;
// var w=(days - rd)/7;
// console.log("entered num of days",days);
// console.log("entered days =\n",w," weeks\t",rd," days");
// //problem 4
// var p1=110;
// var p2=50;
// console.log("price of product 1 before discount:\t",p1,"\nprice of product 2 before discount:\t",p2);
// if (p1>=100||p2>=100){
//     var dis =p1*0.1;
//     p1=p1-dis;
// }
// if(p1<=100||p2<=100){
//     var dis2=p2*0.05;
//     p2=p2-dis2;
// }
// console.log("\nprice of product 1 after discount:\t",p1);
// console.log("\nprice of product 2 after discount:\t",p2);
// //problem 5
// var age1=7;
// var age2=17;
// var age3=29;
// if (age3>20){
//     console.log("adult");
// }
// else if(age2>=13 && age2<=19){
//     console.log("teenager");
// }
// else if (age1==0 && age1<=12){
//     console.log("child");
// }
// //problem 6
// var temp = 17;
// if (temp<27){
//     console.log("You should wear some warm clothes..\n");
// }
// else
// console.log("Its' gettinging warmer outiside....Warm clothes might not be a good option");
// //problem 7
// var num =120;
// if (num%3==0 && num%5==0){
//     console.log(num," is divisible by 3 and 5");
// }
// else if (num%3==0){
//     console.log(num, " is divisible by 3");
// }
// else if(num%5==0){
//     console.log(num, " is divisible by 5");
// }
// // problem 8
// var year = 2016;
// if (year%100!=0 && year%4==0){
//     console.log(year ," is a leap year");
// }
// // problem 9
// var day =1;
// if (day==1){
//     console.log("monday");
// }
// else if (day==2){
//     console.log("tuesday");
// }
// else if (day==2){
//     console.log("wednesday");
// }
// else if (day==4){
//     console.log("thursday");
// }
// else if (day==5){
//     console.log("friday");
// }
// else if (day==6){
//     console.log("saturday");
// }
// else if (day==7){
//     console.log("sunday");
// }
// else {
//     console.log("invalid input");
// }
// //problem 10
// var units= -17;
// var priceOfunit = 40 ;
//  var calculated = (units * priceOfunit) ;  
// if( units >= 0 && units <= 100){
//   // formula to add tax
//   var billCalculation = calculated + (10 / 100) * calculated ;
//   console.log(`Total units Consumed: ${units} and total bill with 10% tax:${billCalculation}`);
// }
// else if(units > 100 && units <= 200 ){
//   // formula to add tax
//   var billCalculation = calculated+(15/100)*calculated ;
//   console.log(`Total units consumed: ${units} and total bill with 15% tax: ${billCalculation}`);
// }
// else if(units > 200 && units <= 500){
//   var billCalculation =calculated+(15/100)*calculated ; 
//   console.log(`Total units consumed ${units} and total bill with 25% tax: ${billCalculation}`);
// }
// else{
//   var billCalculation = calculated + (35 / 100) * calculated ;
//   console.log(`Total units consumed ${units} and total bill with 35% tax: ${billCalculation}`);
// }
// var x= prompt("Where does the Pope live?");
// var correctAnswer = "Pakistan";
// if (x == correctAnswer ) 
// {
// alert("Correct!");
// } 
// else 
// {
// alert("Wrong!");
// }
// var age:number=12;
// var country:string="pakistan";
// if (country === "pakistan") {
//     if (age >= 18) {
//     console.log("Here is your ticket")
//     } else {
//     console.error("Age restriction")
//     }
//    } else {
//     console.log("Invalid country")
//    }
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++)
//  {
//  for (var j = 0; j < lastNames.length; j++) 
//  {
//  fullNames.push(firstNames[i] + lastNames[j]);
//  }
// }
// console.log(firstNames);
// console.log(lastNames);
// console.log(fullNames);
// var n:number=1;
//  while(n >= 5)
//  {
//  console.log("Entered while")
//  }
//  do
//  {
//  console.log("Entered do…while")
//  }
//  while(n>=5)
//  function test() // function definition
// {
//  console.log("function called")
// }
// test()
// console.log("TypeScript Number Properties: ");
// console.log("Maximum value that a number variable can hold: " ,Number.MAX_VALUE);
// console.log("The least value that a number variable can hold: ", Number.MIN_VALUE);
// console.log("Value of Negative Infinity: " , Number.NEGATIVE_INFINITY);
// console.log("Value of Negative Infinity:" ,Number.POSITIVE_INFINITY);
// var month=0
// if( month<=0 || month >12)
// {
//  month=Number.NaN
//  console.log("Month is "+ month)
//  }
// else
// {
//  console.log("Value Accepted..")
// }
// var num1=1225.55555597
// var val= num1.toExponential();
// console.log(val)
// var str = new String( "This is string" );
// console.log("str.constructor is:" ,str.constructor)
// function employee(id:number)
// {
//     return id;
// }
// console.log(employee(43));
// console.log("Employee 's Id: "+emp.id)
// console.log("Employee's name: "+emp.name)
// console.log("Employee's Email ID: "+emp.email)
// var num:number=54;
// var num1:number=543;
// var sum:number=num+num1;
// for(var i=1; i<=10; i++)
// console.log(i);
// console.log(sum);
// console.log("sunny janjua number is :" ,num1);
// let country:string="pakistan"
// let age:number=10;
// if (country === "pakistan") {
//  if (age >= 18) {
//  console.log("Here is your ticket")
//  } else {
//  console.error("Age restriction")
//  }
// } else {
//  console.log("Invalid country")
// }
// for (let i = 0; i < 3; i++) {
//     console.log("Hello World")
//    }
//    for (let i = 1; i <=4; i++) {
//     console.log("Hello World" , i)
//    }
//    var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// for (var i = 0; i <= 4; i++)
// {
// if ("Islambad" == cleanestCities[i]) {
//  matchFound = "yes";
//  console.log( "It's one of the cleanest cities");
// }
// }
// if (matchFound == "no") {
//  console.log( "It's not on the list");
// }
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
// var numElements = cleanestCities.length;
// var matchFound = false;
// for (var i = 0; i < numElements; i++) 
// {
//  if ("Islamabad" === cleanestCities[i]) 
//  {
//  matchFound = true;
//  console.log("It's one of the cleanest cities");
//  break;
//  }
// }
// if (matchFound === false) 
// {
//  console.log("It's not on the list");
// }
// Q1 --Write a program that uses filter to remove all negative numbers from an array of numbers
// let Array_OF_Numbers:number[]=[1,2,3,-4,6,-7]
// let updateArray=Array_OF_Numbers.filter((element)=>
// {  
// if(element>0)
// {
//    return element
// }
// });
// console.log("-------Q1 Solution--------");
// console.log();
// console.log("After Remove Negative number : "+updateArray);
// var array:number[]=[2,4,5,6,-8,-6,-7,88,44,66]
// var newArray=array.map((sunny)=>
// {
// if(sunny>0)
// {
// return sunny;
// }
// });
// console.log(newArray);
// //new array lines
// var array:number[]=[2,4,5,6,-8,-6,-7,88,44,66]
// var newArr=array.filter((sunny)=>
// {
// if(sunny>0)
// {
// return sunny;
// }
// });
// console.log(newArr);
// // Array for foreach loop
// var array:number[]=[2,4,5,6,-8,-6,-7,88,44,66]
// var newArra=array.forEach((sunny)=>
// {
//    console.log(sunny);
// });
// Write a program that make arrar[1,2,3,4,5] use map and make new array where each number is multiplying by 2.
// var new_array:number[]=[1,2,3,4,5,6,7,8,9];
// var maparray=new_array.map((sunny)=>
// {
// return sunny*2;
// });
// console.log(maparray);
// //Anothrer progam for this properity
// let Array_Number:number[]=[1,2,3,4,5];
// let New_Array=Array_Number.map((data)=>
// {
//    return data*2;
// });
// console.log(New_Array);
// // Given array of string [apple,banana,mango,cherry,date,grape] use filter method and find how fruits 
// //which contained five letter .
// var new_arr:string[]=["apple", "banana", "mango", "cherry", "date", "grape"];
// //where we use filter method and find five character fruits
// //Use arrow function in program
// var filterarray=new_arr.filter((sunny)=>{
// if(sunny.length>5)
// {
//    return sunny;
// }
// });
// console.log(filterarray);
// let Array_Of_String:string[]=["apple", "banana", "cherry", "date", "grape"];
// let update=Array_Of_String.filter((data)=>
// {
//    if(data.length>5)
//    {
//    return data;
//    }
// });
// console.log("-------Q3 Solution--------");
// console.log("More than 5 length of Fruit : "+ update);
// // write a arrar such as [1,2,3,5,6,7,8,9,10], in array we used map and filter both function and
// // find even number square  
// var my_array:number[]=[1,2,3,5,6,7,8,9,10];
// //we used filter first now
// var filtereven=my_array.filter((value)=>{
//    if(value%2==0)
//    {
//       return value;
//    }
// });
// //We use first map function of program
// var mapeven:any=filterarray.map((sunny:any)=>{
//       return sunny * sunny;
//    });
// for(var i=0; i<filterarray.length; i++)
// {
// console.log("Square of number is :",filtereven[i],"--->",maparray[i]);
// }
// console.log();
//Another way used
// var Arr:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even_number=Arr.filter((value)=>
// {
// if(value%2==0)
// {
//    return value;
// }
// });
// let square_even=even_number.map((data)=>
// {
// return data*data;
// });
// for(var i=0;i<even_number.length;i++)
// {
//    console.log(" Square of "+even_number[i]+ " -> "+square_even[i])
// }
//
//Q5--Given an array of temp
//eratures in Celsius [0, 10, 20, 30, 40], use the map method to
// create a new array where each temperature is converted to Fahrenheit using the formula
// (Celsius * 9/5) + 32.
//Q6--Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and
// filter methods together to create a new array containing the doubled values of odd numbers.
//Q7--Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
//  var new_array:number[]=[1,2,3,4,5,6,7,8,9,10];
//  var arr=new_array.filter((sunny)=>{
//    if(sunny%2==0)
//    {
//       return sunny;
//    }
//  });
//  var array=arr.map((warda)=>{
//    return warda*warda;
//  })
//  for(var i=0; i<arr.length; i++)
//  console.log(arr[i],"Values is :",array[i]);
//  //Q5--Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// let Array_Temp_In_Celsius:number[]=[0, 10, 20, 30, 40];
// let Temp_In_Fahrenheit=Array_Temp_In_Celsius.map((value)=>
// {
//    return (value * 9/5)+32;
// });
// console.log("Array Convert Celsius To Fahrenheit : "+ Temp_In_Fahrenheit);
// //this is my progamm is
// var array:number[]=[0, 20, 30, 40];
// var new_arr=array.map((ali)=>{
//    return (ali * 9/5)+32;
// });
// console.log("the new temperature is such as:"+new_arr);
var array = [3, 6, 9, 12];
var arr = array.filter((value) => {
    if (value % 2 != 0) {
        return value;
    }
});
var arra = arr.map((warda) => {
    return warda + warda;
});
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], "The value is :", arra[i]);
}
// Another way
let Random_Array = [3, 6, 9, 12, 15, 18];
let odd_number = Random_Array.filter((value) => {
    if (value % 2 != 0) {
        return true;
    }
});
let Double_odd = odd_number.map((data) => {
    return data + data;
});
console.log("-------Q6 Solution--------");
console.log();
for (var i = 0; i < odd_number.length; i++) {
    console.log("Double of " + odd_number[i] + " -> " + Double_odd[i]);
}
//Q7--Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let Array_Of_Name = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log("-------Q7 Solution--------");
console.log();
Array_Of_Name.forEach((val) => {
    console.log(val + "!");
});
console.log();
