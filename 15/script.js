
// function createScore() {
//     let balls = 0;

//     return{
//         addPoint() {
//             balls++;
//             return balls;
//         },
//         getScore() {
//             return balls;
//         },
//         reset() {
//             balls = 0;
//             return balls;
//         },
//     }
// }
// const ballNuriddin = createScore();
// console.log(ballNuriddin.addPoint());
// console.log(ballNuriddin.addPoint());
// console.log(ballNuriddin.addPoint());
// console.log("------");

// console.log(ballNuriddin.getScore());
// console.log(ballNuriddin.reset());






// function sumTo(n) {
//     if (typeof n !== 'number') return 'это не цыфры';
//     let num = String(n);

//     if (num.length === 1) return Number(num);

//     return Number(num[0]) + sumTo(Number(num.slice(1)));
// }
// console.log(sumTo(123));

// function repeatText(text, n) {
//     let result = '';
//     for(let i = 0; i < n; i++) {
//         result += text;
//     }
//     return result;
// }
// console.log(repeatText('ха' , 5));




// function makeCounter () {
//     let num = 0;

//     return () => {
//         num++;
//         return num;
//     }
// }

// const dq = (selector) => document.querySelector(selector);
// const title = dq(".title");
// const btn = dq(".btn");
// const titleNum = makeCounter();

// btn.addEventListener("click", () => {
//     title.textContent = titleNum();
// });




// function isPalindrome(str) {
//     if (typeof str !== "string") return "Введи строку";
//     let sts = str;
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return sts.toLowerCase() === reversed.toLowerCase() ? true : false;
// }

// console.log(isPalindrome(0));
// console.log(isPalindrome('шалаш'));
// console.log(isPalindrome('шалаш2'));
