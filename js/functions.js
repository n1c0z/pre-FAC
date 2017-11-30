window.onscroll = function() {minimiseBar();};

function minimiseBar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").className = "nav-small";
        document.getElementById("nav-header").className = "nav-head";
        document.getElementById("nav-items").className = "nav-itm";
    } else {
        document.getElementById("navbar").className = "navbar";
        document.getElementById("nav-header").className = "nav-header";
        document.getElementById("nav-items").className = "nav-items";
    }
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        document.getElementById("sql").className = "bar pbsql"; 
        document.getElementById("html").className = "bar pbhtml";
        document.getElementById("css").className = "bar pbcss";
        document.getElementById("php").className = "bar pbphp";
        document.getElementById("js").className = "bar pbjs";     
    }
}

function navToggle() {     
       var element = document.getElementById("nav-menu");
       element.classList.toggle("nav-menu");
} 

function onClick(element) {
    document.getElementById("img").src = element.src;
    document.getElementById("modal").style.display = "block";
}

window.onload = chooseClr();
    
function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
  return colour;
} 

function chooseClr () {

    var items = document.getElementsByClassName("item");
    var grad3 = 'rgb(220, 220, 220)';
    var i;
    for(i=0;i<items.length;i++) {
        var grad2 = getRandomColour().toString();
        items[i].style.backgroundImage='linear-gradient('+grad2+','+grad3+')';
        items[i].style.backgroundImage='-webkit-linear-gradient('+grad2+','+grad3+')';
        items[i].style.backgroundImage='-o-linear-gradient('+grad2+','+grad3+')';
        items[i].style.backgroundImage='-moz-linear-gradient('+grad2+','+grad3+')';
    }    
}

    var modal = document.getElementById('msgModal');
    var btn = document.getElementById("accept_me");
    var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var numLikes = 0;

var like = function() {
    numLikes = numLikes + 1;

    var strTag = document.querySelectorAll("strong")[0];
    strTag.innerText = numLikes;
}
