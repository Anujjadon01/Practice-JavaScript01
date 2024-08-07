// let password="Anuj";
// if(password="Anuj"){console.log("accepted");}
// if(password){
//     console.log("enter");
// }
// if(password="Anuj"){
// }else{
//     console.log("your password is incorect");
// }

// let a=50;
// let b=60;

// if(a==b){
//     console.log("value is true");
// }else{
//     console.log("value is false");
// }

// let a=50;
// let b=60;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("value a",a);
// console.log("value b",b);

// let a=7;
// let result=1;
// for (let i = 1; i <=7; i++) {
//     console.log("i",i);
//     result=result*i
//     console.log("result",result);

// }
// console.log(result);

// function fun1(){
//     console.log("calling function");
// }
// fun1()
// function factorial(a){
//     let result=1;
//     for (let i = 1; i <=a; i++) {
//         result=result*i
        
//     }
//     return result;
// }
// console.log(factorial(2));

// function add(a,b){
//     // let result=0;
//     result=a*b;
//     return result
// }
// console.log(add(4,2));

// function devide(a,b){
//     result=a/b;
//     return result
// }
// console.log(devide(4,2));

// function swape(a,b){
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log("value a",a);
//     console.log("value b",b);
//     return "success"
// }
// console.log(swape(2,3));

// let am=typeof a;
// console.log(am);
// if(am=="Boolean"){
//     console.log("a value is Boolean");
// }else{
//     console.log("a value is not Boolean");
// }
// function type(a){
//     return typeof a;
// }
// console.log(type("2"));

// function conectname(a,b){
//     return a +" "+ b;
// }
// console.log(conectname("Anuj","Jadon"));

// function login(emailid,password){
//     if(!emailid){
//         return "please enter your emailid"
//     }
//     if(!password){
//         return "please enter your password"
//     }
//     if(emailid=="anujjadon@gmail.com"){
//         if(password=="12345"){
//             return"successfully login";
//         }else{
//            return "password is incorect"
//         }
//     }else{
//         return "Emailid is note register"

//     }
// }
// console.log(login("anujjadon@gmail.com","12345"));

// function loginotp(email,otp){
//     if(!email){
//         return "please enter your email"
//     }
//     if(!otp){
//         return "please enter your otp"
//     }
//     if(email=="anuj@gmail.com"){
//         if(otp=="123456"){
//             return "login successfully"
//         }else{
//             return "otp is wrong"
//         }
//     }else{
//         return "email is not register"
//     }

// }
// console.log(loginotp("anuj@gmail.com","123456"));

// let user={
//     name:"anuj",
//     age:23,
//     class:12,
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// user.name="sumit";

// console.log(user);

// function featchUserDate(id,callback) {
//     console.log("calling 1");
    
//     setTimeout(()=>{
//         callback({id:id,name:"anuj",age:12,})
//     },5000);
// }
// function getUserData(UserData){
//     console.log("calling 2");
    
//     console.log(UserData);
    
// }
// featchUserDate(123,getUserData);
 
// function call2(){
//     console.log("please wait");
//     return 40;
    
// }
// function call1(a,callback){
//     setTimeout(()=>{
//         console.log("calling");
//         // return callback() *a
//     },5000)
//     return callback() *a
// }
// console.log(call1(4,call2));

// function clock(){
//     setInterval(()=>{
//         const date=new Date();
//         console.log("number",date);
//         console.log("Date==>",date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//         console.log("Time",date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

// function Timecaunter(){
//     let Minute=0;
//     let second=0;
//     setInterval(()=>{
//         second=second+1;
//         console.log("Timecaunter",parseInt(second/60)+":"+second%60);

//     },1000);
// }
// Timecaunter()
        
//     },1000);
// }
// clock()

// function stopTime(time) {
//     let seconed=0;
//     const timec=setInterval(()=>{
//         seconed=seconed+1;
//         console.log("Time caunter",parseInt(seconed/60)+":"+seconed%60);
//         if (parseInt(seconed/60)==time) {
//             clearInterval(timec);
//         }
        
//     },1000);
// }
// stopTime(1)

// let obj1={
//     name:"anuj",
//     age:15,
//     class:"bca",
//     gender:"male",
//     education:{
//         class:"12",
//         gender:"male",
//     }
// }
// // let obj2={...obj1};
// // let obj2=JSON.stringify(obj1);
// // let obj3=JSON.parse(obj2);
// // let obj2=obj1;
// // let obj2={...obj1};
// let obj2=Object.assign({},obj1)
// obj2.name="sumit";
// obj2.education.calss=("bsc");
// console.log("Orginal object",obj1);
// console.log("copy object",obj2);
// // console.log("obj3 3",obj3);


// function stopclock(time){
//     let seconed=0;
//     const Timec=setInterval(()=>{
//         seconed=seconed+1;
//         console.log("Timecounter",parseInt(seconed/60)+":"+seconed%60);
//         if(parseInt(seconed/60)==time){
//             clearInterval(Timec);
//         }
//         // clearsetInterval(Timec)
//     },1000);
// }
// stopclock(1)

// function login1(email2,password2){
//     var email1="anuj@gmail.com";
//     var password1="1234";
//     return function login2(){
//         if(!email2){
//             return "please enter your email"
//         }
//         if(!password2){
//             return "please enter your password"
//         }
//         if(email1==email2){
//             if(password1==password2){
//                 return "successfully login"
//             }else{
//                 return "password is incorect"
//             }
//         }else{
//             return "email is not register"
//         }

//     }
// }
// console.log(login1("anuj@gmail.com","1234")());

function counter(a){
    var count=1;
    return{
        increment:function(){
            count=count+1;
            return count
        },
        decrement:function(){
            if(count==1){
                return count
            }else{
                count=count-1;
                return count
            }
        },
        getcount:function(){
            return count
        }
    }
}
let fun=counter()
console.log(fun.increment());
console.log(fun.increment());

console.log(fun.decrement());
console.log(fun.decrement());
console.log(fun.decrement());

console.log(fun.getcount());
