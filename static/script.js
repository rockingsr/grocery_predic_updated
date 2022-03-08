function telspace(){
    var newtel = document.getElementById('tel').value;
    if(newtel.length == 0){
        document.getElementById('tel').value = newtel+"+91 ";
    }
    if(newtel.length == 1 || newtel.length == 3 || newtel.length == 7 || newtel.length == 11){
    document.getElementById('tel').value = newtel+" ";
    document.getElementById('tel').max = 1;
}
}

function send(){
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
alert(fname + " " + lname + " Thank for fill Contact form . Our tream 24 hours!");
}