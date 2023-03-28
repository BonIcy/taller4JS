function showMenu() {
  let option;
  let name; 
  let team;
  let classroom; // salon de clase ;) por si no sabes ingles
  const camper={
      asign:[] //son las asignaturas
  };
  const list=[];
  let nObj;
  let nObj2; //el nombre del segundo objeto
  let id;
  let id2;
  let val;
  let val2; 
  do {
  option = parseInt(prompt(`\t-------MENU-------\n1.\tLectura de datos\n2.\tCrear Objeto\n3.\tMostrar Objeto\n4.\tCrear Array\n5.\tMostrar Array\n6.\tElimine primer elemento del Array\n7.\tElimine ultimo elemento del Array\n8.\tEliminar cualquier elemento del array\n9.\tAgregar cualquier elemento al comienzo del Array\n10.\tAgregar cualquier elemento al final del Array\n11.\tCrear array con objetos\n12.\tIterar array con objetos con FOR\n13.\tIterar array con objetos con ForEach\n14.\tIterar array con objetos con Map y crear copia\n15.\tproceso personal\n0.\tSalir`));

  if (option == 1){
      alert("Vas a Realizar Lectura de Datos")   
      name= prompt(`Nombre del Camper`);
      team = prompt(`Team del Camper`);
      classroom= prompt(`Salon del Camper`)
      alert(`El Camper ${name} pretenece al ${team} y salon ${classroom}`);
      console.log(`El Camper ${name} pretenece al ${team} y salon ${classroom}`);
      break;
  }
  else if (option == 2){
      alert("Vas a Agregar (Crear) un Camper (objeto)");
      camper.name=prompt(`Agregar Nombre del Camper`);
      camper.team=prompt(`Agregar Team del Camper`);
      camper.classroom=prompt(`Agregar Salon del Camper`);
      camper.telefono=parseInt(prompt(`Agregar Telefono del Camper`));
      camper.email=prompt(`Agregar Email del Camper`);
      alert(`El Objeto ${camper.name} Ha sido creado`);
      console.log(`El Objeto ${camper.name} Ha sido creado`);
      break;
  }     
  else if (option == 3){
      alert("Mostrar objeto");
      alert(Object.keys(camper));
      console.dir(camper);
      break;
  }
  else if (option == 4){
      alert("Crear array");
      let num=prompt("Ingrese el Número de asign")
      let x=1;
      for (let i = 0; i < num; i++) {
          let asignatura=prompt(`Nombre de la asignatura ${x++}`)
          camper.asign.unshift(asignatura);
      }
      alert(`Todas las Asignaturas del Camper han sido almacenadas`)
      break;
  }
  else if (option == 5){
      alert("Mostrar list de Materias");
      alert(camper.asign);
      console.log(camper.asign);
      break;
  }
  else if (option == 6){
      alert("Eliminar la primera asignatura de la lista");
      camper.asign.shift();
      alert(camper.asign);
      console.log(camper.asign);
      break;
  }
  else if (option == 7){
      alert("Eliminar última asignatura de la lista");
      camper.asign.pop();
      alert(camper.asign);
      console.log(camper.asign);
      break;
  }
  else if (option == 8){
      alert("Eliminar una Materia de la Lista");
      camper.asign.splice(1,1);
      alert(camper.asign)
      console.log(camper.asign);
      break;
  }
  else if (option == 9){
      alert("Agregar Asignatura al Comienzo de la Lista");
      let nuevaAsignatura= prompt("Que Materia Deseas Agregar al Comienzo de la Lista");
      camper.asign.unshift(nuevaAsignatura);
      alert(camper.asign);
      console.log(camper.asign);
      break;
  }    
  else if (option == 10){
      alert("Agregar Asignatura al Final de la Lista");
      let nuevaMateria= prompt("Que Materia Deseas Agregar al Final de la Lista");
      comidas.push(nuevaMateria);
      alert(camper.asign);
      console.log(camper.asign);
      break;
  }
  else if (option == 11){
      const objeto={};
      alert("Crear array con objetos");
      nObj=prompt("Ingrese el Nombre de su Objeto");
      for (let index = 0; index < 2; index++) {
          id=prompt(`Ingrese el key ${index+1}  de su objeto ${nObj}`);
          val=prompt(`Ingrese el value del id ${id}`);
          objeto[id]=val;
      }
      const objetoDos={}
      nObj2 = prompt("ingrese el nombre de su objeto2")

      for (let index = 0; index < 2; index++) {
          id2=prompt(`Ingrese el key de su objeto ${nObj2}`);
          val2=prompt(`Ingrese el value del id ${id2}`);
          objetoDos[id2]=val2;
      }
      list.push(objeto,objetoDos);
      console.log(list);
      alert(list);
      break;
  }
  else if (option == 12){
      console.log("Iterar array con FOR");
      for(let j =0; j<list.length; j++){
          console.log(`Los elementos  de los objeto${j+1} del array son:`);
          for (let idTres in list[j]) {
          console.log(`${idTres}: ${list[j][idTres]} `)
              
          }
          }
      
      a=list.length;
      console.log(a);
      break;
  }
  else if (option == 13){
      console.log("Seleccionaste la opcion 13 .Iterar array con objetos ForEacH");
      list.forEach((iterandoObjeto) => {
          for (let propiedad in iterandoObjeto) {
          console.log(`Iterando con ForEach - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
          }
      });
      break;
      }
      else if (option == 14){
      alert("Iterar array con objetos Map y crear copia");
      list.map((iterandoObjeto) => {
          for (let propiedad in iterandoObjeto) {
          console.log(`Iterando con map - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
          }
      });
      const cloneArray = items =>
          items.map(item =>
          Array.isArray(item)
              ? cloneArray(item)
              : item
          )
      const copiaDeLista=cloneArray(list);
      console.log(copiaDeLista);
      break;
      }
      else if (option == 15){
      alert("Perimetro  de un cuadrado y area de un rectangulo");
      do{
          let option=prompt(`Ingrece una opcion 1 para calcular perimetro de un cuadrado y 2 para el area de un rectangulo:`);
          if (option=1){
              let cuadroPerimetro=prompt(`Ingrece el valor de la arista`);
              alert(`El perimetro de su cuadrado es ${cuadroPerimetro*4} cm`);
              console.log(`El perimetro de su cuadrado es ${cuadroPerimetro*4} cm`);
          }else if (option=2){
              let baseRecta=prompt(`Ingrece el valor de la base`);
              let alturaRecta=prompt(`Ingrece el valor de la altura`);
              alert(`El area del rectangulo es ${baseRecta*alturaRecta}`);
              console.log(`El area del rectangulo es ${baseRecta*alturaRecta}`);
          }else{
              alert(`opcion no valida`)
              console.log(`opcion no valida`)
          }
      }
      while(confirm(`Deseas agregar otro dato?`));
      }
      else if (option === 0){
      alert("Salir");
      break;
      }
      else{
      alert("Opcion invalida");
      break;
      }
      
  }
  while (option !== 0);
  } 
showMenu()