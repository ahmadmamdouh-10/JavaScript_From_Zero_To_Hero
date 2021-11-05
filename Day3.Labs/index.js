//LabA2

// function Rectangle(width, height) {
//   this.height = height;
//   this.width = width;
//   this.area = width * height;
//   this.perimeter = 2 * width + 2 * height;
//   this.info = function () {
//     console.log(
//       "rectangle height = " +
//         this.height +
//         ", rectangle width = " +
//         this.width +
//         "  ,area = " +
//         this.area +
//         "  ,perimeter= " +
//         this.perimeter
//     );
//   };
// }

// var rec = new Rectangle(2, 3);
// rec.info();

//=====================================================

//LabA3

// function onlyTwoPara() {
//   if (arguments.length > 2 || arguments.length < 2) {
//     throw RangeError("this function only accept two parameters");
//   } else {
//     console.log(arguments[0] + " ," + arguments[1]);
//   }
// }

// onlyTwoPara(1,2);

//=====================================================

//LabA4

// function add() {
//   if (arguments.length == 0) {
//     throw new Error("this function cannot be without parameters");
//   } else {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       if (isNaN(arguments[i]) || arguments[i] == "") {
//         throw new Error("this function accept only numbers");
//       } else sum += arguments[i];
//     }
//   }
//   return sum;
// }

// console.log(add("asdad"));

//=====================================================

//LabA5

function reverseOne() {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    newArr += arguments[i];
  }
  reversedArr = parseInt(newArr.split("").reverse().join(""));

  return reversedArr;
}

// var res = reverseOne(9,8,7,6,5,4,3,2,1);
// console.log(res);

function reverseTwo() {
  var newArr = Object.values(arguments);
  var res = newArr.reverse();

  return res;
}

// var res = reverseTwo(9,8,7,6,5,4,3,2,1);
// console.log(res);

//=====================================================

//LabA6

function isFunction(val) {
    return val && {}.toString.call(val) === "[object Function]";
  }



function getBaseObj() {
  return {
    name: "Mohamed",
    id: 5,
    addAccessorsForAllDataProps() {
      for (var originalPropName in this) {
        if (!isFunction(this[originalPropName])) {
          // Renames the data property with an underscore
          var dataPropName = `_${originalPropName}`;
          // Binds existing value to renamed data property
          this[dataPropName] = this[originalPropName];
          // Passes originalPropName to be used as accessorPropName
          addAccessors(this, originalPropName, dataPropName);
        }
      }

      // Accessor prop can't have same name as data prop
      function addAccessors(obj, accessorPropName, dataPropName) {
        Object.defineProperty(obj, accessorPropName, {
          get: function () {
            console.log("(getter invoked)"); // Just proving accessors get called
            return obj[dataPropName];
          },
          set: function (val) {
            console.log("(setter invoked)");
            obj[dataPropName] = val;
          },
        });
      }
    },
  };
}



var baseObj = getBaseObj(),
user = { name: "Ali", age: 10 };

baseObj.addAccessorsForAllDataProps.call(user);

user.age = 11;
console.log(user.age);

