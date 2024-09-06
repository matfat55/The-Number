let score = 0;
let incrementValue = 1;
let upgradeCost = 10;

const scoreElement = document.getElementById("score");
const incrementValueElement = document.getElementById("increment-value");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostElement = document.getElementById("upgrade-cost");

function updateScore() {
  score += incrementValue;
  scoreElement.textContent = score;
}

function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    incrementValue += 1;
    upgradeCost *= 2; // Increase cost exponentially

    scoreElement.textContent = score;
    incrementValueElement.textContent = incrementValue;
    upgradeCostElement.textContent = upgradeCost;

    // Disable the button if the score is not enough for the next upgrade
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
