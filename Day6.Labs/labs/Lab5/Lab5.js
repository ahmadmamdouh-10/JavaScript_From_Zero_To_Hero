var im = document.querySelector("img");
var current = 1;

function next(){
  current++;
  if (current > 6)
    current = 6;
    im.setAttribute("src", current + ".jpg");
  
}

function prev() {
  current--;
  if (current < 1) 
    current = 1;
    im.setAttribute("src", current + ".jpg");
  
}

var c;
function slideShow() {
  c = setInterval(function(){
      current++;
      if(current > 6)
      current = 1;

      if(current <1)
      current = 6;
      im.setAttribute("src", current + ".jpg");

},500)
}

var s;
function slideMouseOver() {
    s = setInterval(function(){
      current++;
      if(current > 6)
      current = 1;

      if(current <1)
      current = 6;
      im.setAttribute("src", current + ".jpg");

},1000)
}

function stop() {
  clearInterval(c);
}


function stopMouseOut() {
  clearInterval(s);
}



