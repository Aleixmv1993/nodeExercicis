var Mates=function(){

	this.PI=3.1415927;

	var num1 = 0;
	var num2 = 0;


	this.suma=function(num1,num2){
		var result = num1 + num2;
		console.log("La suma dels numeros es :"+ result);

	};

	this.resta=function(num1, num2){
		var result = num1 - num2;
		console.log("La resta es: "+result);
	};
	
	this.multiplicacio=function(num1, num2){
		var result = num1 * num2;
		console.log("La multiplicacio es: "+result);
	};

	this.dividir=function(num1, num2){
		var result = num1 / num2;
		console.log("La divisio es: "+result);
	};





};

module.exports=Mates;