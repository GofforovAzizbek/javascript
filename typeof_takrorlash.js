// 1-
// const value1 = 42;
// const value2 = "Hello";
// const value3 = null;
// const value4 = true;
// const value5 = undefined;
// const value6 = 10n; 
// const value7 = Symbol("test");

// console.log(typeof (value1)); 
// console.log(typeof (value2)); 
// console.log(typeof (value3)); 
// console.log(typeof (value4)); 
// console.log(typeof (value5)); 
// console.log(typeof (value6)); 
// console.log(typeof (value7)); 

// // 2-
// const isLoggedIn = true;
// const hasPremium = false; 

// const result = isLoggedIn && hasPremium;

// console.log(result); 

// // 3-
// const amountStr = "1250.75";

// const numberValue = +amountStr;

// console.log(numberValue);      
// console.log("type: " + typeof (numberValue));

// 4-
// const num = 10;
// const text = "20";

// const result = num + text;

// console.log(result);     
// console.log(typeof result);

// 5-
// const num = 10;
// console.log("type:", typeof String(num));

// 6-
// const str1 = "false"; 
// const str2 = "";      

// const bool1 = Boolean(str1);
// const bool2 = !!str2;

// console.log(bool1); 
// console.log(bool2); 

// 7-
// const a = 0;
// const b = false;

// console.log(Boolean(a == b));

// 8-
// const x = "100";
// const y = 100;

// console.log(Boolean(x === y));

// 9-
// const strNum = "10";
// console.log(strNum + " (type: " + typeof(+strNum) + ")");

// 10-
// const c = undefined;
// const d = null;

// console.log("c == d >", c == d);
// console.log("c === d >", c === d);

// 11-
// const cartTotalStr = "50"; 
// const isPromoEntered = true;

// const cartTotal = Number(cartTotalStr);

// let result;

// if (cartTotal > 100 && isPromoEntered === true) {
//     result = "Katta Chegirma";
// } else if (cartTotal > 50 && isPromoEntered === false) {
//     result = "Kichik Chegirma";
// } else {
//     result = "Chegirma yo'q";
// }

// console.log(result);

// 12-
// const deadlineDays = 0; 

// const result = deadlineDays 
//     ? "Muddatga vaqt bor" 
//     : "Muddat tugagan yoki belgilanmagan";

// console.log(result);

// 13-
// const userInput = prompt("Maydonni toldiring:");

// if (userInput === "") {
//     console.log("Iltimos, maydonni to'ldiring");
// } else {
//     console.log("Maydon to'ldirilgan!");
// }

// 14-
// const input1 = 20;
// const input2 = "10";

// if (isNaN(input2)) {
//     console.log("Xato: input2 raqam emas!");
// } else {
//     console.log(Number(input2) + " bu raqamga aylanadi");
// }

// 15-
// const tempInputStr = prompt("Nimadir kiriting = ");
// console.log(tempInputStr + " type: " + (isNaN(tempInputStr) ? "string" : "number"));

// const temp = "25";
// const tempp = "frezing";

// console.log(Number(temp));

// let juft = 0;
// let toq = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         juft += i;  
//     } else {
//         toq += i;    
//     }
// }

// console.log("Juftlar yig‘indisi:", juft);
// console.log("Toqlar yig‘indisi:", toq);
// console.log("Ayirma:", juft - toq);



// Classwork

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

