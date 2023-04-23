let health = document.querySelector("#healthNumber");
let boss = document.querySelector("#bossEntity");
let hitButton = document.querySelector("#attackButton");
let respawnButton = document.querySelector("#respawnButton");

hitButton.onclick = function () {
  hit();
};
respawnButton.onclick = function () {
  respawn();
};

function hit() {
  let oldHealth = health.innerHTML;
  if (oldHealth > 0) {
    bossHit();
    let newHealth = oldHealth - 20;
    newHealth <= 0
      ? (health.innerHTML = "Dead!")
      : (health.innerHTML = newHealth);
  } else {
    console.log("No health");
  }
}
function bossHit() {
  boss.style.backgroundColor = "rgba(255, 0, 0)";
  boss.style["border-color"] = "rgba(255, 0, 0)";
  setTimeout(function () {
    boss.style.backgroundColor = "aqua";
    boss.style["border-color"] = "aqua";
  }, 100);
}

function respawn() {
  health.innerHTML < 100 || health.innerHTML === "Dead!"
    ? (health.innerHTML = "100")
    : console.log("The Boss is already here!");
}
