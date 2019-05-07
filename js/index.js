let teamMem1 = document.querySelector(".team-mem:nth-child(1)");

teamMem1.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'wheat';
    event.target.style.backgroundColor = '#db4c3f';
    event.target.style.borderColor = '#db4c3f';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        event.target.style.borderColor = "";

    }, 5000);
})

let teamMem2 = document.querySelector(".team-mem:nth-child(2)");

teamMem2.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'wheat';
    event.target.style.backgroundColor = '#db4c3f';
    event.target.style.borderColor = '#db4c3f';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        event.target.style.borderColor = "";

    }, 5000);
})

let teamMem3 = document.querySelector(".team-mem:nth-child(3)");

teamMem3.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'wheat';
    event.target.style.backgroundColor = '#db4c3f';
    event.target.style.borderColor = '#db4c3f';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        event.target.style.borderColor = "";

    }, 5000);
})

let teamMem4 = document.querySelector(".team-mem:nth-child(4)");

teamMem4.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'wheat';
    event.target.style.backgroundColor = '#db4c3f';
    event.target.style.borderColor = '#db4c3f';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        event.target.style.borderColor = "";

    }, 5000);
})

let teamMem5 = document.querySelector(".team-mem:nth-child(5)");

teamMem5.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'wheat';
    event.target.style.backgroundColor = '#db4c3f';
    event.target.style.borderColor = '#db4c3f';

    setTimeout(function () {
        event.target.style.color = "";
        event.target.style.backgroundColor = "";
        event.target.style.borderColor = "";

    }, 5000);
})

let myPrimeLinks1 = document.querySelector("a:nth-child(1)")
let myPrimeLinks2 = document.querySelector("a:nth-child(2)")
let myPrimeLinks3 = document.querySelector("a:nth-child(3)")
let myPrimeLinks4 = document.querySelector("a:nth-child(4)")
let myPrimeLinks5 = document.querySelector("a:nth-child(5)")

let webUIDev = {
    name: 'Myke Larson',
    role: 'User Interface & First Time Team Lead',
    
};

let obj = webUIDev;

Object,keys(obj).forEach(function(key) {
    console.log(key, obj[key]);
});