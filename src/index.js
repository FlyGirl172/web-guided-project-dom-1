//////////DOM GUIDED PROJECT => SPRINT 5, MODULE 1////////////////////////////////

// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
const mainNav = document.getElementById("mainNav");
const divElems = document.getElementsByTagName("div");
const cardElems = document.getElementsByClassName("card");

const queryMainNav = document.querySelector("#mainNav");
const queryDivElems = document.querySelectorAll("div");
const queryCardElems = document.querySelectorAll(".card");

console.log("IT'S WORKING!  IT'S WORKING!!!");

// const document = {
//     getElementById: function(id) {},
//     name: "foo",
//     age: "bar"
// } The code above is still in use, deep in the "bowels" of most major browsers!!!

//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
console.log(header);
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)"); //nth-of-type(1) will grab THE FIRST ELEMENT
console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img"); //OR you can use "card-img-top" in the parens!!!******
const titleFirstCard = firstCard.querySelector("h2"); //OR you can use "card-title" in the parens!!!********
const subtitleFirstCard = firstCard.querySelector("h3"); //OR you can use "card-subtitle" in the parens!!*******
const textFirstCard = firstCard.querySelector("p"); //Or you can use "card-text" in the parens!!********

console.log(textFirstCard);
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling; //Line 34 on index.html
const link2FirstCard = link1FirstCard.nextElementSibling; //Line 35 on index.html


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
console.log(links)

// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent)) //More efficient way of doing the code on lines 47-49
// links.forEach(function(link) {
//    console.log(link.textContent);
// }) 
//forEach() is a highter order function => function that takes another function a an argument! forEach() explained 51-53
// for (let i = 0; i < links.length; i++) {
 //   function(links[i]) {}
//}

// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
console.log(links, linksArr);
// Array.from() is doing the code below:
// const newArr = [];
// for (let i = 0; i < links.length; i++) {
//    newArr.push(links[i]);   
//}
//  return newArr;

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArr.find(link => link.textContent === "Home" )
// 68-70 are higher order functions (including line 50)
// find => returns the first element which passes the condition (meets the criteria)
// filter => returns ALL elements which pass the condition
// map => make some update to all elements of the array
// reduce => reduce the array to a singular value (use to add/ subtract everything)
console.log(homeLink);


// 👉 3- Changing an element's text content:
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = "Bloomtech Doggos";
titleFirstCard.textContent = "I am a Zoomie Dog";
subtitleFirstCard.textContent = "A story in three parts";
textFirstCard.textContent = "Dogs are great, dogs are loyal, dogs are smart!";
link2FirstCard.textContent = "Dog Ipsum";


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog");
link2FirstCard.href = "https://doggoipsum.com/";
imageFirstCard.src = "https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg";
logoTitle.className = "logo heading banana";
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");

//  B- By manipulating inline styles on the element
header.style.fontSize = "1em";
//setInterval(() => header.classList.toggle("sky"), 1000); //.toggle switches between the two header colors every 1000 milliseconds***********  I love THIS!!!!


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a"); //THIS HAS TO BE A DOM TAG NAME!!!!!
console.log(blogLink);
blogLink.textContent = "Blog";
blogLink.href = "#"; //The # is just a placeholder for where the blog website link would go*********
document.querySelector("nav").appendChild(blogLink);
blogLink.classList.add("menu-item");


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);

document.querySelector(".card-group").appendChild(secondCard);


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
//header.remove();  This removes an existing element
//document.body.prepend(header);  This adds it back.

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

//Two ways to access data:
// dot notation => blah.name  => const blah = {name: "Casey"}
// bracket notation =>  1.) uses for variables => const userInput = "name" => blah[userInput]
//                      2.) used for accessing data that contain hyphens => data["contact"]["contact-heading"]
const data = {
    "contact": {
        "contact-heading" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@greatidea.io",
    }
};
const contactHeading = document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];

