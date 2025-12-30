// Takrorlash Algoritm

// integer
// 1-
// let A = Number(prompt("A = "));

// let b = A % 100;
// let e = parseInt(A / 100);
// let c = parseInt(b / 10);
// let d = b % 10;

// alert("Teskari tartibda:\n" + d + c + e);

// 2-
// let A = Number(prompt("A = "));

// let b = A % 100;
// let e = parseInt(A / 100);
// let c = parseInt(b / 10);
// let d = b % 10;

// alert("" + c + d + e);

// 3-
// let A = Number(prompt("A = "));

// let b = A % 100;
// let e = parseInt(A / 100);
// let c = parseInt(b / 10);
// let d = b % 10;

// alert("" + d + e + c);

// Booleann

// 1-
// let A = Number(prompt("A = "));
// alert(A > 0);

// 2-
// let A = Number(prompt("A = "));
// alert(A % 2 !== 0);

// 3-
// let A = Number(prompt("A = "));
// alert(A % 2 === 0);

// 4-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// alert(A > 2 && B <= 3);

// 5-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// alert(A >= 0 || B < -2);

// 6-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// let C = Number(prompt("C = "));
// alert(A <= B && B <= C);

// 7-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// let C = Number(prompt("C = "));
// alert(B > A && B < C);

// 8-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// alert(A % 2 !== 0 && B % 2 !== 0);

// 9-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// alert(A % 2 !== 0 || B % 2 !== 0);

// 10-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// alert((A % 2 !== 0) !== (B % 2 !== 0));

// Shart operatori (IF Else)

// 1-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));

// if (A > B) alert(A);
// else alert(B);

// 2-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));

// if (A < B) alert("Kichigi 1-chi son");
// else alert("Kichigi 2-chi son");

// 3-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));

// if (A > B) alert(A + " " + B);
// else alert(B + " " + A);


// Takrorlanuvchi sikl (for, do while, while)

// 1-
// let price = Number(prompt("1 kg konfet narxi = "));

// for (let w = 1.2; w <= 2; w += 0.2) {
//     console.log(w.toFixed(1) + " kg narxi = " + (w * price).toFixed(2));
// }

// 2-
// let a = Number(prompt("a = "));
// let b = Number(prompt("b = "));
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
// }

// alert("Yig'indi = " + sum);

// 3-
// let a = Number(prompt("a = "));
// let b = Number(prompt("b = "));
// let mult = 1;

// for (let i = a; i <= b; i++) {
//     mult *= i;
// }

// alert("Ko'paytma = " + mult);

// 4-
// let a = Number(prompt("a = "));
// let b = Number(prompt("b = "));
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i * i;
// }

// alert("Kvadratlar yig'indisi = " + sum);

// While

// 1-
// let p = 20; 
// let kun = 1;
// let masofa = 10;
// let kunlik = 10;

// while (masofa <= 200) {
//     kunlik = kunlik + kunlik * p / 100;
//     masofa += kunlik;
//     kun++;
// }

// console.log("Kunlar:", kun);
// console.log("Masofa:", Math.floor(masofa));

// 2-
// let n = 23, m = 5;
// let q = 0;

// while (n >= m) {
//     n -= m;
//     q++;
// }

// console.log("Butun qismi:", q);
// console.log("Qoldiq:", n);

// 3-
// let n = 12345;
// let teskari = 0;

// while (n > 0) {
//     let x = n % 10;
//     teskari = teskari * 10 + x;
//     n = Math.floor(n / 10);
// }

// console.log(teskari);

// 4-
// let n = 321;
// let sum = 0;
// let count = 0;

// while (n > 0) {
//     let x = n % 10;
//     sum += x;
//     count++;
//     n = Math.floor(n / 10);
// }

// console.log("Yig‘indi:", sum);
// console.log("Raqamlar soni:", count);

// 5-
// let n = 123123;
// let bor = false;

// while (n > 0) {
//     if (n % 10 === 2) bor = true;
//     n = Math.floor(n / 10);
// }

// console.log(bor ? "2 bor" : "2 yo‘q");

// 6-
// let n = 864421;
// let bor = false;

// while (n > 0) {
//     if ((n % 10) % 2 === 1) bor = true;
//     n = Math.floor(n / 10);
// }

// console.log(bor ? "Toq bor" : "Toq yo‘q");

// 7-
// let n = 11;
// let i = 2;
// let tub = true;

// while (i * i <= n) {
//     if (n % i === 0) {
//         tub = false;
//         break;
//     }
//     i++;
// }

// console.log(tub ? "Tub" : "Tub emas");

// 8-
// let a = 12, b = 10;

// while (a !== b) {
//     if (a > b) a -= b;
//     else b -= a;
// }

// console.log("EKUB =", a);

