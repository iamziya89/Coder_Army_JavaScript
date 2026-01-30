// const P=Math.PI;
// console.log(P);

// let str="JavaScript"
// for(let i of str){
//     console.log(i);
// }

// let arr=[11,12,13,14,15,16,17]
// for(let i=0; i<Math.floor((arr.length)/2); i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr);

// let obj={
//     name : "Mohammad",
//     age : 25,
//     address : "223 Sitkahan Tanda Ambedkar Nagar - 224190"
// }
// console.log(obj["address"]);
// console.log(obj["age"]);
// console.log(obj.name);
// console.log(Object.keys(obj)[1]);
// console.log(Object.values(obj)[1]);
// console.log(Object.entries(obj)[1]);

// let x=Object.entries(obj)
// for(let i=0; i<x.length; i++){
//     for(let j=0; j<x[i].length; j++){
//         console.log(x[i][j]); 
//     }
// }

// let arr=[21,22,23,24,25,"MOHD"]
// console.log(arr.indexOf(24));

// console.log(arr.includes("MOHD"));
// let arr1=[12,13]
// let arr2=[15,16]
// let arr3=[...arr1, ...arr2]
// console.log(arr3);


// let arr=[5,2,9,1,22,15,50,24]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);


// let revStr=(str)=>{
//     let rev=""
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev;
// }
// console.log(revStr("EYESI"));

// function longestWord(sentence){
//     let long=""
//     let word=sentence.split(" ");
//     for(let i=0; i<word.length; i++){
//         if(word[i].length>long.length){
//             long=word[i];
//         }
//     }
//     return long;
// }
// console.log(longestWord("I LOVE CODING IN JAVASCRIPTS ABCDEFGHIJKLMNOPQRS"));

// function pallindrome(str){
//     let rev=str.split('').reverse().join('');
//     if(str===rev) return `${str} is PALLINDROME`
//     else return `${str} is NOT A PALLINDROME`
// }
// console.log(pallindrome("EYEYEI"));

// let arr=[12,14,25,28,45]
// let pos=2
// for(let i=arr.length-1; i>=0; i--){
//     if(i>=pos){
//         arr[i+1]=arr[i]
//         if(i==pos){
//             arr
//         }
//     }
// }

// console.log("Start");
// const p1=fetch("https://api.github.com//users");
// console.log(p1);
// console.log("End");

// call back hell

// console.log("First");
// console.log("Second");
// let sum=0;
// for(let i=0; i<3000000000; i++)
//     sum+=i;
// console.log(sum);
// console.log("Last");

// console.log("FIRST");

// setTimeout(()=>{
//     console.log("Mohd Ziya 1");
    
// },5000)
// setTimeout(()=>{
//     console.log("Mohd Ziya 2");
// },6000)

// console.log("END");

// console.log("First");
// setTimeout(()=>{
//     console.log("Executed 1");
    
// },5000);
// setTimeout(()=>{
//     console.log("Executed 2");
// },8000)
// console.log("Last");

// function placedOrder(cb){
//     console.log("Payment is in Progress");
//     setTimeout(()=>{
//         console.log("Payment Received and Order get Placed");
//         cb();
//     },3000) 
// }
// function prepaingOrder(xy){
//     console.log("Food prepration Started");
//     setTimeout(()=>{
//         console.log("Food is now prepared");
//         // callback();
//         xy();
//     },3000)
// }

// function pickupdelivery(cb){
//     console.log("Pickup is ready ");
//     setTimeout(()=>{
//         console.log("Pick up the status");
//         cb();
//     },3000)
// }

// function deliverOrder(){
//     console.log("Delivered Order ready");
//     setTimeout(()=>{
//         console.log("Ordered Delivered");
        
//     },3000)
    
// }
// placedOrder(()=>{
//     prepaingOrder(()=>{
//         pickupdelivery(()=>{
//            deliverOrder(); 
//         });
//     });
// });
// // ();


// console.log("START");

// const p1=fetch('https://api.github.com/users');
// // console.log(p1);
// const p2=p1.then((res)=>{
//     return res.json();
// })

// p2.then((resp)=>{
//     console.log(resp);
// })

// fetch('https://api.github.com/users').then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
    
// })

// const j1={
//     name : "Mohd",
//     age : 25,
//     Address : "Sitkahan, Tanda"
// }
// let jsonFormat=JSON.stringify(j1);
// console.log(jsonFormat);

// console.log("FIRST");
// const p1=fetch('https://api.github.com//users')
// const p2=p1.then((res)=>{
//     return res.json();
// })
// p2.then((res)=>{
//     console.log(res);
// })
// // console.log(p1);
// console.log("END");

// fetch("https://api.github.com/users").then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

// console.log("Starting Phase");
// const p1=fetch("https://api.github.com/users");
// const p2=p1.then((response)=>{
//     return response.json();
// })
// p2.then((data)=>{
//     console.log(data);
    
// })
// console.log("Ending Phase");

// fetch("https://api.github.com/users").then((res)=>{return res.json()}).then((data)=>{console.log(data)})

// const jason=`{
//     "name" : "Mohd",
//     "lname": "Ziya",
//     "age"  : 30,
//     "Address":"Sitkahan"
// }`
//  const Obj12=JSON.parse(jason)
//  console.log(Obj12);

// async function greet(){
//     return new Promise((resolve, reject)=>{
//         resolve("ROHIT");
//     })
// }
// const resp=greet();
// // console.log(resp);
// resp.then((data)=>console.log(data));

// async function greet(){
//     return "Nohammad Ziya Shameem"
// }
// const func=greet();
// func.then((data)=>console.log(data));

// console.log("Start The Function");
// let sum=0
// for(let i=0; i<3000000000; i++){
//     sum+=i
// }
// console.log(sum);

// setTimeout(()=>{
//     console.log("Time Out Executed");
    
// },3000)
// const p1=new Promise((res, rej)=>{
//     res("Promise")
// })
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("Ending the process");

// function payment(cb){
//     console.log("Payment is in Progress....");
//     setTimeout(()=>{
//         console.log("Payment received and order is ready to placed..");
//         cb();
//     },3000)
// }

// function pickupOrder(xy){
//     console.log("Pickup Order");
//     setTimeout(()=>{
//         console.log("Pickup the order and served");
//         xy();
//     },3000)
// }

// function deliver(){
//     console.log("Delivered Food....");
//     setTimeout(()=>{
//         console.log("I have Delivered the food");
        
//     },3000)
// }
// payment(()=>{
//     pickupOrder(()=>{
//         deliver();
//     });
// });


// console.log("START");
// const p=fetch("https://api.github.com/users")
// const p1 =p.then((res)=>{
//     return res.json();
// })
// p1.then((data)=>{
//     console.log(data);
    
// })

// console.log("END");

// console.log("Start");

// async function greet(){
//     return new Promise((resolve, reject) => {
//         reject("Mohd Ziya Shameem Error")
//     })
// }
// const res=greet();
// res.then((response)=>{
//     console.log(response);
    
// }).catch((err)=>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("ALWAYS RUN");
    
// })
// console.log("ENDING......");



// async function greet(){
//     return new Promise((res, rej)=>{
//         // res("Mohammad Ziya")
//         rej("Error")
//     })
// }
// let response=greet();
// response.then((data)=>console.log(data)).catch((err)=>console.log(err));


// async function greet(){
//     return new Promise((res,rej)=>{
//         rej("Mohd IS IN PENDING STATES")
//     })
// }
// const resp=greet();
// resp.then((data)=>console.log(data)).catch((err)=>console.log("ERROR : ",err));
// console.log("Hellow First");

// const resp= fetch("https://api.github.com/users")
// const data=resp.json();
// console.log(data);


// console.log("LAST");

// fetch("https://api.github.com/users").then((resp)=>resp.json()).then((data)=>console.log(data));






// let n=10;
// for(let i=1; i<=n; i++){
//     console.log(i);  
// }

// let num=parseInt(prompt("Enter number that you want to print on console...."))
// // console.log(num);
// // console.log(typeof num);
// while(num>=1){
//     console.log(num);
//     num--; 
// }
// let input=document.getElementById("num");
// // console.log(input);

// let btn=document.getElementById("btn");
// let shownum=document.getElementById("shownum");
// // console.log(btn);
// let input_val=parseInt(input.value);
//    for(let i=1; i<=input_val; i++){
//     shownum.innerText=`${i},`
//    }
// btn.addEventListener("click",()=>{
   
// })




// let num=50;
// for(let i=0; i<=50; i++){
//   if(i%2==0){
//     console.log(`Enven:${i}`)
//   }
//   else{
//     console.log(`Odd:${i}`)
//   }
// }

// let num=10;
// let sum=0;
// for(let i=1; i<=num; i++){
//     sum+=i;
// }
// console.log(sum)


// let num=3;
// let fact=1;
// for(let i=1; i<=num; i++){
//     if(num==0){
//         console.log(`factorial of ${num} will be 1`)
//     }else{
//         fact=fact*i;
//     }
// }
// console.log(fact)

// for(let i=1; i<=5; i++){
//     let str=" ";
//     for(let j=1; j<=i; j++){
//         str+="*"
//     }
//     console.log(str);
    
// }





// for(let i=1; i<=5; i++){
//     let str=" ";
//     for(let j=5; j>=i; j--){
//         str+="*"
//     }
//     console.log(str);
    
// }



// function increment(){
//     let count=0
//     return function(){
//         count++;
//         return count;
//     }
// }
// const myInc=increment();
// console.log(myInc());
// console.log(myInc());
// console.log(myInc());


// function outer() {
//   let c = {}; // cache object

//   return function (n) {
//     if (n in c) {
//       console.log("Return From Cache.......");
//       return c[n];
//     }

//     console.log("Calculating......");
//     c[n] = n * n;
//     return c[n];
//   };
// }

// const myInc = outer();

// console.log(myInc(2)); // Calculating...... → 4
// console.log(myInc(2)); // Return From Cache....... → 4
// console.log(myInc(2)); // Return From Cache....... → 4


// 


// let arr=[11,12,13,14,211,16]
// let even=[]
// let odd=[]
// for(let x of arr){
//     if(x%2==0){
//         even.push(x)
//     }
//     else{
//         odd.push(x)
//     }
    
// }
//     console.log(even);
//     console.log(odd);

// function outerFun(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let closureproperty=outerFun();
// console.log(closureproperty());
// console.log(closureproperty());
// console.log(closureproperty());


// function memoizeSquare(){
//     let cache={};
//     return function(n){
//         if(n in cache){
//             console.log("Return From Cache.......");
//             return cache[n];
//         }
//         console.log("Calculating....");
//         cache[n]=n*n;
//         return cache[n];
//     }
// }
// const calculateSquare=memoizeSquare();
// console.log(calculateSquare(5));
// console.log(calculateSquare(5));
// console.log(calculateSquare(5));
// console.log(calculateSquare(5));


// let num=10;
// for(let i=1; i<=10; i++){
//     console.log(i);
    
// }

// function calculateMax(a, b, c){
//     let max;
//     if(a>=b && a>=c){
//         return a
//     }
//     else if(b>=a && b>=c){
//         return b
//     }
//     else{
//         return c
//     }
// }
// console.log(calculateMax(20, 30, 31));


// function calculateBill(units){
//     let Total;
//     if(units<100){
//         Total=100*5
//     }
//     else if(units<200){
//         Total=100*5+(units-100)*7;
//     }
//     else if(units<300){
//         Total=100*5+100*7+(units-200)*10;
//     }
//     else{
//         Total=100*5+100*7+100*10+(units-300)*12;
//     }
//     return Total;
// }
// console.log(calculateBill(230));


// function digitToNumber(digit){
//     let l=digit.length;
//     let num=digit[l-1]*10**(l-1)+digit[l-2]*10**(l-2)+digit[l-3]*10**(l-3)+digit[l-4]*10**(l-4)
//     console.log(num);   
// }
// digitToNumber([2,4,5,6])

// function reverseNumber(n){
//     let rev=""
//     while(n>0){
//         let last=n%10;
//         rev+=last
//         n=n/10;
//     }
//     return rev;
// }
// console.log(reverseNumber(1234));


// function curryingMultiplication(a){
//     return function(b){
//         return function (c){
//             return function (d){
//                 return a*b*c*d;
//             }
//         }
//     }
// }

// console.log(curryingMultiplication(1)(2)(3)(4));


// let p1={
//     name : "Mohammad Ziya Shameem",
//     age : 28,
//     Designation : "Software Engineer",
//     userDetail : function(){
//         console.log(this.name);
//     }
// }
// let p2={
//     name : "Mohammad Ziya Shameem 2",
//     age : 28,
//     Designation : "Software Engineer",
// }
// p1.userDetail();
// p1.userDetail.call(p2);

// let p1={
//     name : "Mohd Ziya",
//     age  :  30,
//     designation : "Backend Software Developer"
// }
// let p2={
//     name : "Anas Ziya",
//     age  : 35,
//     designation : "Frontend Software Developer"
// }
// function Introduction(){
//     console.log(`My name is ${this.name} I am ${this.age} yeras old and currently i am working as a ${this.designation}`);
// }
// Introduction.call(p1)
// Introduction.call(p2)


// function toCalculateHcf(a, b){
//     let factorofFirstnum=[];
//     for(let i=1; i<a ; i++){
//         if(a%i===0){
//             console.log(factorofFirstnum.push(i));
            
//         }
//     }
//     // console.log(firstFact);
    
// }
// toCalculateHcf(12, 16)





// function closureProp(){
//     let c=0;
//     return function(){
//         c++;
//         return c;
//     }
// }
// const clo=closureProp();
// console.log(clo());
// console.log(clo());
// console.log(clo());
// console.log(clo());



// function meoizeSquare(){
//     let cache={};
//     return function(n){
//         if(n in cache){
//             console.log("Return the value from stored result");
//             return cache[n];
//         }
//         cache[n]=n*n;
//         console.log("Calculating....");
//         return cache[n];
//     }
// }
// const memo=meoizeSquare();
// console.log(memo(5));
// console.log(memo(5));
// console.log(memo(5));
// console.log(memo(5));

// const p1={
//     name : "Anas Ziya",
//     age : 38,
//     address : function (){
//         console.log(`My name is ${this.name} and I am ${this.age} years old`);
//     }
// }
// const p2={
//     name : "Mohd Ziya",
//     age : 38,
// }
// p1.address.call(p2);



// document.querySelector('.gp').addEventListener("click",()=>{
//     console.log("Grand Parent Clicked");
    
// },true)
// document.querySelector('.par').addEventListener("click",()=>{
//     console.log("Parent Clicked");
    
// },true)
// document.querySelector('.child').addEventListener("click",()=>{
//     console.log("Child Clicked");
    
// },true)


// let arr=[4,20,5,8]
// let sortArr=arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(sortArr);


// for(let i=1; i<=5; i++){
//     let str=" ";
//     for(let j=5; j>=i; j--){
//         str=str+" * "
//     }
//     console.log(str);
    
// }

// 

// function digitToNumber(digit){
//     let num=0;
//     digit.forEach((d,i)=>{
//         num+=d*Math.pow(10, i)
//     })
//     return num;
// }
// console.log(digitToNumber([2,4,6,5,7]));


// let n=10
// for(let i=1; i<=n; i++){
//     console.log(n-i+1);
// }


// ?Prime Number;

// let num=18;
// for(let i=2; i<=num/2; i++){
//     if(num%2==0){
//         console.log(`The Number ${num} is NOT PRIME`);
//         break;
//     }
//     else{
//         console.log(`The Number ${num} is PRIME`);
//         break;
//     }
// }
// console.log(test);
// var test=function(){
//     console.log("Mohammad Ziya Shameem");
// }

// var x=10;
// function testValue(){
//     console.log(x);
//     let x=20;
// }
// console.log(x);
// testValue();


// let arr=[11,12,13,14,15]
// for(let i=0; i<arr.length/2; i++){
//     var temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
// }
// console.log(arr);

// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let myFun=outer();
// console.log(myFun());
// console.log(myFun());
// console.log(myFun());

// function memoization(){
//     let cache={};
//     return function(n){
//         if(n in cache){
//             console.log("Stored results");
//             return cache[n]
//         }
//         console.log("Calculating .....");
//         cache[n]=n*n;
//         return cache[n];
//     }
// }
// let myFun=memoization();
// console.log(myFun(6));
// console.log(myFun(6));
// console.log(myFun(6));


// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(3)(5));

// let userDetails={
//     name : "Mohd Ziya",
//     age  : 28,
//     profession : "Software Engineers",
//     printDetails : function(){
//         console.log(this.name);
        
//     }
// }
// let userDetails2={
//     name : "Anas Ziya",
//     age  : 30,
//     profession : "Software Engineers",
// }
// userDetails.printDetails.call(userDetails2);


// function isPrimeNumber(n){
//     if(n===1) console.log(`${n} is neither Prime nor Composite Number`);
    
//     else if(n<0) console.log(`${n} is not a Prime Number`);
    
//     else{
//         for(let i=2; i<n; i++){
//             if(n%i==0){
//                 console.log(`${n} is not a prime Number`);
//                 break;
//             }
//             else{
//                 console.log(`${n} is  PRIME NUMBER`);
//                 break;
//             }
//         }
//     }
// }
// isPrimeNumber(11)

// function allFactors(n){
//     let factor=[];
//     for(let i=1; i<=n; i++){
//         if(n%i===0){
//             factor.push(i);
//         }
//     }
//     return factor;
// }
// console.log(allFactors(18));


// function multipleOfNumber(num, limit){
//         let multiple=[];
//     for(let i=num; i<=limit; i+=num){
//         multiple.push(i);
//     }
//     return multiple;
// }
// console.log(multipleOfNumber(5, 67));

// let pr=prompt("Enter the number")
// if(pr===null){
//     console.log("Cancelled Please Enter the valid number");
// }
// else{
//     var n=Number(pr)
//     if(n<)
// }

// for(var i=1;i<10;i++){
//     console.log("HELLOW");
// }
// console.log(i);
// let num=Number(prompt("Enter the Number......."))
// if(isNaN(num)){
//     console.log("Invalid Number, Please Enter the valid number..");
// }
// else{
//     if(num>0){
//         // console.log("Enter the positive number");
//         let fact=1;
//         for(let i=1; i<=num; i++){
//             fact*=i;
//         }
//         console.log(`The factorial of ${num} will be : `,fact);
//     }
//     else{
//         console.log("Number Should be Postive and greater than zero");
        
//     }
// }


// let pr=prompt("Enter the number...")
// if(pr === null){
//    console.log("cancelled....");
   
// }
// let pr = prompt("Enter the number...");

// if (pr === null) {
//     console.log("cancelled....");
// }

// else{
//     let num=Number(pr);
//     if(isNaN(num)){
//         console.log(`Number is Invalid Number`);
//     }
//     else{
//         if(num>0){
//             for(let i=2; i<=Math.floor(num/2); i++){
//                 if(num%i===0){
//                     console.log(`${num} is PRIME NUMBER`);
//                     break;
//                 }
//             }
//         }
//         else{
//             console.log(`Number Should be Positive and Greater than Zero...`);
            
//         }
//     }
// }

// let pr=prompt("Enter the number.....")
// if(pr===null){
//     console.log("Cancelled......");
// }
// else{
//     let num=Number(pr);
//     if(isNaN(num)){
//         console.log("Please Enter the Valid Number......");
//     }
//     else{
//         if(num>0){
//             let copy=num;
//             let rev=0;
//             while(num>0){
//                 let rem=num%10;
//                 rev=rev*10+rem;
//                 num=Math.floor(num/10)
//             }
//             if(copy===rev){
//                 console.log("Pallindrome");
//             }
//             else{
//                 console.log("NOT PALLINDROME");
//             }
            
//         }
//         else{
//             console.log("Number Should be Positive and greater than one");
//         }
//     }
// }



// let pr=prompt("Enter the number that you want to sum.....")
// if(pr===null){
//     console.log("Cancelled");
// }
// else{
//     let n=Number(pr);
//     if(n>0){
//         for(let i=2; i<=n; i++){
//             if(n%i===0){
//                 console.log(`The number ${n} is NOT PRIME NUMBER`);
//                 break;
//             }
//             else{
//                 console.log(`The number ${n} is a PRIME NUMBER`);
//                 break;
//             }
//         }
//     }
//     else{
//         console.log("Number Should be Positiv and greater than One......");
//     }
// }


// let pr=prompt("Enter the Number");
// if(pr===null){
//     console.log("Cancelled.......");
// }
// else{
//     let n=Number(pr);
//     if(isNaN(n)){
//         console.log("Invalid Number");
//     }
//     else if(n<=1){
//         console.log("Number Should be greater than 1");
//     }
//     else{
//         let isPrime=true;
//         for(let i=2; i<=n; i++){
//             if(n%i===0){
//                 isPrime=false;
//                 break;
//             }
//         }
//         if(isPrime){
//             console.log(`${n} is a PRIME NUMBER`);
//         }
//         else{
//             console.log(`${n} is NOT A PRIME NUMBER`);
//         }
//     }
// }


// let p=prompt("Enter the Number.....");
// if(p===null){
//     console.log("Cancelled............");
// }
// else{
//     let n=Number(p);
//     if(isNaN(n)){
//         console.log("Please Enter the Valid number....");
//     }
//     else if(n<=1){
//         console.log("Number Should be greater than 1");
//     }
//     else{
//         let isPrime=true;
//         for(let i=2; i<n; i++){
//             if(n%i===0){
//                 isPrime=false;
//                 break;
//             }
//         }
//         if(isPrime){
//            console.log(`${n} is a PRIME NUMBER`); 
//         }
//         else{
//             console.log(`${n} is a NOT A PRIME NUMBER`);
//         }
//     }
// }


// function isStrong(n){
//     let copy=n;
//     let sum=0;
//     while(n>0){
//         let rem=n%10;
//         let fact=1;
//         for(var i=1; i<=rem; i++){
//             fact=fact*i;
//         }
//         sum+=fact;
//         n=Math.floor(n/10);
//     }
//     if(sum===copy){
//         console.log(`${copy} is Strong Number`);
//     }
//     else{
//         console.log(`${copy} is Not Strong Number`);
//     }
// }
// isStrong(145)
// isStrong(40585)
// isStrong(405)
// isStrong(7)


// let revNumber=(n)=>{
//     if(n<0){
//         console.log("Please Enter Positive number");
//     }
//     else if(isNaN(n)){
//         console.log("Please Neter the Number no string" );
//     }
//     else{
//         let rev=0;
//         if(n>0){
//             let rev=0;
//             while(n>0){
//                 let rem=n%10;
//                 rev=rev*10+rem;
//                 n=Math.floor(n/10);
//             }
//              console.log(rev);
//         }
       
//     }       
// }
// revNumber(12345678)


// let pr=prompt("Enter the number that you want to som ofthe digit........")
// // console.log(pr);
// if(pr===null){
//     console.log("Cancelled.........");
// }
// else{
//     let n=Number(pr)
//    if(isNaN(n)){
//     console.log("INVALID NUMBER, PLEASE ENTER THE VALID NUMBER>>>>");
//    }
//    else if(n<0){
//     console.log("Please Enter the POSITIVE NUMBER.........");
//    }
//    else{
//     let copy=n;
//     let sum=0;
//     while(n>0){
//         let rem=n%10;
//         sum+=rem;
//         n=Math.floor(n/10);
//     }
//     console.log(`The Sum of digit of Number ${copy} will be : ${sum}`);
//    }
// }




// let pr=prompt("Enter the number that you want to som ofthe digit........")
// // console.log(pr);
// if(pr===null){
//     console.log("Cancelled.........");
// }
// else{
//     let n=Number(pr)
//    if(isNaN(n)){
//     console.log("INVALID NUMBER, PLEASE ENTER THE VALID NUMBER>>>>");
//    }
//    else if(n<0){
//     console.log("Please Enter the POSITIVE NUMBER.........");
//    }
//    else{
    
//     while(n>0){
//         let rem=n%10;
//         let fac=1;
//         for(let i=1; i<=rem;i++){
//             fac*=i;
//         }
//         console.log(fac);
        
//         n=Math.floor(n/10);
//    }
// }

// function strongNumber(n){
//     if(n<0){
//         console.log(`Plese enter the valid number and also enter the positive number....`);
//     }
//     else{
//         let sum=0;
//         let copy=n;
//         while(n>0){
//             let rem=n%10;
//             let fact=1;
//             for(let i=1; i<=rem; i++){
//                 fact*=i;
//             }
//             sum+=fact;
//             n=Math.floor(n/10);
//         }
//         if(copy===sum){
//             console.log("Number is Strong");
//         }
//         else{
//             console.log("Number is NOT Strong");
//         }
//     }
// }
// strongNumber(40585)

// let random = Math.floor((Math.random() * 100) + 1);
// let guess = Number(prompt("Enter the number......."));


// if (guess > random) {
//     console.log("Too high, try again");
// }
// else if (guess < random) {
//     console.log("Too Low Try aGain");
// }
// else {
//     console.log("Congratulation the number was", guess);
// }

// console.log("Mohd");
// console.log("ZIYA");

// function isPrime(n){
//     if(n<0){
//         console.log("Enter Positive Number");
        
//     }
//     else if(n===1){
//         console.log(`1 is neither prome not coprime`)
//     }
//     else if(n===2){
//         console.log(`${n} is Prime Number`)
//     }
//     for(let i=3; i<=n; i++){
//         if(n%3===0){
//             console.log(`${n} is nOT A PRIME NUMBER`)
//         }
//         else{
//             console.log(`${n} is A PRIME NUMBER`)
//         }
//     }
// }
// isPrime(1);
// isPrime(2);
// isPrime(3);

// console.log("*");
// console.log("*");
// console.log("*");

// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");
// process.stdout.write("* ");


// let x=require('prompt-sync')();
// let n=Number(x("Enter the number : "));
// for(let i=n; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j);
//     }
//     console.log();
    
// }

// let pr=require('prompt-sync')();
// let num=Number(pr("Enter the number:"));
// for(let i=num; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(i+" ");
//     }
//     console.log();
// }

// for(let i=5; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(i+" ")
//     }
//     console.log();
    
// }


// for(let i=5; i>=1; i--){
//     let ascii=65;
//     for(let j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ");
//         ascii++;
//     }
//     console.log();
//     // ascii++;
// }

// let arr=[];
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);
// console.log(arr);

// let arr=new Array(3);
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;
// arr[4]=50;
// console.log(arr);

// let arr=new Array(3);
// arr.push(10);
// console.log(arr);

// let p=require('prompt-sync')();
// let arr=new Array(5);
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     arr[i]=Number(p("Enter the Number : "))
// }
// // console.log(arr);
// for(let j=0; j<arr.length; j++){
//     sum+=arr[j];
// }
// console.log(sum);


// MAX ELEMEMNT OF AN ARRAYS
// let arr=[10,2,78,100,423,1];
// let min=arr[0];
// for(let i=1; i<arr.length; i++){
//     if(min>arr[i]){
//         min=arr[i];
//     }
// }
// console.log(`MIN: ${min}`);

// let arr=[10, 30, 56, 43, 29, 64, 49, 60,62,12]
// let max=Math.min(arr[0], arr[1]);
// let Smax=Math.max(arr[0], arr[1]);
// // console.log(max, Smax);
// for(let i=2; i<arr.length; i++){
//     if(arr[i]<max){
//         Smax=max;
//         max=arr[i];
//     }
//     else if(arr[i]<Smax && max != arr[i]){
//         Smax=arr[i];
//     }
// }
// console.log(Smax);


// let arr=[10,20,30,40,50];
// let temp=new Array(arr.length);
// let j=0;
// for(let i=arr.length-1; i>=0; i--){
//     temp[j]=arr[i];
//     j++;
// }
// console.log(temp);


// let arr=[10, 20, 30, 40, 50, 60];
// let i=0;
// let j=arr.length-1;
// while(i<j){
//     let t=arr[i];
//     arr[i]=arr[j];
//     arr[j]=t;
//     i++;
//     j--;
// }
// console.log(arr);



// let arr=[0, 0, 1, 1, 0,1,0,1,0,];
// let i=0, j=0;
// while(i<arr.length){
//     if(arr[i] ==0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);


// let arr=[1,2,3,4,5]
// let copy=arr[0];
// for(let i=0; i<arr.length-1; i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=copy;
// console.log(arr);


// let arr=[1,2,3,4,5];
// let copy=arr[arr.length-1];
// for(let i=arr.length-1; i>=1; i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=copy;
// console.log(arr);


// function reverseNumber(n){
//     if(n<0){
//         console.log("Please Enter the positive number : ");
//     }
//     else{
//         let rev=0;
//         while(n>0){
//             let rem=n%10;
//             rev=rev*10+rem;
//             n=Math.floor(n/10);
//         }
//         console.log(rev);
//     }
// }
// reverseNumber(123457)



// function sumofDigit(n){
//     let copy=n;
//     if(n<0){
//         console.log("Please Enter the Positive Number : ");
//     }
//     else{
//         let sum=0;
//         while(n>0){
//             let rem=n%10;
//             sum+=rem;
//             n=Math.floor(n/10);
//         }
//         return `the sum of the digit of num ${copy} will be ${sum}`
//     }
// }
// console.log(sumofDigit(12345));



// function strongNumber(n){
//     let copy=n;
//     let sum=0;
//     if(n<0){
//         return "Please Enter the Positive Number"
//     }
//     else{
//         while(n>0){
//             let rem=n%10;
//             let fact=1;
//             for(let i=1; i<=rem; i++){
//                 fact=fact*i;
//             }
//             sum+=fact;
//             n=Math.floor(n/10);
//         }
//         if(copy===sum) return `the number ${copy} is a STRONG NUMBER`
//         else return `NOT A STRONG NUMBER`
//     }
// }
// console.log(strongNumber(145));


// Sum of n natural Number

// function sumOfnaturalNumber(n){
//     if(n<0) return `please Enter the positive number`
//     else{
//         if(n>0){
//             let sum=0;
//             for(let i=1; i<=n ; i++){
//                 sum+=i
//             }
//             return sum;
//         }
//     }
// }
// console.log(sumOfnaturalNumber(7));


// function factorial(n) {
//     if(n>0){
//         let fact=1;
//         for(let i=1; i<=n; i++){
//             fact*=i;
//         }
//         console.log(fact);
//     }
//     else{
//         console.log("Please Enter positive number");
//     }
// }
// factorial(6)


// function isPrime(n){
//     if(n<=1) return "Neither Prime nor Composite";
//     else{
//         for(let i=2; i<=Math.sqrt(n); i++){
//             if(n%i===0) {
//                 return `${n} NOT PRIME NUMBER`;
//                 break;
//             }
//         }
//         return `${n} Prime Number`
//     }
// }

// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(7));


// let prompt=require('prompt-sync')();
// let guess=0;
// let random=Math.floor(Math.random()*100+1);
// while(guess != random){
//     guess=Number(prompt("Enter the value : "));
//     if(isNaN(guess) || guess<1 || guess>100){
//         console.log("Try Agin...");
//     }

//     else if(guess>random){
//         console.log("Too High, TRY AGAIN");
//     }
//     else if(guess<random){
//         console.log("Too LOW, TRY AGAIN");
//     }
//     else{
//         console.log("Congratulation the number was ", guess);
//     }
// }

// for(let i=1; i<=5; i++){
//     for(let j=1; j>=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }














































































































































































































































 





















































































































































