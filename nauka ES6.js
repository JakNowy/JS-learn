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
// console.log(obj.x) // obj.x = 4

