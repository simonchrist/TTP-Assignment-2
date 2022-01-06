//Simon Christian TTP-Assignment 2
//forEach()
//Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled
//“myEach” that will take in an array of elements and executes any callback function (provided by you) on each of those elements.
let array = [1, 2 , 3 , 4 , 5];

function myEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
function printConsole(num){
    console.log(num)
}
console.log("Question 1- myEach/forEach")
myEach(array,printConsole);

//map()
//Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

function myMap(arr, callback) {
    const value = [];
    for (let i = 0; i < arr.length; i++) {      
      value.push(callback(arr[i]));
    }
  }

  function myMul(num){
      console.log(num*2)
  }
  console.log("Question 2- myMap")
  myMap(array,myMul);

  //filter()
  //Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

  function myFilter(arr, callback) {
    const value = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])===true) {
        value.push(arr[i]);
      }
    }
    return value;
  }

  function compare(num){
        if(num>=3) {
            return true;}
        else {
            return false;
        }
    }
  console.log("Question 3- myFilter")
  console.log(myFilter(array, compare))

  //some() (aka any())
//Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.

function mySome(arr, callback) {
    const value = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        value.push(arr[i]);
      }
    }
    if(value.length > 1){
        return true;
    } else{
        return false;
    }
  }
  function compare(num){
    if(num>=3) {
        return true;}
    else {
        return false;
    }
}

  console.log("Question 4- Some")
  console.log(mySome(array, compare))

  //every()
//Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and executes a callback function (provided by you) on each of those elements.
// Every

function myEvery(arr, callback) {
    const value = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        value.push(arr[i]);
      }
    }
    if(value.length == arr.length){
        return true;
    } else{
        return false;
    }
  }
  function compare(num){
    if(num<=3) {
        return true;}
    else {
        return false;
    }
}
  console.log("Question 5- myEvery")
  console.log(myEvery(array, compare))
  
  //reduce()
//Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of elements and executes a callback function (provided by you) on each of those elements

function myReduce(arr){
    value = 0
    for(let i = 0; i < arr.length; i++){
        value+= arr[i];
    }
    return value;
}

console.log("Question 6- myReduce")
let myReduceTest = array;
console.log(myReduce(myReduceTest))

//includes()
//Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.

function myIncludes (arr, value){
    for(let i=0; i< arr.length; i++){
        if(arr[i] == value){
            return true;
        } 
    }
    return false;
}

console.log("Question 7- myIncludes")
console.log(myIncludes(array, 4))

//indexOf()
//Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns 
//the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

function myIndexOf(arr, target) {
    value = -1;
    for (let index = 0; index < arr.length; index++) {
        const element = array[index];
        if (element == target) {
            result = index;
            break;
        }
    }
    return value;
}

console.log("Question 8- myIndecOf")
indexOfTest = myIndexOf(array, 9)
console.log(indexOfTest)

//push()
//Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.

function myPush(arr, value) {
    arr.splice(arr.length, 0, value);
    return arr;
}

console.log("Question 9- myPush")
let pushTest = array;
console.log(myPush(pushTest, 6))

//lastIndexOf()
//Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myUnshift” (typo) that will take in an array of elements and 
//returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

function myUnshift(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value)  {
        return i; 
      }
    }
    return -1;
  };

  console.log("Question 10- myUnshift")
  let myUnshiftTest = array;
  console.log(myUnshift(myUnshiftTest, 5))

  //Object.keys()
//Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object. 
//Modify the Object class, appending a static method to the Object class., appending a static method to the Object class. Leverage the “for...in” loop.

function grabKeys(object){
    let arr=[];
    for(element in object) {
        arr.push(element);
    }
    return arr;
}

console.log("Question 11- Object.keys()")
const myObject = {
    1: 'KIA',
    2: 'NISSAN',
    3: 'TOYOTA',
    4: 'HONDA'
};
console.log(grabKeys(myObject));

//Object.values()
//Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object. 
//Modify the Object class, appending a static method to the Object class. Leverage the “for...in” loop.
function grabValues(object){
    let arr=[];
    for(element in object)
       arr.push(object[element]);
    return arr;
}
console.log("Question 12- Object.values()")
console.log(grabValues(myObject));
