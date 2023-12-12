
let ejercicio = 10
const mostrar = document.getElementById("app");

switch (ejercicio) {

  case 1:

    //Ejercicio1  
    /*
    Crear una función que en base a la edad que ingreso el usuario devolver un
    mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
    */
      
    const funcionEdad = (edad) => {
      var mensaje = (edad >= 18) ? "Eres mayor de edad" : "No eres mayor de edad"
      console.log(mensaje)
    }

    funcionEdad(18)

  break
  
  case 2:

    // Ejercicio 2
    /*
    Crear una función que determine la nota final de un alumno, la cual depende
    de lo siguiente:
      • Examen =20%
      • tareas = 40%
      • asistencia = 10%
      • investigación = 30%
    Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
    */
        
    const notaFinal = (nombreAlumno,carnet,examen,tareas,asistencia,investigacion) => {
      let notaFinal = (examen*0.20+tareas*0.40+asistencia*0.10+investigacion*0.30)
      console.log("La nota del estudiante "+nombreAlumno+", con numero de carnet "+carnet+" es: "+notaFinal)
    }

    notaFinal("Alejandro Martinez","01-2345-6789",8,7,6,9)

  break

  case 3:

    // Ejercicio 3
    /*
    Categoria    Aumento
    A            15%
    B            30%
    C            10%
    D            20%

    Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
    Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
    aumento. Deberá demostrar los datos del empleado y el aumento salarial.
    */
        
    let nombre = "Roberto Ignacio"
    let salario = 700
    let categoria = "A"
    let aumento = 0

    const aumentoTrabajador = (nombre,salario,categoria,aumento) => { 
      switch (categoria) {
        case "A":
          aumento = salario*0.15
          break;
        case "B":
          aumento = salario*0.30
          break;
        case "C":
          aumento = salario*0.10
          break;
        case "D":
          aumento = salario*0.20
          break;
        default:
          "Categoria invalida"
          break;
      }
      console.log("Empleado: "+nombre+"\nSalario: $"+salario+"\nCategoria: "+categoria+"\nSu aumento es de: $"+aumento);
    }
      
    aumentoTrabajador(nombre,salario,categoria,aumento)

  break

  case 4:

    //Ejercicio 4
    /*
    Crear una función que en base a 2 números enteros que ingrese el usuario,
    calcular cual número es el mayor y devolverlo.
    */

    const obtenerMayor = (numero1,numero2) => {
      return (numero1 > numero2) ? numero1 : numero2
    }
      
    console.log("El numero mayor es: "+obtenerMayor(parseInt(prompt("Ingrese el primer numero entero")),parseInt(prompt("Ingrese el segundo numero entero"))))

  break
  
  case 5:

    //Ejercicio 5
    /*
    Realizar una función para una tienda de coches en donde se deberá calcular:
    Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
    coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
    el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
    aplicara en base a lo que selecciono el usuario.
    */

    function calcularDescuento(modelo) {
      let descuento = 0
    
      switch (modelo) {
        case "FORD FIESTA":
          descuento = 5;
          break;
        case "FORD FOCUS":
          descuento = 10;
          break;
        case "FORD ESCAPE":
          descuento = 20;
          break;
        default:
          descuento = 0;
      }
    
      mostrar.innerHTML = `<p>Coche seleccionado: ${modelo}</p>`;

      if (descuento > 0) {
        mostrar.innerHTML += `<p>Descuento aplicado: ${descuento}%</p>`;
      } else {
        mostrar.innerHTML += `<p>No se aplicó descuento.</p>`;
      }
    }

    calcularDescuento(prompt("Ingrese el modelo de su coche:").toUpperCase())
  
  break

  case 6:

    //Ejercicio 6
    /*
    Crear una Función para calcular el descuento en viajes turísticos tomando
    en cuenta lo siguiente:
    Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
    descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
    es Puerto el Triunfo el descuento será del 15%
    */

    const descuentoViajes = (origen,destino) => {
      if(origen==="palma" && destino==="la costa del sol"){
        mostrar.innerHTML = `<p>Su descuento es del 5%</p>`;
      }else if (destino==="panchimalco") {
        mostrar.innerHTML = `<p>Su descuento es del 10%</p>`
      }else if (destino==="puerto el triunfo") {
        mostrar.innerHTML = `<p>Su descuento es del 15%</p>`
      }else{
        mostrar.innerHTML = `<p>Usted no aplica para un descuento</p>`
      }
    }
    
    descuentoViajes(prompt("Ingrese su origen:").toLowerCase(),prompt("Ingrese su destino:").toLowerCase())
    
  break

  case 7:
    //Ejercicio 7
    /*
    Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    •La cantidad de valores negativos ingresados.
    •La cantidad de valores positivos ingresados.
    •La cantidad de múltiplos de 15.
    •El valor acumulado de los números ingresados que son pares.
    */

    let num = 0
    let negativos = 0
    let positivos = 0
    let multiplos = 0
    let pares = 0
    
    for (let i = 1; i <= 10; i++) {
      num = parseInt(prompt("("+i+"/10) Ingrese un numero entero:"))
    
      if (num<0) {
        negativos++
      }
      if (num>0) {
        positivos++
      }
      if (num % 15 === 0){
        multiplos++
      }
      if (num % 2 === 0){
        pares = pares + num
      }
      
    }

    mostrar.innerHTML = `
      <p>Cantidad de números negativos ingresados: ${negativos}</p>
      <p>Cantidad de números positivos ingresados: ${positivos}</p>
      <p>Cantidad de números multiplos de 15 ingresados: ${multiplos}</p>
      <p>Valos acumulado de números pares: ${pares}</p>
    `

  break

  case 8:
    //Ejercicio 8
    /*
    Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
    por el usuario.
    */

    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"))
    
    console.log("Tabla de multiplicar del "+numero+":")
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i
      console.log(numero +" x "+i+" = "+resultado)
    }

  break

  case 9:
    //Ejercicio 9
    /*
    Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
    Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
    • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
    • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
    • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
    • Si no está entre ningún caso anterior la frase “Temperatura desconocida”
    */

    function celsiusToFahrenheit(celsius) {
      console.log("Celsius: "+celsius+" °C")
      let fahrenheit = (celsius * 9/5)+32
      console.log("Fahrenheit: "+fahrenheit+" °F")

      if (fahrenheit>=14 && fahrenheit<32){
        console.log("Temperatura baja")
      }else if (fahrenheit>=32 && fahrenheit<68) {
        console.log("Temperatura adecuada")
      }else if (fahrenheit>=68 && fahrenheit<96) {
        console.log("Temperatura alta")
      }else{
        console.log("Temperatura desconocida")
      }
    }

    celsiusToFahrenheit(parseInt(prompt("Ingrese una temperatura en grados Celsius:")))
  break
  
  case 10:
    //Ejercicio 10
    /*
    Se cuenta con la siguiente información:
    • Las edades de 5 estudiantes del turno mañana.
    • Las edades de 6 estudiantes del turno tarde.
    • Las edades de 11 estudiantes del turno noche.
    
    Nota: Las edades de cada estudiante se deberán ingresar por la web.

    Lo que queremos devolver:
    • Obtener el promedio de las edades de cada turno (tres promedios).
    • Imprimir dichos promedios (promedio de cada turno).
    • Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor.
    */

    var elemento = document.getElementById("app")
    elemento.innerHTML = `
      <form id="formularioEdades" onsubmit="almacenarInformacion(event)">
        <div>
            <h2>Alumnos mañana</h2>
            <input type="number" class ="edadM" name="edad1" required>
            <input type="number" class ="edadM" name="edad2" required>
            <input type="number" class ="edadM" name="edad3" required>
            <input type="number" class ="edadM" name="edad4" required>
            <input type="number" class ="edadM" name="edad5" required>
        </div>

        <div>
            <h2>Alumnos tarde</h2>
            <input type="number" class ="edadT" name="edad6" required>
            <input type="number" class ="edadT" name="edad7" required>
            <input type="number" class ="edadT" name="edad8" required>
            <input type="number" class ="edadT" name="edad9" required>
            <input type="number" class ="edadT" name="edad10" required>
            <input type="number" class ="edadT" name="edad11" required>
        </div>

        <div>
            <h2>Alumnos noche</h2>
            <input type="number" class ="edadN" name="edad12" required>
            <input type="number" class ="edadN" name="edad13" required>
            <input type="number" class ="edadN" name="edad14" required>
            <input type="number" class ="edadN" name="edad15" required>
            <input type="number" class ="edadN" name="edad16" required>
            <input type="number" class ="edadN" name="edad17" required>
            <input type="number" class ="edadN" name="edad18" required>
            <input type="number" class ="edadN" name="edad19" required>
            <input type="number" class ="edadN" name="edad20" required>
            <input type="number" class ="edadN" name="edad21" required>
            <input type="number" class ="edadN" name="edad22" required>
        </div>

        <br>
        <button type="submit" onclick="almacenarInformacion(event)">Enviar Edades</button>
      </form>
    `
    function almacenarInformacion(event) {
      event.preventDefault();

      // Obtener referencias a los elementos del formulario
      var formulario = document.getElementById("formularioEdades");

      // Inicializar objetos para almacenar los datos de cada turno
      var alumnosManana = {};
      var alumnosTarde = {};
      var alumnosNoche = {};

      // Iterar sobre los elementos del formulario y agregar sus valores a los objetos correspondientes
      for (let i = 0; i < formulario.elements.length; i++) {
        var elemento = formulario.elements[i];

        // Verificar si el elemento es un campo de entrada de número
        if (elemento.type === "number") {
          // Determinar la clase del elemento y agregar el valor al objeto correspondiente
          if (elemento.classList.contains("edadM")) {
            alumnosManana[elemento.name] = parseInt(elemento.value, 10);
          } else if (elemento.classList.contains("edadT")) {
            alumnosTarde[elemento.name] = parseInt(elemento.value, 10);
          } else if (elemento.classList.contains("edadN")) {
            alumnosNoche[elemento.name] = parseInt(elemento.value, 10);
          }
        }
      }
      formulario.remove();

      function sumaDatos(datos) {
        var suma = 0
        var valores = Object.values(datos)
        for (let i = 0; i < valores.length; i++) {
          suma += valores[i]
        }
        return suma
      }

      
      const promedioManana = sumaDatos(alumnosManana) / Object.keys(alumnosManana).length
      const promedioTarde = sumaDatos(alumnosTarde) / Object.keys(alumnosTarde).length
      const promedioNoche = sumaDatos(alumnosNoche) / Object.keys(alumnosNoche).length


      function retornarMayor(manana, tarde, noche) {
        if (manana === tarde && tarde === noche) {
          return "Todos los promedios son iguales.";
        } else if (manana >= tarde && manana >= noche) {
          return "El promedio mayor es en la mañana: " + manana;
        } else if (tarde >= manana && tarde >= noche) {
          return "El promedio mayor es en la tarde: " + tarde;
        } else {
          return "El promedio mayor es en la noche: " + noche;
        }
      }

      var nuevoDiv = document.createElement("div");
      nuevoDiv.innerHTML = `
        <div>
          <p>Promedio de la mañana: ${promedioManana}</p>
          <p>Promedio de la tarde: ${promedioTarde}</p>
          <p>Promedio de la noche: ${promedioNoche}</p>
          <p>${retornarMayor(promedioManana, promedioTarde, promedioNoche)}</p>
        </div>
      `;

      document.body.appendChild(nuevoDiv);
    }

  break

  default:
    console.log("Ejercicio no valido")
  break  
}