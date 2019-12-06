//A function assigned to myNum which takes 2 arguments and sum them

var myNum = function(num1: number, num2: number): number {
  return num1 + num2;
};

console.log(myNum(2, 3));

//A function assigned to mystring which takes two string and concatinates them.
var mystring = function(num1: string, num2: string): string {
  return num1 + num2;
};
console.log(mystring("Hello", " World"));

//Void Type functions which return nothing

var myvooid = function(): void {
  console.log("Hello Void");
  return;
};
myvooid();
