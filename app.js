// 장바구니에 담기 기능
// const menuItem = document.querySelectorAll(".btn-item");
// let menuItemArr = [
//   menuItem[0],
//   menuItem[1],
//   menuItem[2],
//   menuItem[3],
//   menuItem[4],
//   menuItem[5],
// ];
// const cart = document.querySelectorAll(".list-item-staged");

// menuItem.addEventListener("click", () => {
//     menuItemArr.forEach(element => {

//     });
// });

// 입금 기능

const cashInput = document.querySelector(".inp-put");
const cashInputBtn = document.querySelector(".btn-put");
const balance = document.querySelector(".txt-balance");

cashInputBtn.addEventListener("click", () => {
  if (cashInput.value <= 0 || cashInput.value == null) {
    alert("유효한 값을 입력해주세요.");
  } else {
    balance.textContent = `${cashInput.value} 원`;
  }
});

// 획득 기능

// 총금액 계산 기능

const totalNum = document.querySelector(".txt-total");
const numCounter = document.querySelectorAll(".num-counter");
const numCounterArr = [
  Number(numCounter[0].textContent),
  Number(numCounter[1].textContent),
  Number(numCounter[2].textContent),
  Number(numCounter[3].textContent),
];
let resultNum = 0;

totalNum.textContent = numCounterArr.reduce((a, b) => a + b) * 1000;

// 소지금 계산 기능

const myMoney = document.querySelector(".txt-mymoney");

myMoney.textContent = 30000 - Number(totalNum.textContent);

// 어케... 해야할까나... 그 요소 생성 해야할 것 가튼데...? 맞나...?
