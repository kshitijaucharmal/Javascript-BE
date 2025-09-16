console.log("Hello world");

let obj = {
  val1 : 10,
  val2 : "20",
  val3 : "Kshitij",
  val4 : {
    test1 : "test1",

  }
};

console.log(obj);
console.log();
console.log(typeof (obj));
console.log(typeof (obj.val1));
console.log(typeof (obj.val2));
console.log(typeof (obj.val4));

// Anoymous function
let anon = function() { console.log("Anonymous function") };

test_func()

function test_func() {
  var a = 10;
  var b = 20;
  console.log(a, b);
}

// Arrow function
let arrow = () => { console.log("Arrow Function"); };

// IIFE (Immediate Invoke Function Expression)
((a, b) => {
  console.log("A:", a);
  console.log("B:", b);
  console.log("A + B:", a + b);
})(2, 4);

anon();
arrow()

let arr = [ 1, "Kshitij", null, test_func, true ];
arr.forEach((c) => {console.log(typeof (c))})

console.log();
console.log(typeof (arr));
console.log(arr);
console.log(2 + null);
console.log(2 + true);
console.log(2 + undefined);
console.log(typeof (2 + undefined));
console.log();

console.log(2 - "PICT");
console.log([] - 1);
console.log(2 - null);
console.log(2 - true);
console.log(2 - undefined);
console.log(typeof (2 - undefined));
console.log();

console.log(true * 2);
console.log(true * "PICT");
console.log(2 == "2");
console.log();

console.log(2 == 2);
// Checks only value
console.log(2 == "2");
// Checks datatype as well as value
console.log(2 === "2");
console.log();

console.log(0 == null);
console.log(0 === null);

console.log(-Infinity == null);
console.log(Infinity == null);

console.log(isFinite(null));

let a = 10;
console.log(`The number a value is = ${a}`);
