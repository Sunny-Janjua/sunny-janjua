// import inquirer, { QuestionCollection } from "inquirer";
//     var result:QuestionCollection=[{
//         name:"num",
//         type:"number",
//         message:"Enter a value of number num:"
//     },
//     {
//         name:"num1",
//         type:"number",
//         message:"Enter a value of number num1:"
//     },
//     {
//         name:"num2",
//         type:"number",
//         message:"Enter a value of number num2:"
//     },
//     {
//         name:"operation",
//         type:"list",
//         choices:["+","-","*","/","%"]
//     }]
//     var answer=inquirer.prompt(result)
//     answer.then((answer)=>{
//         switch(answer.operation)
//         {
//             case "+":
//             console.log(answer.num+answer.num1+answer.num2);
//             break;
//             case "-":
//             console.log(answer.num-answer.num1-answer.num2);
//             break;
//             case "/":
//             console.log(answer.num/answer.num1/answer.num2);
//             break;
//             case "*":
//             console.log(answer.num*answer.num1*answer.num2);
//             break;
//             case "%":
//             console.log(answer.num%answer.num1%answer.num2);
//             break;
//             default:
//                 console.log("invalid number");
                
//             }
//         console.log("sunny",answer);
        
//     });
//     answer.catch((error)=>{
//         console.log("something went wrong",error);
        
//     })


import inquirer, { QuestionCollection } from "inquirer";

var result:QuestionCollection=[{
    name:"num1",
    type:"number",
    message:"Enter a number for input:"
},
{
    name:"num2",
    type:"number",
    message:"Enter a number for input:"
},
{
    name:"operators",
    type:"list",
    choices:["*","%","/","+","-"]
}];
var answer=inquirer.prompt(result)
answer.then((answer)=>{
    switch(answer.operators)
    {
        case "*":
        console.log(answer.num1*answer.num2);
        break;
        case "/":
        console.log(answer.num1/answer.num2);
        break;
        case "-":
        console.log(answer.num1-answer.num2);
        break;
        case "+":
        console.log(answer.num1+answer.num2);
        break;
        case "%":
        console.log(answer.num1%answer.num2);
        break;
        default:
            console.log("Invalid number");
            
        
    }
    console.log("Programming is my life");
  
})
answer.catch((error)=>{
    console.log("error",error);
    
});
console.log("Programming nake life easy");
