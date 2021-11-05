
function changeObacity(x){
    x.style.opacity=".3";
}



function returnObacity(x){
    x.style.opacity="1";
}


//---------------------------------------------
//Lab7:


//Firstly we create a div element and append it into our body 
// so appendChild() will append the div as the last element in 
// the parent element which is body element

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//Secondly we create a span element and append it into our div 
//using again appendChild()

let newSpan = document.createElement("span");
newSpan.innerHTML=" &nbsp&nbsp Hello From Span, A Child of Div";
newDiv.appendChild(newSpan);

//Then, we create an image element and append it into our div 
// but using insertBefore(), this will make us choose where exactly 
// we want to append our child into parent which is our newDiv
//I decided to put our newImg before Our newSpan 
let newImg = document.createElement("img");
newImg.setAttribute("src","cat.gif");
newDiv.insertBefore(newImg,newSpan)



//difference between element.childNodes.length and element.children 
// is childNodes.length will count also text and comments
// in otherhand element.children will count only elements. 


// setTimeout(() => {
//     alert(" the children of our Div =  "+newDiv.childNodes.length)
// }, 2000);



//Remove the added img

//newDiv.removeChild(newImg);







