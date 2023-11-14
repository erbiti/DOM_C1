if (typeof browser === "undefined") {
    let browser = chrome;
}
// console.log('main.js loaded');

const p = document.createElement('p');
p.textContent = 'This is a paragraph from main.js';
document.body.appendChild(p);

const h1 = document.createElement('h1');
h1.textContent = 'This is a heading from main.js';
document.body.appendChild(h1);

const showMessage = () => {
    console.log("Triggered showMessage");
    alert("Hello from main.js");
}

const showName = () => {
    let name =document.getElementById("name").value;


    const h = document.createElement('h1');
    h.textContent = `Hallo Buenas Noches ${name}`;
    document.body.appendChild(h);

}

const validar_Edad = () => {
    let edad = document.getElementById("edad").value;
    if (edad >= 18) {
        alert("Eres mayor de edad, puedes votar");
    } else {
        alert("Eres menor de edad");
    }
}