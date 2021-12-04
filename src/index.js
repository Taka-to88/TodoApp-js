/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // varは上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言が可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能

// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可

// // val3 = "const変数上書き";

// const val3 = "const再宣言";

//constで定義したobjectはプロパティの変更が可能

// const val4 = {
//   name: "たかお",
//   age: 28
// };

// val4.name = "Takao";
// val4.address = "kyoto";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// // val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "たかお";
//  const age = "28";

//  //私の名前はたかおです。２８歳です。

//  //従来の方法
//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
//  console.log(message1);

//  //テンプレート文字列を用いる方法

//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

/**
 * アロー関数
 */

//従来
// function func1(str) {
//   return str;
// }

// 上記と同じ結果
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数で表すと
// // const func2 = (str) => {
// //   return str ;
// // }

// //return省略できる

// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2 ;
// }
// console.log(func3(10,20));

/**
 * 分割代入
 */

// const myPlofile = {
//   name: "たかお",
//   age: 28
// };

// const message1 = `名前は${myPlofile.name}です。年齢は${myPlofile.age}です。`;
// console.log(message1);

// const { name, age } = myPlofile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myPlofile = ["たかお", 28];

// const message3 = `名前は${myPlofile[0]}です。年齢は${myPlofile[1]}です。`;
// console.log(message3);

// const [name, age] = myPlofile;

// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = 'ゲスト') => console.log(`こんにちわ${name}さん!`);
// sayHello(

// );

/**
 * スプレッド構文
 */

//配列の展開

// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1 , num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const[num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
