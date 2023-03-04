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