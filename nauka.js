// DECLARATION VS DEFINITION; UNDEFINED VS NULL
// declaration: type = undefined; value = undefined
//
// var x;
// console.log(typeof(x));
// console.log((x));
//
// definition: type = number; value = 5
// x = 5;
// console.log(typeof(x));
// console.log((x));
//
// "undefinied" nie ma żadnego typu, żadnej wartości (nie istnieje).
// "null" istnieje, jest konkretną wartością oznaczającą "nic"
// x = null;
// console.log(typeof(x));
// console.log((x));

// TYPE COERSION - dynamiczna zmiana typu zmiennej na potrzeby danej instrukcji
//
// var y;
// y = '123' + 4;
// console.log(y); // '123' + 4 = '1234' - coersion int 4 to str '4'

// "==" VS "==="
//
// "===" sprawdza takze zgodność typów, "==" próbuje przeprowadzić type coersion
// var a = 10;
// var b = '10';
// console.log(a == b); // true
// console.log(a === b); // false

// OBJECTS
//
// declaring objects
// var obj = {
//   a:5,
//   b:3
// };
//
// console.log(obj.a);     // dot notation
// console.log(obj['b']);  // bracket notation

// FUNCTIONS
//
// nadliczbowe argumenty są ignorowane, brakujace przyjmuja wartosc "undefined"
//
// var f = function (a, b) { // function expression
//   console.log(a,b)
// };
//
// function g(a) {    // function declaration
//   console.log(a);
//   return 5;
// }
//
// g = g(1,2);
// console.log(f);

// HOISTING
// najpierw kompilator tworzy puste zmienne
// potem interpreter przypisuje im wartosci i wykonuje kod
//
// console.log(a); // a istnieje, ale jest undefined
// var a = 5;
//
// // hoisting dla funkcji
// f(); // function expression zadziała, bo f to funkcja
// function f() {
//   console.log('Function f execution.')
// };
//
// g(); // function declaration nie zadziała, bo g to zmienna, do której jeszcze nic nie przypisano (undefined)
// var g = function () {
//   console.log('Function g execution')
// };

// KONSTRUKTOR
//
// function Emp(name, age) {
//   this.name = name;
//   this.age = age;
// }
//
// emp1 = new Emp('jakub', 20);
// console.log(emp1);

// CALLOWANIE METHODY DLA OBCEGO OBIEKTU (THIS)
// function CreateEmp() {
//   this.name = 'Jakub';
//   this.age = 20;
//   this.next_year = function () {
//     this.age += 1
//   }
// }
//
// emp1 = new CreateEmp();
// emp2 = new CreateEmp();
//
// console.log(emp1.age);
// console.log(emp2.age);
//
// emp1.next_year.call(emp2);
// emp1.next_year.call(emp2);
// console.log(emp1.age);
// console.log(emp2.age);

// PROTOTYPE
// każda funkcja ma swój prototyp (f.prototype), konstruktor tworzy obiekt posiadający atr __proto__ (obj.__proto__)
// tworzy go na podstawie prototypu funkcji (f.prototype === obj.__proto__)
// jesli obj.x nie istnieje, to silnik sprawdza czy istnieje obj.__proto__.x i go zwraca
//
// function F() {}
// F.prototype.x = 5;
//
// var behavior = function () {
//   console.log('behavior')
// };
//
// F.prototype.behavior = behavior;
//
// var obj = new F(); //konstrukor obiektu "obj"
//
// console.log(F.prototype.x);   // #0
// console.log(obj.__proto__.x); // #1
// console.log(obj.x);           // #2 "obj" nie ma atrybutu "x", ale jego prototyp tak, więc pobiera go i zwraca jako swój
//                               // gdyby obj.x istniał i był różny od obj.__proto__.x, silnik nie pobrałby "x" z proto,
//                               // tylko zwróciło swój własny
//                               // #0 === #1 === #2
// obj.behavior();
// console.log(obj.constructor); // obj.constructor zwraca funkcję będącą konstruktorem danego obiektu


//      ~~ ~~ ~~         ECMA SCRIPT 6        ~~ ~~ ~~


// LET SCOPE
// let deklaruje zmienną lokalnie, ponadto nie ma hoistingu (deklaracja i definicja koniecznie przed wywołaniem)
//
// let x = 1;
// if (true){
//   let x = 2;
//   console.log(x)// printuje 2
// }
// console.log(x); // printuje 1

// CONST
// stała wartość.
// jeśli jest odniesieniem do innej zmiennej, wartość może się zmieniać
// (ale zawsze musi się odwoływać do tej samej zmiennej)
//
// let a = [5,2];
// const b = a;
// console.log(b); // const b = [5,2]
// a.push(3);
// console.log(b); // const b = [5,2,3]
//
// let x = {a:1, b:2};
// const y = x;
// console.log(x,y);
// x.c = 3;
// console.log(x,y);

// FAT ARROW
// (argumenty) => {
//   instrukcje funkcji
// }
// !!!WAŻNE!!! : wywołanie funkcji przez fat arrow NIE ZMIENIA obiektu "this"
//             : wywołanie funkcji normalnie zmienia "this" na obiekt, który ją wywołał
//
// const f = (a,b) => {
//   return a+b
// };
// console.log(f(2, 3));

// DYNAMIC OBJECT FIELDS
// obiekty pobierają wartości atrybutów z deklarowanych wcześniej zmiennych (jeśli mają identyczne nazwy)
//
// let x = 4;
// let obj = {
//   x
// };
//console.log(obj.x); // obj.x = 4
// możliwe jest też nadanie atrybutowi nazwy na podstawie zmiennej
// let y = 'property1';
// let obj2 = {
//   [y]: 1
// };
// console.log(obj2.property1); // obj.property1 = 1
// console.log(obj2[y]);        // obj.property1 = 1

// TEMPLATE LITERALS
// let name = 'Jakub';
// let x = {
//   name:`My name is ${name} and I have 0 \${ }  <- use backslash to escape`
// };
// console.log(x.name)

// TERNARY OPERATOR
// JS: condition ? expression1 : expression2
// Python: if condition return A else B
