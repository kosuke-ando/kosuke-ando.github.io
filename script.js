'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log(Math.floor(Math.random() * 10 + 1));

const input = document.getElementById("input");
const output = document.getElementById("output");

function getNumber() {
   // let inputNumber = input.value;
   let inputNumber = parseInt(input.value);
   const randomNumber = Math.floor(Math.random() * 10 + 1);
   if (typeof inputNumber === "number") {
      if (inputNumber === randomNumber) {
         output.innerHTML = "すみっこオールスター";                    // すみっこオールスター　表示
         document.getElementById("outputImage").innerHTML = "<img src='https://user-images.githubusercontent.com/105697560/177699259-a394ade7-8652-457a-b149-da8c4ba99ce9.png'>";
      } else if (inputNumber > randomNumber) {
         output.innerHTML = "ねこ";                    // ねこ　表示
         document.getElementById("outputImage").innerHTML = "<img src='https://user-images.githubusercontent.com/105697560/177699267-f9d4ca7e-c9eb-488c-9170-fe853424dbd8.png'>";
      } else if (inputNumber < randomNumber) {
         output.innerHTML = "とかげ";                    // とかげ　表示
         document.getElementById("outputImage").innerHTML = "<img src='https://user-images.githubusercontent.com/105697560/177699275-d20fba5a-fad8-4c74-8515-623978e121da.png'>";
      } else {
         output.innerHTML = "たぴおか";                    // たぴおか　を表示
         document.getElementById("outputImage").innerHTML = "<img src='https://user-images.githubusercontent.com/105697560/177699271-6a6d6b90-2541-4788-9119-1ce41e529a87.png'>";
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
