//quiz//
function showResult(){	
	let question1=document.getElementById("q1");
	let q1=question1.value;
	let question2=document.getElementById("q2");
	let q2=question2.value;
	let question3=document.getElementById("q3");
	let q3=question3.value;
	let question4=document.getElementById("q4");
	let q4=question4.value;
	let resultDiv=document.getElementById("quiz-results");
	resultDiv.classList.remove("hidden");
	let total=0;
	
	
	if(q1=="Hyper Text Meta Language") {
		total+=1;
		resultDiv.innerHTML+="question 1: correct"+"<br>";
	}
	else {
		resultDiv.innerHTML+="question 1: incorrect"+"<br>";
	}
		if (q2=="Execute code if conditions are met") {
		total+=1;
		resultDiv.innerHTML+="question 2:correct"+"<br>";
	}
	else {
		resultDiv.innerHTML+="question 2: incorrect"+"<br>";
	}
		if (q3=="A pound sign then the Id") {
		total+=1;
		resultDiv.innerHTML+="question 3:correct"+"<br>";
	}
	else {
		resultDiv.innerHTML+="question 3: incorrect"+"<br>";
	}
		if (q4=="font-style-type") {
		total+=1;
		resultDiv.innerHTML+="question 4:correct"+"<br>";
	}
	else {
		resultDiv.innerHTML+="question 4: incorrect"+"<br>";
	}
}

//see more, see less//
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more..."; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less"; 
    moreText.style.display = "inline";
  }
}


function seeMore() {
  var dot = document.getElementById("dot");
  var seeText = document.getElementById("see");
  var otherBtn = document.getElementById("my2Btn");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    otherBtn.innerHTML = "See more..."; 
   seeText.style.display = "none";
  } else {
    dot.style.display = "none";
    otherBtn.innerHTML = "See less"; 
   seeText.style.display = "inline";
  }
}



//slideshow//
	
function showImage(location) {
	document.getElementById("big-image").src=location;
	document.getElementById("big-image").setAttribute("data-image", location);
}

function showNextImage() {
	let bigImage=document.getElementById("big-image");
	let src=bigImage.getAttribute("data-image");
	
	if (src=="images/mom.jpg") {
		bigImage.setAttribute("data-num='1'", "images/mom.jpg");
		bigImage.src="images/mom.jpg";
	}
	else if (src=="images/friends.jpg") {
		bigImage.setAttribute("data-num='2'", "images/friends.jpg");
		bigImage.src="images/friends.jpg";
	}
	else if (src=="images/roomies.jpg") {
		bigImage.setAttribute("data-num='3'", "images/roomies.jpg");
		bigImage.src="images/roomies.jpg";
	}
	else if (src=="images/vb.jpg") {
		bigImage.setAttribute("data-num='1'", "images/vb.jpg");
		bigImage.src="images/vb.jpg";
	}
}
	
	
	
	
	
	
	
	
	
	






