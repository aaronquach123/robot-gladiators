var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    if (promptFight === "fight" || promptFight === "FIGHT") {
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
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //check for player death
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
    }  //check for skip if not fight
        else if (promptFight === "skip" || promptFight === "SKIP") {
            //skip confirmation
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if true leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney = playerMoney - 2;
            } 
            //if no ask again
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
    }
}



   

fight();
