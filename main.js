//*Ejercicio 1  Sum of Resistors in Series  (Suma de resistencias en serie)
//- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
//- `sumResitance([14,3.5,6])` debería devolver `'23.5 ohmios'`. (14 + 3.5 + 6 = 23.5)
//- `sumResitance([8,15,100])` debería devolver `'123 ohmios'`. (8 + 15 + 100 = 123)
function sumResitance(resistencias) {
    let suma = 0;
    for (let i = 0; i  < resistencias.length; i++){
        suma += resistencias [i];
    }
    return suma;
}
console.log (sumResitance([14,3.5,6]));

//*Ejercicio 2  Number divided into halves  (Número dividido en mitades)
//- `numDiv(4)` debería devolver `[2, 2]` .
//- `numDiv(10)` debería devolver `[5, 5]` .

const numDiv = [10,20]
console.log (10/2);
console.log (20/2);

//* Ejercico 3   Secret Society   (Sociedad secreta) 
//- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
//- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
//- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .

function secretName(...names) {
    return names.map(name=> name [0]).join("");
}
console.log(secretName('Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'));

//*Ejercicio 4   Online status   (Estado en línea)
//- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` .

const onlineStatus= ["mockIng99", "J0eyPunch","glassedFer"]
console.log(onlineStatus.push("mask224"));
onlineStatus.splice(2,3);
console.log(onlineStatus.slice(0,3));

//*Ejercicio 5 Array of Multiples  (Matriz de múltiplos) 
//- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
//- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .

const numeros1 = [0,2,3,4,5,6,7,8,9,10];
const multiplos1 = numeros1.map(numero => numero * 2);
console.log(multiplos1);
/////////////////////////////////////////////////////////
const numeros = [0,1,2,3,4,5,6];
const multiplos = numeros.map(numero => numero * 17);
console.log(multiplos);

//*Ejercicio 6  Positive dominance in Array  (Dominancia positiva en Array)
//`positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false` 
function positiveDom(arr) {
    return arr.filter (num => num > 0).length > arr.filter(num => num < 0).length;
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));
 
//*Ejercicio 7   Antipodal Average   (Promedio antípoda)
//- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .
function procesMatriz(matriz) {
    const mitad = Math.floor(matriz.length/2);
    const izquierda = matriz.slice (0,mitad);
    const deerecha = matriz.slice (mitad + (matriz.length % 2 === 1 ? 1 : 0));
    //////////////////// paso 2
    const suma =izquierda.map((num,index) => num + deerecha[deerecha.length -1 - index]);
    //////////////////////// paso 3
    const resultado =suma.map (num => num / 2);
    return resultado
}
console.log (procesMatriz([1,2,3,5,22,6]));