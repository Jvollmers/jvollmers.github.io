let cookieImg = document.querySelector('img');
let clickUpgradeBtn = document.getElementById("Upgrade");
let clickUpgradeBtn2 = document.getElementById("Upgrade2")
let clickUpgradeBtn3 = document.getElementById("Upgrade3")
let clickUpgradeBtn4 = document.getElementById("Upgrade4")
let clickUpgradeBtn5 = document.getElementById("Upgrade5")
let score = 0;
let clickValue = 1;
let clickUpgradeCost = 10;
let timerId=null;
let cps1=0
let cpsUpgrade=100
let cps2=0
let cpsupgrade2=1100

cookieImg.addEventListener("click", () => {
  score += clickValue;
  updateScore();
  updateclickValue();
});

clickUpgradeBtn.addEventListener("click", () => {
  if (score >= clickUpgradeCost) {
    clickValue++;
    score -= clickUpgradeCost;
    clickUpgradeCost += 10;
    updateScore();
    updateUpgradeCost();
  updateclickValue();

  }
});
clickUpgradeBtn2.addEventListener("click", () => {
  if(score>= cpsUpgrade){
    cps1++;
    score-=cpsUpgrade
    cpsUpgrade+=10
    updateScore();
    updateUpgradeCost();
  updateclickValue();
  }
})
clickUpgradeBtn3.addEventListener("click", () => {
  if(score>= cpsupgrade2){
    cps2++;
    score-=cpsupgrade2
    cpsUpgrade2+=10
    updateScore();
    updateUpgradeCost();
  updateclickValue();
  }
})


function updateScore() {
  document.getElementById("h").innerHTML="Score: "+score
}

function updateUpgradeCost() {
  clickUpgradeBtn.textContent = `Upgrade (Cost: ${clickUpgradeCost})`;
  
}
function updateclickValue (){
  document.getElementById("h1").innerHTML="ClickValue "+clickValue
}
