// Exercício 1: Conversor de Temperatura
var Celsius= 25
var Fahrenheit = Celsius*9/5+32
console.log(Fahrenheit)

// Exercício 2: Conversor de Temperatura
var f= 77
var c=(f - 32) * 5/9
console.log(c)

// Exercício 3: Cálculo do Volume de uma Lata de Óleo
var r=5
var h=10
var v= (Math.PI*r**2)*h
console.log(v)

// Exercício 4: Cálculo da Quantidade de Combustível Gasta em uma Viagem
var consumo= 12
var distancia= 240
var litros=distancia/consumo
console.log(litros)

// Exercício 5: Cálculo do Valor de uma Prestação em Atraso
var Prestação=1000
var Atraso=3
var juros_mensal=1
var prestação_atrasada= Prestação*(1+(juros_mensal/100)*Atraso)
console.log(prestação_atrasada)

// Exercício 6: Troca de Valores entre Variáveis
var A=5
var B=10
console.log("valor atual de B é "+B,"valor atual de A é "+A)
var c=A
var A=B
var B=c
console.log("valor de agora de B é "+B,"valor de agora de A é "+A)

// Exercício 7: Adição e Multiplicação de Quatro Números Inteiros
let U,D,T,Q;{U=1;D=2;T=3;Q=4;}
console.log("adições:",(U+D),(U+T),(U+Q),(D+T),(D+Q),(T+Q),
"multiplicação",(U*D),(U*T),(U*Q),(D*T),(D*Q),(T*Q))

