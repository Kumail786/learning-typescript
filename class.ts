class User {
  name: string;
  email: string;
  age: number;
  //if we put private before properties it will not be able to access from outside the class
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("User Created " + this.name);
  }
  register() {
    console.log(this.name + " Registered");
  }
}

//now we have access to all the properties of class User in kumail
// console.log(kumail.age)

/*Concept of Inheritance 

If we inherit class from another class we have all the properties of the super like inthis case we write
Member extends User so Member class has access to all public/protected properties of class User.
First we call constructor and then we call super in which we write what properties we are going to use from super class
*/
class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, age, email);
    this.id = id;
  }
  register() {
    super.register();
  }
}
var kumail = new User("Kumail", "kum@gmail.com", 20);
kumail.register();
