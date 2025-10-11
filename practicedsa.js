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


let arr=[5,2,9,1,22,15,50,24]
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp;
        }
    }
}
console.log(arr);




















