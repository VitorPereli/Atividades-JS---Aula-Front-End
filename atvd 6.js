function BoasVindas(nome, idioma = "português") {

    if (idioma === "português") {
        return `Olá, ${nome}!`;

    } else if (idioma === "inglês") {
        return `Hello, ${nome}!`;
    

      } else if (idioma === "espanhol") {
            return `¡Hola, ${nome}!`;
        }

        else if (idioma === "francês") {
            return `Salut, ${nome}!`;
        }

}

console.log(BoasVindas("Vitor", "português"));
console.log(BoasVindas("Vitor", "inglês"));
console.log(BoasVindas("Vitor", "espanhol"));
console.log(BoasVindas("Vitor", "francês"));
console.log(BoasVindas("Vitor"));