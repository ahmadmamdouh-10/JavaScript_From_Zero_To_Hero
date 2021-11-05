var resNumber = /[0-9]/gi;

var visitCount=1;
var cookie;
function setCookie(Name,Value)
{
    cookie = document.cookie;
    document.cookie = Name + "=" + Value + ";visited="+visitCount+"; Path=/;";
}

function getCookie(Name)
{
    var arr = document.cookie.split(";")

    for (let i = 0; i < arr.length; i++) {

        var cookieName = arr[i].split("=");

        if(Name === cookieName[0].trim())
        {       
            return arr[i].trim();
        }
    }
    return null;
}

function getCount(){
    if(cookie != null && cookie!=undefined)
    {
        console.log("hey")
        visitCount ++;
    return visitCount;
    }
    else{
        console.log("hey2")
        return visitCount;
    }
}


function hahCookie(Name) {
    return firstName = getCookie(Name)?true:false;
}

function DeleteCookie(Name) {
    var firstName = getCookie(Name);
    if(firstName)
    {
        var dt = new Date();
        dt.setFullYear(2000);
        document.cookie = firstName +";expires="+ dt+"; Path=/;visited=1";
    }
}