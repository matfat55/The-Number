let score = 0;
let incrementValue = 1;
let upgradeCost = 10;
let upgradesBought = 0;

let incrementValue2 = 5;
let upgradeCost2 = 50;
let upgradesBought2 = 0;

let itemEffect1 = 10;
let itemCost1 = 100;
let itemsBought1 = 0;

const scoreElement = document.getElementById("score");
const incrementValueElement = document.getElementById("increment-value");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostElement = document.getElementById("upgrade-cost");
const upgradesBoughtElement = document.getElementById("times-bought");

const incrementValueElement2 = document.getElementById("increment-value-2");
const upgradeBtn2 = document.getElementById("upgrade-btn-2");
const upgradeCostElement2 = document.getElementById("upgrade-cost-2");
const upgradesBoughtElement2 = document.getElementById("times-bought-2");

const itemEffectElement1 = document.getElementById("item-effect-1");
const itemBtn1 = document.getElementById("item-btn-1");
const itemCostElement1 = document.getElementById("item-cost-1");
const itemsBoughtElement1 = document.getElementById("items-bought-1");

const resetScoreBtn = document.getElementById("reset-score-btn");
const doubleIncrementBtn = document.getElementById("double-increment-btn");

upgradeBtn.disabled = true;
upgradeBtn2.disabled = true;
itemBtn1.disabled = true;

function updateScore() {
  score += incrementValue;
  scoreElement.textContent = score;
}

function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    incrementValue += 1;
    upgradesBought += 1;
    upgradeCost = Math.round(10 * (1.15 ** upgradesBought));
    scoreElement.textContent = score;
    incrementValueElement.textContent = incrementValue;
    upgradeCostElement.textContent = upgradeCost;
    upgradesBoughtElement.textContent = upgradesBought;

    if (score < upgradeCost) {
      upgradeBtn.disabled = true;
    }
  }
}

function upgrade2() {
  if (score >= upgradeCost2) {
    score -= upgradeCost2;
    incrementValue2 += 5;
    upgradesBought2 += 1;
    upgradeCost2 = Math.round(50 * (1.15 ** upgradesBought2));
    scoreElement.textContent = score;
    incrementValueElement2.textContent = incrementValue2;
    upgradeCostElement2.textContent = upgradeCost2;
    upgradesBoughtElement2.textContent = upgradesBought2;

    if (score < upgradeCost2) {
      upgradeBtn2.disabled = true;
    }
  }
}

function buyItem1() {
  if (score >= itemCost1) {
    score -= itemCost1;
    itemEffect1 += 10;
    itemsBought1 += 1;
    itemCost1 = Math.round(100 * (1.15 ** itemsBought1));
    scoreElement.textContent = score;
    itemEffectElement1.textContent = itemEffect1;
    itemCostElement1.textContent = itemCost1;
    itemsBoughtElement1.textContent = itemsBought1;

    if (score < itemCost1) {
      itemBtn1.disabled = true;
    }
  }
}

function resetScore() {
  score = 0;
  scoreElement.textContent = score;
  checkUpgradeAvailability();
}

function doubleIncrement() {
  incrementValue *= 2;
  incrementValueElement.textContent = incrementValue;
}

function checkUpgradeAvailability() {
  if (score >= upgradeCost) {
    upgradeBtn.disabled = false;
  } else {
    upgradeBtn.disabled = true;
  }

  if (score >= upgradeCost2) {
    upgradeBtn2.disabled = false;
  } else {
    upgradeBtn2.disabled = true;
  }

  if (score >= itemCost1) {
    itemBtn1.disabled = false;
  } else {
    itemBtn1.disabled = true;
  }
}

setInterval(() => {
  updateScore();
  score = Math.floor(score);
  checkUpgradeAvailability();
}, 1000);

upgradeBtn.addEventListener("click", upgrade);
upgradeBtn2.addEventListener("click", upgrade2);
itemBtn1.addEventListener("click", buyItem1);
resetScoreBtn.addEventListener("click", resetScore);
doubleIncrementBtn.addEventListener("click", doubleIncrement);

function showTab(tabName) {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.style.display = 'none');

  document.getElementById(`${tabName}-tab`).style.display = 'block';
  document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

showTab('number'); //show number by default
