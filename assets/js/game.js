var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//Win - Player robot has defeated all enemy-robots
// * Fight all enemy robots
// * Defeat each enemy robot
//Lose - Player robot's health is zero or less


var fight = function(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    if (promptFight === "skip" || promptFight === "SKIP") {
        //skip confirmation
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if true leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney = playerMoney - 10;
            console/log("playerMoney", playerMoney);
            break;
        } 
    }
        //Subtract enemy health
        enemyHealth = enemyHealth - playerAttack;
        //Log  enemy health
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health"
        );
        //Subtract player health
        playerHealth = playerHealth - enemyAttack;
        //log player health
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health"
        );
        
        //check for enemy death  
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //check for player death
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        debugger;
        fight(enemyNames[i]);
    } else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
}