// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
window.onload = function() {showNav()};
// Get the navbar
var navbar = document.getElementById("sideNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  scr = window.scrollY;
 	if (scr >= 720) {
    	//navbar.classList.add("sticky");
    	document.getElementById("sideNav").style.position = "fixed";
    	document.getElementById("sideNav").style.top = "40%";
  	} else {
    	document.getElementById("sideNav").style.position = "absolute";
    	document.getElementById("sideNav").style.top = "125%";
  	}



    if(scr >= 720 && scr < 1050) {
      resetColors();
      document.getElementById("li1").style.color = "white";
    }
    else if(scr >= 1050 && scr < 1380) {
      resetColors();
      document.getElementById("li2").style.color = "white";
    }
    else if(scr >= 1380 && scr < 1900) {
      resetColors();
      document.getElementById("li3").style.color = "white";
    }
    else if(scr >= 1900 && scr < 1980) {
      resetColors();
      document.getElementById("li4").style.color = "white";
    }
}

function showNav(){
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(width >= 1280){
		document.getElementById("sideNav").style.visibility = "visible";
	}
  var link1 = document.getElementById("li1");
  var link2 = document.getElementById("li2");
  var link3 = document.getElementById("li3");
  var link4 = document.getElementById("li4");

  myFunction();

  link1.onclick = function() {
  resetColors();
  document.getElementById("li1").style.color = "white";
}

link2.onclick = function() {
  resetColors();
  document.getElementById("li2").style.color = "white";
}

link3.onclick = function() {
  resetColors();
  document.getElementById("li3").style.color = "white";
}

link4.onclick = function() {
  resetColors();
  document.getElementById("li4").style.color = "white";
}
}

function resetColors(){
  document.getElementById("li1").style.color = "rgba(160, 160, 160, 0.9)";
  document.getElementById("li2").style.color = "rgba(160, 160, 160, 0.9)";
  document.getElementById("li3").style.color = "rgba(160, 160, 160, 0.9)";
  document.getElementById("li4").style.color = "rgba(160, 160, 160, 0.9)";
}

