//Lab1.1: 

// do{
//     var response = prompt("Enter a Message, Please!");
// }while(!response)

// for(var i=1;i<=6;i++){
//     document.write("<h"+ i + ">" + response +"</h"+ i + ">");
// }


//================================================================


//Lab1.2: 

// var sum = 0,
// num;

// do{
//     num = parseInt(prompt("Enter a Number"));
//     sum += num;
// }while(!num || isNaN(num) || sum < 100)

// alert(sum);

//================================================================

//Lab1.3: 

// var response = prompt("Enter a string contains ( e ) Letter");
// function charCount(str, letter)
// {
//     var countLetter=0;
//     for(var position = 0; position < str.length; position++)
//     {
//         if(str.charAt(position) == letter)
//         {
//             countLetter++;
//         }
//     }
//     return countLetter;
// }

// alert("Count of ( e ) letter in your string is= " + charCount(response, 'e'));

//================================================================

//Lab1.4: 

// function eligibleTrack(str)
// {
//     switch(str)
//     {
//         case "FCI":
//         case "CS":
//         case "1":
//             alert("You’re eligible to Programing tracks");
//             break;
//         case "Engineering":
//         case "Eg":
//         case "2":

//             alert("You’re eligible to Network and Embedded tracks");
//             break;
//         case "Commerce":
//         case "C":
//         case "3":

//             alert("You’re eligible to ERP and Social media tracks");
//             break;
//             case "4":
//                 alert("You’re eligible to SW fundamentals track");
//         default:
//             alert("Your choice not from the given list");
//     }   
// }


// do{
//     var response = prompt("Choose your Faculty : 1) FCI 2) Engineering 3) Commerce 4) Other ");
// }while(!response)

//     eligibleTrack(response);
//================================================================

//Lab1.5: 
//Write a function that takes 2 parameters: start and end number and print odd numbers between the given 2 numbers.  [start: 2 , end: 10] 
//                                                                                                                          {3,5,7,9}

// function oddBetweenTwoNumbers(start,end)
// {
//     for(i=start; i<= end; i++)
// {
//     if(i % 2 != 0)
//     document.write( i + "<br>")
// }
// }

// do{
//     var num1 = prompt("Enter your first Number:")
//     var num2 = prompt("Enter your Second Number:")
// }while(isNaN(num1) || isNaN(num2))

// oddBetweenTwoNumbers(num1,num2);

//================================================================

//1.6.Try debuggers in the browser and log some debugging messages to the console log.

//Done