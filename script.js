'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log(Math.floor(Math.random() * 10 + 1));

// function getNUmber(number) {
//   const randomNumber = Math.floor(Math.random() * 10 + 1);
//   if (typeof number === "number") {
//     if (number === randomNumber) {
//       console.log(randomNumber);
//       return "すみっこオールスター";                    // すみっこオールスター　表示
//     } else if (number > randomNumber) {
//       console.log(randomNumber);
//       return "ねこ";                    // ねこ　表示
//     } else if (number < randomNumber) {
//       console.log(randomNumber);
//       return "とかげ";                    // とかげ　表示
//     } else {
//       console.log(randomNumber);
//       return "たぴおか";                    // たぴおか　を表示
//     }
//   } else if (typeof number === "string") {
//     if (number === "とかげ") {
//       return "とかげ";                    // とかげ　を表示
//     } else if (number === "ねこ") {
//       return "ねこ";                      // ねこ　を表示
//     } else if (number === "しろくま") {
//       return "しろくま";                  // しろくま　を表示
//     } else if (number === "ぺんぎん") {
//       return "ぺんぎん";                  // ぺんぎん　を表示
//     } else if (number === "とんかつ") {
//       return "とんかつ";                  // とんかつ　を表示
//     }else{
//       return "ぶらっくたぴおか";          // ぶらっくたぴおか　を表示
//     }
//   }else{
//     return "ダースベーダー";                    // ダースベーダー　を表示
//   }
// }

// console.log("0",(getNUmber(0)));
// console.log("1",(getNUmber(1)));
// console.log("3",(getNUmber(3)));
// console.log("5",(getNUmber(5)));
// console.log("8",(getNUmber(8)));
// console.log("10",(getNUmber(10)));
// console.log("12345　固定",(getNUmber("12345")));
// console.log("true　固定",(getNUmber(true)));
// console.log("undefined　固定",(getNUmber(undefined)));
// console.log("とかげ　固定",(getNUmber("とかげ")));
// console.log("トカゲ　固定",(getNUmber("トカゲ")));


const input = document.getElementById("input");
const output = document.getElementById("output");

function getNumber() {
   // let inputNumber = input.value;
   let inputNumber = parseInt(input.value);
   const randomNumber = Math.floor(Math.random() * 10 + 1);
   if (typeof inputNumber === "number") {
      if (inputNumber === randomNumber) {
         output.innerHTML = "すみっこオールスター";                    // すみっこオールスター　表示
         document.getElementById("outputImage").innerHTML = "<img src='images/allstar.png'>";
      } else if (inputNumber > randomNumber) {
         output.innerHTML = "ねこ";                    // ねこ　表示
         document.getElementById("outputImage").innerHTML = "<img src='images/neko.png'>";
      } else if (inputNumber < randomNumber) {
         output.innerHTML = "とかげ";                    // とかげ　表示
         document.getElementById("outputImage").innerHTML = "<img src='images/tokage.png'>";
      } else {
         output.innerHTML = "たぴおか";                    // たぴおか　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/tapioka.png'>";
      }
   } else if (typeof inputNumber === "string") {
      if (inputNumber === "とかげ") {
         // document.getElementById("outputImage").src("images/tokage.png");
         output.innerHTML = "とかげ";                    // とかげ　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/tokage.png'>";
         // document.write('<img src="images/tokage.png">');
      } else if (inputNumber === "ねこ") {
         output.innerHTML = "ねこ";                      // ねこ　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/neko.png'>";
      } else if (inputNumber === "しろくま") {
         output.innerHTML = "しろくま";                  // しろくま　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/shirokuma.png'>";
      } else if (inputNumber === "ぺんぎん") {
         output.innerHTML = "ぺんぎん";                  // ぺんぎん　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/pengin.png'>";
      } else if (inputNumber === "とんかつ") {
         output.innerHTML = "とんかつ";                  // とんかつ　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/tonkatsu.jfif'>";
      } else {
         output.innerHTML = "ぶらっくたぴおか";          // ぶらっくたぴおか　を表示
         document.getElementById("outputImage").innerHTML = "<img src='images/blacktapioka.png'>";
      }
   } else {
      output.innerHTML = "ダースベーダー";                    // ダースベーダー　を表示
      document.getElementById("outputImage").innerHTML = "<img src='images/.png'>";
   }
}
