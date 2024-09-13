
//FAZER O CSS DESSA PARTE PARA O FORMULÁRIO

const peso = Number(prompt(`Informe o seu peso.`));
const altura = Number(prompt(`Informe a sua altura em metros.`).replace(",","."));

const imc = peso / altura ** 2;

if (imc <= 18.5) {
    alert(`Subpeso.`);
}
else if (imc <= 25.0 && imc > 18.5) {
    alert(`Normal.`);
}
else if (imc <= 30.0 && imc > 25.0) {
    alert(`Sobrepeso.`);
}
else {
    alert(`Obeso.`);
}
