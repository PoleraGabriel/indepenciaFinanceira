function calcula(aporte, salario, rentabilidade, inicial) {
    aporte = parseFloat(document.getElementById("aporte").value);
    salario = parseFloat(document.getElementById("salario").value);
    rentabilidade = parseFloat(document.getElementById("rentabilidade").value);
    inicial = parseFloat(document.getElementById("inicial").value);
    
   montante = (salario * 12)/(rentabilidade/100);
   rMensal = (rentabilidade/100)/12;
   mAtual = inicial;
   tMensal = 0;
   while (mAtual < montante) {  
       mAtual = mAtual + aporte;
       tMensal ++;
   };
   tAnos = Math.round(tMensal/12);
   tMensal = (tMensal%12);  
   document.getElementById("resultado").innerHTML = `Com aportes mensais de ${aporte} reais e com uma rentabilidade de ${rentabilidade}% ao ano você vai levar ${tAnos} anos e ${tMensal} meses para alcançar um valor final de ${mAtual} reais, que vai render um salário de ${Math.round((mAtual*(rentabilidade/100))/12)} reais por mês.`
 
};