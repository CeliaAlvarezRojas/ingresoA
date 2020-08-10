/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
 let nombreTitular;
 let lugar;
 let temporada;
 let cantidadViajantes;
 let contadorMasPasajeros = 0;
 let nombreConMasPasajeros;
 let promedioInvierno;
 let acumInvierno = 0 ;
 let CantidadInvierno;
 let acumBariloche = 0 ;
 let acumCataratas = 0;
 let acumSalta =0 ;
 let lugarMasVisitado;
 let contadorBariloche = 0 ;
 let contadorCataratas = 0;
 let contadorSalta = 0; 
 let flagMaspasajeros = 0;

   do{
	   nombreTitular= prompt(" Ingresar nombre");
     lugar = prompt('Ingresar : “bariloche”, “cataratas” o “salta”');
     while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta" )){

	 lugar = prompt('Error: Ingresar : “bariloche”, “cataratas” o “salta”');
     }
	 temporada = prompt('Ingresar:“otoño”,”invierno, “verano,”primavera”');
	 
	 while(!( temporada == "otoño" || temporada == "invierno" || temporada == "verano"  || temporada == "primavera" )){

	 temporada = prompt('Error: Ingresar:“otoño”,”invierno, “verano,”primavera”');
	 }
	 cantidadViajantes = parseInt(prompt(" Cantidad de personas que viajan"));

	 seguir = prompt("¿Queres seguir ingresando datos?");

	}while (seguir == 's');

	switch(lugar){
		case "bariloche":
			 acumBariloche+= cantidadViajantes;
			 contadorBariloche++;
		 break;
		case "cataratas":
			acumCataratas+= cantidadViajantes;
			contadorCataratas++;
			break;
		case "salta":
			acumSalta+= cantidadViajantes;
			contadorSalta++;
			break;
	     }
		if(acumBariloche > acumCataratas && acumBariloche > acumSalta){
			lugarMasVisitado= "Bariloche";
		    }
		   else if(acumCataratas>= acumBariloche && acumCataratas > acumSalta){
		  lugarMasVisitado = "Cataratas";
			}
		   else {
		   lugarMasVisitado = "Salta";
			}
		 
			console.log(" A : El lugar mas viajado es " + lugarMasVisitado);

			while (flagMaspasajeros == 0 ||contadorMasPasajeros < cantidadViajantes ){

			 contadorMasPasajeros = contadorMasPasajeros+ cantidadViajantes;
			 nombreConMasPasajeros = nombre;
			 flagMaspasajeros = 1;

			}
			if( temporada == "invierno"){
				contadorInvierno++;
				acumInvierno = acumInvierno + CantidadInvierno;
				promedioInvierno = acumInvierno / CantidadInvierno;
			}
			console.log(" B: El nombre del titular con mas pasajetos es: " + nombreConMasPasajeros);
			console.log(" C: El promedio de personas por viaje, que viajan en invierno: " + promedioInvierno);

	  	
 
} 
