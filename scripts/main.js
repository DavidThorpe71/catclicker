var names = [
			'Bob', 
			'Dave', 
			'Nick', 
			'John', 
			'Jose'
			];

var pics = [
			'images/cat1.jpg', 
			'images/cat2.jpg', 
			'images/dog1.jpg',
			'images/cat3.jpg', 
			'images/dog2.jpg'
			];


var catContainer = document.createElement("div");
catContainer.id = "container";
document.body.appendChild(catContainer);

var sideBar = document.createElement("div");
sideBar.id = "sidebar"
var catContainer = document.getElementById("container");
catContainer.appendChild(sideBar);

var catNav = document.createElement("ul");
catNav.id = "catlist"
var catSideBar = document.getElementById("sidebar");
catSideBar.appendChild(catNav);

for (var i = 0; i < names.length; i++) {

	var catName = document.createElement("li");
	catName.classList.add("catname");
	catName.innerHTML = names[i];

	var catList = document.getElementById("catlist")
	catList.appendChild(catName);
}

// var catGenerator = function() {

// 	var catIndividual = document.createElement("div");
// 	catIndividual.classList.add("eachCat")
// 	catIndividual.id = ("catindividual" + i);

// 	var catName = document.createElement("p");
// 	catName.classList.add("catname");
// 	catName.innerHTML = names[i];

// 	var counter = document.createElement("p");
// 	counter.id = ("counter" + i);

	
// 	var catPic = document.createElement("img");
// 	catPic.id = ("catpic" + i);
// 	catPic.src = pics[i];

// 	var catDiv = document.getElementById("container");
// 	catDiv.appendChild(catIndividual);

// 	var catIndId = catIndividual.id;
// 	var catInd = document.getElementById(catIndId);
// 	catInd.appendChild(catName);
// 	catInd.appendChild(counter);
// 	catInd.appendChild(catPic);

// 	var catPicId = catPic.id;
// 	var counterId = counter.id;
// 	var elem = document.getElementById(catPicId);
// 	var count = 0;
// 	elem.addEventListener('click', function(){
//   	count++;
//   	document.getElementById(counterId).innerHTML = count; 	
// 	}, false);
// }

// for (var i = 0; i < names.length; i++) {
// 	catGenerator(i);
// };