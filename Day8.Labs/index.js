// var ele1 = document.getElementById("fName");
// var ele2 = document.getElementById("userPassword");
// var ele3 = document.getElementById("userRPassword");

// function whenSelect(){
//     ele1.style.border="solid 5px";
//     ele1.style.borderColor="blue";
// }

// function whenUnSelect(){
//     ele1.style.border="solid 1px black";
// }

// document.getElementById("userPassword").innerText = "abc";
// document.getElementById("userPassword").innerText = "adc";

// var pass = document.getElementById("userPassword").value;
// var rPass = document.getElementById("userRPassword").value;

// function myFunc(){
//     var img = document.getElementById("img_right_wrong");
//     var img2 = document.getElementById("img_right_wrong2");
//     var img3 = document.getElementById("img_right_wrong3");

//     pass = document.getElementById("userPassword").value;
//     rPass = document.getElementById("userRPassword").value;
//     var regex1 = /^[A-Za-z]{3,}$/;

//         if(pass === rPass){
//             img2.src = 'valid.png';
//             img3.src = 'valid.png';
//         }else
//         {
//             img2.src = 'notvalid.png';
//             img3.src = 'notvalid.png';
//         }

//         if(regex1.test(ele1.value)){
//             img.src = 'valid.png';
//         }

//         if(!regex1.test(ele1.value)){
//             img.src = 'notvalid.png';
//         }

//         if(regex1.test(ele1.value) && pass === rPass){
//             img.src = 'valid.png';
//             img2.src = 'valid.png';
//             img3.src = 'valid.png';
//             this.submit();
//         }
// }

// document.forms[0].addEventListener("submit", myFunc)

//---------------------------------------------------------
//Lab2: in the index2.html

//---------------------------------------------------------
//Lab3: JSON OBJECT //DONE
//Lab4: In json File
//  (a) Yes, JSON holds NULL and boolean value[true,false].
//   (b) The difference between XML and JSON

/**
 * JSON:
 * - stands for JavaScript Object Notation. It's an open-standard file
 * format that is used for browser-server communications. it's a language
 * data format.
 * - Has a file extension of .json
 * - has a "Data interchange" file format
 * - has been extended from JavaScript
 * - complexity level regarding learning and understanding is easier than XML.
 * - is data-oriented
 * - doesn't provide display properties
 * - Supports array
 * - is less Secured
 * - JSON Files are more human-readable
 * - JSON only supports text and numbers data types.
 * XML:
 * - stands for Extensible Markup Language. It's a set of rules that
 * help users encode documents in a human-readable format and machine-readable.
 * - has a file extension of .xml
 * - has a "markup language" file format
 * - has been extended from SGML (Standard Generalized Markup Language)
 * - is document-oriented
 * - does provide display properties
 * - doesn't supports array
 * - is more Secured
 * - XML Files are less human-readable
 * - XML supports more varities like text, numbers, images, charts, graphs.
 */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users");
xhr.send();

var res = {};
var stdNames = [];

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
    res = JSON.parse(xhr.response);
    console.log(res);

    for (var i = 0; i < res.data.length; i++) {
      stdNames[i] = res.data[i].first_name;
    }

    // var fname = res.data[0].first_name;
    // var lname = res.data[0].last_name;
    // var img = res.data[0].avatar;

    // var ele1 = document.createElement("h1");
    // ele1.innerText= "Name: "+  fname + " " +  lname;
    // document.body.appendChild(ele1);

    // var ele2 = document.createElement("img");
    // ele2.src = img;
    // document.body.appendChild(ele2);
  }
});

function display() {
  var txt = document.getElementById("enterID");
  for (key of res.data) {
    if (key.id == txt.value) {
      var ele1 = document.createElement("h1");
      var ele2 = document.createElement("img");
      ele1.innerText = "Name: " + key.first_name + " " + key.last_name;
      ele2.src = key.avatar;
      document.body.appendChild(ele1);
      document.body.appendChild(ele2);
    }
  }
}

var option;
var btn;
var options = [];


document.getElementById("generate").onclick = function () {
  var select = document.createElement("select");
  select.name = "students";
  select.id = "stds";

  for (var val of stdNames) {
    option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }
  var label = document.createElement("label");
  label.innerHTML = "choose your student: ";
  label.htmlFor = "stds";

  document.body.appendChild(label).appendChild(select);

  btn = document.createElement("input");
  btn.id = "stdInfo";
  btn.type = "button";
  btn.value = "show";


  console.log(select);

  
  btn.addEventListener("click", function () {
    for (key of res.data) {
      if (key.first_name == select.value){
        var ele1 = document.createElement("p");
        var ele2 = document.createElement("img");
        ele1.innerText =
          "Thanks for choosing, here is the information about your choosed student: ID: " +
          key.id +
          ", Full Name: " +
          key.first_name +
          " " +
          key.last_name +
          ", Email: " +
          key.email;
        ele2.src = key.avatar;
        document.body.appendChild(ele1);
        document.body.appendChild(ele2);
      }
    }
  });

  document.body.appendChild(btn);
};


