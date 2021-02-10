var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var startGame = function() {
    playerHealth = 100;
    playerMoney = 10;
    playerAttack = 60;
    
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            debugger;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {                             
                    shop();
                }
            }
        } else {
            break;
        }
    }
   endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
   
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in the battle.")
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default: 
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

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

startGame ();