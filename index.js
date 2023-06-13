//ways to print in js   (1)
// console.log("hello world", 8 + 2, "is my answer");
//alert("hey there");
//document.write("this is my documnet")   (Avoid)

// JS console api(2)
// console.warn("This is warning")
// console.error("this is an error")

// varibales in js(3)
// var number1 = 3;
// var number2 = 5;
// console.log(number1 + number2);

// //datatypes in js(4)
// //number 
// var swara = 77;
// var num2 = 98;

// //string
// var str1 =  " i am swaranjali";
// var str2 = "sheru is cute";

// //objects
// var marks ={
//     ravi : 34,
//     swara : 99,
//     sheru :100

// }
// console.log(marks);

// //boolean
// var a = true;
// var b = false;
// console.log(a);

// //undefined
// var und = undefined;
// console.log (undefined);
// //or we can write
// var und; // bydefualt will be undefined


//null
// var n = null;
// console.log(null);

//refrece data types - arrays and objects
//arrays(5)


// var arr = [1,2, "swara",3,4,5]
// console.log(arr[3]);

// console.log(arr[2]);


//operators  (6)
//arithmetic operators
// var a = 3;
// var b = 12;
// console.log("the value of a + b is ", a+b);
// console.log("the value of a - b is ", a-b);
// console.log("the value of a * b is ", a*b);
// console.log("the value of a / b is ", a/b);



// //assigment operators
//  var c = a;

//  //update
//  c+= b;
// //  c +=3;
// //  c *=7;
// //  c/= 2;

//  console.log(c);


//  //comaprision operator

// var i = 11;
// var u = 12;
// console.log(i==u);
// console.log(i>=u);

//logical operators
//and operator
// console.log(true && true)

// console.log(true && false)

// console.log(false && false)

// console.log(false && true)

// //or operator

// console.log(true || true)

// console.log(true || false)

// console.log(false ||false)

// console.log(false|| true)



//not operator
// console.log(!true);
// console.log(!false);

// //functions            (7)
// function avg(a,b){
//     return (a * b)/2;        //c =(a+b)/2
//                               // return c;
// }
// c1 = avg (4,6);
// c2= avg (2,10);
// console.log(c1);
// console.log(c2);   // console.log(c1,c2)


//condition   (8)
// var age = 21
// if (age <18){              //if can only alos be used
//     console.log("adult");
// }
// else{

//     console.log("kid");   //if-else
// }

//if-else ladder
//(if any of the condition get true loop stops and gets terminated or ends)
// var age = 22
// if ( age <18)
// {
//     console.log("can vote");
// }
// else if ( age < 21)
// {
//     console.log("can marry");
// }
// else if (age>=22){
//     console.log("graducation done");

// }
// else{
//     console.log("none of the condition is statisfied");
// }
// console.log("end of ladder");


// function  checknumber(number){
//     if (number >0){
//         console.log("yes its greater");

//     }
//     else if (number <0){
//         console.log(" its not greater");
//     }
//     else{
//         console.log("not a number");
//     }
//     console.log("end of loop");


// }


// for loop
// var arr = [1, 2, 3, 4, 5]
//    console.log(arr);
// for (var i = 0; i< arr.length; i++) { 
// console.log(arr[i])
// }

//forEach element
// arr.forEach (function(elemnet) {
//     console.log(elemnet);
// })



// while loop-are used for repeating a block of code multiple times as long as a condition remains true.
//let j = 0;
// const a=0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;

// }
//do while loop (condition will run atleast for 1 time)
// do {
//     console.log(arr[j]);
//     j++                              //condition without check

// } while (j < arr.length);     // once false condition get out of loop

//BREAK AND CONTINUE

// var arr = [1, 2, 3, 4, 5]
// for (var i = 0; i< arr.length; i++){
//     if(i==2){
//         break;
//     }
//      console.log(arr[i])
// }
// var arr = [1, 2, 3, 4, 5]
// for (var i = 0; i< arr.length; i++){
//     if(i==2){
//         continue;
//     }
//      console.log(arr[i])
// }
//
// array methods  (9)
//   let MyArr = ["fan", "camera",34, null, true ];

// // console.log (MyArr.length); 

// // MyArr.pop();         //lastelemnetwill be poped
// // console.log(MyArr);
// // MyArr.push("swara");
// // MyArr.shift ()         //first element will be removed
// // MyArr.unshift("pinku")    //1st elemment will be added
// // console.log(MyArr);
// //can also be writtem as
// const NewLen = MyArr.unshift("manoj")
// console.log(NewLen);
// console.log(MyArr);
// let arry = [8,5,7,2]
// arry.sort();
// console.log (arry);  


//Strings methods in js
//   let mylovelystring = "swara is learning js learning";
// //   console.log(mylovelystring.length)
// //   console.log(mylovelystring.indexOf("learning"))  //index print at which learning start
// //   console.log(mylovelystring.lastIndexOf("learning"))   // to find same word index using last
//  // console.log(mylovelystring.slice(3,7))   (n-1)
//   d = mylovelystring.replace("swara", "janvi");
//   d = d.replace("js" , "javascript")
//       console.log(d,mylovelystring)


//DATE
// let myDate = new Date();   //new keywordis used to create new date
// console.log(myDate)
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

//DOM MANIPULATION
// let elem = document.getElementById('btn')  
// console.log(elem)
//(we can do changes or can add class in css)
// let eleclass = document.getElementsByClassName('container')
// console.log(eleclass);        //console pe show 

//   eleclass[0].style.background ="pink"
// eleclass[0].classList.add("bg-primary")  //class create html 
// eleclass[0].classList.add("text-success") //same

// console.log(eleclass[0].innerHTML);
// console.log(eleclass[0].innerText);

// tn= document.getElementsByTagName('button')
// console.log(tn)

// tn= document.getElementsByTagName('div')
// console.log(tn)

// //child element
// createdElement = document.createElement('p');
// createdElement.innerText = 'login'
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('c');
// createdElement2.innerText = 'hey there'
// tn[0].replaceChild(createdElement2, createdElement);






// selecting using query
//   sel = document.querySelector('.container')
//   console.log(sel)

//   sel = document.querySelectorAll('.container')
//   console.log(sel)


// // //events   // htmlchanges
// function clicked()
// {
//     console.log("the button was clicked")
// }

// function clicked2()
// {
//     console.log("the button was clicked2")
// }
// //load in events
// window.onload = function(){
//     console.log("page got loaded")
// }

// firstcontainer.addEventListener('click', function(){

//    console.log("click hua")
// })
// // )
// firstcontainer.addEventListener('mouseover', function(){
//     console.log(" clicked on  mouse over")
//  }
//   )
//  firstcontainer.addEventListener('mouseout', function(){
//     console.log(" clicked on  mouse out")
//  }
//  

// firstcontainer.addEventListener('mouseup', function(){
//     console.log(" clicked on  mouse up")
//  }
//   )
//   
// firstcontainer.addEventListener('click', function(){
//    document.querySelectorAll('.container')[1].innerHTML="<b>this para is  chnaged </b>"
//     console.log("clicked ")
//  })


// mouse use -- innerhtml changed

//    let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
//  firstcontainer.addEventListener('mouseup', function(){
//    document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//        console.log(" clicked on  mouse up")
//     }
//       )
//    firstcontainer.addEventListener('mousedown', function(){
//       document.querySelectorAll('.container')[1].innerHTML="<b>this para is  changed</b>"
//               console.log(" clicked on  mouse Down")}
               // )

   // arroow functions
// function sum( a,b){
//    return a + b;
// }

//( we can write this same as below)


//   sum = (a,b)=>{
//    return a +b;
//   }


//   SET TIMEOUT AND SET TIMEINTERVAL
//  hey =()=>{
//    document.querySelectorAll('.container')[1].innerHTML="<b>Set Timeout fired🎉</b>"
//    console.log("hey there")
//  }

// //  use clearInterval (clr)/ clearTimeout(clr) to cancel setInterval/setTimeout
// //  setTimeout(hey, 3000);
// clr =setTimeout(hey, 3000);


// //  setInterval(hey, 3000);
// //  clr= setInterval(hey, 3000);


//LOCAL STORAGE IN JS   (write this on the browser console page)
// localStorage.setItem('Name', 'swara')
// undefined
// localStorage
// Storage {Name: 'swara', length: 1}
// localStorage.clear
// ƒ clear() { [native code] }
// localStorage.getItem('name')
// null
// localStorage.getItem('Name')
// 'swara'
localStorage.clear();


//json   (used for data exchange)  //TO CONVERT INTO STRING
//  obj ={name:  "janu", length: 1 }
//  jso = JSON.stringify(obj);
// //  console.log( jso)
// console.log(typeof jso);


// obj is created into string in line 399 so to convert json into an object again 

//  obj ={name:  "janu", length: 1, a:{this: 'tha"t'} }   //ESCAPE 'tha\"t' (will print same)
//  jso = JSON.stringify(obj);                          // that (2:50 VIDEO)
//  console.log( jso)
// console.log(typeof jso);


//   JSON PARSE
const obj ={name:  "janu", length: 1, a:{this: "that"} }; 

 const jso = JSON.stringify(obj);                          
 console.log( jso)
 console.log(typeof jso);

const jsonString = '{"name":"janu","length":1,"a":{"this":"that"}}';
 const parsed =JSON.parse(jsonString);  //copied from above ouput console
console.log(parsed);

// chatgpt
// const obj = {
//    name: "janu",
//    length: 1,
//    a: { this: "that" }
//  };
 
//  const jso = JSON.stringify(obj);
//  console.log(jso);
//  console.log(typeof jso);
 
//  const jsonString = '{"name":"janu","length":1,"a":{"this":"that"}}';
//  const parsed = JSON.parse(jsonString);
//  console.log(parsed);
 

//backticks
// a = 34;
// console.log(`swara is ${a}`)

























































//  var x = 0;
// if (1<x<3){
//   console.log("india")

// }


// const obj = {
//   width : 10,
//   height : 15,

// }

// const area = obj.width  * obj.heigght;
// console.log(area);
// console.log(typeof '')




// //2:33:49

