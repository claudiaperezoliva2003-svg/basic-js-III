// =====================
// NUMEROS
// =====================

// Ejercicio 1
function sumar(a, b) {
    return a + b
}

console.log(sumar(5, 3))

// Ejercicio 2
function restar(a, b) {
    return a - b
}

console.log(restar(10, 4))

// Ejercicio 3
function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(6, 2))

// Ejercicio 4
function dividir(a, b) {
    return a / b
}

console.log(dividir(20, 5))

// Ejercicio 5
function potencia(base, exponente) {
    return base ** exponente
}

console.log(potencia(2, 3))

// Ejercicio 6
function restoDivision(a, b) {
    return a % b
}

console.log(restoDivision(10, 3))

// Ejercicio 7
function raizCuadrada(numero) {
    return Math.sqrt(numero)
}

console.log(raizCuadrada(25))

// Ejercicio 8
function valorAbsoluto(numero) {
    return Math.abs(numero)
}

console.log(valorAbsoluto(-8))

// Ejercicio 9
function redondear(numero) {
    return Math.round(numero)
}

console.log(redondear(4.7))

// Ejercicio 10
function numeroAleatorio() {
    return Math.random()
}

console.log(numeroAleatorio())

// =====================
// LETRAS
// =====================

// Ejercicio 1
function concatenar(texto1, texto2) {
    return texto1 + texto2
}

console.log(concatenar("Hola ", "Claudia"))

// Ejercicio 2
function longitudTexto(texto) {
    return texto.length
}

console.log(longitudTexto("Javascript"))


// Ejercicio 3
function mayusculas(texto) {
    return texto.toUpperCase()
}

console.log(mayusculas("hola"))


// Ejercicio 4
function minusculas(texto) {
    return texto.toLowerCase()
}

console.log(minusculas("JAVASCRIPT"))


// Ejercicio 5
function caracterPosicion(texto, indice) {
    return texto[indice]
}

console.log(caracterPosicion("Javascript", 2))


// Ejercicio 6
function invertirTexto(texto) {
    return texto.split("").reverse().join("")
}

console.log(invertirTexto("hola"))


// Ejercicio 7
function contarCaracter(texto, caracter) {
    let contador = 0

    for (let letra of texto) {
        if (letra === caracter) {
            contador++
        }
    }

    return contador
}

console.log(contarCaracter("banana", "a"))


// Ejercicio 8
function quitarEspacios(texto) {
    return texto.replaceAll(" ", "")
}

console.log(quitarEspacios("Hola mundo"))


// Ejercicio 9
function esPalindromo(texto) {
    let textoInvertido = texto.split("").reverse().join("")

    return texto === textoInvertido
}

console.log(esPalindromo("radar"))
console.log(esPalindromo("hola"))


// Ejercicio 10
function primeraMayuscula(texto) {

    return texto
        .split(" ")
        .map(palabra => palabra[0].toUpperCase() + palabra.slice(1))
        .join(" ")
}

console.log(primeraMayuscula("hola mundo javascript"))

// =====================
// ARRAYS
// =====================
// Ejercicio 1
function sumarArray(array) {
    let suma = 0

    for (let numero of array) {
        suma += numero
    }

    return suma
}

console.log(sumarArray([1, 2, 3, 4]))


// Ejercicio 2
function promedioArray(array) {
    let suma = sumarArray(array)

    return suma / array.length
}

console.log(promedioArray([2, 4, 6, 8]))


// Ejercicio 3
function ordenarArray(array) {
    return array.sort((a, b) => a - b)
}

console.log(ordenarArray([5, 1, 8, 3]))


// Ejercicio 4
function mayoresQue(array, numero) {
    return array.filter(elemento => elemento > numero)
}

console.log(mayoresQue([1, 5, 10, 15], 8))


// Ejercicio 5
function unirArrays(array1, array2) {
    return array1.concat(array2)
}

console.log(unirArrays([1, 2], [3, 4]))


// Ejercicio 6
function maximoArray(array) {
    return Math.max(...array)
}

console.log(maximoArray([4, 8, 2, 10]))


// Ejercicio 7
function minimoArray(array) {
    return Math.min(...array)
}

console.log(minimoArray([4, 8, 2, 10]))


// Ejercicio 8
function contarElemento(array, elemento) {
    let contador = 0

    for (let item of array) {
        if (item === elemento) {
            contador++
        }
    }

    return contador
}

console.log(contarElemento([1, 2, 2, 3, 2], 2))


// Ejercicio 9
function quitarDuplicados(array) {
    return [...new Set(array)]
}

console.log(quitarDuplicados([1, 2, 2, 3, 3, 4]))


// Ejercicio 10
// Invertir el orden del array
function invertirArray(array) {
    return array.reverse()
}

console.log(invertirArray([1, 2, 3, 4]))


// =====================
// OBJETOS LITERALES
// =====================

// Ejercicio 1
function obtenerNombre(objeto) {
    return objeto.nombre
}

console.log(obtenerNombre({ nombre: "Claudia", edad: 23 }))


// Ejercicio 2
function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad

    return objeto
}

console.log(actualizarEdad({ nombre: "Claudia", edad: 23 }, 24))


// Ejercicio 3
function agregarPropiedad(objeto, propiedad) {
    objeto[propiedad] = null

    return objeto
}

console.log(agregarPropiedad({ nombre: "Claudia" }, "apellido"))


// Ejercicio 4
function eliminarPropiedad(objeto, propiedad) {
    delete objeto[propiedad]

    return objeto
}

console.log(eliminarPropiedad({ nombre: "Claudia", edad: 23 }, "edad"))


// Ejercicio 5
function cantidadPropiedades(objeto) {
    return Object.keys(objeto).length
}

console.log(cantidadPropiedades({ nombre: "Claudia", edad: 23 }))


// Ejercicio 6
function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto
}

console.log(tienePropiedad({ nombre: "Claudia" }, "nombre"))
console.log(tienePropiedad({ nombre: "Claudia" }, "edad"))


// Ejercicio 7
function valoresObjeto(objeto) {
    return Object.values(objeto)
}

console.log(valoresObjeto({ nombre: "Claudia", edad: 23 }))


// Ejercicio 8
function compararObjetos(objeto1, objeto2) {

    return JSON.stringify(objeto1) === JSON.stringify(objeto2)

}

console.log(compararObjetos(
    { nombre: "Claudia", edad: 23 },
    { nombre: "Claudia", edad: 23 }
))


// Ejercicio 9
function copiarObjeto(objeto) {

    return { ...objeto }

}

console.log(copiarObjeto({ nombre: "Claudia", edad: 23 }))


// Ejercicio 10
function unirObjetos(objeto1, objeto2) {

    return { ...objeto1, ...objeto2 }

}

console.log(unirObjetos(
    { nombre: "Claudia", edad: 23 },
    { edad: 24, ciudad: "Barcelona" }
))