// class work //
// 1-Masala
// let age;

// while (true) {
//     age = prompt("Yoshingizni kiriting:");
//     age = Number(age);

//     if (age >= 0 && age <= 80) break;
//     alert("Yoshni noto'g'ri kiritdingiz, qayta kiriting!");
// }

// if (age < 16) {
//     alert("Sizga mumkin emas!");
// } else {
//     alert("Xush kelibsiz!");
// }
// tugadi

// 2-Masala
// Bu kod faqat dekab uchun tuzildi shartida shunday deyilgann :)

// let day = Number(prompt("Dekabr kunini kiriting:"));
// let result;

// if (day < 1 || day > 31 || isNaN(day)) {
//     result = "Xato! Dekabr oyida 1 dan 31 gacha kun bo'ladi.";
// } else {
//     let w = (day - 1) % 7;

//     switch (w) {
//         case 0:
//             result = day + "-Dekabr " + "Dushanba";
//             break;
//         case 1:
//             result = day + "-Dekabr " + "Seshanba";
//             break;
//         case 2:
//             result = day + "-Dekabr " + "Chorshanba";
//             break;
//         case 3:
//             result = day + "-Dekabr " + "Payshanba";
//             break;
//         case 4:
//             result = day + "-Dekabr " + "Juma";
//             break;
//         case 5:
//             result = day + "-Dekabr " + "Shanba";
//             break;
//         case 6:
//             result = day + "-Dekabr " + "Yakshanba";
//             break;
//     }
// }
// alert(result);
// Tugadi

// 3-Masala
// let year = Number(prompt("Yil kiriting:"));

// for (let i = 4; i <= year; i += 4) {
//     console.log(i);
// }
// Tugadi

///////////// Uy ishi /////////

// 1-
// let n = Number(prompt("1–7 orasida son kiriting:"));
// let result;

// switch (n) {
//     case 1: result = n + "-" + "Dushanba"; break;
//     case 2: result = n + "-" + "Seshanba"; break;
//     case 3: result = n + "-" + "Chorshanba"; break;
//     case 4: result = n + "-" + "Payshanba"; break;
//     case 5: result = n + "-" + "Juma"; break;
//     case 6: result = n + "-" + "Shanba"; break;
//     case 7: result = n + "-" + "Yakshanba"; break;
//     default: result = "Noto‘g‘ri son!";
// }

// alert(result);


// 2-
// let k = Number(prompt("1–5 orasida baho kiriting:"));
// let msg;

// switch(k){
//     case 1: msg = "Yomon"; break;
//     case 2: msg = "Qoniqarsiz"; break;
//     case 3: msg = "Qoniqarli"; break;
//     case 4: msg = "Yaxshi"; break;
//     case 5: msg = "A’lo"; break;
//     default: msg = "Xato!";
// }

// alert(msg);

// 3-
// let oy = Number(prompt("Oy raqamini kiriting:"));
// let fasl;

// switch(oy){
//     case 12:
//     case 1:
//     case 2:
//         fasl = "Qish"; break;

//     case 3:
//     case 4:
//     case 5:
//         fasl = "Bahor"; break;

//     case 6:
//     case 7:
//     case 8:
//         fasl = "Yoz"; break;

//     case 9:
//     case 10:
//     case 11:
//         fasl = "Kuz"; break;

//     default:
//         fasl = "Noto‘g‘ri oy!";
// }
// alert(fasl);

// 4-
// let m = Number(prompt("Oy raqamini kiriting:"));
// let days;

// switch(m){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         days = m + "-oyda. " + 31 + " kun bor"; break;
//     case 4: case 6: case 9: case 11:
//         days = m + "-oyda. " + 30 + " kun bor"; break;
//     case 2:
//         days = 28 + " kun bor"; break; 
//     default:
//         days = "Xato oy!";
// }

// alert(days);

// 5-
// let A = Number(prompt("A = "));
// let B = Number(prompt("B = "));
// let amal = Number(prompt("Amal tanlang (1-4) gacha -> \n 1: Yigindi \n 2: Ayirma \n 3: Bolinma \n 4: Kopaytma"));
// let javob;

// switch(amal){
//     case 1: javob = A + B; break;
//     case 2: javob = A - B; break;
//     case 3: javob = A / B; break;
//     case 4: javob = A * B; break;
//     default: javob = "Noto‘g‘ri amal!";
// }

// alert(javob);

// 6-
// let u = Number(prompt("Birlik (1–5): \n 1: DM \n 2: KM \n 3: M \n 4: MM \n 5: SM"));
// let uzunlik = Number(prompt("Qiymat kiriting:"));
// let metr;

// switch(u){
//     case 1: metr = uzunlik / 10; break;
//     case 2: metr = uzunlik * 1000; break;
//     case 3: metr = uzunlik; break;
//     case 4: metr = uzunlik / 1000; break;
//     case 5: metr = uzunlik / 100; break;
//     default: metr = "Xato!";
// }

// alert(metr + " metr");

// 7-
// let og = Number(prompt("Birlik (1–5): \n 1: kg \n 2: mg \n 3: gr \n 4: tonna \n 5: st"));
// let val = Number(prompt("Qiymat kiriting:"));
// let kg;

// switch(og){
//     case 1: kg = val; break;
//     case 2: kg = val / 1000000; break;
//     case 3: kg = val / 1000; break;
//     case 4: kg = val * 1000; break;
//     case 5: kg = val * 100; break;
//     default: kg = "Xato!";
// }

// alert(kg + " kg");

// 8-
// let D = Number(prompt("Kun (1–31):"));
// let M = Number(prompt("Oy (1–12):"));

// let oyNomi;
// let days = 0;

// switch (M) {
//     case 12:
//         days += 30;
//         oyNomi = "Dekabr";
//     case 11:
//         if (M == 11) oyNomi = "Noyabr";
//         days += 31;
//     case 10:
//         if (M == 10) oyNomi = "Oktabr";
//         days += 30;
//     case 9:
//         if (M == 9) oyNomi = "Sentabr";
//         days += 31;
//     case 8:
//         if (M == 8) oyNomi = "Avgust";
//         days += 31;
//     case 7:
//         if (M == 7) oyNomi = "Iyul";
//         days += 30;
//     case 6:
//         if (M == 6) oyNomi = "Iyun";
//         days += 31;
//     case 5:
//         if (M == 5) oyNomi = "May";
//         days += 30;
//     case 4:
//         if (M == 4) oyNomi = "Aprel";
//         days += 31;
//     case 3:
//         if (M == 3) oyNomi = "Mart";
//         days += 28;
//     case 2:
//         if (M == 2) oyNomi = "Fevral";
//         days += 31;
//     case 1:
//         if (M == 1) oyNomi = "Yanvar";
//         break;

//     default:
//         alert("Xato oy kiritildi!");
//         oyNomi = "Xato!";
// }

// days += D;

// alert(
//     D + " " + oyNomi + "\n" +
//     "Yil boshidan beri: " + days + " kun"
// );


// 9-
// let d = Number(prompt("Kun:"));
// let m2 = Number(prompt("Oy:"));

// let kunlar;

// switch(m2){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12: kunlar = 31; break;
//     case 4: case 6: case 9: case 11: kunlar = 30; break;
//     case 2: kunlar = 28; break;
// }

// if (d < kunlar) {
//     d++;
// } else {
//     d = 1;
//     m2++;
//     if(m2 > 12) m2 = 1;
// }

// console.log("Ertangi sana:", d, m2);

// 10-
// let yon = +prompt(
// "Yo'nalishlardan birini tanlang:\n1. Shimol\n2. Janub\n3. Sharq\n4. G'arb"
// );

// let kom = +prompt(
// "Harakatlardan birini tanlang:\n0. Harakatni davom ettir\n1. Chapga buril\n2. O'ngga buril"
// );

// switch (yon) {
//     case 1: console.log("Shimolga, "); break;
//     case 2: console.log("Janubga, "); break;
//     case 3: console.log("Sharqqa, "); break;
//     case 4: console.log("G'arbga, "); break;
//     default: console.log("Noto'g'ri yo'nalish tanlandi!"); break;
// }

// switch (kom) {
//     case 0: console.log("harakatni davom ettir"); break;
//     case 1: console.log("chapga buril"); break;
//     case 2: console.log("o'ngga buril"); break;
//     default: console.log("Noto'g'ri harakat tanlandi!"); break;
// }


// While

// 1-
// let a = +prompt("a = ");
// let b = +prompt("b = ");

// while (a > b) {
//     a -= b;
// }
// console.log("Sig'adi = " + b);
// console.log("Bo'sh qolgan qism = " + a);


// 2-
// let a = +prompt("a = ");
// let b = +prompt("b = ");
// let s = 0;

// while (a >= b) {
//     a -= b;
//     s++;
// }

// console.log(s + " marta joylashtirish mumkin");


// 3-
// let N = parseInt(prompt("N = "));
// let K = parseInt(prompt("K = "));

// let s = 0;

// while (N > K) {
//     N -= K;
//     s += 1;
// }

// console.log("Butun = " + s);
// console.log("Qoldiq = " + N);


// 4-
// let n = +prompt("n = ");
// let i = 1;
// let topildi = false;

// while (3 ** i <= n) {
//     if (3 ** i === n) {
//         console.log(`${n} soni 3 ning ${i} - darajasi!`);
//         topildi = true;
//     }
//     i++;
// }

// if (!topildi) { // import !global scope
//     console.log("n soni 3 ning hech qanday darajasi emas!");
// }

// 5-
// let n2 = +prompt("n2 = ");
// let k = 0;

// while (n2 > 1) {
//     n2 /= 2;
//     k++;
// }

// console.log("k =", k);


// 6-
// let n = parseInt(prompt("n = "));
// let s = n;

// while (n > 2) {
//     n -= 2;
//     s *= n;
// }

// console.log("s = " + s);


// 7-
// let n = parseInt(prompt("n = "));
// let i = 0;
// let s = 0;

// while (s <= n) {
//     i++;
//     s = i * i;
// }

// console.log("Kvadrati n sonidan katta bo'lgan son = " + i);

// 8-
// let n = parseInt(prompt("n = "));
// let i = 0;
// let s = 0;

// while (s <= n) {
//     i++;
//     s = i * i;
// }

// console.log("Kvadrati n sonidan katta bo'lmagan eng katta son = " + (i - 1));

// 9-
// let n = parseInt(prompt("n = "));
// let i = 0;
// let s = 1;

// while (s <= n) {
//     i++;
//     s = Math.pow(3, i);
// }

// console.log(`3 ning ${i} - darajasi = ${s}`);

// 10-
// let n = parseInt(prompt("n = "));
// let i = 0;
// let s = 1;

// while (s <= n) {
//     i++;
//     s = Math.pow(3, i);
// }

// console.log(i - 1);

// 11-
// let n11 = +prompt("n = ");
// let k = 0;
// let s = 0;

// while (s < n11) {
//     k++;
//     s += k;
// }

// console.log("k =", k);
// console.log("Yig'indi =", s);


// 12-
// let n = parseInt(prompt("n = "));
// let k = 0;
// let s = 0;

// while (s <= n) {
//     k++;
//     s += k;
// }

// console.log("Eng katta son = " + (k - 1));
// console.log("Yig'indi = " + (s - k));

// 13-
// let a = parseFloat(prompt("a = "));
// let s = 1;
// let i = 1;

// while (s <= a) {
//     i++;
//     s += 1 / i;
// }

// console.log("s = " + s);
// console.log("k = " + i);


// 14-
// let a = +prompt("a = ");
// let k = 0;
// let sum = 0;

// while (sum + 1 / (k + 1) < a) {
//     k++;
//     sum += 1 / k;
// }

// console.log("Eng katta k =", k);
// console.log("Yig'indi =", sum);


// 15-
// let s = parseFloat(prompt("Summa = "));
// let p = parseFloat(prompt("Foiz (0 < foiz < 25) = "));

// let y = s;
// let k = 0;

// while (y <= s * 2) {
//     let x = y * p / 100;
//     y += x;
//     k++;
// }

// console.log("Oy = " + k);
// console.log("Umumiy summa = " + y);

// 16-
// let p = +prompt("p = "); // foiz
// let kun = 1;
// let masofa = 10;
// let jami = 10;

// while (jami <= 200) {
//     masofa = masofa + masofa * p / 100;  
//     jami += masofa;
//     kun++;
// }

// console.log("Natija:", kun, "kunda");
// console.log("Jami yugurilgan masofa:", Math.floor(jami));


// 17-
// let n = parseInt(prompt("n = "));
// let m = parseInt(prompt("m = "));
// let i = 0;

// while (n > m) {
//     n -= m;
//     i++;
// }

// console.log("Butun = " + i);
// console.log("Qoldiq = " + n);

// 18-
// let n = +prompt("n = ");
// let teskari = 0;

// while (n > 0) {
//     x = n % 10;
//     teskari = teskari * 10 + x;
//     n = (n - x) / 10;
// }

// console.log("Teskari =", teskari);


// 19-
// let n = +prompt("n = ");
// let yigindi = 0;
// let sanoq = 0;

// while (n > 0) {
//     let x = n % 10;
//     yigindi += x;
//     sanoq++;
//     n = (n - x) / 10;
// }

// console.log("Raqamlar yig'indisi =", yigindi);
// console.log("Raqamlar soni =", sanoq);


// 20-
// let n = +prompt("n = ");
// let bor = false;

// while (n > 0) {
//     let x = n % 10;
//     if (x == 2) bor = true;
//     n = (n - x) / 10;
// }

// if (bor){
//   console.log("2 raqami mavjud");  

// } else {
//     console.log("2 raqami yo'q");
// }

// 21-
// let n = +prompt("n =");
// let t = n, bor = false;

// while (t > 0) {
//     if ((t % 10) % 2 == 1) bor = true;
//     t = Math.floor(t / 10);
// }

// console.log(bor ? "Toq raqam bor" : "Toq raqam yo‘q");

// 22-
// let n = +prompt("n =");
// let i = 2, tub = true;

// while (i < n) {
//     if (n % i == 0) tub = false;
//     i++;
// }

// console.log(tub ? "Tub son" : "Tub emas");

// 23-
// let a = +prompt("a =");
// let b = +prompt("b =");

// while (a != b) {
//     if (a > b) a -= b;
//     else b -= a;
// }

// console.log("EKUB =", a);

// 24-
// let n = +prompt("n =");
// let a = 1, b = 1, c = 0, bor = false;

// while (c < n) {
//     c = a + b;
//     a = b;
//     b = c;
// }

// console.log(c == n ? "Ha, Fibonacci soni" : "Yo‘q");

// 25-
// let n = +prompt("n =");
// let a = 1, b = 1, c = 1;

// while (c <= n) {
//     c = a + b;
//     a = b;
//     b = c;
// }

// console.log("Birinchi katta Fibonacci =", c);

// 26-
// let n = +prompt("n =");
// let a = 1, b = 1, c = 1;

// while (c < n) {
//     c = a + b;
//     a = b;
//     b = c;
// }

// console.log("Oldingi =", a);
// console.log("Keyingi =", a + b);

// 27-
// let n = +prompt("n =");
// let a = 1, b = 1, k = 2, c = 1;

// while (c < n) {
//     c = a + b;
//     a = b;
//     b = c;
//     k++;
// }

// console.log("Tartib raqami:", k);

// 28-
// let e = Number(prompt("e = "));
// let a1 = 2;
// let k = 1;
// let a = 0;

// while (true) {
//     a = 2 + 1 / a1;
//     k++;

//     if (Math.abs(a - a1) < e) {
//         alert(
//             "k = " + k +
//             "\na1 = " + a1 +
//             "\na = " + a
//         );
//         break;
//     }

//     a1 = a;
// }
// ?? ishonchim komilmas

// 29-
// let e = +prompt("e =");
// let a1 = 1, a2 = 2, k = 3, a = 0;

// while (true) {
//     a = (a1 + 2 * a2) / 3;
//     if (Math.abs(a - a2) <= e) break;

//     a1 = a2;
//     a2 = a;
//     k++;
// }

// console.log("k =", k);
// console.log("ak =", a);
// console.log("ak-1 =", a2);
// ?? ishonchim komilmas

// 30-
// let A = +prompt("A =");
// let B = +prompt("B =");
// let C = +prompt("C =");

// let ac = A, aqq = 0;

// while (ac >= C) {
//     ac -= C;
//     aqq++;
// }

// let bc = B, bqq = 0;

// while (bc >= C) {
//     bc -= C;
//     bqq++;
// }

// console.log("Kvadratlar soni =", aqq * bqq);
