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
}

var kumail = new User("Kumail", "kum@gmail.com", 20);
//now we have access to all the properties of class User in kumail
console.log(kumail.age)
