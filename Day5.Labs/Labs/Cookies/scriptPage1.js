


function click_Submit()
{
    var gender = document.getElementsByName('myGender');
    for (let i of gender) {
    if (i.checked) {
        var genderId = i.id;
    }
    }

    var genderChecked = document.getElementById(genderId);
    var Fcolor = document.getElementById("myFcolor");
    var MyName = document.getElementById("myName");
    var MyAge = document.getElementById("myAge");

    var img="";
    if(genderChecked.id === "male")
    {
        img = 1;
    }else if(genderChecked.id === "female")
    {
        img = 2;
    }

    setCookie("myGender",img,10);
    setCookie("myFcolor",Fcolor.value,10);
    setCookie("UserName",MyName.value,10);
    setCookie("myAge",MyAge.value,10);
}