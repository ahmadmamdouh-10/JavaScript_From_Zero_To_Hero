var ans = document.querySelector("input");
ans.setAttribute("readonly", "true");

function EnterEqual() {
  var res = eval(ans.value);
  ans.value = res;
}

function EnterNumber(value) {
  ans.value += value;
}

function EnterOperator(operator) {
  ans.value += operator;
}

function EnterClear() {
  ans.value = "";
}
