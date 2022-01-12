function add() {
    var tempnum = document.getElementById('tempprice');
    var tempsum = localStorage.getItem('price');

    console.log(typeof(parseInt(tempnum.value)));
    console.log(tempsum);
    console.log(typeof(tempsum));

    tempsumnew = (tempsum == null  ? 0 : parseInt(tempsum)) + parseInt(tempnum.value);
    
    localStorage.setItem('price', tempsumnew);
    localStorage.setItem('otherprince', tempsumnew);

    //localStorage.removeItem('price');
    //localStorage.clear();

}




// document - object - Document Object Model
// window - Browser Object Model


console.log(window.document);//html pages
console.log(window.event);
console.log(window.history);//history of browser


console.log(window.location);

console.log(window.navigator);

//window - localStorage, sessionStorage console, prompt, alert

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);


