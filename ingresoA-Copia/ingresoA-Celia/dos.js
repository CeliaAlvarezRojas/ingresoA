/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let precioMasCaro = 0;
  let kilogramos;
  let tipo;
  let seguir;
  let pesoTotal = 0 ;
  let pesoMasLiviano = 0; 
  let MarcaMasCaraLiquido;
  let MarcaMasLivianoSolido;

 do{

  marca = prompt("Ingresar Marca: ");
  precio = prompt(parseFloat(" Ingresar precio"));
  kilogramos = prompt(parseInt( " Igresar Kilogramos"));
  tipo = prompt("Ingresar Tipo: Solido o liquido" );

  while (!( tipo == "solido "|| tipo == "liquido"));
  tipo = prompt("Error: Ingresar Tipo: Solido o liquido" );

   seguir == prompt(" ¿Queres seguir ingresando?");

  } while (seguir == 's');

  pesoTotal = pesoTotal + kilogramos;

  console.log (" A- El peso total de la compra es" + pesoTotal);

  switch (tipo){
    case "liquido":

     if( precio > precioMasCaro ){

      precioMasCaro= precioMasCaro + precio;
      MarcaMasCaraLiquido = marca;
     }
      break;
     case "solido":

       if (peso >= pesoMasliviano){
       pesoMasLiviano = peso;
        MarcaMasLivianoSolido = marca;
       }
      break;

  }
   console.log ("B: La marca del más caro de los líquidos es: " + MarcaMasCaraLiquido);
   console.log ("C: La marca del más liviano de los sólidos es: " + MarcaMasLivianoSolido);


}
