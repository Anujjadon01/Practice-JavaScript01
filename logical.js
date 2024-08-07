//let x = 5;
//let y = 3;

// Arithmetic Operators
//let result = x + y;  // result = 8
//console.log(result);

// Comparison Operators
//let isEqual = x === y;  // isEqual = false
//console.log(isEqual);

// Logical Operators
//let isTrue = x > y && x !== 3;  // isTrue = true
//console.log(isTrue);

// Assignment Operators
//x += 2;  // x = 7
//console.log(x);


//let x=20;
//let y=10;

//let resul= x+y;
//console.log(x+y);    
//console.log(x-y);
//console.log(x%y);
//console.log(x*y);
//console.log(x/y);


// let password="sumit";
// if(password="sumit"){console.log(accepted);}
// if(password) {
//     console.log("enter");
// }
// if(password="sumit"){console.log(accepted);}
// else{
//     console.log("your password is incoorect");
// }

// let a=50;
// let b=50;

// if(a==b){
//     console.log("true");

// }else{
//     console.log("false");
// }

// let a=60;
// let b=50;

// let temp=a+b;
// b=temp-b;
// a=temp-b;

// console.log("value a",a);
// console.log("value b",b)

// let a=60;
// let b=50;
// let (a+b);

// b=110-b;
// a=110-a;

// console.log("value a",a);
// console.log("value b",b);
// let a=30;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("value a",a);
// console.log("value b",b);

// let a=2;
// let b=4;
// let c=10;
// let d=50;
// let result=1;

// for (let index = 1; index <= 7; index++) {
//     console.log("index",index)
//     result=result*index
//     console.log("result",result);    
// }

// console.log(result);
// let c=30;
// let result=1;

// for (let index = 1; index <=c; index++) {
//     console.log("index",index);
//     result=result*index
//     console.log("result",result); 

// }

// console.log(result);

// let a=50;
// let b=60;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("value a",a);
// console.log("value b", b);

// let a=70;
// let b=30;

// if (a==b);{
//     console.log("value is true");
// }

// console.log("value is false");{

// }

// let c=6;
// let result=1;

// for (let index = 1; index <=c; index++) {
//     console.log("index",index);
//     result=result*index
//     console.log("result",result);

// }

// function fun1(){
//     console.log("calling function");

// }

// fun1()

//  function factorial(a){
//     let result=1;
//     for (let i = 1; i <=a; i++) {
//         result=result*i

//     }
//     return result;
//  }
//  console.log(factorial(2));

// function add(a,b){
// let result=0;
// result=a+b
// return result

// }

// console.log(add(5,30));

// function add(a,b,c){
//     let result=0;
//     result=a*b*c
// return result
// }

// console.log(add(2,2,2));

// function devide(a,b){
//     return a/b
// }

// console.log(devide(4,2));

// function swap(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("value a",a);
//     console.log("value b",b);
//     return "success"
// }

// console.log(swap(5,10));

// let am=typeof a;
// console.log(am);
// if(am=="boolean"){
//     console.log("a value is Boolean");
// }else{
//     console.log("a value is not Boolean");

// }

// function devided(a,b,c){
//     return a*b/c
// }

// console.log(devided(2,3,"2"));

// function value(a,b){
//     return a==b
// }

// console.log(value(2,2));

// function type(a){
//     return typeof a;
// }

// console.log(type("2"));

// function conectname(a,b){
//     return a +" "+ b;
// }

// console.log(conectname("anuj","jadon"));


function login(emailid, password) {
    if (!emailid) {
        return ("please enter your email id")
    }


    if (!password) {
        return ("please enter your password")
    }
    if (emailid == "rajat@gmail.com") {
        if (password == "12345") {
            return "successfully login";
        } else {
            return "password is incorect";
        }
    } else {
        return "Email id is not register";
    }
}

// function login(sendotp,verifyotp){
//     if (!sendotp){
//         return ("please enter your sandotp")
//     }
//     if (!verifyotp){
//         return ("please enter your verifyotp ")
//     }
//     if (sendotp=="8979481586"){
//         if (verifyotp=="252336"){
//             return "successfuly login"
//         }else{
//             return("verifyotp is incorect")
//         }
//     }else{
//         return("sendotp is not incorect")
//     }
// }

// console.log(login("8979481586", "252336"));

// function checkEvenodd(a){
//     if(a%2==0){
//         return("value is even");
//     }else{
//         return("value is odd");
//     }

// }

// // console.log(checkEvenodd("5"));

// function checkemailpassword(email,password){
//     if(!email){
//         return(" please enter your email id");

//     }
//     if(!password){
//         return("please enter your password");
//     }
//     if(email=="rajatjha@20070gmail.com"){
//         if(password=="12345"){
//             return("successfully login")
//         } else {
//             return("password is incorect");
//         }
//     } else {
//         return("email id isnot ragister ");
//     }

// }

// console.log(checkemailpassword("rajatjha@20070gmail.com","12345"));

// function loginotp(sendotp,verifyotp){
//     if(!sendotp){
//         return "please enter your mobile number"
//     }
//     if(!verifyotp){
//         return "please enter your otp"
//     }
//     if(send=="8979481586"){
//         if(verify=="2345"){
//             return "login successfully"
//         }else{
//             return "otp is worng"
//         }

//     }else{
//         return("mobil number is not register")
//     }
// }



// function loginotp(email,otp){
//     if(!email){
//         return "please enter your email"
//     }
//     if(!otp){
//         return "please enter your otp"
//     }
//     if(email=="rajatjha@gmail.com"){
//         if(otp=="2345"){
//             return("login successfully")
//         }else{

//          }
//     }else{
//         return "email is not register"
//     }         return "otp is incorect"



//     }

//       console.log(loginotp("rajatjha@gmail.com","2345"));  

// let user = {
//     name:"sumit",
//     age:20,
//     class:"BCA pass out",
//     gender:"male",
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// user.name="anuj"
// user.age=20

// console.log(user);

// let user ={
//     name:"aman",
//     age:16,
//     class:"8",
//     rollno:"23",

// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// user.class=9;
// console.log(user);

// function loginemail(email,otp){
//     if(!email){
//         return "please enter your email"
//     }
//     if(!otp){
//         return "please enter your otp"
//     }
//     if(email=="anujjadon@gmail.com"){
//         if(otp=="1234"){
//             return "login successfully"
//         }else{
//             return "otp is incorect"
//         }
//     }else{
//         return "email is not register"
//     }
// }

// console.log(loginemail("anujjadon@gmail.com","1234"));

// let user={
//     myname:"anuj",
//     fathername:"mahendra singh",
//     mothername:"suneeta devi",
//     sistername:"anjali jadon",
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(user);

// function conectname(a,b){
//     return a+" "+b
// } 

// console.log(conectname("Anuj","Jadon"));

// function fectorial(a){
//     let result=1;
//     for (let i = 1; i <=a; i++) {
//         result=result*i;

//     }
//     return result;

// }

// console.log(fectorial(2));

// let user={
//     myname:"Anuj Jadon",
//     age:17,
//     class:"BCA",
//     gender:"male",
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(user);

// let user={
//     myfathername:"mahendra singh jadon",
//     age:54,
//     class:"Inter pass out",
//     gender:"male",
//     Work:"farmer",
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(user);

// let user={
//     mymothername:"suneeta devi",
//     age:52,
//     class:"eight pass out",
//     gender:"fymale",
//     work:"Home wife"
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(user);

// let user={
//     mysistername:"Anjali jadon",
//     age:19,
//     class:"Bsc pass out",
//     gender:"Female",
//     work:"private teacher"
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// user.mysistername="Anushka jadon"
// console.log(user);

// let obj1={
//     name:"Anuj",
//     age:18,
//     education:{
//         class:"Bca",
//         year:"1st year"
//     }
// }
// // Direct method;
// // Object Assigned Method;
// // let obj2=obj1;
// // let obj2=Object.assign({},obj1);
// // shallow copy;
// // spread Method;
// // deep copy
// // let obj2={...obj1}
// // let obj2=JSON.stringify(obj1)
// // let obj3=JSON.parse(obj2)
// let obj2=Object.assign({},obj1)
// obj2.name="sumit";
// obj2.education.class="Bca 2nd semester";
// console.log("Orginal object",obj1);
// console.log("Copy object",obj2);
// console.log("object 3",obj3);

// let obj1={
//     name:"anuj",
//     age:"23",
//     class:"BCA",
//     education:{
//         class:"bca",
//         year:"2st semester",
//     }
// }

// // let obj2=obj1;
// // let obj2=object.assign({}.obj1);
// // let obj2={...obj1};
// let obj2=JSON.stringify(obj1);
// let obj3=JSON.parse(obj2);
// obj3.name="rajat";
// obj3.education.year="3rd semster";
// console.log("Orginal object",obj1);
// console.log("copy object",obj2);
// console.log("Object 3",obj3);

// let obj1={
//     name:"anuj",
//     class:12,
//     year:"bca 1st semester",
//     education:{
//         class:13,
//         year:"bca 2st semester",
//     }
// }
// // let obj2={...obj1};
// let obj2=JSON.stringify(obj1);
// let obj3=JSON.parse(obj2);
// // let obj2=obj1;

// obj3.name="rajat";
// obj3.education.year="bca 3rd semester"
// console.log("Orginal object",obj1);
// console.log("copy object",obj2);
// console.log("Object 3",obj3)

// function conectnam(a,b){
//     return a+" "+b;

// }
// console.log("Anuj","Jadon");

// let a=60;
// let b=50;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("value a",a);
// console.log("value b",b);

// let obj1={
//     name:"anuj",
//     age:24,
//     class:"bca",
// education:{
//     class:"BCA",
//     year:"2nd semester",
// }
// }
// let obj2=obj1;
// obj2={...obj1};
// let obj2=JSON.stringify(obj1);
// let obj3=JSON.parse(obj2);
// let obj2=Object.assign({}.obj1);
// obj2.name="sumit";
// obj3.education.year="3rd semester"

// console.log("Orginal object",obj1);
// sconsole.log("copy object",obj2);
// console.log("Object 3",obj3);

// let obj1={
// name:"anuj",
//     age:23,
//     class:"bca",
//     education:{
//         class:"bca",
//         year:"1st semester",
//     }
// }
// let obj2=object.assing({}.obj1);
// let obj2={...obj1};
// let obj2=JSON.st(obj1);
// let obj3=JSON.parse(obj2);
// let obj2=obj1;
// obj3.name="rajat";
// obj3.education.year="2nd semester";
// console.log("Orginal object",obj1);
// console.log("Copy objrct",obj2);
// console.log("object 3",obj3);

//callback to start;

// function featchUserData(id,callback){
//     console.log("calling 1");
//     setTimeout(()=>{
//         callback({id:id,name:"anuj",age:12,gender:"male"})
//     },10000)
// }

// function getUserData(userData){
//     console.log("colling 2");
//     console.log(userData);
// }

// featchUserData(126,getUserData)

// function pluseUserdata(a,callback){
//     console.log("please wait");
//     setTimeout(()=>{
//         callback({a:a,b:50})
//     },30000)
// }

// function getUserData(userData){
//     console.log(userData);
// }

// pluseUserdata(23,getUserData)

// function call2(){
//     console.log("please wait");
//     return 20
// }

// function call1(a,callback){
//     setTimeout(()=>{
//         console.log("calling");
//     },10000);
//     return callback() *a
// }

// console.log(call1(10,call2))

// function call2(){
//     console.log("please wait");
//     return 60
// }

// function call1(a,callback){
//     setTimeout(()=>{
//         console.log("calling");

//     },50000);
//     return callback() -a
// }

// console.log(call1(50,call2));

// function featchUserData(id,callback){
//     console.log("calling 1");
//     setTimeout(()=>{
//         callback({id:id,name:"anuj",age:23,gender:"male"})
//     },10000);
// }

// function getUserData(UserData){
//     console.log("calling 2");
//     console.log(UserData);
// }

// featchUserData(123,getUserData)

// function call2(){
//     console.log("please wait");
//     return 20;
// }

// function call1(a,callback){
//     setTimeout(()=>{
//         console.log("calling");
//     },10000)
//     return callback() *a
// }

// console.log(call1(20,call2));

// function clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date==>",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//         console.log("Time==>",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     },1000)
// }
// clock();

// function TimeCounter(){
//     let minutes=0;
//     let seconed=0;
//     setInterval(()=>{
//         seconed=seconed+1;
//         // console.log("Minutes",seconed/60);
//         // console.log("seconded",seconed%60);
//         console.log("Time Counter",parseInt(seconed/60)+":"+seconed%60);
//     },1000)
// }
// TimeCounter()

// function stopClock(time){
//     let seconed=0;
//     const timec=setInterval(()=>{
//         seconed=seconed+1;
//         // console.log("Minutes",seconed/60);
//         // console.log("seconded",seconed%60);
//         console.log("Time Counter",parseInt(seconed/60)+":"+seconed%60);
//         if(parseInt(seconed/60)==time){
//             clearInterval(timec)
//         }
//     },1000)
//     settime(())

// }

// stopClock(1)

// function Clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date==>",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//         console.log("Time==>",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     },1000)
// }

// Clock();

// function TimeCounter(){
//     let Minutes=0;
//     let second=0;
//     setInterval(()=>{
//         second=second+1;
//         // console.log("Minutes",second/60);
//         // console.log("seconded",second%60);
//         console.log("Time Counter",parseInt(second/60)+":"+second%60);
//     },1000)
// }
// TimeCounter()

// function stopClock(time){
//     let second=0;
//     const Timec=setInterval(()=>{
//         second=second+1;
//         console.log("Timer Counter",parseInt(second/60)+":"+second%60);
//         if(parseInt(second/60)==time){
//             clearInterval(Timec);
//         }
//     },1000)

// }   
// stopClock(1) 

// function clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
// console.log("Time",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
//     },1000)
// }
// clock()                                    

// function Call2(){
//     console.log("please wait");
//     return 20;
// }
// function Call1(a,callback){

//     setTimeout(()=>{
//         console.log("calling");

//     },5000)
//     return callback() *a
// }
// console.log(Call1(23,Call2));

// const{exec}=require('child_process');
// const { log } = require('util');
// function play(){
//     const filePath='C:\\Users\\user\\Downloads\\html\\extreme-clock-alarm-9700.mp3';
//     const command=`start wmplayer "${filePath}"`;
//     exec(command,(err)=>{
//         if(err){
//             console.error('Error playing sound: ${err}');
//             return;
//         }
//         console.log('Aodio started playing');

//     })
// }
// function alertClock(hr,minutes){
//     let aler=0
//     const checkTime=setInterval(()=>{
//         const date=new Date();
//         console.log("Checking Time");
//         if(date.getHours()==hr&&date.getMinutes()==minutes&date.getSeconds()==0){
//             console.log("Alarm ringing")
//             play()
//         }
//         if(date.getHours()==hr&&date.getMinutes()>minutes){
//             clearInterval(checkTime);
//             console.log("Stop alarm");
//         }
//     },1000)
// }

// alertClock(17,9)

// function am(b){
//     var a=10
//     return function ac(){
//         return a + b
//     }
// }
// console.log(am(20)());

// function login(email2, password2) {
//     var password = "1234";
//     var email1 = "anuj@gmail.com";
//     return function anuj() {
//         if (!email2) {
//             return "please enter your email"
//         }
//         if (!password2) {
//             return "please enter your password"
//         }
//         if (email1 == email2) {
//             if (password2 == password) {
//                 return "successfily login"
//             } else {
//                 return "Password is incurrect"
//             }

//         } else {
//             return "email is not register"
//         }

//     }
// }
// console.log(login("anuj@gmail.com","1234")());

// function login1(mobilno2,password2){
//     var password1="1234";
//     var mobilno1="8979481586";
//   return  function login2(){
//         if(!mobilno2){
//             return "please enter your mobilno"
//         }
//         if(!password2){
//             return "please enter your password"
//         }
//         if(mobilno1==mobilno2)
//             if(password1==password2){
//                 return "successfully login"
//             }else{
//                 return "password is incorect"
//             }else{
//                 return "mobilno is not register"
//             }
//     }
// }
// console.log(login1("8979481586","1234")());

// function Counter() {
//     var count = 1;
//     return {
//         increment: function () {
//             count = count + 1;
//             return count
//         },
//         decrement: function () {
//             if (count == 1) {
//                 return count
//             } else {
//                 count = count - 1
//                 return count
//             }
//         },
//         getcount: function () {
//             return count
//         }
//     }
// }

// let fun = Counter()
// console.log(fun.increment());
// console.log(fun.increment());
// console.log(fun.increment());
// console.log(fun.increment());
// console.log(fun.increment());

// console.log(fun.decrement());

// console.log(fun.decrement());
// console.log(fun.decrement());
// console.log(fun.decrement());
// console.log(fun.decrement());
// console.log(fun.decrement());

// console.log(fun.getcount());

function add(a){
    var count=0;
    return{
        increment:function(value){
            count=count+value;
            return count
        },
        decrement:function(value){
            count=count-value;
            return count
        },
        maltiply:function(value){
            if(count==0){
                return "your count value is zero"
            }
            if(value==0){
                return "your input value is zero"
            }
            count=count*value
            return count
        },
        devide:function(value){
            if(count==0){
                return "your count value is zero"
            }
            if(value==0){
                return "your input value is zero"
            }
            count=count/value
            return count
        },
        getcount:function(){
            return count
        }
        }
    }

    let fun=add();
fun.increment(20)
// fun.decrement(5)
// fun.maltiply(3)
fun.devide(5)
console.log(fun.getcount());