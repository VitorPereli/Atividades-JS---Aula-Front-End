function calcularIMC(peso, altura) {
    const imc = peso / altura ** 2;

     if (imc < 18.5){
        return `IMC: ${imc.toFixed(2)} - Abaixo do peso.`;

     } else if (imc < 25) {
        return `IMC: ${imc.toFixed(2)} - Peso normal.`;

     } else {
        return `IMC: ${imc.toFixed(2)} - Acima do peso.`;
     }
}

console.log (calcularIMC(60, 1.80));