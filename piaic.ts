// Write a program that make arrar[1,2,3,4,5] use map and make new array where each number is multiplying by 2.


var new_array:number[]=[1,2,3,4,5,6,7,8,9];

var maparray=new_array.map((sunny)=>
{
return sunny*2;

});
console.log(maparray);

//Anothrer progam for this properity


let Array_Number:number[]=[1,2,3,4,5];

let New_Array=Array_Number.map((data)=>
{
   return data*2;
});
console.log(New_Array);
 // Given array of string [apple,banana,mango,cherry,date,grape] use filter method and find how fruits 
//which contained five letter .

var new_arr:string[]=["apple", "banana", "mango", "cherry", "date", "grape"];

var filterarray=new_arr.filter((sunny)=>{
if(sunny.length>5)
{
   return sunny;
}
});
console.log(filterarray);
//Another way
let Array_Of_String:string[]=["apple", "banana", "cherry", "date", "grape"];

let update=Array_Of_String.filter((data)=>
{
   if(data.length>5)
   {
   return data;
   }
});

console.log("-------Q3 Solution--------");
console.log("More than 5 length of Fruit : "+ update);


 // write a arrar such as [1,2,3,5,6,7,8,9,10], in array we used map and filter both function and
// find even number square  

var my_array:number[]=[1,2,3,5,6,7,8,9,10];
var filtereven=my_array.filter((value)=>{
   if(value%2==0)
   {
      return value;
   }
});
var mapeven:any=filterarray.map((sunny:any)=>{
      return sunny * sunny;
   });
for(var i=0; i<filterarray.length; i++)
{
console.log("Square of number is :",filtereven[i],"--->",maparray[i]);
}
console.log();



//Another way used
var Arr:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even_number=Arr.filter((value)=>
{
if(value%2==0)
{
   return value;
}
});

let square_even=even_number.map((data)=>
{
return data*data;
});
for(var i=0;i<even_number.length;i++)
{
   console.log(" Square of "+even_number[i]+ " -> "+square_even[i])
}


//Q5--Given an array of temp
//eratures in Celsius [0, 10, 20, 30, 40], use the map method to
// create a new array where each temperature is converted to Fahrenheit using the formula
// (Celsius * 9/5) + 32.

let Array_Temp_In_Celsius:number[]=[0, 10, 20, 30, 40];

let Temp_In_Fahrenheit=Array_Temp_In_Celsius.map((value)=>
{

   return (value * 9/5)+32;

});
console.log("Array Convert Celsius To Fahrenheit : "+ Temp_In_Fahrenheit);

//this is my progamm is

var array:number[]=[0, 20, 30, 40];

var new_arr=array.map((ali)=>{

   return (ali * 9/5)+32;
});
console.log("the new temperature is such as:"+new_arr);

//Q6--Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and
// filter methods together to create a new array containing the doubled values of odd numbers.


var array:number[]=[3,6,9,12];
var arr=array.filter((value)=>{
   if(value%2!=0)
   {
      return value;
   }
});

var arra=arr.map((war)=>{
   return war+war;
});
for(var i=0; i<arr.length; i++)
{
   console.log(arr[i],"The value is :",arra[i]);
   
}

// Another way

let Random_Array:number[]=[3,6,9,12,15,18]

let odd_number=Random_Array.filter((value)=>
{
if(value%2!=0)
{
   return true;
}
});

let Double_odd=odd_number.map((data)=>
{
return data+data;
});
console.log("-------Q6 Solution--------");
for(var i=0;i<odd_number.length;i++)
{
   console.log("Double of "+odd_number[i]+ " -> "+Double_odd[i])
}


//Q7--Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let Array_Of_Name:string[]= ["Alice", "Bob", "Charlie", "David", "Emily"];


console.log("-------Q7 Solution--------");
console.log();
Array_Of_Name.forEach((val)=>
{
console.log(val+"!");

});
console.log();