


// variables 

// 1.var
// 2.let
// 3.const

// 1.var - global scope, function scope

var a = 10  // intizialation & declaration
a=20 // re-declaration
var a = "hello" // re-initialization & re-declaration


console.log(a);

// 2. let - block scope

let b = 50 // intialization & declaration
b = 60 // re-declaration
// let b = 70 


console.log(b);

// 3. const - block scope 

const c = 100 // intialization & declaration
// c=200 // re-declaration not allowed 
// const c = "hi" // re-initialization not allowed

console.log(c);


// printing statement 

// 1.console.log();
// 2. alert();
// 3.confirm()
// 4. prompt();
// 5. document.writeln();

// 1. explain  

// console.log("hello world"); // prints to console

// alert("hi guys"); // pops up an alert box

// confirm("Are you sure?"); // pops up a confirmation box


// prompt("Enter your name"); // pops up a prompt box to take input


// document.writeln("hello world"); // writes to the document

let userName = "hello world";
userName = "hi guys";
userName = "hello world again";

console.log(userName);

// console method 

let userAge = 10;

console.log(userAge);
console.error(userAge)
console.warn(userAge);
console.clear()


// DataTypes in JavaScript 

// 1.primitive DataType
// 2.Non primitive DataType

// 1. Primitive Data Types

// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null

let num;

// let uNamed = prompt("Enter your name");

// console.log(typeof(0));
// console.log(typeof("abc"));
// console.log(typeof(false));
// console.log(typeof(num));
// console.log(uNamed)

// 2. non primitive Data type 

// 1.array 
// 2.object 
// 3.function 
// 4.date 

// 1.array 


let array1 = ["apple","orange","guava","banana","cherry"]

console.log(array1); // all
console.log(array1[1]);  // any one
console.log(array1[array1.length-1]); // last value

// 2. object 

let obj1 = {
    ename : "abc",
    erole : "developer",
    esalary : 50000,
    fruit : ["apple","orange"],
    vechile : ["bicycle"]
}

console.log(obj1);
console.log(obj1.erole);
console.log(obj1.ename);

console.clear()


// operators 

// 1.Arithmetic operator
// 2.Assignment operator
// 3.relational or comparision operator
// 4.logical operator


// 1.arthmetic operator 

// addition         +
//subraction        -
// multiplication   *
// division         /
// modulus          %
// exponencial      **
// increment        ++  two types : 1. post increment , 2. pre increment
// decrement        --  two types : 1. post decrement , 2. pre decrement


console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%11);
console.log(10**10);
console.clear();

// increment 

let int = 10

 int = int++

console.log(int);


let numbers = 20; // 20  ||  not  pre // 20  not
let numbers1 = ++numbers // 20++ = 20+1 = 21  || 20  // pre ++20 = 1+20 = 21  ++numbers = ++20 = 21

console.log(numbers,numbers1);


let a1 = 12  //a1 - 12        // b1 - not       // c1 - not
let b1 = ++a1 // a1 - ++12 = 13 // b1- ++a1 = 13 // c1 - not
let c1 = ++b1 // b1 - ++b1 = ++13 = 14            // c1 = ++b1 = ++13 = 14

console.log(a1,b1,c1);


let d1 = 1
let e1 = --d1
let f1 = ++e1

console.log(d1,e1,f1); //v- d1=0,e1-1,f1-1
//  //vi - d1 -0 ,e1 -1, f1 -1

console.clear();

let num1 = 20 //21  // (1), 20 = 21 // (2)-not = 20

let num2 = num1++ - --num1 // (1),20++  =21 - ++num1 = ++21 = 22

//(2) - 20++ = 21 ^ num1 = default, --21 = 20,
// 20 + --21 = 20+20 = 40
console.log(num1,num2);



let num4 = 2 // 2 //3 //3
let num5 = num4++ + num4  // 3
console.log(num4,num5); // 2 - 3 = -1

console.clear();


//Assignment operator


let age = 20

age += 20 // age = age+20

console.log(age);

let age1 = 15
let additionVal = 15

age1+=additionVal // 30
additionVal%=age1 // additionVal % age1

console.log(age1);
console.log(additionVal);


// relational operator or comparision operator

// operator       meaning           example           result

//    <              less then        5<2               false
//    >            greater then       5>2               true
//    <=           less then equal    5<=2              false
//    >=           greater then equal 5>=2              true
//    ==           loosy type equal   5==5 , 5=="5"     true,true
//    ===          strictly type equal 5===5, 5==="5"   true,false
//    !=           loosy not equal    5!=5,5!="5",5!=6  false,false,true
//    !==          strictly not equal 5!=="5" , 5!=="5" true


console.log(5==="5");// a false
console.log(5!="6");//c false - true
console.log(5!==5); // g false
console.log(6>=5);//h true
console.log(7<7);//k false
console.log(8==8);//p true
console.log(9!=="9");//s true
console.log("1"===1);//vis false
console.log("5"==="5");//viv true





// logical operators 

// And  &&   (5>5)&&(5==5) =(false true = false)  true true = true, true false = false

// or   ||   (5>5)&&(5==5)=(false true = true)   true false = true

// not  !    !(5>2)=(false)     true=false, false = true



let age3 = 18

console.log(age3 >= 18 && age3<=30 );

// console.log(18>=18 && 18<=30) = true


// concatenation 

let one = "hello"
let two = "world"

let result = one +" "+ two

console.log(result);

//template string


let three = "welcome"
let four = "javascript"

let final = `title :- ${three} ${four}`

console.log(final);

console.clear();


// type conversion 

// 1. implicit convesion 
// 2. explicit conversion 


// 1. implicit conversion 

// string 

//"string anything" = "string"

console.log(typeof(12+"1"));
console.log(typeof(true+"1"));
console.log(typeof(null+"1"));
console.log(typeof(undefined+"1"));
console.log(typeof([1,2]+"1"));
console.log(typeof({1:2}+"1"));


// Number 

console.log(typeof(1+true));
console.log(typeof(1+false));
console.log(typeof(1+"false"));
console.log(typeof(1+null));
console.log(typeof(1+[1,2]));
console.log(typeof(1+{1:2}));
console.log(typeof(1+undefined));


// Boolean

console.log(typeof(true+10));
console.log(typeof(true+undefined));
console.log(typeof(true+null));
console.log(typeof(true+"1"));
console.log(typeof(true+[1,2]));
console.log(typeof(true+{1:2}));

console.clear();


// 2.Explicit conversion 

console.log(10+Number("10"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number([]));
console.log(Number({1:2}));


console.log(Boolean("")); 
console.log(Boolean("1"));
console.log(Boolean(-1));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(true));
console.log(Boolean(false));


let hello = 33
let hello1 = 33

console.log(Boolean(hello+hello1));

// example 

// let age5 = 25
// let expeience = 3

// console.log((age5>=25)&&(expeience<=2));

// let str = Number("123")
// let num6 = 10

// let add = str + num6
// console.log(add);

// flow control statement 

// 1.conditional statement 
// 2. looping statement 



console.clear();

// 1. conditional statement 

// 1. if 
// 2.if-else 
    // 3.if-else else-if 
// 4.nested if 
// 5.switch 
// 6.ternary operator 


// 1. if 

// (condition) = true = allow


if(5!=="5"){
    console.log("if condition is work");
}


// if-else
    
    // let age5 = prompt("enter age")
    
    // if(age5>=18){
        //     console.log("your is eligible for vote");
        
        // }else{
            //     console.log("your not eligible for vote");
            
// }

//if-else else-if

// if(){

// }else if(){

// }else if(){

// }else{
    
    // }
    
    
    let hour = 20
    
if(hour>=1 && hour<=6){
    console.log("early morning");
    
}else if(hour>=7 && hour<=12){
    console.log("morning");
    
}else if(hour>=13 && hour <= 16){
    console.log("afternoon");
}else if(hour>=17 && hour<= 19){
    console.log("evening");
    
}else{
    console.log("night");   
}



// nested if 

// let age6 = prompt("enter your age :- ")
// let height = prompt("enter your height:- ")
// let weight = prompt("enter your weight : - ")


// if(age6>=18){
    //     if(height>=150){
//         if(weight>=55){
    //             alert("you are eligible , congradulation!!!");
    
    //         }else{
        //             alert("your weight is not enough");
        
        //         }
        //     }else{
            //         alert("your height is not enough")
            //     }
            // }else{
                //     alert("your age is not enough");
    
                // }
                
                


                // switch 
                
                // switch(){
                    //     case value : statement ; break;
                    //     case value : statement ; break;
                    // }
                    
let trafficlight = "green"

switch(trafficlight){
    case "red" : console.log("stop the vechile"); break;
    case "yellow" : console.log("start the vechile"); break;
    case "green" : console.log("go..."); break;  
}


// ternary operator 

// condition ? "statement" : "statement"


let pwdInput = false;

pwdInput ? console.log("welcome to website") : console.log("password incorrect");


// // concatenation 

// let str1 = "hello"
// let str2 = "world"

// let result1 = str1 +" "+ str2 + " javascript"

// console.log(result1);

// //template string 


// let result2 = `1sfdsdafd ${str1} ${str2}`

// console.log(result2);

// 2. looping 

// 1. for loop
// 2.while loop
// 3.do while 
// 4.for of loop 
// 5.for in loop 



// 1.for loop 

// syntex 

// for(let intialization;condition;iteration){
//     statement
// }


for(let a=1;a<=10;a++){
    console.log(`${a}*20=${a*20}`);  
}
// `${a}*2=${a * 2}`;

// inti a=1  con:1<=10 = true iter 1++=2
// inti a=2  con :2<=10 = true iter 2++ = 3
//inti a=10  con :10<=10 = true ite 10++=11
// inti a=11  con :11<=10 =false //

//console.log(10); - 1,2..10

console.clear();

// while loop 

// syntex 

// intizialiation 
// while(condition){
//     statement;
//     iteration;
// }

// let val = 10
// while(val>=20){
//     console.log(val);
//     val--
// }


// do while 

// // intizialiation 
// do{
//     statement ; iteration
// }
// while(condition)


// let num7 = 0
// do{
//     console.log("using while loop"); num7++
    
// }
// while(3<=num7)


// for of

let fruit = ["apple","orange","banana"]

for(let wow of fruit){
    console.log(wow);
    
}

// for in 

let obj3 = {
    eName : "abc",
    phno : 34567,
    role : "developer"
}

for(let ready in obj3){
    console.log(obj3[ready]);
    
}


for(let re in fruit){
    console.log(fruit[re]);
    
}


let l = [12,21]
console.log(l);

console.clear();


// function 

function abc(a,b){
    console.log("hello world");
    console.log(`name :-${a}, age:-${b}`);  
}

abc("abc",22)


let person = {
    name1 : "john",
    age : 41
}

function print(){
    console.log("hello",person.name1);
    
}

print()


// default value fix in parameter 

let person1 = {
    name1 : "livi",
    age : 33
}

function print1(){
    console.log("hello",person1.name1,"age is",person1.age); 
}
print1()



function print2(a,b="22"){
    console.log(`hello ${a} age is ${b}`);  
}

print2("livi")


function findValReactAngle(l,b=2){
    return l*b
}

let value = findValReactAngle(100);

console.log(value);



//var - global scope,function scope
//let - block scope
//const - block scope

// console.log(a11);
// var a11 = 10


// console.log(a12);
// let a12 = 10


// console.log(a13);
// const a13 = 10




function checkScope(){
    if((5===5)&&(8>=7)){
        let functionLet = "i am a let variable"
        const functionConst = "i am a const variable"
        console.log(functionLet);
        console.log(functionConst); 
    }else{
        var functionVar = "i am a var variable"
        console.log(functionVar);
    }
    
}

checkScope()

var a4 =20
let b4 =30
const c4 = 40

function accessGlobalScope(){
    var a5 = 100
    var b5 = 200
    var c5 = 300
console.log(a5+b5+c5);
}

console.log(a4+b4+c4);

accessGlobalScope()


// function types 

// 1. named function

namedFunction()
 function  namedFunction(){
    console.log("named function");
 }
 
// 2. annonymous function 

var annonymousFunction = function(){
    console.log("annonymous function");
}
annonymousFunction()


//3. arrow function 

var arrowFunction = ()=>{
    console.log("arrow function");
    
}
arrowFunction()



// paremeter 

let annFun = function(a,b=20){
    console.log(`${a} ${b}`)
}
annFun(10)

let firstName = "jackie"

let arrowFun = (fname)=>{
    return fname
}

let n = arrowFun(firstName)

console.log(n);


// higher order function & 
// callback function 

function function1(){
    console.log("i am a higher order function");
}
function function2(){
    console.log("i am a callback function"); 
}

function1(function2())

function add(callback,a,b){ // callback = sub, a=20 , b=40
    console.log(a+b); // 60
    callback(20,20) // callback(20,20) = sub(20,20)
}
function sub(num1,num2){// num1=20, num2 = 20
    console.log(num1-num2);  // 0
}


add(sub,20,40)

console.clear();

// uncurrying function 

function sub(a,b,c){
    console.log(a+b+c);
}

sub(1,2,3)


// currying function

function mul(a){
    return function(b){
        return function(c){
            console.log(a*b*c);
            
        }
    }
}

mul(10)(20)(30)



// self invoke function  (IIFE)

// (function(a,b){
//     alert(`${a} sales going on..., year of ${b}th`)
// })("amazon",87)


// generator function

function*genFun(){
    yield "first value"
    yield "second value"
    yield "theird"
    yield "fourth"
}

let generator = genFun()

console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next().done);
console.log(generator.next().value);
console.log(generator.next());



// Data structure 

// 1.array 
// 2.object 
// 3.function 
// 4.string 

// 1.array 

let flavour = ["vennila",,"choco","butter scotch","pista",123,true,[1,2],{role:"developer"}]

console.log(flavour);
// console.log(flavour[1]);
// console.log(flavour[flavour.length-1]);


// * multiple value store
// * different type value it can hold
// * homogeneous - same datatype
// * hetro geneous - different datatype
// * flexible - decrease and increase also acceptable


//2.object 

let human = {
    eye : "vision",
    ear : "hear",
    brain : "thinking",
    hand : "do work",
    eyeCount : 2,
    isItLive : true,
    work : ["all","developer","tester","devops"],
    hello : {pName : "abc",age : 22},
    dd : function(){
        console.log("type?"); 
    }  
}

console.log(human);
console.log(human.ear);
console.log(human.work[2]);
console.log(human.hello.pName);
human.dd()





let vechile = {
    "vechile Type" : "four-wheeler",
    price : 200000,
    ["fuelType"] : "petrol"
}

console.log(vechile["vechile Type"]);
console.log(vechile.fuelType);



let UName = "navi"
let age5 = 100

let spider = {
    name1 : UName,
    age6 : age5
}

console.log(spider);

console.clear();


// for of - string,array,function
// for in - object

let arr = [10,20,30,40]

for(let i = 0;i<arr.length;i++){
    console.log(arr[i]) 
}


// for of

let str = "javascript"
let arr4 =["one","two",3,4]
function*one1(){
    yield 1
    yield 2
    yield 3
    yield 4
} 
let storeGen = one1()

for(let one of storeGen){
    console.log(one);  
}

// for in - object

let person2 = {
    uname : "navi",
    age : 22,
    isAlive : true
}

for(let two in person2){
    console.log(person2[two]);
    
}


console.clear();


//ES6 edition 

// spread operator & rest operator

// spread operator

// use :- array and object

// array = [...], object={...}

//two array or object merge and clone


//rest operator

// function

// function = (...)

// multiple arugment store in parameter


// 1.spread operator 

// 1. array 

let KnownLaunguage = ["html","css","js","react","jquary"]
let willknow = ["mangoDb","sql","angular"]

let package = [...KnownLaunguage,...willknow,"full Stack"]

console.log(package);

// 2.object 

let obj11 = {
    empId : "ab123",
    empName : "abc",
    empRole : "developer"
}

let obj12 = {
    empId1 : "ab456",
    empName1 : "john",
    empRole1 : "fullstack"
}


let employee = {...obj11,...obj12}

console.log(employee);
console.log(employee);



function restopr(a,b,...c){
    console.log(a,b,c);
    
}

restopr(1,2,3,4,5,6)



// Destructuring 

let game = ["gta","god of war","need for race","temple run"]

let carGame = game[2]

console.log(carGame);

// destracture :-

let [z1,,,z4] = game

console.log(z1,z4);




let mulVal = [10,20,30,2,3,4,,55,6,77,4,32,22,3]

let [y1,y2,y3,y4,...y5] = mulVal

console.log(y5);


let nested = ["cloths","shoes",["laptop","mobilePhone",["router","switches"]]]
console.log(nested[2][2][0]);

let [x1,x2,[x3,x4,[x5,x6]]] = nested 

console.log(x5);


console.clear();

//Array methods manipulate

// 1.push - last add 
// 2.pop  - last remove

// 3.unshift - first add
// 4.shift -   first remove

// 5.splice


let normalArray = [2,3,4,5]

normalArray.push(6,7,8,9)
normalArray.pop()
normalArray.unshift(0,1)
normalArray.shift()

// normalArray.splice(startingIndex,deleteCount,Adding)
console.log(normalArray);
normalArray.splice(2,3,4,6,8,9)

console.log(normalArray);



// arr method of merge

// 1.concat() 
// 2.slice ()
// 3.flat ()
// 4.fill()


let first = [1,2,3,4]
let second = [5,6,7,8]

// 1.concat 

let thrird = first.concat(second,9,10)

console.log(thrird);


//2.slice 

let sliceMethod = [1,2,3,4,5,6,7,8,9,10]

let newSlice = sliceMethod.slice(5,9)


console.log(newSlice);


//3.flat 

let nested1 = [1,2,3,[4,[5,[6,[7]]]]]

console.log(nested1)

let avoidNested = nested1.flat(Infinity)

console.log(avoidNested);


//4.fill 

let normalArr = [1,2,3,4,5,6,7,8]

normalArr.fill("hi",0,5) // (val,sI,eI)

console.log(normalArr);


console.clear();

let ex =[1,2,3,4]

ex[1] = "number"
ex[2] = "number"

console.log(ex);

let first1 = [1];
let middle = ["number","number"];
let last = [4];

let ex1 = first1.concat(middle,last);

console.log(ex1);

let ex2 = [1,2,3,4]
let a6 = "number" 
let b6 = "number" 
let valex2 = [ex2[0],...[a6,b6],ex2[3]]
console.log(valex2);

ex2.splice(0,0,0) //(si,deleteCount,addingcount)

let ex3 = [1,2,3,4]

ex3.splice(1,2,2,3,4,5)

console.log(ex3);

let ex4 = [1,2,3,4] 
ex4.fill("number",1,3)

console.log(ex4);


// sort()

let randomNum = [1,2,3,4,117,112,118,5,"a","A"]

randomNum.sort()
randomNum.reverse()

console.log(randomNum);


// reverse()

let reverseVal = [1,2,3,4,1]

reverseVal.reverse()

console.log(reverseVal);

//includes()

let inc = [10,20,30,40]

let incVal = inc.includes(20)

console.log(incVal);


// arr to str

// join

let alb = ["a","b","c","d"]

let albVal = alb.join()

console.log(albVal);


// toString

let number1 = [1,2,3,4,5]

let number1Val = number1.toString()

console.log(number1Val);


//indexOf

let inarr = [10,30,20,30,40,30]

let inarrVal = inarr.indexOf(30)

console.log(inarrVal);

//lastIndexOf 

let lastVal = inarr.lastIndexOf(30,0)

console.log(lastVal);

console.clear();


// higher order methods 

// 1.forEach()
// 2.map()

// 1.forEach    

let vegtables = ["potato","brinjal","drumstick","ladies finger"]

let new1 = vegtables.forEach((CEle,index,tA)=>{
    return CEle
})

console.log(new1);



//2.map

let new2 = vegtables.map((CEle,ind,TotalArr)=>{
    return ("veg : "+CEle)
})

console.log(new2);


let[h1,h2,h3,h4]=new2

console.log(h1);

let obj5 = {
    fruit : "apple",
    veg : h1,
}

console.log(obj5);

//3.filter()
//4.find()


//filter
let employee1 = [
    {empName : "a",salary : 100000},
    {empName : "b",salary : 200000},
    {empName : "c",salary : 300000},
    {empName : "d",salary : 300000},
]

let salaryDate = employee1.filter((CEle)=>CEle.salary == 300000)

console.log(salaryDate);


//find



let FindHugeSalary = employee1.find((cE)=>cE.salary==300000)

console.log(FindHugeSalary);

console.clear();

// example

let sumOfVal = [10,1,2,3,4]



let sum1 = 0;
sumOfVal.forEach((sumOfVal)=>{
    sum1 += sumOfVal

})
console.log(sum1);


let total = 0
for(let i=0;i<sumOfVal.length;i++){
    total += sumOfVal[i];
}
console.log(total);

let sum = 0
for(let number of sumOfVal){
    sum += number
} 
console.log(sum);






//20

// reduce

// let arr = [1,2,3,4]

//let totalVal = arr.reduce((acc,cele,index,totalArray)=>{},0)

//sumofVal = [10,1,2,3,4]

let totalVal = sumOfVal.reduce((acc,cele,index,toarr)=>{  
    return acc+cele // 0+10 = 10 // 10+1=11//
    //11+2=13 // 13+0=16 // 16+4=20 //20+=20
},0) // 10 //11//13 // 16 // 20

console.log(totalVal);



// higher order function

// 1.sort 
// 2.some - logical or
// 3.every - logical and

let arr5 = [10,5,33,312,56,11]//[5,10,11,33,56,312]

arr5.sort()

console.log(arr5);



var new11 = arr5.sort((a,b)=>{
    return a-b
})

console.log(new11);


// some - or


let arr7 = [1,13,3,3,6]

let someRetVal = arr7.some((Cele)=>{
    return Cele%2==0
})

console.log(someRetVal);


//every - and

let arr8 =[2,2,2,22]
let everyRetVal = arr8.every((cEle,ind)=>{
    return cEle%2==0
})

console.log(everyRetVal);

console.clear();


// string methods

//charAt()  ind - charcterFind

let str1 = "hello world"

console.log(str1.charAt(str1.length-1));
console.log(str1.charAt(1));


// charCodeAt()  ind - Asscii value

console.log(str1.charCodeAt(1));

//includes()   char - true or false

console.log(str1.includes("o"));
console.log(str1.includes("l",4));

//indexOf  char - index [l to r]

console.log(str1.indexOf("h"));


//lastIndexOf  char - index [r to l]


console.log(str1.lastIndexOf("l"));


//repeat count - repeat value

console.log(str1.repeat(20));

//replace

console.log(str1.replace("hello","javascript"));

//slice

console.log(str1.slice(1,5));

//split

console.log(str1.split(" "));


// startswith


console.log(str1.startsWith("h"));

// endswith

console.log(str1.endsWith("d"));


// toLowercase

let str2 = "HELLO WORLD"

console.log(str2.toLowerCase());

// toUpperCase

console.log(str1.toUpperCase());


//gap-remove

//trim

let str3 = " hello "

console.log(str3.trim());

console.clear();


let exa = "dinosar"

console.log(exa.split("o"));

let exa1 = exa.slice(0,3)
let exa2 = exa.slice(4,7)
console.log(exa1);
console.log(exa2);

let exa5 = ["one","two","three"]
 //[1,2,3] // 1,2,3

//  exa5.replace(("one","two","three"),("1","2","3"))

//  console.log(exa5);

let str10 = exa5.join("") 
let result10 = str10
.replace(/one/g,"1")
.replace(/two/g,"2")
.replace(/three/g,"3")
.split("")
console.log(result10);


exa5.splice(0,3,1,2,3)

console.log(exa5);

console.log(exa5.join());



let redFruit = ["apple","strawberry","cherry","lichie","pomagranate"]
// render one by one --> print console
// cherry -> object : key smallFruit :"cherry"
// object -> cherry

for(let a of redFruit){
    console.log(a); 
}

let obj = {
    small:a[2]
}

console.log(obj.small);


let ValFruit = redFruit.map((cEle,index,total)=>{
    return cEle
})

console.log(ValFruit);

let [k1,k2,k3,k4,k5]= ValFruit

let objj = {
    smallFruit : k3
}

console.log(objj.smallFruit);


console.clear();


// 1.Math.abs()  N->p

console.log(Math.abs(-100));

//2 . Math.sign() - = -1, + = 1, 0 = 0 

console.log(Math.sign(0));

//3. Math.sqrt()  5^2 = 25 = 25 --> 5

console.log(Math.sqrt(9));

//4. Math.Cbrt() 5^3 = 125 = 125 --> 5

console.log(Math.cbrt(8));

//5.Math.pow(base,exponent) -(5,3) 5^3 = 125

console.log(Math.pow(2,3));

//6.Math.min()

let math = [1,5,0,56]

console.log(Math.min(...math));

// 7.Math.max()

console.log(Math.max(...math));


//8.Math.random()

console.log(Math.random());

let randomNum1 = Math.random()*10
console.log(randomNum1);

//9.math.ceil  2. -->3
console.log(Math.ceil(randomNum1));

// 10. Math.floor  2.9 --> 2

console.log(Math.floor(randomNum1));


// 11.Math.round() 2.4 --> 2, 2.5--> 3

console.log(Math.round(randomNum1));





console.log(Math.trunc(randomNum1));

console.clear();

// {
//     var a5 = 10
//     let b5 = 11
//     const c5 = 12
// }

// console.log(a5,b5,c5);



// date 

// Date

// let date =new Date
// console.log(date);


// // getYear()

// console.log(date.getFullYear());

// //getmonth()

// console.log(date.getMonth());

// //getDate()

// console.log(date.getDate());

// //getHours()

// console.log(date.getHours());

// //getMinutes()

// console.log(date.getMinutes());

// //getseconds()

// console.log(date.getSeconds());


// // date.setFullYear(year,month,date)

// date.setFullYear(1996,10,30)
// console.log(date);

// let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// console.log(days[date.getDay()]);


// //date.setmonths(month,date)

// date.setMonth(2,1)

// console.log(date);



// // normal date --> toDateString



// console.log(date.toDateString());

// // time -->toLocaltimeString


// console.log(date.toLocaleTimeString());

// // time and date



// setTimeout(() => {
//     console.log(date.toLocaleString());
// }, 2000);

// setInterval(()=>{
//     let date1 = new Date
//     console.log(date1.toLocaleTimeString());
    
// },1000)

console.clear();





// function as1(){
//     console.log("one"); 
// }
// function as2(){
//     console.log("two"); 
// }
// function as3(){
//     console.log("three"); 
// }

// as1()
// setTimeout(as2,2000)
// as3()


// //promise


// let newPromise = new Promise((resolve,reject,bending)=>{
//     let dataReceived = false

//     if(dataReceived){
//         resolve("data received")
//     }
//     else{
//         reject("data not received")
//     }
// })

// newPromise.then((message)=>{
//     console.log(message);
    
// }).catch((error)=>{
//     console.error(error)
// })

// // api methods


// fetch('https://fakestoreapi.com/products')

// .then((data)=>{
//    return data.json()  
// })
// .then((alljsdata)=>{
//     console.log(alljsdata);
//     alljsdata.forEach((cEle)=>{
//         console.log(cEle);
        
//     })
//     console.log(alljsdata.category);
// })
// .catch((errdata)=>{
//     console.log(errdata.message);
    
// })


console.clear();






// // Dom Api 

// // document object model

// // Dom techniques 3 :- 

// // 1.selecting Element 
// // 2.Travesing Element



// //select

// let header = document.getElementsByTagName("h1")
// let classSelect = document.getElementsByClassName("one")
// let idSelect = document.getElementById("two")


// let subHeader = document.querySelector("h2")
// let subClass = document.querySelector(".a")
// let subId = document.querySelector("#b")

// let selectOne = document.querySelector(".ab")
// let selectOne1 = document.querySelector(".ab")
// let selectAll = document.querySelectorAll(".ab")



// console.log(header);
// console.log(classSelect);
// console.log(idSelect)

// console.log(subHeader);
// console.log(subClass);
// console.log(subId);
// console.log(selectOne);
// console.log(selectAll);
// console.log(selectOne1);
// console.clear();





// //traversing
// //parent select method

// let child = document.querySelector(".child")

// console.log(child.parentElement);
// console.log(child.parentNode);

// //child select method

// let parent = document.querySelector(".parent")

// console.log(parent.childElementCount);
// console.log(parent.childNodes);
// console.log(parent.children);
// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastChild);
// console.log(parent.lastElementChild);

// //sibling Select method

// let child1 = document.querySelector(".child")

// console.log(child1.nextElementSibling);
// let child2 = child1.nextElementSibling

// console.log(child2.nextElementSibling);
// console.log(child2.previousElementSibling);

// console.clear();


//manipulating




// function print(){
//     let orderList = document.querySelector("ol")
//     let input = document.querySelector("input");
//     let inputValue = input.value;
//     console.log(inputValue);
//     orderList.innerText = inputValue
// }


// //event handler

// function firstHandler(){
//     console.log("hello");
// }

// function secondHandler(){
    //     console.log("hello world");
    
    // }
    
    
    
    
    
    
    // //eventListner
    
    // let button1 = document.querySelector("#button")

// // button1.addEventListener("click",()=>{
    // //     console.log("hello");
    
// // })
// // button1.addEventListener("click",()=>{
// //     console.log("hello world");

// // })











