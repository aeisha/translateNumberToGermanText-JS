 form1.#variables[0].chequeText - (JavaScript, client)
 
function Unite( nombre ){
	var unite;
	switch( nombre ){
		case 0: unite = "null";		break;
		case 1: unite = "eins";		break;
		case 2: unite = "zwei";		break;
		case 3: unite = "drei"; 	break;
		case 4: unite = "vier"; 	break;
		case 5: unite = "fünf"; 	break;
		case 6: unite = "sechs"; 	break;
		case 7: unite = "sieben"; 	break;
		case 8: unite = "acht"; 	break;
		case 9: unite = "neun"; 	break;
	}//fin switch
	return unite;
}

function Dizaine( nombre ){
	switch( nombre ){
		case 10: dizaine = "zehn"; break;
		case 11: dizaine = "elf"; break;
		case 12: dizaine = "zwölf"; break;
		case 13: dizaine = "dreizehn"; break;
		case 14: dizaine = "vierzehn"; break;
		case 15: dizaine = "funfzehn"; break;
		case 16: dizaine = "sechszehn"; break;
		case 17: dizaine = "siebzehn"; break;
		case 18: dizaine = "achtzehn"; break;
		case 19: dizaine = "neunzehn"; break;
		case 20: dizaine = "zwanzig"; break;
		case 30: dizaine = "dreißig"; break;
		case 40: dizaine = "vierzig"; break;
		case 50: dizaine = "funfzig"; break;
		case 60: dizaine = "sechzig"; break;
		case 70: dizaine = "siebzig"; break;
		case 80: dizaine = "achtzig"; break;
		case 90: dizaine = "neunzig"; break;
	}//fin switch
	return dizaine;
}

function NumberToLetter( nombre ){
var i, j, n, quotient, reste, nb ;
	//console.println("i" + i);
	//console.println("j" + j);
	//console.println("n" + n);


	var ch
	var numberToLetter='';
	//__________________________________
	
	if (  nombre.toString().replace( / /gi, "" ).length > 15  ){
		return "dépassement de capacité";
	}
	
	if (  isNaN(nombre.toString().replace( / /gi, "" ))  ){
		return "Nombre non valide";
	}
	
	console.println("nombre " + nombre);
	nb = parseFloat(nombre.toString().replace( / /gi, "" ));
	console.println("nb " + nb );
	
	if (  Math.ceil(nb) != nb  ){
		return  "Nombre avec virgule non géré.";
	}
	
	n = nb.toString().length;
	console.println("n " + n);
	
	
	switch( n ){
		 case 1: numberToLetter = Unite(nb); break;
		 case 2: quotient = Math.floor(nb / 10);
		 //console.println("quotient + 10", quotient);
		 console.println("quotient", quotient);
				 reste = nb % 10;
							 if(  reste == 0  ) {numberToLetter = Dizaine(quotient * 10);}
							 if( reste != 0 ) {
								if (quotient != 1){
									if (  reste == 1  ) {
									numberToLetter = Unite(reste).replace(/s/,'') + "und" + Dizaine(quotient * 10) ;
									}
									else {
									numberToLetter = Unite(reste) + "und" + Dizaine(quotient * 10);
									}
								}
								else {
								numberToLetter =Dizaine(quotient * 10 + reste );//this is q==1
								}
							}					   
				 break;
		 case 3: quotient = Math.floor(nb / 100);
				 reste = nb % 100;
				 if(  quotient == 1 && reste == 0   ){ numberToLetter = "einhundert";}
				 if(  quotient == 1 && reste != 0   ) {numberToLetter = "einhundert" + NumberToLetter(reste);}
				 if(  quotient > 1 && reste == 0    ) {numberToLetter = Unite(quotient) + "hundert";}
				 if(  quotient > 1 && reste != 0    ) {numberToLetter = Unite(quotient) + "hundert" + NumberToLetter(reste);}
				 break;
		 case 4 :  quotient = Math.floor(nb / 1000);
					  reste = nb - quotient * 1000;
					  if(  quotient == 1 && reste == 0   ) {numberToLetter = "eintausend";}
					  if(  quotient == 1 && reste != 0   ) {numberToLetter = "eintausend" + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0    ) {numberToLetter =  Unite(quotient)  + "tausend";}
					  if(  quotient > 1 && reste != 0    ) {numberToLetter = Unite(quotient) + "tausend" + NumberToLetter(reste);}
					  break;
		 case 5 :  quotient = Math.floor(nb / 1000);
					  reste = nb - quotient * 1000;
					  if(  quotient == 1 && reste == 0   ) {numberToLetter = "zehntausend";}
					  if(  quotient == 1 && reste != 0   ) {numberToLetter = "tausend" + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0    ) {numberToLetter = NumberToLetter(quotient) + "tausend";}
					  if(  quotient > 1 && reste != 0    ) {numberToLetter = NumberToLetter(quotient) + "tausend" + NumberToLetter(reste);}
					  break;
		 case 6 :  quotient = Math.floor(nb / 1000);
					  reste = nb - quotient * 1000;
					  if(  quotient == 1 && reste == 0   ) {numberToLetter = "mille";}
					  if(  quotient == 1 && reste != 0   ) {numberToLetter = "mille" + " " + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0    ) {numberToLetter = NumberToLetter(quotient) + "tausend";}
					  if(  quotient > 1 && reste != 0    ) {numberToLetter = NumberToLetter(quotient) + "tausend" + NumberToLetter(reste);}
					  break;
		 case 7: quotient = Math.floor(nb / 1000000);
					  reste = nb % 1000000;
					  if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine million";}
					  if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine million" + " " + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen";}
					  if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen " + NumberToLetter(reste);}
					  break;  
		 case 8: quotient = Math.floor(nb / 1000000);
					  reste = nb % 1000000;
					  if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine million";}
					  if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine million" + " " + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen";}
					  if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen " + NumberToLetter(reste);}
					  break;  
		 case 9: quotient = Math.floor(nb / 1000000);
					  reste = nb % 1000000;
					  if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine million";}
					  if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine million" + " " + NumberToLetter(reste);}
					  if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen";}
					  if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " millionen " + NumberToLetter(reste);}
					  break;  
		 case 10: quotient = Math.floor(nb / 1000000000);
						reste = nb - quotient * 1000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine milliarde";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine milliarde" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden " + NumberToLetter(reste);}
					    break;	
		 case 11: quotient = Math.floor(nb / 1000000000);
						reste = nb - quotient * 1000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "zehn milliarden";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine milliarde" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden " + NumberToLetter(reste);}
					    break;	
		 case 12: quotient = Math.floor(nb / 1000000000);
						reste = nb - quotient * 1000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine milliarde";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine milliarde" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " milliarden " + NumberToLetter(reste);}
					    break;	
		 case 13: quotient = Math.floor(nb / 1000000000000);
						reste = nb - quotient * 1000000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine billion";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine billion" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen " + NumberToLetter(reste);}
					    break; 	
		 case 14: quotient = Math.floor(nb / 1000000000000);
						reste = nb - quotient * 1000000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine billion";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine billion" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen " + NumberToLetter(reste);}
					    break; 	
		 case 15: quotient = Math.floor(nb / 1000000000000);
						reste = nb - quotient * 1000000000000;
						if(  quotient == 1 && reste == 0  ) {numberToLetter = "eine billion";}
						if(  quotient == 1 && reste != 0  ) {numberToLetter = "eine billion" + " " + NumberToLetter(reste);}
						if(  quotient > 1 && reste == 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen";}
						if(  quotient > 1 && reste != 0   ) {numberToLetter = NumberToLetter(quotient) + " billionen " + NumberToLetter(reste);}
					    break; 	
	 }
	 //fin switch
	 /*respect de l'accord de quatre-vingt*/
	 if (  numberToLetter.substr(numberToLetter.length-"quatre-vingt".length,"quatre-vingt".length) == "quatre-vingt"  ){
	 	numberToLetter = numberToLetter + "s";
	 }
	 
	return numberToLetter;
}
