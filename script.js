// // variables 

// // 1.var
// // 2.let
// // 3.const

// // 1.var - global scope, function scope

// var a = 10  // intizialation & declaration
// a=20 // re-declaration
// var a = "hello" // re-initialization & re-declaration


// console.log(a);

// // 2. let - block scope

// let b = 50 // intialization & declaration
// b = 60 // re-declaration
// // let b = 70 


// console.log(b);

// // 3. const - block scope 

// const c = 100 // intialization & declaration
// // c=200 // re-declaration not allowed 
// // const c = "hi" // re-initialization not allowed

// console.log(c);


// // printing statement 

// // 1.console.log();
// // 2. alert();
// // 3.confirm()
// // 4. prompt();
// // 5. document.writeln();

// // 1. explain  

// // console.log("hello world"); // prints to console

// // alert("hi guys"); // pops up an alert box

// // confirm("Are you sure?"); // pops up a confirmation box


// // prompt("Enter your name"); // pops up a prompt box to take input


// // document.writeln("hello world"); // writes to the document

// let userName = "hello world";
// userName = "hi guys";
// userName = "hello world again";

// console.log(userName);

// // console method 

// let userAge = 10;

// console.log(userAge);
// console.error(userAge)
// console.warn(userAge);
// console.clear()


// // DataTypes in JavaScript 

// // 1.primitive DataType
// // 2.Non primitive DataType

// // 1. Primitive Data Types

// // 1.Number
// // 2.String
// // 3.Boolean
// // 4.Undefined
// // 5.Null

// let num;

// // let uNamed = prompt("Enter your name");

// // console.log(typeof(0));
// // console.log(typeof("abc"));
// // console.log(typeof(false));
// // console.log(typeof(num));
// // console.log(uNamed)

// // 2. non primitive Data type 

// // 1.array 
// // 2.object 
// // 3.function 
// // 4.date 

// // 1.array 


// let array1 = ["apple","orange","guava","banana","cherry"]

// console.log(array1); // all
// console.log(array1[1]);  // any one
// console.log(array1[array1.length-1]); // last value

// // 2. object 

// let obj1 = {
//     ename : "abc",
//     erole : "developer",
//     esalary : 50000,
//     fruit : ["apple","orange"],
//     vechile : ["bicycle"]
// }

// console.log(obj1);
// console.log(obj1.erole);
// console.log(obj1.ename);

// console.clear()


// // operators 

// // 1.Arithmetic operator
// // 2.Assignment operator
// // 3.relational or comparision operator
// // 4.logical operator


// // 1.arthmetic operator 

// // addition         +
// //subraction        -
// // multiplication   *
// // division         /
// // modulus          %
// // exponencial      **
// // increment        ++  two types : 1. post increment , 2. pre increment
// // decrement        --  two types : 1. post decrement , 2. pre decrement


// console.log(10+10);
// console.log(10-10);
// console.log(10*10);
// console.log(10/10);
// console.log(10%11);
// console.log(10**10);
// console.clear();

// // increment 

// let int = 10

//  int = int++

// console.log(int);


// let numbers = 20; // 20  ||  not  pre // 20  not
// let numbers1 = ++numbers // 20++ = 20+1 = 21  || 20  // pre ++20 = 1+20 = 21  ++numbers = ++20 = 21

// console.log(numbers,numbers1);


// let a1 = 12  //a1 - 12        // b1 - not       // c1 - not
// let b1 = ++a1 // a1 - ++12 = 13 // b1- ++a1 = 13 // c1 - not
// let c1 = ++b1 // b1 - ++b1 = ++13 = 14            // c1 = ++b1 = ++13 = 14

// console.log(a1,b1,c1);


// let d1 = 1
// let e1 = --d1
// let f1 = ++e1

// console.log(d1,e1,f1); //v- d1=0,e1-1,f1-1
// //  //vi - d1 -0 ,e1 -1, f1 -1


// let num1 = 20  // (1), 20 = 21 // (2)-not = 20

// let num2 = num1++ + --num1 // (1),20++  =21 - ++num1 = ++21 = 22

// //(2) - 20++ + ++20 = 21 + 21 = 42 
// console.log(num1,num2);
hkj














