let score = 0;
let incrementValue = 1;
let upgradeCost = 10;
let upgradesBought = 0;

const scoreElement = document.getElementById("score");
const incrementValueElement = document.getElementById("increment-value");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostElement = document.getElementById("upgrade-cost");
const upgradesBoughtElement = document.getElementById("times-bought")

upgradeBtn.disabled = true

function updateScore() {
  score += incrementValue;
  scoreElement.textContent = score;
}

function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    incrementValue += 1
    upgradesBought += 1;
    upgradeCost = Math.round(10*(1.15**upgradesBought)); // using cookie clicker formula without F
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
  } else {
    upgradeBtn.disabled = true;
  } 
}

setInterval(() => {
  updateScore();
  score = Math.floor(score)
  checkUpgradeAvailability();
}, 1000);

upgradeBtn.addEventListener("click", upgrade);

function showTab(tabName) {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.style.display = 'none');

  document.getElementById(`${tabName}-tab`).style.display = 'block';
  document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

showTab('number'); //show number by default