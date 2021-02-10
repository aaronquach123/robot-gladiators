var startGame = function() {
    playerInfo.reset();
    debugger;
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  
        pickedEnemyObj.health = randomNumber(40, 60);
  
        console.log(pickedEnemyObj);
  
        fight(pickedEnemyObj);
      }
      else {
        break;
      }
    }
    endGame();
};
  
// function to end the entire game
var endGame = function() {
window.alert("The game has now ended. Let's see how you did!");
  
// if player is still alive, player wins!
if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + '.');
}   else {
    window.alert("You've lost your robot in battle!");
    }
  
    // ask player if they'd like to play again
var playAgainConfirm = window.confirm('Would you like to play again?');
  
if (playAgainConfirm) {
    startGame();
    } else {
        window.alert('Thank you for playing Battlebots! Come back soon!');
    }
};
  
var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight ==="" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.playerMoney =playerInfo.playerMoney - 10;
            
            return true;
        } 
    return false;
    }    
};

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        if (fightOrSkip()) {
            break;
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        enemy.health = Math.max(0, enemy.health - damage);

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
  
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
  
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
  
            // if yes, take them to the store() function
            if (storeConfirm) {
            shop();
            }
        
            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
            }
  
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};
  
// go to shop between battles function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
  
    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'refill':
      case 'REFILL':
        playerInfo.refillHealth();
        break;
      case 'upgrade':
      case 'UPGRADE':
        playerInfo.upgradeAttack();
        break;
      case 'leave':
      case 'LEAVE':
        window.alert('Leaving the store.');
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
        shop();
        break;
    }
};
  
// function to generate a random number
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
    return value;
};
 
var getPlayerName = function() {
    var name = "";
    while (name ==="" || name === "null") {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}

// player information
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    },
    upgradeAttack: function() {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
};
  
// enemy information
var enemyInfo = [
    {
      name: 'Roborto',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Amy Android',
      attack: randomNumber(10, 14)
    },
    {
      name: 'Robo Trumble',
      attack: randomNumber(10, 14)
    }
  ];
 
  startGame();
  