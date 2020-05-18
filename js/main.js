
function clicou(){
	
	document.getElementById("agradecimento").innerHTML = "<i>Obrigado!!!</i>";
	
	//console.log(document.getElementById("agradecimento"));
	//alert("Clicado!!!");
	
}
function redirecionar(){
	
	window.open("https://tribunademinas.com.br/");
	
	//Abrir na mesma página:
	//window.location.href = "https://tribunademinas.com.br/";
	
	
}

function trocar(elemento) {
	
	elemento.innerHTML = "Conteúdo Modificado";
	
	//document.getElementById("movimentomouse").innerHTML = "Conteúdo Modificado";
	//alert("TROCADO");
	
}

function destrocar(elemento) {
	
	elemento.innerHTML = "Passe o Mouse";
	
	//document.getElementById("movimentomouse").innerHTML = "Passe o Mouse";
	
}

function load() {
	
	alert("Página OK!");
}

function funcaoChange(elemento){
	
	console.log(elemento.value);
	
}

/*
################# EXEMPLO DE FUNCAO ###############

function soma(n1,n2) {
	return n1 + n2;	
}
function validaidade(idade) {
	var validar;
	if (idade >= 18) {
	var validar = true;
	}else{
	validar = false
	}
	return validar;
}
var idade = prompt("DIGITE A IDADE:");
console.log(validaidade(idade));
################## FIM EXEMPLO DE FUNCAO ###############
*/

//**** usar mais variáveis globais ****//




/*
############### EXEMPLO FUNCAO ##############

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}

alert(soma(8 , 20));
alert(setReplace("PRIMEIRO","SEGUNDO","TERCEIRO"));
############### FIM EXEMPLO FUNCAO ##############
*/

/*
###### DATA #########
var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getDay());
###### FIM DATA #########
*/


/* ############# PEQUENA ESTRUTURA 3 ###############
var count;
for(count=0; count <= 5; count++){
	alert(count);
};
############# FIM PEQUENA ESTRUTURA 3 ###############
*/	


/* ############# PEQUENA ESTRUTURA 2 ###############
var count = 0;
while (count <= 5){
	console.log(count);
	//count = count + 1;
	count++;
};
############# FIM PEQUENA ESTRUTURA 2 ###############
*/


/* ############# PEQUENA ESTRUTURA ###############

var idade = prompt("DIgite a idade: ");
//var idade = 18;
if (idade >= 18) {
	
	alert ("Maior de 18 anos");
}else{
	alert("Menor de 18 anos");
	
}
############# FIM PEQUENA ESTRUTURA ###############
*/



/*  ######### EXEMPLO ARRAY 3  ###########
var frutas = [{nome:"banana", cor:"amarelo"}, {nome:"ameixa", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
 ######### EXEMPLO ARRAY 3  ###########
*/


/*  ######### EXEMPLO ARRAY 2  ###########
var fruta = {nome: "banana", cor: "amarelo"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
 ######### EXEMPLO ARRAY 2  ###########
*/

/*  ############# FIM EXEMPLO ARRAY 1 ##############

//var lista = ["abacate" , "kiwi" , "pera"];
//lista.push("jabuticaba");
//console.log(lista);
//console.log(lista[1]);
//alert(lista[2]);
//lista.pop();
//lista.length;
//lista.reverse;
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));

############# FIM EXEMPLO ARRAY 1 ##############
*/


/* #################     EXEMPLO 1   #######################
var nome = "Ranier";
var idade = 31;
var idade2 = 10;
var n1 = 5;
var n2 = 17;

var frase = "Uma frase de testes";

//alert("***ALERTA JS***" + " BEM VINDO " + nome + " de " + idade + " anos!");
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);

console.log(n1 * n2);

alert("Produto: " + n1 * n2);

console.log(frase.replace("testes","PROVA"));

//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());

alert(frase.replace("testes","PROVA"));

#################    FIM EXEMPLO 1   #######################
*/