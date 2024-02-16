var health = 100;
var healthbar = 100;
var food = 100;
var foodbar = 100;
var energy = 100;
var energybar = 100;
var money = 200;
var userAns = false;
var level = 1;
var xp = 0;
var xpN = 5;
var edrink = 10;
var tree = 0;
var salary = 0;
var taxes = 0;
var timespaid = 0;
var subs = 0;
var views = 0;
var totalviews = 0;
var eatrandom = 1000;
var drinkrandom = 1000;
var sleeprandom = 1000;
var workrandom = 1000;
var betsize = 0;
var time = 7;
var day = 1;
var rand = 0;
var moneyinbank = 0;
var depositvalue = 0;
var withdrawvalue = 0;
var prisonyears = 0;
var prisontimes = 0;
var stealskill = 5;
var buyfoodcount = 0;
var boost = 1;
var likeness = 0;
var girlfriend = false;
var foodinfridge = 20;

money = parseInt(money);
betsize = parseInt(betsize);


/** ---------------------------------------------------------------------------------------------
 *                                      DISPLAY FUNCTION
 * ---------------------------------------------------------------------------------------------*/
function display() {
  // -- --------------------------------------- FOOD, HEALTH, ENERGY ---------------------------------------

  // -- Heath Drop Function
  if (energy <= 0) {health = health - 1 / 75;}
  if (food <= 0) {health = health - 1 / 75;}
  
  //-- Set min values to 0
  if(health < 0) {health = 0};
  if (food < 0) {food = 0;}
  if (energy < 0) {energy = 0;}

  //-- Set max values to 100
  if (energy > 100) {energy = 100;}
  if (health > 100) {health = 100;}
  if (food > 100) {food = 100;}

  // -- --------------------------------------- TIME, DAY ---------------------------------------
  
  // If time exceeds 24 then count a day
  if (time >= 24) {
    time = time - 24;
    day++;
  }

  // -- --------------------------------------- Character Info ---------------------------------------

  // - Display Money
  if (money >= 1000000000000 && money < 1000000000000000) {
    document.getElementById("moneyshow").innerHTML = money.toFixed(8) / 1000000000000 + "T$";
  } else if (money >= 1000000000 && money < 1000000000000) {
    document.getElementById("moneyshow").innerHTML = money.toFixed(4) / 1000000000 + "B$";
  } else if (money >= 1000000 && money < 1000000000) {
    document.getElementById("moneyshow").innerHTML = money.toFixed(2) / 1000000 + "M$";
  } else if (money >= 1000) {
    document.getElementById("moneyshow").innerHTML = money.toFixed(2) / 1000 + "K$";
  } else {
    document.getElementById("moneyshow").innerHTML = money.toFixed(2) + "$";
  }

  healthbar = document.getElementById("healthbar");
  healthbar.value = health;
  document.getElementById("healthBarCount").innerHTML = health.toFixed(0);
  foodbar = document.getElementById("foodbar");
  foodbar.value = food;
  document.getElementById("foodBarCount").innerHTML = food.toFixed(0);
  energybar = document.getElementById("energybar");
  energybar.value = energy;
  document.getElementById("energyBarCount").innerHTML = energy.toFixed(0);

  document.getElementById("dayshow").innerHTML = day;
  document.getElementById("timeshow").innerHTML = time.toFixed(0);

  // -- --------------------------------------- Fridge Items ---------------------------------------
  foodshow = document.getElementsByClassName("foodshow");
  for (var i = 0; i < foodshow.length; i++) {
    foodshow[i].innerHTML = "Food: " + foodinfridge.toFixed(1);
  }
  edrinkshow =  document.getElementsByClassName("edrinkshow");
  for (var i = 0; i < edrinkshow.length; i++) {
    edrinkshow[i].innerHTML ="Drinks: " + edrink.toFixed(0);
  }

  // -- --------------------------------------- Work ---------------------------------------

  // -- Work Button Visiblity
  work_btn = document.getElementById("workbutton");
  if (time >= 7 && time <= 20) {
    work_btn.style.visibility = "visible";
  } else {
    work_btn.style.visibility = "hidden";
  }

  document.getElementById("level").innerHTML = "Level: " + level.toFixed(0);
  document.getElementById("xp").innerHTML = "Experience: " + xp.toFixed(0) + " / " + xpN.toFixed(0);
  document.getElementById("salary").innerHTML = "Your salary is: " + level.toFixed(0) * 15 + "$";
  salary = level * 15;

  if (xp >= xpN) {
    xp = xp - xpN;
    xpN = xpN + 5;
    level++;
    alert("Leveled up! +" + level * 5 + "$!");
    money = money + level * 5;
  }

  // -- --------------------------------------- Crime at Work ---------------------------------------
  crime_btn = document.getElementById("crimebutton");
  if (day >= 8) {
    crime_btn.style.visibility = "visible";
  } else {
    crime_btn.style.visibility = "hidden";
  }
  
  if (stealskill >= 21) {
    stealskill = 20;
  }

  stealChance = document.getElementById("stealchance");
  if (time < 8 && time >= 0) {
    stealChance.innerHTML = "Steal chance: " + stealskill * 2 + "%";
  } else {
    stealChance.innerHTML = "Steal chance: " + stealskill + "%";
  }

  // -- --------------------------------------- Youtube ---------------------------------------
  channelname = document.getElementById("channelnameinput").value;
  document.getElementById("channelname").innerHTML = channelname;
  document.getElementById("viewshow").innerHTML = "Views: " + views.toFixed(0);
  document.getElementById("boostshow").innerHTML = "Sub boost: " + boost.toFixed(3) + "%";

  if (subs >= 1000000000000 && subs < 1000000000000000) {
    document.getElementById("subshow").innerHTML = "Subs: " + subs.toFixed(4) / 1000000000000 + "T";
  } else if (subs >= 1000000000 && subs < 1000000000000) {
    document.getElementById("subshow").innerHTML = "Subs: " + subs.toFixed(4) / 1000000000 + "B";
  } else if (subs >= 1000000 && subs < 1000000000) {
    document.getElementById("subshow").innerHTML = "Subs: " + subs.toFixed(2) / 1000000 + "M";
  } else if (subs >= 1000) {
    document.getElementById("subshow").innerHTML = "Subs: " + subs.toFixed(2) / 1000 + "K";
  } else {
    document.getElementById("subshow").innerHTML = "Subs: " + subs.toFixed(0);
  }

  if (totalviews >= 1000000000000000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000000000000000000 + " QQ";
  } else if (totalviews >= 1000000000000000 && totalviews < 1000000000000000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000000000000000 + " Q";
  } else if (totalviews >= 1000000000000 && totalviews < 1000000000000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000000000000 + " T";
  } else if (totalviews >= 1000000000 && totalviews < 1000000000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000000000 + " B";
  } else if (totalviews >= 1000000 && totalviews < 1000000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000000 + " M";
  } else if (totalviews >= 1000 && totalviews < 1000000) {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0) / 1000 + " K";
  } else {
    document.getElementById("totalviews").innerHTML = "Total views: " + totalviews.toFixed(0);
  }

  if (channelname === "killereks is a cunt") {
    health = health - 1 / 10;
    food = food - 1 / 10;
    energy = energy - 1 / 10;
  }

  if (channelname === "killereks is awsum") {
    subs = subs + 1 / 1000;
    money = money + 1 / 100;
  }

  // -- --------------------------------------- Garden ---------------------------------------
  
  document.getElementById("treeshow").innerHTML = "Trees count: " + tree;
  
  foodinfridge = foodinfridge + tree / 5000;

  // -- --------------------------------------- Gamble ---------------------------------------

  // -- Gamble Menu Visiblity
  gamble = document.getElementById("gamble_avail");
  if (time >= 19 && time <= 23) {
    gamble.style.visibility = "visible";
  } else {
    gamble.style.visibility = "hidden";
  }
  
  document.getElementById("gamble_number").innerHTML = "Number: " + rand.toFixed(0);

  betsize_value = document.getElementById("gambleinput").value;
  if (betsize_value > money) {
    betsize_value = money;
  }
  if (!betsize || betsize == "") {
    betsize_value = 0;
  }
  // -- --------------------------------------- Bank ---------------------------------------

  document.getElementById("bankinfo").innerHTML = "Money in bank: " + moneyinbank.toFixed(2) + "$";

  depositvalue = document.getElementById("deposit").value;
  if (depositvalue > money) {
    depositvalue = money;
  }
  if (!depositvalue || depositvalue == "") {
    depositvalue = 0;
  }
  if (depositvalue < 0) {
    depositvalue = 0;
  }

  withdrawvalue = document.getElementById("withdraw").value;
  if (withdrawvalue > moneyinbank) {
    withdrawvalue = moneyinbank;
  }
  if (moneyinbank < 1) {
    withdrawvalue = moneyinbank;
  }
  if (withdrawvalue < 0) {
    withdrawvalue = 0;
  }

  // -- --------------------------------------- Shop ---------------------------------------
  
  // -- Shop Menu Visibility
  shop = document.getElementById("shop_avail");
  if (time >= 7 && time <= 18) {
    shop.style.visibility = "visible";
  } else {
    shop.style.visibility = "hidden";
  }

  buyfoodcount = document.getElementById("howmuchfood").value;
  if (buyfoodcount >= 1000) {
    buyfoodcount = 999;
  }
  if (money <= buyfoodcount * 10) {
    buyfoodcount = Math.floor(money / 10);
  }
  if (buyfoodcount < 0) {
    buyfoodcount = 0;
  }


  // -- --------------------------------------- Date ---------------------------------------

  // -- Likeness
  document.getElementById("showlikeness").innerHTML = "Her likeness: <br>" + likeness + " / 1000";
  
  // -- Date Level
  if (likeness < 100) {
    document.getElementById("datelevel").innerHTML = "Level: Stranger";
  }
  if (likeness >= 100) {
    document.getElementById("datelevel").innerHTML = "Level: Friend";
  }
  if (likeness >= 500) {
    document.getElementById("datelevel").innerHTML = "Level: Best friend";
  }
  if (likeness >= 750) {
    document.getElementById("datelevel").innerHTML = "level: Girlfriend";
  }
  if (likeness >= 1000) {
    document.getElementById("datelevel").innerHTML = "level: Married";
  }
  
  if (likeness >= 1001) {
    likeness = 1000;
  }
  if (likeness === 1000) {
    girlfriend = true;
  }
  if (girlfriend === true) {
    subs = subs + 1 / 500;
    money = money + 1 / 1000;
    foodinfridge = foodinfridge + 1 / 1000;
  }
  
  // -- --------------------------------------- Tax ---------------------------------------
  if (day % 7 === 0 && timespaid != day / 7) {
    tax();
  }

  setTimeout("display();", 1);
}


/** ---------------------------------------------------------------------------------------------
 *                                      OTHER FUNCTIONS
 * ---------------------------------------------------------------------------------------------*/

  // -- --------------------------------------- Action Functions ---------------------------------------
function eat() {
  if (foodinfridge >= 1 && food != 100) {
    food = food + 10;
    foodinfridge--;
    eatrandom = Math.floor(Math.random() * 100 + 1);
    if (eatrandom === 1) {
      alert("You have enjoyed your meal! +10 extra food!");
      food = food + 10;
    }
    if (eatrandom === 2) {
      alert("You hated your food, and vomited. -10 health!");
      health = health - 10;
    }
    if (eatrandom === 3) {
      alert(
        "You invited your family over, and cooked dinner for them. Unfortunately you all received food poisoning. - 10 health"
      );
      health = health - 10;
    }
    if (eatrandom === 4) {
      alert(
        "You invited your family over, and cooked dinner for them. They loved it! You felt proud of yourself + 10 energy!"
      );
      energy = energy + 10;
    }
    if (eatrandom === 5) {
      alert(
        "You wanted to make cooking business, so you sold sandwiches, kids felt awesome, you felt awesome, everybody felt awesome! + 10 energy + 10 food"
      );
      food = food + 10;
      energy = energy + 10;
    }
  }
}

function gotowork() {
  if (energy >= 40 && food >= 40) {
    energy = energy - 40;
    food = food - 40;
    money = money + level * 15;
    xp = xp + Math.floor(Math.random() * level * 3 + 1);
    time = time + Math.floor(Math.random() * level * 3 + level);
    workrandom = Math.floor(Math.random() * 50 + 1);

    if (workrandom === 1) {
      alert(
        "You have done your work faster than normal, your boss gives you extra money. + " +
          level * 10 +
          "$"
      );
      money = money + level * 10;
    }
    if (workrandom === 2) {
      alert(
        "Your boss gives you less work than usual, you lose less energy than normal."
      );
      energy = energy + 20;
    }
    if (workrandom === 3) {
      alert(
        "Your boss sees how you are trying hard for promotion and gives you 10 xp!"
      );
      xp = xp + 10;
    }
    if (workrandom === 4) {
      alert(
        "Your friends in work have fun by doing pranks on boss, your friends blame it on you, you have now 0 xp"
      );
      xp = 0;
    }
    if (workrandom === 5) {
      alert("You have destroyed coffee machine at work, You have to pay 25$");
      money = money - 25;
    }
  }
}

function sleep() {
  if (food >= 25) {
    energy = 100;
    food = food - 25;
    time = time + 8;
    sleeprandom = Math.floor(Math.random() * 25 + 1);

    if (sleeprandom === 1) {
      alert("You had awesome dream! +10 food!");
      food = food + 10;
    }
    if (sleeprandom === 2) {
      alert(
        "You were dreaming about killer chasing you, you tried to fight with air and hit your arm! - 10 health"
      );
      health = health - 10;
    }
    if (sleeprandom === 3) {
      alert(
        "You were dreaming about a lion chasing you, you tried to jump on top of your wardrobe and fall. - 10 health"
      );
      health = health - 10;
    }
    if (sleeprandom === 4) {
      alert(
        "You dreamt of your boss giving you ......... promotion! + 25 food"
      );
      food = food + 25;
    }
    if (sleeprandom === 5) {
      alert(
        "You dreamt of having a girlfriend, you woke up happy, but you knew it is never gonna happen. + 10 food + 10 energy!"
      );
      food = food + 10;
      energy = energy + 10;
    }
  }
}

function buyfood() {
  if (money >= buyfoodcount * 10) {
    foodinfridge = parseInt(foodinfridge) + parseInt(buyfoodcount);
    money = money - parseInt(buyfoodcount) * 10;
  }
}

function buyedrink() {
  if (money >= 15) {
    edrink++;
    money = money - 15;
  }
}

function drink() {
  if (edrink >= 1 && energy != 100) {
    edrink--;
    energy = energy + 15;
  }
}

function recordvideo() {
  if (energy >= 20 && food >= 20) {
    subs = subs + subs * Math.floor(Math.random() * 10 + 1) / 1000 + 1 * boost;
    views = subs * Math.floor(Math.random() * 20 + 1);
    totalviews = totalviews + views;
    energy = energy - 20;
    food = food - 20;
    money = money + views / 1000;
    time = time + 2;
    boost = boost + Math.floor(Math.random() * 100 + 1) / 1000;
  }
}

function tax() {
  taxes = taxes + Math.floor(Math.random() * 20 + 1);
  if (money <= 0) {
    alert("You could not pay in time, you watch your house being destroyed!");
    health = 0;
  } else {
    confirm("Taxman has arrived! You need to pay " + taxes + "$");
    money = money - taxes;
    timespaid++;
    return;
  }
}

function healten() {
  if (money >= 50 && health != 100) {
    health = health + 10;
    money = money - 50;
    time = time + 6;
  }
}

function healfifty() {
  if (money >= 200 && health != 100) {
    health = health + 50;
    money = money - 200;
    time = time + 6;
  }
}

function buytree() {
  if (money >= 250 && tree < 11) {
    tree++;
    money = money - 250;
  }
}

function gambleone() {
  betsize = document.getElementById("gambleinput").value;
  if (money >= betsize && betsize != 0) {
    time++;
    rand = Math.floor(Math.random() * 3 + 1);
    if (rand === 1) {
      money = parseInt(money) + parseInt(betsize);
      alert("Great! You Won! +"+ parseInt(betsize) +"$");
    }
    if (rand === 2 || rand === 3) {
      money = money - betsize;
      alert("Sorry You Lost! -"+ parseInt(betsize) +"$")
    }
  }
}

function gambletwo() {
  betsize = document.getElementById("gambleinput").value;
  if(money >= betsize && betsize != 0){
    time++;
    rand = Math.floor(Math.random() * 15 + 1);
    if (document.getElementById("green").checked && rand === 1) {
      money = parseInt(money) + parseInt(betsize) * 12;
      alert("WON!");
    }
    if (document.getElementById("red").checked && rand <= 8 && rand >= 2) {
      money = parseInt(money) + parseInt(betsize) * 2;
      alert("WON!");
    }
    if (document.getElementById("black").checked && rand <= 15 && rand >= 9) {
      money = parseInt(money) + parseInt(betsize * 2);
      alert("WON!");
    } else {
      money = parseInt(money) - parseInt(betsize);
      alert("Lost!");
    }
  }
}

function deposit() {
  if (depositvalue <= money) {
    money = money - parseInt(depositvalue);
    moneyinbank = parseInt(moneyinbank) + parseInt(depositvalue);
  }
}

function withdraw() {
  if (withdrawvalue <= moneyinbank) {
    moneyinbank = moneyinbank - withdrawvalue;
    money = parseInt(money) + parseInt(withdrawvalue);
  }
}

function bank_money() {
  moneyinbank = moneyinbank * 1.025;
  setTimeout("bank_money();", 7500);
}

function crime() {
  if (time < 8 && time > 23) {
    rand = Math.floor(Math.random() * 50 + 1);
  } else {
    rand = Math.floor(Math.random() * 100 + 1);
  }

  if (food >= 40 && energy >= 40) {
    prisonyears = Math.floor(Math.random() * 10 + 1);
    prisonyears = prisonyears * prisontimes + 1;
    food = food - 40;
    energy = energy - 40;

    if (rand <= stealskill) {
      alert(
        "You have succeeded in robbing the bank! +" +
          salary * 10 +
          "$ You also gained thieving skill"
      );
      stealskill++;
      money = money + salary * 10;
      time = time + 2;
    } else {
      userAns = confirm(
        "Police caught you trying to rob the bank! You get " + prisonyears +
        " days in prison or you can pay" + salary * 2 +
        " money to not go to prison! Press OK to pay and cancel to go to prison!"
      );
      if (userAns === true && money >= salary * 2) {
        money = money - salary * 2;
      } else {
        time = time + prisonyears * 24;
        prisontimes++;
      }
    }
  }
}

function idle() {
  if (food >= 10 && energy >= 10) {
    food = food - 10;
    energy = energy - 10;
    time = time + 1;
  }
}

function upgradeboost() {
  if (money >= 50) {
    money = money - 50;
    boost = boost + Math.floor(Math.random() * 30 + 1) / 1000;
    time = time + 1;
  }
}

function upgradeboost2() {
  if (money >= 100) {
    money = money - 100;
    boost = boost + Math.floor(Math.random() * 70 + 30) / 1000;
    time = time + 3;
  }
}

function upgradeboost3() {
  if (money >= 250) {
    money = money - 100;
    boost = boost + Math.floor(Math.random() * 160 + 70) / 1000;
    time = time + 9;
  }
}

function upgradeboost4() {
  if (money >= 500) {
    money = money - 100;
    boost = boost + Math.floor(Math.random() * 400 + 160) / 1000;
    time = time + 168;
  }
}

function achievements() {
  if (subs >= 1) {
    document.getElementById("ten").innerHTML = "";
    money = money + 1 / 2500;
  }
  if (subs >= 500000) {
    document.getElementById("nine").innerHTML = "";
    health = health + 1 / 500;
  }
  if (subs >= 1000000) {
    document.getElementById("eight").innerHTML = "";
    food = food + 1 / 500;
  }
  if (subs >= 5000000) {
    document.getElementById("seven").innerHTML = "";
    energy = energy + 1 / 500;
  }
  if (subs >= 8500000) {
    document.getElementById("six").innerHTML = "";
    subs = subs + 1 / 500;
  }
  if (subs >= 10000000) {
    document.getElementById("five").innerHTML = "";
    boost = boost + 1 / 100000;
  }
  if (subs >= 15000000) {
    document.getElementById("four").innerHTML = "";
    xp = xp + 1 / 100000;
  }
  if (subs >= 25000000) {
    document.getElementById("three").innerHTML = "";
    subs = subs + 1 / 500;
  }
  if (subs >= 40000000) {
    document.getElementById("two").innerHTML = "";
    subs = subs + 1 / 500;
  }
  if (subs >= 100000000) {
    document.getElementById("one").innerHTML = "";
    boost = boost + 1 / 500;
  }
  if (subs >= 1000000000000) {
    document.getElementById("king").innerHTML = "THANKS FOR PLAYING! YOU WON!";
    money = money + money;
    subs = subs + subs;
    health = 100;
    food = 100;
    energy = 100;
    alert("You have won! You are now in sandbox mode!");
  }
  setTimeout("achievements();", 1);
}

function walk() {
  
  if(food >= 25 && energy >= 25){

    food = food - 25;
    energy = energy - 25;
    time = time + 2;

    rand = Math.floor(Math.random() * 6 + 1);
    if (rand === 1) {
      alert("You have found 20$ on the ground! Nice!");
      money = money + 20;
    }
    if (rand === 2) {
      alert("You have found 10$ on the ground! Nice!");
      money = money + 10;
    }
    if (rand === 3) {
      alert("You have found some pizza in a garbage can. + 25 food!");
      food = food + 25;
    }
    if (rand === 4) {
      alert("You have been running and kicked someone's dog by accident. You pay -25$");
      money = money - 25;
    }
    if (rand === 5) {
      alert("You found some old bag, it had some money. + 25 money!");
      money = money + 25;
    }
    if (rand === 6) {
      alert("Just a casual day!");
    }
  }
}

function talk() {
  if (energy >= 5 && food >= 5) {
    energy = energy - 5;
    food = food - 5;
    likeness += Math.floor(Math.random() * 3 + 1);
    time = time + 1;
  }
}

function invite() {
  if (likeness >= 25 && money >= 25 && energy >= 10) {
    money = money - 25;
    energy = energy - 10;
    food = food + 15;
    likeness += Math.floor(Math.random() * 5 + 2);
    time = time + 2;
  }
}

function comeover() {
  if (likeness >= 50 && energy >= 15) {
    energy = energy - 15;
    food = food + 10;
    likeness += Math.floor(Math.random() * 15 + 5);
    time = time + 3;
  }
}

function buygift() {
  if (money >= 500) {
    money = money - 500;
    likeness += Math.floor(Math.random() * 150 + 50);
    time = time + 1;
  }
}

// ---------------------------------------------- TUTORIAL FUNCTION ---------------------------------------------
function tutorial() {
  alert("Make sure you have Prompt boxes enabled throughout the game!");
  alert("Objective of this game is to become a popular youtuber!");
  alert("To do that you need to get some subs (subscribers)");
  alert("You do that by recording videos, the more subs you have the more views and money per view.");
  alert("You can also upgrade your editing skills. You do that by buying a lesson under youtube.");
  alert("Food and energy is important to do stuff. Health is most important. If you ran out of health you will lose the game!");
  alert("To fill Food you eat, to fill energy you sleep. Every action costs energy and food.");
  alert("In criminal job you get x2 chance of stealing when its night time. Just watch the red text!");
  alert("Some shops are open only in some days, make sure you buy enough food to survive while shop is closed!");
  alert("TIPS: You should buy some food and work. The more you work the more you earn per job. Make sure you have lots of money before you start recording videos.");
  alert("There is also some hidden actions.");
  alert("Time goes on even if you dont do actions!");
  alert("PS Remember to pay your taxes, they are every 7 days!");
  alert("GOOD LUCK!");
}