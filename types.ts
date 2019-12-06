var myString: string;
myString = "Hello Worlds";
console.log(myString)

var mynum : number;
mynum = 3;
console.log(mynum)

var mybool : boolean;
mybool = true;
console.log(mybool)

var myarray : string[];
/*we can also define array of type string as 
var myarray : Array<string>
*/
myarray = ["Hello","world",myString]
console.log(myarray)


/*we can also define array of type string as 
var numarray : Array<number>
*/
var numarray : number[];
numarray = [1,2,3,4,mynum]
console.log(numarray)

//Tuple data type
//it will not work if we replace places of Kumail and 3, because it must
//match the pattern.But if we write Kumail,3,4,5, it will work , as it is following defined pattern.
var strnumTuple : [string,number]
strnumTuple = ["Kumail",3]
console.log(strnumTuple)

