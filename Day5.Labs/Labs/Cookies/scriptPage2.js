

var body = document.documentElement.children[1];

var gender = getCookie("myGender").split("=");
var color = getCookie("myFcolor").split("=");
var userName = getCookie("UserName").split("=");
var age = getCookie("myAge").split("=");
var visitCount = getCount();

var img = document.createElement("img");
var imgName =  gender[1].trim()+".jpg";
img.setAttribute("src", imgName);
img.style.float = "left";
img.style.width = "300px";
img.style.height = "300px";

body.append(img);

var p = document.createElement("p");
p.innerText = "My Name Is "+userName[1]+" and My Age Is "+age[1]+ "your time of visit my website is "+ visitCount;
p.style.color = color[1];
p.style.paddingTop = "100px";
body.append(p);



