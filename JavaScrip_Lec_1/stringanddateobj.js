// const str=`Hello Coder Army`
// console.log(str.length);
// console.log(str[0]);
// console.log(str.toLocaleUpperCase());

// const now=new Date();
// // console.log(now);
// console.log(now.toString());

// const dates=new Date();
// console.log(dates.toLocaleString());
// console.log(dates.getDate());
// console.log(dates.getDay());
// console.log(dates.getFullYear());
// console.log(dates.getHours().toLocaleString());
// console.log(dates.getMilliseconds());
// console.log(dates.getUTCDay());
// console.log(dates.toLocaleString());

// const now=new Date(2025, 9, 2, 5, 20, 25,145)
// console.log(now);
// console.log(now.toLocaleString());

// const dates=Date.now();
// const now=new Date(1759405963385)

// console.log(now);

// var arr=[1,2,3,4,5]
// for(let i=0; i<arr.length/2 ; i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr);

// let str="JAVASCRIPT";
// for(let i of str){
//     console.log(i); 
// }

// let obj={
//     name:"Mohd",
//     age:25,
//     address:"Sitkahan Tanda Ambedkar Nagar UP - 224190"
// }
// for(let key in obj){
//     console.log(key);
// }


// let arr=[11,21,31,41,51]
// arr.forEach((val)=>{
//     console.log(val);
    
// })

// let arr=[11,21,31,41,51]
// console.log(arr.indexOf(31));
// console.log(arr.includes(31));

// let arr1=[11,12,13,14,15]
// let arr2=[21,22,23,24,25]
// // console.log(arr1.concat(arr2));
// let arr3=[...arr1,...arr2]
// console.log(arr3.length);

// let arr=[5,2,9,11,23,8]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);

// let reverse=(str)=>{
//     let rev=""
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev;
// }
// console.log(reverse("MOHD"));

// let reverse=(str)=>{
//     return str.split('').reverse().join('')
// }
// console.log(reverse("MOHAMMAD ZIYA SHAMEEM"));

let marks=[100, 50, 70, 80]
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// marks.push("Ziya")
// marks.push(130);
// console.log(marks);
// marks.pop()
// marks.pop()
// marks.pop()
// console.log(marks);
// marks.unshift("Mohammad")
// marks.unshift("Shameem")
// console.log(marks);
// marks.shift()
// console.log(marks);

// let arr=[12,16,27,78,89]
// let arr2=arr
// arr2.push(141)
// console.log(arr2);
// console.log(arr);


// const arr=[10,20,30,40,50]
// arr=[12,15,19]
// console.log(arr);

// let arr=[10, 30, 50, 90, 11]
// let arr3=arr.slice(2,4)
// console.log(arr3);
// console.log(arr.slice(2,4));


// let arr=[10, 30, 50, 90, 11, 120, 231]
// // let arr1=arr.splice(2,2)
// // console.log(arr1);
// // console.log(arr);
// arr.splice(1,3,"ROHIT",true)
// console.log(arr);
// console.log(arr.splice(1,3,"ROHIT",true));

// let arr1=[10,30,50,90,11]
// let arr2=["Rohit", 111, true]
// console.log(arr1.concat(arr2));
// console.log([...arr2,...arr1]);

// let n=["Alice", "Bob", "Charlie"]
// console.log(typeof n.toString());
// let str="MOHS"
// console.log(str.split(''));

// let str=["Alice", "Bob", "Chrlie", "Bob", "Mohd", "Bob","anas"]
// // console.log(str.lastIndexOf("Bob"));
// // console.log(str.includes("Bob"));
// str.sort();
// console.log(str);
// let arr=["anas","Arbax"]
// arr.sort()
// console.log(arr);

// let arr=[10, "Rohit", "Mohan", true]
// arr.sort()
// console.log(arr);

// let a=[10,40,31,71,5,11]
// a.sort((a,b)=>a-b)
// a.reverse()
// console.log(a);

// let arr=[10,30,50,[40,90,11],80]
// console.log(arr[3][1]);

const arr=[10,30,50,[40,90,[60,19,99]],80]
const a=arr.flat(Infinity)
console.log(a);
































































































