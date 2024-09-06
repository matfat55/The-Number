let score = 0;
let incrementValue = 1;
let upgradeCost = 10;
let upgradesBought = 0;

const scoreElement = document.getElementById("score");
const incrementValueElement = document.getElementById("increment-value");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostElement = document.getElementById("upgrade-cost");
const upgradesBoughtElement = document.getElementById("times-bought")

function updateScore() {
  score += incrementValue;
  scoreElement.textContent = score;
}

function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    incrementValue += 1
    upgradesBought += 1;
    upgradeCost = 10*(1.15**upgradesBought); // using cookie clicker formula without F
    scoreElement.textContent = score;
    incrementValueElement.textContent = incrementValue;
    upgradeCostElement.textContent = upgradeCost;
    upgradesBoughtElement.textContent = upgradesBought;

    if (score < upgradeCost) {
      upgradeBtn.disabled = true;
    }
  }
}

function checkUpgradeAvailability() {
  if (score >= upgradeCost) {
    upgradeBtn.disabled = false;
  }
}

setInterval(() => {
  updateScore();
  checkUpgradeAvailability();
}, 1000);

upgradeBtn.addEventListener("click", upgrade);
