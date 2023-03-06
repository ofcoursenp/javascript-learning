// age = prompt('whats ur age : ')
// age = Number.parseInt(age)

// if(age<0){
//     console.log("INVALID AGE")
// }
// else if(age < 9){
//     console.log("NOT ENOUGH ")
// }

// else if(age>=9 && age<=15){
//     console.log('UR NOT ABOVE 18')
// }

// else{
//     console.log("UR ABOVE OR 18")
// }

// console.log('You can',age<18?'not drive':'drive')



// age lies between 10 -20 or not

// age = prompt('whats ur age : ')
// age = Number.parseInt(age)

// if(age>=10 && age<=20){
//     console.log("Its valid")
// }
// else{
//     console.log("No ")
// }


// Switch case statement


// age = prompt('whats ur age : ')
// age = Number.parseInt(age)
// console.log(typeof age)

// switch(age){
//     case 12:
//         console.log("Okay ur greater than 12")
//     case 13:
//         console.log("OKay ur less than 12")
//     default:
//         console.log("Okay its a number")
// }

// divisable by 2 and 3

// let n = prompt('Take a number : ')
// n = Number.parseInt(n)

// if(n%3 == 0 && n%2 == 0){
//     console.log("DIVISABLE BY 2 AND 3")
// }
// else{
//     console.log("NOT DIVISABLE BY 2 AND 3")
// }

 
// Either divisable by 2 or 3
 
// let n = prompt('give a number : ')
// n = Number.parseInt(n)

// if(n%3==0 || n%2==0){
//     console.log('Divisable by 2 or 3')
// }
// else{
//     console.log("Not divisable by 2 or 3")
// }


// You can drive or not drive using turnary operator

// age = prompt('Whats ur age : ')
// age = Number.parseInt(age)

// console.log('You can', age>18? 'drive':'not drive' )


// for loop

// for(let i =0; i<40; i++){
//     console.log(i)
// }

// sum of few numbers

// let n = 0

// for(let i=0; i<30; i++){
//     n +=i
// }
// console.log(n)

// for in loop

// marks = {
//     rohan:50,
//     mohan:60,
//     smith:90,
//     jhonson:50,
// }

// for(i in marks){
//     console.log(i+ " : " + marks[i])
// }

/*
//output : 
rohan : 50
index.js:111 mohan : 60
index.js:111 smith : 90
index.js:111 jhonson : 50
// output end
*/

// for of loop

// for(j of 'Dave'){
//     console.log(j)
// }

/*
Output:
D
a
v
e
Output End
*/


// Do while loop

// let i = 0

// do{
//     console.log(i)
//     i++
// }while(i<50);


// function

// function sum(a,b){
//     return a+b
// }

// console.log(sum(3,5))


// arrow function

// const sum  = (a,b)=>{
//     return a+b
// }

// console.log(sum(9,7))

// const hellouser = ()=>{
//     console.log("Hello user ")
// }

// hellouser()

// Practise set

// print the marks of the student from an object

// let obj = {
//     thanos:59,
//     mercury:50,
//     halk:32,
// }

// arr = Object.keys(obj)
// console.log(arr)

// for(let i =0; i < Object.keys(obj).length; i++){
//     console.log(Object.keys(obj)[i] + ' is ' + obj[Object.keys(obj)[i]])
// }


// Make a guessing game

// let guess;
// let number = 14

// while(guess != number){
//     guess = prompt('Enter ur number : ')
//     guess = Number.parseInt(guess)
//     if(guess == number){
//     console.log("U entered the correct number")
//     break
//     }
//     else{
//         console.log("Try again")
//     }
// }   

// string
// let name = 'wroking....'
// let command = 'stil lworkinggg,,,'
// console.log(name.length)
// console.log(command.length)

// // escape sequences

// let fruit = 'ban\'ana'
// console.log(fruit)
// console.log(fruit.length)


// string methods

// let name = 'Someone'

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2,4))
// console.log(name.slice(2))
// console.log(name.slice(-1)) //Last item like python

// Slicing
// let name = 'Someone again'
// let nameagain = name.replace('again','againhere') // returns new string instead of replacing in orginal string
// console.log(nameagain)
// console.log(name)

// concat

// let someone = 'random user'
// someoneJoined = someone.concat(' On the internet')
// console.log(someone)
// console.log(someoneJoined)

// array 

// let arr = [3, 4, 5, 5, 32, 435]
// arr.forEach((element,index,array)=>{
//     console.log(element*element)
//     console.log(index)
//     console.log(array)
// })

// array.from

// let name = 'Someone..'
// let arr = Array.from(name)
// console.log(arr)

// for(i in arr){
//     console.log(i) // index
// }

// for(i of arr){
//     console.log(i) // element
// }

// map , filter , reduce

// let arr = [1,5,43,4354,34]
// let newarr = arr.map((value)=>{
//     console.log(value)
//     return value+1   // creates new array
// })
// console.log(newarr) 

// filtered = newarr.filter((num)=>{
//     return num>20
// })
// console.log(filtered)

// practise set user input array

// var choice = ''
// var arr = []
// while (choice !=='no'){
// let item = prompt("Enter ur number to push to array : ")
// item = Number.parseInt(item)
// arr.push(item)
// choice = prompt("Do you want to continue? : ")
// }
// console.log(arr)

// divisable by 2

// arr = [1,23,42,35,34,56,75,79]

// filterd = arr.filter((num)=>{
//     if (num%2==0){
//         return num
//     }
// })
// console.log(filterd)

// console functions

// console.warn('This is a warn')
// console.error('This is a error')
// console.log('This is a log')
// console.assert(1>2)
// console.assert(2>1)
// obj = {
//     a:5,
//     b:4,
//     c:8,
// }
// console.table(obj)

// output : 
// index.js:305 This is a warn
// index.js:306 This is a error
// index.js:307 This is a log
// index.js:308 Assertion failed: console.assert
// index.js:315 
// (index)
// Value
// a	5
// b	4
// c	8
// Object

// checks the time
// console.time('p1')
// for(let i =0;i<10;i++){
//     console.log(i)
// }
// console.timeEnd('p1')


 
// document.write

// a = prompt('What you want to write ?:')
// document.write(a)

// confirm

// write = confirm("Do you want to write?") // returns true or false
// if (write) {
//     document.write(write)
// }

// BOM and dom

// window.console.log(document)
// document.body.style.background = 'aqua'  

// scissor paper rock

// play = confirm('Do you want to play')

// while(play){
//     choose = prompt("scissor , paper , rock?")
// let number = Math.floor(Math.random() * 3)

// if (number === 2 && choose === 'paper'){
//     alert("I won")
    
// }

// if (number === 2 && choose === 'rock'){
//     alert("You won")
    
// }

// if (number === 2 && choose === 'scissor'){
//     alert("Its a tie")
    
// }

// if (number === 1 && choose === 'scissor'){
//     alert("I won")
    
// }

// if (number === 1 && choose === 'paper'){
//     alert("You won")
    
// }

// if (number === 1 && choose === 'rock'){
//     alert("Its a tie")
    
// }

// if (number === 0 && choose === 'rock'){
//     alert("I won")
    
// }

// if (number === 0 && choose === 'scissor'){
//     alert("You won")
    
// }

// if (number === 0 && choose === 'paper'){
//     alert("Its a tie")
    
// }


// play = confirm('Do you want to play')

// }

// console.log(document.title) 
// console.log(typeof document.title)
// document.title = 'Something'


// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// console.log(document.body.firstElementChild)
// console.log(document.body.firstChild === document.body.childNodes[0])

// Element child

// doc = document.body
// console.log(doc)
// console.log(doc.firstChild) // gives empty text
// console.log(doc.firstElementChild) // gives first element

// changecolor = ()=>{
//     document.body.firstElementChild.style.background = 'red'
//     document.body.firstElementChild.style.color = 'red'
// }

// changecolor()

// Table Navigation

// table = document.body.firstElementChild
// console.log(table)
// console.log(table.rows)
// console.log(Array.from(table.rows)[0])
// console.log(table.tHead)
// console.log(table.tFoot)
// console.log(table.tBodies)
// console.log(typeof document)
// console.log(typeof window)

// Set time out

// ida = setTimeout(()=>{
//     alert('This is inside set time out')
// }, 4000)

// clearTimeout(a)

// Time interval

// idb = setInterval(()=>{
//     alert('This is in Interval')
// },3000)

// Event Listner 

// btn = document.querySelector('button')

// func  = (e)=>{
//     console.log('clicked')
//     console.log(e.target)
//     console.log(e.clientX)
//     console.log(e.clientY)
// }

// btn.addEventListener('click',func);  // adds event listner , if clicked console.logs clicked

// // // btn.removeEventListener('click',func) // removes event listner


// Asyncronous

// console.log('start')
// setTimeout(()=>{
    //     console.log("Hey this is waiting in the queue")
    // },3000)
    // console.log('stop')
    
// Call backs

// function LoadScript(src,callback){
//     var script = document.createElement('script')
//     script.src = src
//     script.onload = ()=>{
//     console.log(`Script was loaded ${src}`)
//     callback(src)
//     console.log(script)
//     alert('script was loaded '+src)
//     }
//     document.body.appendChild(script)
// }   

// function greet(src){
//     console.log('Loaded script '+src)
// }

// LoadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",greet)   

// Pyramid of doom example

// value = true

// if (value){
//     if(value){
//         if(value){
//             if(value){
//                 if(value){
//                     if(value){
//                         if(value){
//                             if(value){
//                                 if(value){
//                                     if(value){                // code starts to increase in right side
        
//                                     }                         // bad for readablity + loss track of code
//                                 }
//                             }
//                         }
//                     }
//                 }
//             } 
//         }
//     }
// }

// Promises

// let promise = new Promise((resolve,reject)=>{
//     resolve(58)
//     alert("Thi is an alert in promise")
// });

// console.log('Hello one')
// setTimeout(() => {
//     console.log("Hello in 3 sec")
// }, 3000);

// console.log('Hello two')
// console.log(promise)


// let promise2 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         // resolve(true)
//         reject(new Error("promise was not fullfiled"))
//         // console.log("Promise is Rejected")
//     },3000)

// })

// let promise3 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         resolve(true)
//         // console.log("Promise is fullfiled")
//     },3000)

// })

// promise2.catch((err)=>{
//     console.log(err)
// })

// promise3.then((value)=>{
//     console.log(value)
// })


// console.log(promise2,promise3)


// Promise Chaining

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Resolved after 3 sec')
//         resolve(56)
//     }, 3000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve('Promise 2')
//     },3000)
//     })
//     return p2
// }).then((value)=>{
//     console.log(value)
//     return 2
// }).then((value)=>{
//     console.log(value)
// })



// Writing load script function using promises

// const loadscript = (src)=>{
//     return new Promise((resolve,reject) =>{
//         let script = document.createElement('script')
//         script.type = 'text/javascript'
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             console.log('loaded')
//             resolve(1)
//         }
//         script.onerror = ()=>{
//             console.log('cant get data')
//             reject(0)
//         }

//     })
// }

// let p1 = loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js')
// p1.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })


// Promise API

// p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("p1 done")
//         // resolve(1)
//         resolve(1)
//     },1000)

// })

// p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("p2 done")
//         // console.log("Promise rejected")
//         // reject(new Error("Rejected"))
//         reject(2)
//     },2000)

// })

// p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("p3 done")
//         resolve(3)
//     },3000)

// })


// // let promise_all = Promise.all([p1,p2,p3])

// // let promise_all_settled = Promise.allSettled([p1,p2,p3])

// // let promise_race = Promise.race([p1,p2,p3])  // returns first promise 

// // let promise_any = Promise.any([p1,p2,p3])  // returns first resolved promise

// // let promise_resolved = Promise.resolve(9)

// let promise_reject = Promise.reject(new Error("New error"))


// promise_reject.then((value)=>{
//     console.log(value)
// })



// Async and await

// async function user(){
//     return "User Id 30"
// }

// user().then((value)=>{
//     console.log(value)
// })

// async function getWeather(){
//     w1 = new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             resolved("13 Degree celcius")
//         },1000)
//     })

//     w2 = new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             resolved("20 Degree celcius")
//         },2000)
//     })

//     console.log("Fetching washington weather")
//     let washington = await w1 // waits for this to finish then proceds to next line
//     console.log("Fetching New york weather")
//     let new_york = await w2  // waits for this to finish then proceds to next line
//     console.log("Done fetching")
//     return [washington,new_york]

// }

// a = getWeather()
// a.then((value)=>{
//     console.log(value)
// })

// try catch finally

// try{
//     console.log(a) 
    
// }catch(err){
//     console.log(err)
// }


// try{
//     console.log(a) 
    
// }catch(err){
//     console.log(eerr)
// }finally{
// console.log('This is an error') // runs regardless
// }


// Fetch API

// let p = fetch('https://goweather.herokuapp.com/weather/Ny')

// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })


// // Fetch POST


// let options = {
//     method: 'POST',
//     headers: {
//     'content-type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'someone',
//         body:'accessing',
//         userId:1
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/posts',options).then((response)=>{
//     return response.json()
// }).then((json)=>{
//     console.log(json)
// })

// const ToDoList = async ()=>{
// let options = {
//     method: 'POST',
//     headers: {
//     'content-type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'someone',
//         body:'accessing',
//         userId:1
//     })
// }

// data = await fetch('https://jsonplaceholder.typicode.com/posts',options)
// return await data.json()

// }

// ToDoList().then((value)=>{
//     console.log(value)
// })


// Cookies in Javascript

// console.log(document.cookie)
// document.cookie = 'name=testCookie'
// console.log(document.cookie)

// // Upating cookie 
// console.log(document.cookie)
// document.cookie = 'name=testCase2' // updates the name=testCooke to name=testCooke2
// console.log(document.cookie)

// Set cookie URI encoding

// let key = prompt('Enter ur cookie name')
// let value = prompt('Enter ur value name')

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// console.log(document.cookie)

// // decodeURIComponent is used to decode encodeURIComponent



// Localstorage

// a = localStorage.setItem('user',true)
// b = localStorage.getItem('user')
// console.log(b)
// console.log(localStorage)
// localStorage.removeItem('user')
// console.log('item cleared')
// console.log(localStorage)
// localStorage.setItem('user',true)
// localStorage.setItem('user2',false)
// localStorage.setItem('user3',true)
// console.log(localStorage)
// localStorage.clear()
// console.log("Entire storage cleared")
// console.log(localStorage)



// object oriented programming

// let a = {
//     name:'someone',
//     date:'2023',
//      run:()=>{
//          console.log("Running") // this run is more valued than a.__proto__ = p
//      }
// }

// console.log(a)
// console.log(a.run())

// let p = {
//     name:'another person',
//     date:'2023',
//     run: ()=>{
//         console.log('p is running')

//     }
// }

// console.log(p)

// a.__proto__ = p
// a.run()
// p.run()

// p.__proto__ = {
//     name2:'Jhon smith'
// }

// console.log(a.name2) // goes in a first then goes to a.__proto__ then it sees p then it goes to p.__proto__ then it finds name2 and console.log's it

// class sendForm{
//     Submit(){
//         console.log(this.name + " This form has been send to database")
//     }

//     cancle(){
//         console.log(this.name + " This form has been cancled")
//     }
//     fill(name){
//         this.name = name
//     }
// }

// let user1 = new sendForm()
// user1.fill('user_1')
// let user2 = new sendForm()
// user2.fill('user_2')

// user1.Submit()
// user2.Submit()
// user2.cancle()

// Constructor

// class BookReservation{
//     constructor(time,phonenum){
//         this.time = time
//         this.phonenum = phonenum
//     }
//     book(){
//         console.log(`Your resrvation was booked on ${this.time} , Your phone number is ${this.phonenum}`)
//     }

//     cancle(){
//         console.log(`Your resrvation was cancled on ${this.time} , And you were contacted on  ${this.phonenum}`)
//     }
// }


// table1 = new BookReservation('2023/4/2',+12303435934)
// table2 = new BookReservation('2023/4/3',+12303435934)

// table1.book()
// table1.cancle()
// table2.book()
// table2.cancle()



// Inhertiance

// class Animal{
//     bark(){
//         console.log("Barking")
//     }

//     sleep(){
//         console.log("sleeping")
//     }
// }

// class Dog extends Animal{    // inhertitating Animal class 
//     eat(){
//         console.log("Eating")
//     }
// }

// bravo = new Dog()
// bravo.sleep()

// super and method overriding


// class Animal{
//     bark(){
//         console.log("Barking")
//     }

//     sleep(){
//         console.log("sleeping")
//     }
// }

// class Dog extends Animal{    // inhertitating Animal class 
//     eat(){
//         console.log("Eating")
//     }
//     sleep(){
//         super.sleep()           // Calls Animal sleep func
//         console.log("I am a dog i only sleep in night") 
//     }
// }

// bravo = new Dog()
// bravo.sleep()


// IIFE immediately Invoked Function Expression

// let a = (()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(300)
//         },3000)
//     })
// })


// let f = async ()=>{
//     b = await a()
//     console.log(b)
//     c = await a()
//     console.log(c)
//     d = await a()
//     console.log(d)

// }
 
// f()    // This execution of code is not recommended even tho it is used , Thats why we use IIFE , 

// // IIFE syntax = 

// let iife = (()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(420)
//         },3000)
//     })

// })


// (async()=>{
//     let iife1 = await iife()
//     console.log(b)
//     let iife2 = await iife()
//     let iife3 = await iife()  // Just for local scope
// })


// Destructuring and spread operator

// let arr = [1,2,3,4]
// let [a,b,c,d] = arr

// console.log(a,b,c,d)  // 1 2 3 4

// let newarr = [1, 2, 3, 4, 5, 6, 7]

// let [a,b,c,d,...rest] = newarr

// console.log(a,b,c,d,rest)  // keeps rest value in rest variable

// let newarr2 = [1, 2, 3, 4, 5, 6, 7]

// let [a, , , ...rest] = newarr2  // skips 2 variable or 2 value in the array 
// console.log(a,rest)

// Same can be done in objects

// Spread



// let arr3 = [1, 2, 3, 4, 5, 6, 7]
// let obj1 = {...arr3}
// console.log(obj1)   // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7}
// // Assigns value in index
 

// Example : 

// arr4 = [1,2,3]

// function sum(a,b,c){
//     return a+b+c
// }

// console.log(sum(...arr4))  // returns 6 because 1+2+3 = 6



