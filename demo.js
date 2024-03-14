// // // // var price=10
// // // // // // // var product="apple"
// // // // // // // var tax=5

// // // // // // // console.log("name of roduct",product)
// // // // // // // console.log(price+tax)


// // // // // var a=10
// // // // // var b=20
// // // // // var c

// // // // function add(a,b)
// // // // {
// // // //     c=a*b
// // // //     console.log("add values is:",c)
// // // // }   
// // // //     var a=10;
// // // //     var b=20

// // // // add(10,5)

// // // var rain=1

// // // if(rain==1)
// // // {   console.log("It is rain..");
// // // }
// // // else{
// // //     console.log("it false")

// // // }


// // // console.log(false && true ||true )


// // // for(i=1;i<=5;i++)
// // // {
// // //     console.log(i,"*2=",i+i)
// // // }

// // // const obj1 = {
// // //     "first Name" : "Priyansu",
// // //     "last Name" : "Sekhar",
// // //     "my age" : 21,
// // //     "Phone no" : 43546365
// // // }

// // // console.log(obj1)
// // let string = "he,llo hi       "

// // console.log(string.length);
// // console.log(string.lastIndexOf("e"));
// // console.log(string.substring(4, 8)); // 8-1 (n - 1)
// // console.log(string.charAt(2));
// // console.log(string.trim());
// // console.log(string.includes("etewtaking"));
// const string1 = "This is our js journey"
// const newString = new String(string1)

// // // console.log(newString.split(" "));
// // // console.log(string1.split(" "))

// // let phoneNum = 9878945687
// // const num = new Number(234232)
// // console.log(typeof(num.toString()));


// // const decimal = 123.984234
// // console.log(decimal.toFixed(2));
// // console.log(decimal.toPrecision(5));


// // console.log(Math.random() * 10);

// // const min = 10
// // const max = 20

// // console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// const arr = [1,2,34,5,6,23]

// // const date = new Date("2023-05-15")

// // console.log(date.toString());

// // find the difference between null and undefined values
// // try to understand how bigint and exponentiation in js -- examples and practice 

// // scoping - global and local

// // let name1 = "test"

// // {
// //     let name2 = "test2"
// //     {
// //         let name = "Priyansu";
// //         console.log(name);
// //     }

// //     console.log(name1);
// // }

// // console.log(name2);

// function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum;

// }

// // fibonacci series function - HW


// console.log(sumArr(arr));

// const car1 = {
//     "color" : "blue",
//     "name" : "BMW",
//     "mileage" : 100
// }

const car2 = {
    "color" : "red",
    "name" : "Audi",
    "mileage" : 200
}

console.log(car2["color"]);
console.log(car2.color);


// function add (a,b)
// {
//     console.log(a+b)
// }

// add (10,5)