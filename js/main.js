let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

let resultado = document.getElementById("resultado");

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son igualitos.", num1, num2, num3);
    resultado.innerHTML = "Los tres números son igualitos " + num1 + ", " + num2 + ", " + num3 + ".";
} else {
    let mayor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    let menor;
    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    let centro;
    if ((num1 !== mayor) && (num1 !== menor)) {
        centro = num1;
    } else if ((num2 !== mayor) && (num2 !== menor)) {
        centro = num2;
    } else {
        centro = num3;
    }

    console.log("De mayor a menor:", mayor, centro, menor);
    console.log("De menor a mayor:", menor, centro, mayor);

    resultado.innerHTML =
        "De mayor a menor: " + mayor + ", " + centro + ", " + menor + ".<br>" +
        "De menor a mayor: " + menor + ", " + centro + ", " + mayor + ".";
}nod
