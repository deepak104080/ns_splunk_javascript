//DOM Events
//click, blur, focus, hover, mouseup, keyup, scroll, toggle, load
//https://www.w3schools.com/jsref/dom_obj_event.asp


function testfn(e) {
    console.log(e);
    console.log('console inside fn');
}

function testfn2(e) {
    //console.log(e.target);
    console.log('console inside fn 2');
}

function testfn3(e) {
    //console.log(e.target);
    console.log('console inside fn 3');
}

function submtifn(e) {
    // console.log(e);
    var input1 = document.getElementById('inputbox1').value;

    if(input1) {
        console.log('input from user - ', input1);
    }
    else {
        alert('Please fill input....')
    }
    
}

function enablebutton(e) {
    console.log('enabling...');
    document.getElementById('button1').removeAttribute('disabled');
    //add code for checked off on second click
}

function check1() {
    document.getElementById('checkbox1').checked = true;
}

//input - onclick, onfocus
//input - onchange
//input - onblur, onfocusout


//event handler vs event listner
var tempbutton = document.getElementById('testbutton');

tempbutton.addEventListener('click', testfn);
tempbutton.addEventListener('click', testfn2);
tempbutton.addEventListener('click', testfn3);