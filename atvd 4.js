let salario = 2500;     // let porque novos valores serão atribuidos futuramente a mesma variavel.

if (salario < 2000) {
   salario =  salario * 1.15;
} else {
    salario = salario * 1.10;
}

console.log ("O salário atualizado é: ", salario)