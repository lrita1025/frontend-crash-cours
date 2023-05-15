// -------------Practices 1
// 聲明一個名為 fruits 的數組，默認包含一些水果。
let fruits =  ['apple', 'blueberry', 'lemon', 'kiwi', 'banana']
//  打印上面聲明的 fruits 數組中的每個元素。
console.log(fruits);
//  將第三個水果修改為 Durian 並打印 fruits 數組。
fruits.splice(2, 1,'Durian');
console.log(fruits);

//  使用 push 方法將兩個水果添加到數組中。
fruits.push('orange','mango');
console.log(fruits);
//  從數組中刪除第一個水果。
fruits.splice(0, 1);
console.log(fruits);
//  使用 for, while 循環打印 fruits 數組中的元素。
for(i=0; i<=fruits.length; i++){
  console.log(fruits[i]);
}

let j = 0;
while (j<=fruits.length){
  console.log(fruits[j]);
  j++
}
//  聲明一個名為 numbers 的數組，並使用 map 將每個元素設置為其平方。

const numbers = [0,1,2,3,4,5];
const mappedArray = numbers.map((element,index,originalArray) =>{
  return element*2;
});

console.log(mappedArray);
//  聲明一個名為 numbers 的數組，並使用 filter 過濾素數。
const filterArray = numbers.filter((element,index,originalArray) =>{
  return element%2 != 0;
});
console.log(filterArray);
//  聲明一個名為 numbers 的數組，並使用 reduce 計算元素的總和。
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); 


// --------Practices 2
// 創建一個名為 person 的對象，其中包含姓名、年齡和性別等屬性。 為這些屬性賦值，然後顯示此人的姓名和年齡。
const person ={
  name: '阿毛',
  age: '34',
  gender: 'female'
}

console.log(person.name);
console.log(person.age);
// 向在之前的任務中創建的 person 對象添加一個名為 greet 的方法。 該方法應顯示問候消息“Hello”。 調用 greet 方法以查看問候消息。
person.greet = function() {
  console.log("Hello");
};
person.greet()
// 向包含多個名字的人添加一個名為 friends 的屬性並打印它。
person.friends = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 42 }
];

// print friends property
console.log(person.friends);

// --------Practices 3
// 使用一些標籤創建一個簡單的 html。
// 使用 getElementById 獲取元素並打印它。
const element = document.getElementById('myElement');
console.log(element);

// 使用 getElementsByClassName 獲取元素並打印所有元素。
const elements = document.getElementsByClassName('list');
for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]);
      }

// 使用 querySelector 通過 id 獲取元素並打印它。
const elementsid = document.querySelector('#myElement');
console.log(elementsid);
// 使用 querySelector 按類獲取元素並打印它。
const elementsclass = document.querySelector('.list');
console.log(elementsclass);
// 使用 querySelectorAll 按類獲取元素並打印所有元素。
const elementsall = document.querySelectorAll('.item');
console.log(elementsall);
// elementsall.forEach((element) => console.log(elementsall));

// --------Practices 4
// 創建一個簡單的 html 樣例
// 附加一個帶有“我創建的第一個 DOM”的 p 標籤。 進容器。
let paragraph = document.createElement("p");
let text = document.createTextNode("My first DOM created.");
paragraph.appendChild(text);
document.body.appendChild(paragraph);

let test = document.querySelector('.container');
test.innerHTML='<P>My first DOM created.</p>';

// 附加一個 ul 標籤。
let list = document.createElement("ul");
document.body.appendChild(list);

// 使用 for 循環將 3 個 li 標籤附加到 ul 標籤中，其中包含 3 個項目：紅色、藍色、黃色。
const newItems = ["green", "purple", "orange"];

for (let i = 0; i < newItems.length; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = newItems[i];
  list.appendChild(newItem);
}