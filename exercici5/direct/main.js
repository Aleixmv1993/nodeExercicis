var Agenda=function(title,initial){

	this.title=title;
	this.contents=initial;


	this.changeTitle=function(title){
		this.title=title;
	};
	this.push=function(nom,telf){
		this.contents[nom]=telf;
	};
	this.erase=function(nom){
		delete this.contents[nom];
	};
	this.list=function(){

	};




}

module.exports=Agenda;