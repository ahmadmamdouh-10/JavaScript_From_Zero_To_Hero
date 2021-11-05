//Lab1:


// var NumSequenceList = function (_start, _end, _step) {
//     var arr = [];
//     var start = _start ? _start : 1;
//     var end = _end ? _end : 10;
//     var step = _step ? _step : start++;

//     Object.defineProperties(this, {
//         start: {
//           value: start,
//           configurable: false,
//         },
//         step: {
//           value: step,
//           configurable: false,
//         },
//         end: {
//           value: end,
//           configurable: false,
//         },
//       });

//     function getStart() {
//         return start;
//     }

//     function getEnd() {
//         return end;
//     }

//     function getStep() {
//         return step;
//     }

//     function getArray(){
//         return this.arr;
//     }


//     var GetStartVal = getStart.bind(this);
//     var GetEndVal = getEnd.bind(this);
//     var GetStepVal = getStep.bind(this);

//     this.GetStartExec = function () {
//         return GetStartVal();
//     }

//     this.GetEndExec = function () {
//         return GetEndVal();
//     }
//     this.GetStepExec = function () {
//         return GetStepVal();
//     }

//     this.createArray = function(){
//         var arr = [];
//         for(var i = start; i<end;i++){
//             if(i%step == 0){
//                 arr.push(i);
//             }
//         }
//         this.arr = arr;
//         return arr;
//     }


//     this.pushVal = function(val){
//         var start = getStart();
//         var end = getEnd();
//         var arr = getArray();
//         if(isNaN(val) && value !== ""){
//             throw "the sequence list should be only numbers";

//         }else{
//             if(val > start && val < end){
//                 arr.push(val);
//             }else{
//                 throw "number should be within the start and end sequence";
//             }
//         }
//     }

//     this.pullVal = function(){
//         this.arr.pop();
//     }

//     this.displayContent = function(){
//         return this.arr;
//     }

//     this.createArray();
// }

// var seq1 = new NumSequenceList(1,20,2);
// console.log(seq1.displayContent());
// seq1.pullVal();
// console.log(seq1.displayContent());
// seq1.pushVal(18);
// console.log(seq1.displayContent())

//---------------------------------------------------------

//Lab2:

var Shape = function(){
    if(constructor === "Shape")
    throw "you are not allowed to make an instance from this class";
}

var Rectangle = function (h, w) {
    // if(Rectangle.count >= 1)
    // throw new RangeError("you cannot create more than one instance from this class ");

  this.height = h ? h : 2;
  this.width = w ? w : 2;

 Rectangle.count++;
 Rectangle.getNumInst = function(){
     return this.count;
 }
}

Rectangle.count=0;

Rectangle.prototype.getArea = function(){
    var area = this.height * this.width;
    return area;
}
Rectangle.prototype.getperimeter = function(){
    var perimeter = 2 * (this.height + this.width);
    return perimeter;
}

Rectangle.prototype.toString = function(){
    var area = this.getArea();
    var perimeter = this.getperimeter();
    return "this rectangle: height =" +this.height + ", width ="  + this.width + ", area =" + area + ", perimeter = " + perimeter + ".";
}

rec1 = new Rectangle(5,4);
rec2 = new Rectangle(5,4);
rec3 = new Rectangle(5,4);
rec4 = new Rectangle(5,4);

var res = rec1.getArea();
console.log("Area = " + res);

var res = rec1.getperimeter();
console.log("Perimeter = " + res);

var res = rec1.toString();
console.log(res);

var res = Rectangle.getNumInst();
console.log(res);

Rectangle.prototype = Object.create(Shape.prototype);

var Square = function(l){
    if(Square.count >= 1)
    throw new RangeError("you cannot create more than one instance from this class ");

    this.height = l;
    this.width = l;

    Square.count++;
    Square.getCount = function(){
        return this.count;
    }
}

Square.prototype = Rectangle.prototype;

Square.prototype.getArea = function(){
    var area = this.height * this.width;
    return area;
}

Square.count = 0;

var sq1 = new Square(5);

res1 = sq1.getArea();
console.log("Area = " + res1);

//var sq2 = new Square(5);
//var sq3 = new Square(5);

var res2 = Square.getCount()
console.log(res2);

//---------------------------------------------------------

//Lab3:
