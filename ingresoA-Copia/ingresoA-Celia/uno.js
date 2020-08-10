/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let personasfem =0 ;
	let personasmasc;
	let promedioEdad;
	let contadorEdad = 0;
	let acumuladorEdad = 0;
	let mujerConMasTemperatura = 0;
	let contadorfem= 0;
	let contadormas=0;
	let FlagMujer = 0 ;


  for ( let i = 0 ; i<5; i++){

      nombre = prompt("ingrese nombre");
     temperatura = parseFloat(prompt("Ingrese temperatura"));
     sexo = prompt("Ingrese sexo f o m ");
     if (!(sexo == "f"|| sexo == "m")){
	   sexo = prompt("Error: Ingrese sexo f o m ");
      }
      edad = parseInt(prompt("Ingrese edad"));
      }
    switch(sexo){
	     case "f":
		 contadorfem++;
		  break;
	     case "m":
		 contadormas++;
		 break;	  
          }

	      if ( edad > 0){
		  acumuladorEdad = acumuladorEdad + edad;
		  contadorEdad++;
		  promedioEdad = acumuladorEdad/contadorEdad;
	      }
	    if(flagMujer == 0 || sexo == "f") {
		    flagMujer= 1;
	      }
		 if (temperatura > mujerConMasTemperatura){
			 mujerConMasTemperatura = temperatura;
		     }
			 else {
				 temperatura = temperatura;
			 }

	console.log(" A: La cantidad de mujeres es: " +contadorfem + "y " + "la cantidad de hombres es: " +contadormas);
	console.log(" B - La edad promedio en total es : " + promedioEdad);
	console.log(" C - La mujer con mas temperatura es : " + mujerConMasTemperatura);	
   
	}

   



