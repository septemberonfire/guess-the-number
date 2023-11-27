const input = document.querySelector(".field_form_input");
const btn = document.querySelector(".field_form_btn");
let check = document.querySelector(".result_check_out");
let help = document.querySelector(".result_help_out");
let count = document.querySelector(".result_count_out");
const changeAmplitudeBtn = document.querySelector(".desc_btn_changeAmplitude");
const currentAmplitude = document.querySelector(".desc_currentAmplitude");
const startGameBtn = document.querySelector(".desc_btn_start");
const startAgainBtn = document.querySelector(".result_btn");
const mainBlock = document.querySelector('.main_block')
let max = 100;
let item = 0;

let randNum;
let userNum;

changeAmplitudeBtn.addEventListener("click", () => {
  changeAmplitudeBtn.classList.toggle("extra");
  showCurrentAmplitude();
});

const showCurrentAmplitude = () => {
  if (changeAmplitudeBtn.classList.contains("extra")) {
    currentAmplitude.textContent = "Текущий диапазон: 1-1000";
    max = 1000;
  } else if (!changeAmplitudeBtn.classList.contains("extra")) {
    currentAmplitude.textContent = "Текущий диапазон: 1-100";
    max = 100;
  }
};

startGameBtn.addEventListener("click", () => {
  randNum = 1 + Math.floor(Math.random() * max);
  console.log(randNum);
  startGameBtn.style.display = "none";
  changeAmplitudeBtn.style.display = "none";
  mainBlock.style.display = 'flex'
  mainBlock.style.flexDirection = 'column'
  mainBlock.style.gap = '16px'
});

startAgainBtn.addEventListener("click", () => {
  item = 0;
  check.textContent = "";
  help.textContent = "";
  count.textContent = "";
  startGameBtn.style.display = "flex";
  changeAmplitudeBtn.style.display = "flex";
  startAgainBtn.style.display = "none";
  mainBlock.style.display = 'none'
});

btn.onclick = function (event) {
  event.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum && userNum <= max) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Многовато будет";
    item++;
    count.textContent = item;
  } else if (userNum < randNum && userNum >= 1) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Маловато будет";
    item++;
    count.textContent = item;
  } else if (userNum > max || userNum < 1) {
    check.textContent = "Пока что не угадали";
    help.textContent = "Число выходит за заданный диапазон";
    item++;
  } else {
    check.textContent = "Поздравляю! Вы угадали число";
    help.textContent = "В самый раз";
    item++;
    count.textContent = item;
    startAgainBtn.style.display = "flex";
  }
};
