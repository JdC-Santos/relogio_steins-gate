function DataHora(){
	var data = new Date();//pega a data atual do pc do usuario
//MOSTRA HORA
	var sec = data.getSeconds();//pega os segundos da variavel data
	var min = data.getMinutes();//pega os minutos da variavel data
	var hora = data.getHours();//pega as horas da variavel data
	var sec2 = sec.toString();//converte os numeros para string(letras)
	var min2 = min.toString();
	var hora2 = hora.toString();
	var tsec2 = sec2.substring(1,2);//pega parte do "texto" iniciando no 2!
	var tsec1 = sec2.substring(0,1);//pega parte do "texto" iniciando no 1!
	var tmin2 = min2.substring(1,2);//pega parte do "texto" iniciando no 2!
	var tmin1 = min2.substring(0,1);//pega parte do "texto" iniciando no 1!
	var thora2 = hora2.substring(1,2);
	var thora1 = hora2.substring(0,1);
	setTimeout("DataHora()",1000);//atualiza o codigo a cada 1000milisegundos(1segundo)
	if(sec <10){
	document.getElementById("img1").src="imgs/0.png";
	document.getElementById("img2").src="imgs/"+tsec1+".png";
	}else{
		document.getElementById("img1").src="imgs/"+tsec1+".png";
		document.getElementById("img2").src="imgs/"+tsec2+".png";
	}
	if(min <10){
	document.getElementById("img3").src="imgs/0.png";
	document.getElementById("img4").src="imgs/"+tmin1+".png";
	}else{
		document.getElementById("img3").src="imgs/"+tmin1+".png";
		document.getElementById("img4").src="imgs/"+tmin2+".png";
	}
	if(hora <10){
	document.getElementById("img5").src="imgs/0.png";
	document.getElementById("img6").src="imgs/"+thora1+".png";
	}else{
		document.getElementById("img5").src="imgs/"+thora1+".png";
		document.getElementById("img6").src="imgs/"+thora2+".png";
	}
//MOSTRA DATA
	var dia = data.getDate();
	var mes = data.getMonth();
	var ano = data.getFullYear();
	var dia1 = dia.toString();
	var mes1 = mes.toString();
	var ano1 = ano.toString();
	var tdia1 = dia1.substring(0,1);
	var tdia2 = dia1.substring(1,2);
	var tmes1 = mes1.substring(0,1);
	var tmes2 = mes1.substring(1,2);
	var tano1 = ano1.substring(0,1);
	var tano2 = ano1.substring(1,2);
	var tano3 = ano1.substring(2,3);
	var tano4 = ano1.substring(3,4);
	if(dia <10){
		document.getElementById("dia1").src = "imgs/0.png";
		document.getElementById("dia2").src = "imgs/"+tdia1+".png";
	}else{
		document.getElementById("dia1").src = "imgs/"+tdia1+".png";
		document.getElementById("dia2").src = "imgs/"+tdia2+".png";
	}
	var mes_fixado = mes +1;
	if(mes_fixado < 10){
		var tmes11 =parseInt(tmes1)+1;
		document.getElementById("mes1").src = "imgs/0.png";
		document.getElementById("mes2").src = "imgs/"+tmes11+".png";

	}else{
		document.getElementById("mes1").src = "imgs/1.png";
		if(tmes2 ==""){
			tmes2= "0";
		}
		document.getElementById("mes2").src = "imgs/"+tmes2+".png";
	}
	document.getElementById("ano1").src = "imgs/"+tano1+".png";
	document.getElementById("ano2").src = "imgs/"+tano2+".png";
	document.getElementById("ano3").src = "imgs/"+tano3+".png";
	document.getElementById("ano4").src = "imgs/"+tano4+".png";
}