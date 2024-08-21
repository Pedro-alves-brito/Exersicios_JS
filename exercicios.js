// Exercício 1: Conversor de Temperatura
var Celsius= 25
var Fahrenheit = Celsius*9/5+32
console.log(Fahrenheit)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 2: Conversor de Temperatura
var f= 77
var c=(f - 32) * 5/9
console.log(c)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 3: Cálculo do Volume de uma Lata de Óleo
var r=5
var h=10
var v= (Math.PI*r**2)*h
console.log(v)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 4: Cálculo da Quantidade de Combustível Gasta em uma Viagem
var consumo= 12
var distancia= 240
var litros=distancia/consumo
console.log(litros)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 5: Cálculo do Valor de uma Prestação em Atraso
var Prestação=1000
var Atraso=3
var juros_mensal=1
var prestação_atrasada= Prestação*(1+(juros_mensal/100)*Atraso)
console.log(prestação_atrasada)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 6: Troca de Valores entre Variáveis
var A=5
var B=10
console.log("valor atual de B é "+B,"valor atual de A é "+A)
var c=A
var A=B
var B=c
console.log("valor de agora de B é "+B,"valor de agora de A é "+A)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 7: Adição e Multiplicação de Quatro Números Inteiros
let U,D,T,Q;{U=1;D=2;T=3;Q=4;}
console.log("adições:",(U+D),(U+T),(U+Q),(D+T),(D+Q),(T+Q),
"multiplicação",(U*D),(U*T),(U*Q),(D*T),(D*Q),(T*Q))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 8: Cálculo do Volume de uma Caixa Retangular
let COM_CR,LAR_CR,ALT_CR;{COM_CR=5,LAR_CR=3,ALT_CR=2;}
console.log("O volume dessa caixa é",(COM_CR*LAR_CR*ALT_CR))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 9: Cálculo do Quadrado de um Número Inteiro
var NUM_INT=5
console.log((NUM_INT**2))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 10: Cálculo da Diferença entre Dois Números Inteiros
let N1,N2;{N1=-3,N2=8;}
console.log(N1-N2)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 11: Conversão de Dólar para Real
var DOL=50
var REA=DOL*5.6
console.log("o valor dem reais é",REA)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 12: Conversão de Real para Dólar
var Real=100
console.log("valor dem dolares é",Real/5.6)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 13: Cálculo da Soma dos Quadrados de Três Números
let NU1,NU2,NU3;{NU1=2,NU2=3,NU3=4;}
console.log(NU1**2+NU2**2+NU3**2)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 14: Cálculo do Quadrado da Soma de Três Números
let Nu1,Nu2,Nu3;{Nu1=2,Nu2=3,Nu3=4;}
console.log(((Nu1+Nu2+Nu3))**2)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 15: Cálculo do Produto e da Soma de Quatro Números
let nu1,nu2,nu3,nu4;{ nu1=2, nu2=3, nu3=4, nu4=5;}
console.log(nu1*nu3,nu2+nu4)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 16: Cálculo do Novo Salário com Aumento
let SAL,AUM,Vaum;{SAL=1000,AUM=0.10,Vaum=SAL*AUM}
console.log(SAL*(AUM+1),Vaum)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 17: Cálculo da Área de uma Circunferência
var R=5
console.log(Math.PI*(R**2))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 18: Apuração de Votos em uma Eleição Sindical
let candidato1,candidato2,candidato3,nulo,branco;{candidato1=200,candidato2=150,candidato3=100,nulo=50,branco=30;}
let total=candidato2+candidato3+candidato1+nulo+branco
let pc1,pc2,pc3,pn,pb;{pc1=(candidato1*100)/total,pc2=(candidato2*100)/total,pc3=(candidato3*100)/total,pn=(nulo*100)/total,pb=(branco*100)/total;}
console.log(pc1+"%",pc2+"%",pc3+"%",pn+"%",pb+"%")
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 19: Cálculo das Quatro Operações Básicas
let n1,n2;{n1=10,n2=5}
console.log("Adição:"+(n1+n2),"Subtração:"+(n1-n2),"Multiplicação"+n1*n2,"Divisão"+n1/n2)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 20: Cálculo da Velocidade de um Projétil
let dis,tem;{dis=100,tem=2}
console.log((dis/tem)/3.6)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 21: Cálculo de Potência
let bas,exp;{bas=2,exp=3}
console.log(bas**exp)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 22: Cálculo do Volume de uma Esfera
let Raio=5
console.log((4/3)*Math.PI*Raio**3)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 23: Conversão de Pés para Metros
var pés=10
console.log(pés*0.3048)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 24: Cálculo de Raiz
let base,ind;{base=16,ind=3}
console.log(Math.sqrt(base * base + ind * ind))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 25: Sucessor e Antecessor de um Número Inteiro
var n=5
console.log((n-1),(n+1))
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 26: Cálculo do Quadrado da Divisão de Dois Números Inteiros
let nur1,nur2,nur3;{nur1=10,nur2=2,nur3=(nur1/nur2)**2}
console.log(nur3)
console.log("--------------------------------------------Lista 2-----------------------------------------------")
// Exercício 27: Cálculo da Diferença entre Dois Números Inteiros
let x,y;{x=10,y=5}
if (y>x){
    console.log(y-x)}
else {console.log(x-y)}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 28: Classificação de Número Positivo ou Negativo
let X=0
if (X>0){console.log("positivo")}
else if (X<0){console.log("negativo")}
else {console.log("neutro")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 29: Cálculo da Média e Verificação de Aprovação
let NOT1,NOT2,NOT3,NOT4,Med;{NOT1=7,NOT2=6,NOT3=4,NOT4=5,Med=(NOT1+NOT2+NOT3+NOT4)/4}
if (Med>=5) {console.log("passou")}
else {console.log("não passou")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 30: Cálculo da Média e Verificação de Aprovação com Exame
let NOt1,NOt2,NOt3,NOt4,MEd;{NOt1=7,NOt2=6,NOt3=4,NOt4=5,MEd=(NOt1+NOt2+NOt3+NOt4)/4}
if (Med>=7) {console.log("passou")}
else if (Med>=5) {console.log("exame")}
else {console.log("não passou")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 31: Resolução de Equação de Segundo Grau
let Cc,b,a,Del;(Cc=-4,b=-3,a=1,Del=(b**2)-4*Cc*a)
if (Del>=0){
    console.log("X1=",(((-b)+(Math.sqrt(Del)))/(2*a)))
    console.log("X2=",(((-b)-(Math.sqrt(Del)))/(2*a)))}
else {console.log("Não existe numeros reais")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 32: Ordenação de Três Números Inteiros
var num1,num2,num3;{num1=5,num2=2,num3=7}
var temp
if (num1>num2){temp=num1;num1=num2;num2=temp}
if (num1>num3){temp=num1;num1=num3;num3=temp}
if(num2>num3){temp=num2;num2=num3;num3=temp}
console.log(num1,num2,num3)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 33: Valores Divisíveis por 2 e 3
var num1,num2,num3,num4;(num1=6,num2=8,num3=9,num4=12)
if(num1%2===0 && num1%3===0){console.log(num1)}
if(num2%2===0&&num2%3===0){console.log(num2)}
if(num3%2===0&&num3%3===0){console.log(num3)}
if(num4%2===0&&num4%3===0){console.log(num4)}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 34: Valores Divisíveis por 2 ou 3
var num1,num2,num3,num4;(num1=6,num2=8,num3=9,num4=12)
if(num1%2===0 || num1%3===0){console.log(num1)}
if(num2%2===0||num2%3===0){console.log(num2)}
if(num3%2===0||num3%3===0){console.log(num3)}
if(num4%2===0||num4%3===0){console.log(num4)}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 35: Maior e Menor Valor
var num1,num2,num3,num4,num5;(num1=10,num2=5,num3=8,num4=12,num5=3)
var menor,maior;(menor=Math.min(num1,num2,num3,num4,num5),maior=Math.max(num1,num2,num3,num4,num5))
console.log(menor,maior)
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 36: Par ou Ímpar
var num1
if(num1%2==1){console.log("impar")}
else{console.log("par")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 37: Verificação de Faixa de Valor
var num1=9
if(num1>=1&&num1<=9){console.log("está permitido")}
else{console.log("não é um numero permitido")}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 38: Verificação de Valor Menor ou Igual a 3
var num1=3
if(num1<=3){console.log(num1)}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 39: Múltiplo de 3 e 5
var num1=15
if(num1%15===0&&num1%3===0){console.log(num1)}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 40: Soma e Verificação
var num1,num2,num3;(num1=50,num2=30,num3=40)
if (num1+num2+num3>100){console.log((num1+num2+num3))}
console.log("--------------------------------------------------------------------------------------------------")
// Exercício 41: Multiplicação e Verificação
var num1=20
if(num1*2>30){console.log(num1*2)}