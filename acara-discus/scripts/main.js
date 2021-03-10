/* **Javascript examples interactions**

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

Note: Both of the features you used in 
this exercise are parts of the 
Document Object Model (DOM) API 
(Application Programming Interfaces), 
which has the capability to manipulate documents.

document.querySelector('h1').onclick = function() {
	alert('Ouch! Stop poking me!')
}

OBS:
it is equivalent to

let myH1 = document.querySelector('h1');
myH1.onclick = function() {
alert('Ouch! Stop poking me!')}; */

/* Image changer script */

let myHeading = document.querySelector('h1');

let  myImage = document.querySelector('img');

let myButton = document.querySelector('button');

myImage.onclick = function () {

	let mySrc = myImage.getAttribute('src');

	if (mySrc === 'images/betta.jpg') {
		myImage.setAttribute('src', 'images/discus.jpg');		
	} 	else {
		myImage.setAttribute('src', 'images/betta.jpg')
	}
}

function setUserName() {
	let myName = prompt("Please enter your name.");
	if (!myName) { //if the name is null or blank
		setUserName() //run setUserName again from start
	} else {		
		localStorage.setItem('name', myName); 
		/*calls on an API 'localStorage',which allows us to 
		store data in the browser and retrieve it late
		We use localStorage's setItem() function to create and 
		store a data item called 'name', setting its value to 
		the myName variable which contains the user's entry for 
		the name.*/
		myHeading.textContent = "Let's do it " + myName + "!";
	}
}
	if(!localStorage.getItem('name')){ //if name is empty
		setUserName();
	} else {
		let storedName = localStorage.getItem('name');
		myHeading.textContent = "Let's do it " + storedName + "!";	

	}
myButton.onclick = function() {
	setUserName();
}

