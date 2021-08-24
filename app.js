var myNodelist = document
    .getElementsByTagName("li"); //get li using tag name and store it nodeList variable//


var close = document
    .getElementsByClassName("close"); //get close button by class name//

var  count  =  0;
//main part of functionality//

function newElement() {

    count++;    
    document.getElementById('count').innerHTML  =  count;
    var li = document.createElement("li"); //create an element Li//

    var inputValue = document
        .getElementById("myInput").value; //get a input value by input field//

    var t = document.createTextNode(inputValue); //then create a text node of input value//

    li.appendChild(t); //then appen text node of input value with li//

    if (inputValue === '') { //if input field is empty then show a alert message //
        alert("You must write something!");
    } else { //else append li items when every time user add a new task//
        document.getElementById("myUL")
            .appendChild(li);
    }

    document.getElementById("myInput") //when first task is add then previous task is clear from an input field//
        .value = "";

    var span = document.createElement("SPAN"); //create span element

    var txt = document.createTextNode("\u00D7"); //create cross button symbol//

    span.className = "close"; //assing a class name as 'close'
    span.appendChild(txt); //then append with txt //
    li.appendChild(span); //then append with li which means full li element is add along with todo text as well as cross button//

    //then initilize a for loop when ever user click a cross button then list is disappaer one by one when ever user click a cross button//
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            count--;            
            document.getElementById('count').innerHTML  =  count;
        }
    }
}