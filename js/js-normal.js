function AlertEmptyProject() {
    alert("Sorry this project is currently unavailable");
}

function clickMe(){
    var number = Math.floor(Math.random() * 100) + 0;
    var answer = prompt("Guess a number between 0-100");
    if (answer != null && (answer >= 0 || answer <= 100)) {

        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
    //var lightbox = document.getElementById("lightbox"),
    //    dimmer = document.createElement("div");
    //
    //dimmer.style.width =  window.innerWidth + 'px';
    //dimmer.style.height = window.innerHeight + 'px';
    //dimmer.className = 'dimmer';
    //
    //dimmer.onclick = function(){
    //    document.body.removeChild(this);
    //    lightbox.style.visibility = 'hidden';
    //}
    //
    //document.body.appendChild(dimmer);
    //
    //lightbox.style.visibility = 'visible';
    //lightbox.style.top = window.innerHeight/2 - 50 + 'px';
    //lightbox.style.left = window.innerWidth/2 - 100 + 'px';
    //return false;
}