//Lab1:

var ele1 = document.getElementById("fName");
var ele2 = document.getElementById("userPassword");
var ele3 = document.getElementById("userRPassword");

function whenSelect(){
    ele1.style.border="solid 5px";
    ele1.style.borderColor="blue";
}

function whenUnSelect(){
    ele1.style.border="solid 1px black"; 
}


// document.forms[0].addEventListener("submit",function(){
//     var smalls = document.getElementsByTagName("small");
//     for(var i=0;i<smalls.length;i++){
//         smalls[i].textContent="";
//         smalls[i].style.color="red";
//     }
//     event.preventDefault();
//     var regex1 = /^[A-Za-z]{3,}$/;
//     var pass = document.getElementById("userPassword").value;
//     var rPass = document.getElementById("userRPassword").value;
//     if(regex1.test(ele1.value) && pass === rPass ){
//         this.submit();
//     }else{
//         if(!regex1.test(ele1.value)){
//             document.getElementById("reqFName").textContent = "invalid name"
//             ele1.style.background = "grey";
//         }

//         if(pass !== rPass){
//             document.getElementById("reqRPass").textContent = "password and repeated password should be the same";
//             ele2.style.background = "grey";
//             ele3.style.background = "grey";
//         } 
//     }
// })


//-------------------------------------------------------
//Lab2 : using event.preventDefault(); in the previous answer;

//-------------------------------------------------------
//Lab3: HTML Validation:

//-------------------------------------------------------
var pass = document.getElementById("userPassword").value;
var rPass = document.getElementById("userRPassword").value;


function myFunc(){
    var img = document.getElementById("img_right_wrong");
    var img2 = document.getElementById("img_right_wrong2");
    var img3 = document.getElementById("img_right_wrong3");

    pass = document.getElementById("userPassword").value;
    rPass = document.getElementById("userRPassword").value;
    var regex1 = /^[A-Za-z]{3,}$/;
    
        if(pass === rPass){
            img2.src = 'valid.png';
            img3.src = 'valid.png'; 
        }else
        {
            img2.src = 'notvalid.png';
            img3.src = 'notvalid.png';
        }

        
        if(regex1.test(ele1.value)){
            img.src = 'valid.png';
        }

        if(!regex1.test(ele1.value)){
            img.src = 'notvalid.png';
        }

        if(regex1.test(ele1.value) && pass === rPass){
            img.src = 'valid.png';
            img2.src = 'valid.png';
            img3.src = 'valid.png'; 
            this.submit();
        }
}

document.forms[0].addEventListener("submit", myFunc)