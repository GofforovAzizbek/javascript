// class work //
// 1-
// let age;

// while (true) {
//     age = prompt("Yoshingizni kiriting:");
//     age = Number(age);

//     if (age >= 0 && age <= 120) break;
//     alert("Yoshni noto'g'ri kiritdingiz, qayta kiriting!");
// }

// if (age < 16) {
//     alert("Sizga mumkin emas!");
// } else {
//     alert("Xush kelibsiz!");
// }

// 2-
// let day = Number(prompt("Dekabr kunini kiriting:"));

// let w = (day - 1) % 7; 
// let result;

// switch (w) {
//     case 0:
//         result = "Dushanba";
//         break;
//     case 1:
//         result = "Seshanba";
//         break;
//     case 2:
//         result = "Chorshanba";
//         break;
//     case 3:
//         result = "Payshanba";
//         break;
//     case 4:
//         result = "Juma";
//         break;
//     case 5:
//         result = "Shanba";
//         break;
//     case 6:
//         result = "Yakshanba";
//         break;
//     default:
//         result = "Noto'g'ri son kiritildi!";
// }

// alert(result);

// 3-
// let year = Number(prompt("Yil kiriting:"));

// for (let i = 4; i <= year; i += 4) {
//     console.log(i);
// }


///////////// Uy ishi /////////

// 1-
// let n = Number(prompt("1–7 orasida son kiriting:"));
// let result;

// switch (n) {
//     case 1: result = "Dushanba"; break;
//     case 2: result = "Seshanba"; break;
//     case 3: result = "Chorshanba"; break;
//     case 4: result = "Payshanba"; break;
//     case 5: result = "Juma"; break;
//     case 6: result = "Shanba"; break;
//     case 7: result = "Yakshanba"; break;
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
//         days = 31; break;
//     case 4: case 6: case 9: case 11:
//         days = 30; break;
//     case 2:
//         days = 28; break; 
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

// alert(kg + " Kg");

// 8-
// let D = Number(prompt("Kun (1–31):"));
// let M = Number(prompt("Oy (1–12):"));

// let oyNomi;

// switch(M){
//     case 1: oyNomi="Yanvar"; break;
//     case 2: oyNomi="Fevral"; break;
//     case 3: oyNomi="Mart"; break;
//     case 4: oyNomi="Aprel"; break;
//     case 5: oyNomi="May"; break;
//     case 6: oyNomi="Iyun"; break;
//     case 7: oyNomi="Iyul"; break;
//     case 8: oyNomi="Avgust"; break;
//     case 9: oyNomi="Sentabr"; break;
//     case 10: oyNomi="Oktabr"; break;
//     case 11: oyNomi="Noyabr"; break;
//     case 12: oyNomi="Dekabr"; break;
//     default: oyNomi="Xato!";
// }

// alert(D + " " + oyNomi);

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

// console.log("Bo'sh qolgan qism = " + a);


// 2-
// let a = +prompt("a = ");
// let b = +prompt("b = ");
// let s = 0;

// while (a > b) {
//     a -= b;
//     s += 1;
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

// if (!topildi) {
//     console.log("n soni 3 ning hech qanday darajasi emas!");
// }

// 5-
// let n2 = 10;
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
// let n = parseInt(prompt("n = "));
// let k = 0;
// let s = 0;

// while (s < n) {
//     k++;
//     s += k;
// }

// console.log("k = " + k);
// console.log("Yig'indi = " + s);

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
// let a = parseFloat(prompt("a = "));
// let s = 1;
// let k = 1;

// while (s <= a) {
//     k++;
//     s += 1 / k;
// }

// console.log("Yig'indi = " + (s - 1 / k));
// console.log("k = " + (k - 1));

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
// let p = parseFloat(prompt("Foiz (0 < foiz < 50) = "));

// let y = 10; 
// let k = 0;  

// while (y <= 200) {
//     let x = y * p / 100;
//     y += x;
//     k++;
// }

// console.log("Kun = " + k);
// console.log("Umumiy masofa = " + y);

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
// let n = parseInt(prompt("n = "));
// let k;

// while (n > 0) {
//     let x = n % 10;
//     n = Math.floor(n / 10);
//     k = x;
//     console.log(k);
// }

// 19-
// let n = parseInt(prompt("n = "));
// let s = 0;

// while (n > 0) {
//     let x = n % 10;
//     n = Math.floor(n / 10);
//     s += x;
// }

// console.log(s);

// 20-
let n = parseInt(prompt("n = "));
let s = true;    

while (n > 0) {
    let x = n % 10;
    n = Math.floor(n / 10);

    if (x === 2) {
        console.log("2 raqami mavjud");
        s = false;
        break;
    }
}

if (s) {
    console.log("2 raqami mavjud emas");
}
