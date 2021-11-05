//Lab1

// var arr = ["Tip 1: Faster array indexing: Consider an array [10, 9, 8, 7, 6], if we want to assign a value of this array to any variable, our go-to method would be const a = array[0]. If we would like to assign multiple variables, it would be tedious to keep on doing so.",
//  "Tip 2:  Defining functions: The idea is to put some commonly or repeatedly task together and make a function so that instead of writing the same code again and again for different inputs, we can call that function. Everyone must have used functions like this in JavaScript.",
//   "Tip 3: Defining functions in a single line: Now this trick is really cool. If you know Python, you probably know the lambda function which behaves as an arbitrary function and is written in a single line. Well, we don’t use lambda function in JavaScript, but we can still write one-liner functions. Say we would like to calculate the product of two numbers a and b, we can do it in a one-line script. We need not to specifically write the return statement as this way of defining already means that it will return the output on its own.",
//    "Tip 4: Boolean: While every programming language, there are only two Boolean value True and False. JavaScript takes it a bit further by introducing a feature enabling the user to create bools. Unlike True and False, these are commonly referred as “Truthy” and “Falsy” respectively. To avoid confusion, all the values except 0, False, NaN, null, “” are defaulted as Truthy. This extended use of bools help us in checking a condition efficiently.", 
//    "Tip 5: Filtering Boolean: Sometimes we may want to filter out all the bools, say the “Falsy” bools( 0, False, NaN, null, “”) from an array, this can be done by using map and filter functions in conjunction. Here, it uses the Boolean keyword to filter out Falsy values.",
//     "Tip 6: Creating completely empty objects: If asked to create an empty object in JavaScript, our first go-to method will use in curly braces and assign it to a variable. But this is not a blank object as it still has object properties of JavaScript such as __proto__ and other methods. There is a way around this to create an object without any existent object properties. For this, we use a dictionary and assign it to a null value with its __proto__ being undefined.",
//      "Tip 7:  Truncating an array: Although .splice() method is widely used to cut or remove specific portions of an array, but it has a worst-case time complexity of O(n). There exists a better alternative for removing elements from the end of an array. It uses the .length property of the array to do so. ", 
//      "Tip 8: Merging objects: The introduction of spread operator(…) allows user to easily merge to or more objects which was previously achieved by creating a separate function for doing the same.", 
//      "Tip 9:  Faster conditional checking: Checking and looping through conditions is an essential part of every programming language.", 
//      "Tip 10: Using regex to replace all characters: Very often, one comes to a situation where every occurrence of a character or a sub-string but unfortunately, .replace() method replaces only one instance of occurrence. We can get around this by using regex with .replace() method."];


// var r = Math.round(Math.random()*9); 

// document.write("<h1> Tip of the Day </h1> <br>" +arr[r]);

//==================================================================================

//Lab2
//Make a button that display the current date and time in local format on the page.

// var btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);
// btn.onclick=function(){displayDate()};



// function displayDate(){
//     document.getElementById('date_time_button').innerHTML = Date();
// }

//==================================================================================

//Lab3 
// Ask the user to enter his Email,
// and use function strings (Don’t use RegExp) to check if the Email contains @, and not in the first or last index.



// var str = prompt("Enter Your Email!")
// var newStr = str.substring(1,str.length-1);
// var res = newStr.includes("@")
// if(res)
// {
//     alert("Your Email contains @, it's correct!");

// }else
// {
//     alert("Your Email doesn't contains @, it's not correct, refresh page and try again!");
// }

//==================================================================================

//Lab4 

// var regexFullName= /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

/*
 * (^[A-Za-z]{3,16}) starts with only letters at least min 3 to max 16
 * ([ ]{0,1}) then space between two words
 * ? Quantifier make what next is optional
 * then repeated pattern
 */

// var regexEmail=/\S+@\S+\.\S+\.\eg/;


// do
// {
//     var fullName = prompt("Please Enter your Full Name... Note: your Full Name MUST be as the example: Ahmed Mamdouh Ismael");
// }while(!regexFullName.test(fullName))

// do
// {
//     var email = prompt("Please Enter your email.. Note: your Email must be as the example: test@test.test.eg");
// }while(!regexEmail.test(email))


// if(regexFullName.test(fullName) == true &&
// regexEmail.test(email) === true)
// {
//  alert("Welcome " + fullName
//      + " your Email: " + email + " is valid, thanks!")
// }


//==================================================================================

//Lab5

//DONE in index.html file

//==================================================================================

//Lab6

// var arr=[60, 100,10,15,85];

// //(a):
// var sortedArray = arr.sort((a,b)=> b - a);
// document.write("<br> My Array after Desending Sort: ( " + sortedArray + " )");

// //(b):
// var max = arr.find(myArrMax);
// document.write("<br>The Highest Grade: "+ max);

// function myArrMax()
// {
//      return sortedArray[0];
// }

// //(c):
// var filteredArray = arr.filter(x=>x<60);
// document.write("<br>Filtered Array: ("+ filteredArray+")");


//==================================================================================

//Lab7

var arr = [
    {Name: "Moataz", Degree: 95},
    {Name: "Ahmed", Degree: 50},
    {Name: "Badr",  Degree: 90},
    {Name: "Ali",  Degree: 55},
    {Name: "Naira", Degree: 100},
    {Name: "Habiba", Degree: 90}
    ];


//(a):
//find the first studentName whose degree >=90 && <=100

// var x = arr.find(function(arr){
//     if(arr.Degree >= 90 && arr.Degree <= 100){
//         return arr;
//     }
// });
// document.write(x.Name); // return Badr 


// document.write("<br>")


//(b)
// var y = arr.filter(function(arr){
//     if(arr.Degree < 60){
//         return arr.Name;
//     }
// });


// for(var i=0;i<y.length;i++)
// {
//     document.write(y[i].Name+"<br>"); //return Ahmed , Ali 
// }


//(c)
// arr.push({Name: "Karim", Degree: 100});

//     for(key in arr)
//     {
//         document.write("Student Name: "+ arr[key].Name+ ", his degree is: " + arr[key].Degree +"<br>")
//     }


// difference between for in :  for of 
// for in : loops through properties of object
// for of : loops through values of an iterable object.

//(d)
// arr.pop();


// for(key of arr)
//     {
//         document.write("Student Name: "+ key.Name+ ", his degree is: " + key.Degree +"<br>")
//     }



//(e)

// var sortedArray = arr.sort(function(a,b){
//     var nameA = a.Name.toUpperCase();
//     var nameB = b.Name.toUpperCase();

//     if(nameA < nameB){
//         return -1;
//     }
//     else if(nameA > nameB){
//         return 1;
//     }else{
//         return 0;
//     }
// });

// console.log(sortedArray);



//(f): //Bonus

// arr.splice(2,0,{Name: "Sarah", Degree: 77},{Name: "Zizo", Degree: 44});
// console.log(arr);


//(g): //Bonus
// //expected to delete ali and add Sarah
// arr.splice(3,1,{Name: "Sarah", Degree: 77});
// console.log(arr);


//==================================================================================

//Lab8:

// var birthDate = prompt("Please Enter your Birth Date as the following format(DD-MM-YYYY) ex: 22-01-1999");

// var btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);
// btn.onclick=function(){checkDateFormat(birthDate)};


// function checkDateFormat(birthDate)
// {
//     var objDate,
//     day,
//     month,
//     year;

//     //check if the date is 10 charachers
//    //check if the date third and sixth character should be '-'

//     if(birthDate.length !== 10 || birthDate.substring(2,3) !== '-' || birthDate.substring(5,6) !== '-')
//     {
//         alert("Wrong Format!")
//     }
//     else
//     {
//         day = birthDate.substring(0,2) - 0; 
//         month = birthDate.substring(3,5) - 1; //bc month start with 0
//         year = birthDate.substring(6,birthDate.length) - 0;
        
//         objDate = new Date();
//         objDate.setDate(day);
//         objDate.setMonth(month);
//         objDate.setFullYear(year);

//         document.write("your Birth date is: " + objDate.getDate()+"-"+ objDate.getMonth()+"-"+objDate.getFullYear())
//     }

// };

//==================================================================================

//Lab9

// var res = parseInt(prompt("Enter value between 10 and 20","15"));
// try{
// if(res < 10)
// throw "less than expected";
// else if(res > 20)
// throw new RangeError("out of range");
// else
// alert("value withit accepted range. thank you!");
// }
// catch(e)
// {
//     if(e instanceof RangeError)
//     {
//          console.log("this is a range error");
//          console.log(e.name);
//          console.log(e.message);
//     }
//     else if(e == "less  than expected")
//     {
//         console.log("this is custom error");
//         console.log(e.name);
//         console.log(e.message);
//     }
// }
// //rest of code
// console.log("done");



//Using Finally to handle error in catch


// var res = parseInt(prompt("Enter value between 10 and 20","15"));
// try{
// if(res < 10)
// throw "less than expected";
// else if(res > 20)
// throw new RangeError("out of range");
// else
// alert("value withit accepted range. thank you!");
// }
// catch(error)
// {
//     console.logg("catch error occured");
//     console.log("catch block excuted after caught an error");
// }
// finally{

// console.log("done");
// }



//onError

// onerror = errorHandle;

// function errorHandle(msg,url,l,col,err)
// {
//     console.log(msg);
//     console.log(url);
//     console.log(l);
//     console.log(col);
//     console.log(err);
//     return false;   //suppression appears or not 
// }
// var res = parseInt(prompt("Enter value between 10 and 20","15"));

// if(res < 10)
// throw "less than expected";
// else if(res > 20)
// throw new RangeError("out of range");
// else
// alert("value within accepted range. thank you!");

// console.log("done");



//==================================================================================

//Bonus:











