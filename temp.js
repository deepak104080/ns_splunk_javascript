let elem1 = document.getElementById('header_logo');

console.log(elem1.innerText);

//document.getElementById('header_logo').innerText = 'My New Logo';


let elem2 = document.getElementsByClassName('header');
console.log(elem2);

console.log(elem2[0].innerText);
// console.log(elem2[1].innerText);
// console.log(elem2[2].innerText);


let elem3 = document.getElementsByTagName("span");
console.log(elem3);

// elem3[0].innerText = 'Icon1';
// elem3[1].innerText = 'Icon2';
// elem3[2].innerText = 'Icon3';
// elem3[3].innerText = 'Icon4';
// elem3[4].innerText = 'Icon5';
// elem3[5].innerText = 'Icon6';

for (let i=0 ; i<elem3.length ; i++) {
    elem3[i].innerText = 'Icon'+i;
}

let elem4 = document.querySelector('.container .header #header_logo');
console.log(elem4);

let elem5 = document.querySelectorAll('span');
console.log(elem5);


// innerHTML
// innerText
// textContent
console.log('--------------------------');
let elem6 = document.getElementById('footer_right');

console.log(elem6.innerHTML);
console.log(elem6.innerText);
console.log(elem6.textContent);

let elem7 = document.querySelector('#header_logo img');



console.log(elem7.innerHTML);

// elem7.innerHTML = `<img src="data:image/jpeg;base64,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"/>`;
// elem7.innerHTML = `<a href="#">test</a>`;



console.log(elem7.getAttribute('src'));

let elem8 = document.querySelector('.link1');

elem8.setAttribute('href', 'https://www.google.com/');
elem8.style.color= 'red';

elem8.style.display = 'none';

elem8.style.display = 'block';

let elem9 = document.querySelector('#footer_right');
elem9.setAttribute('id', 'new_footer_right')

document.write('aefiugwfeiugqwiefgiqwgfe');



console.log('--------------------------');

{/* <div>
    <a href="">Google</a>
</div> */}

//Homework
{/* <div>
    <div>
        <a href="">Google</a>
    </div>
    <div>
        <a href="">Google</a>
    </div>
</div> */}


var tempElem = document.createElement('div');
var tempElemA = document.createElement('a');
tempElemA.textContent = 'Google';
tempElemA.setAttribute('href', '#');
tempElem.appendChild(tempElemA);
console.log(tempElem);
// tempElem.innerHTML = 'My new Div';
// document.querySelector('#footer_right').appendChild(tempElem);
document.body.appendChild(tempElem);