//lets consider a function
var myfunction = function(todo: { name: string; age: string }): void {
  console.log(todo.name + " : " + todo.age);
};
var mytodo = { name: "Kumail", age: "25" };
myfunction(mytodo);
//what if we have 10 to 20 or 50 100 fields in todo? for efficiency we make interfaces of types of the data.

interface Todo {
  name: string;
  age: string;
}

var myinterfacedfunction = function(todo: Todo): void {
  console.log(todo.name + " : " + todo.age);
};
var mytodo = { name: "Kumail Raza", age: "45" };
myinterfacedfunction(mytodo);
