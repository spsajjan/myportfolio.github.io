//-- View Constants
let opOneView = document.querySelector(".op-one")
let opTwoView = document.querySelector(".op-two")
let opThreeView = document.querySelector(".op-three")
let opFourView = document.querySelector(".op-four")
let coinIcon = document.querySelector(".coin-icon")
let resImg = document.querySelector(".res-img")
let orderList = document.querySelector(".order-list")
let craftxt = document.querySelector("craft-text")

let moneytxt = document.querySelector(".money-text")
let outxt = document.querySelector(".output-text")
let selectedMaterial = document.querySelectorAll("[data-material]")
let mixBtn = document.querySelector("[data-mix]")
let clrBtn = document.querySelector("[data-clear]")
let acceptOrderBtn = document.querySelector("#accept-order");

//-- Other Variables
let opMat, opOne, opTwo, opThree, opFour, computation, result, money = 0.0, item, drinkNow, shopFullAlert = false

var customers = {
    grandma: "./assets/img/customer-icons/Icon_Grandma.png",
    ivy_sheehan: "./assets/img/customer-icons/Icon_Ivy_Sheehan.png",
    hyun_kim: "./assets/img/customer-icons/Icon_Hyun_Kim.png",
    sophia: "./assets/img/customer-icons/Icon_Sophia.png",
    summer: "./assets/img/customer-icons/Icon_Summer.png",
    don_blaine: "./assets/img/customer-icons/Icon_Don_Blaine.png",
    jack_gilmore: "./assets/img/customer-icons/Icon_Jack_Gilmore.png",
    lina_young: "./assets/img/customer-icons/Icon_Lina_Young.png",
    sarah_suthers: "./assets/img/customer-icons/Icon_Sarah_Suthers.png",
}

function random_item_array(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function random_item(items) {
    // Use Math.random() to generate a random number between 0 and 1,
    // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
    return items[Math.floor(Math.random() * items.length)];
}

var drinks = [
    "glassIce",
    "glassWater",
    "glassIcedWater",
    "glassAmericano",
    "glassIcedAmericano",
    "glassFreshTea",
    "glassIcedFreshTea",
    "glassOolongTea",
    "glassBlackTea",
    "glassLemonGrass",
    "glassFreshRosemary",
    "glassDriedRosemary",
    "glassCamomile"
]

var images = {
    //-- IN GLASS IMAGES LINK
    plus: "./assets/img/thick-plus-black-icon.png",
    ice: "./assets/img/in_glass/ice-glass.png",
    water: "./assets/img/in_glass/water-glass.png",
    coffee_beans: "./assets/img/in_glass/coffee-beans-glass.png",
    fresh_leaves: "./assets/img/in_glass/fresh-leaves-glass.png",
    oolong_leaves: "./assets/img/in_glass/oolong-tea-glass.png",
    lemon_grass: "./assets/img/in_glass/lemon-grass-glass.png",
    fresh_rosemary: "./assets/img/in_glass/rosemary-fresh-glass.png",
    dried_rosemary: "./assets/img/in_glass/rosemary-dried-glass.png",
    camomile_leaves: "./assets/img/in_glass/camomile-glass.png",
    black_tea_leaves: "./assets/img/in_glass/black-tea-glass.png",
    // -- GLASS FILL IMAGES LINK
    glassEmpty: "./assets/img/glass-empty.png",
    glassIce: "./assets/img/glass_fill/glass-ice.png",
    glassWater: "./assets/img/glass_fill/glass-water.png",
    glassIcedWater: "./assets/img/glass_fill/glass-ice-water.png",
    glassAmericano: "./assets/img/glass_fill/glass-americano.png",
    glassIcedAmericano: "./assets/img/glass_fill/glass-iced-americano.png",
    glassFreshTea: "./assets/img/glass_fill/glass-fresh-leaves-tea.png",
    glassIcedFreshTea: "./assets/img/glass_full/glass-iced-fresh-leaves-tea.png",
    glassOolongTea: "./assets/img/glass_fill/glass-oolong-tea.png",
    glassBlackTea: "./assets/img/glass_fill/glass-black-tea.png",
    glassLemonGrass: "./assets/img/glass_fill/glass-lemon-grass.png",
    glassFreshRosemary: "./assets/img/glass_fill/glass-rosemary-fresh.png",
    glassDriedRosemary: "./assets/img/glass_fill/glass-rosemary-dried.png",
    glassCamomile: "./assets/img/glass_fill/glass-camomile.png",

    glassMishmash: "./assets/img/glass_fill/glass-mishmash.png"
}

var cost = {
    glassEmpty: 0.6,
    glassIce: 1.0,
    mishmash: 1.05,
    glassWater: 1.25,
    glassAmericano: 2.15,
    glassIcedAmericano: 2.35,
    glassFreshTea: 3.55,
    glassIcedFreshTea: 3.62,
    glassOolongTea: 3.65,
    glassIcedOolongTea: 3.68,
    glassBlackTea: 3.70,
    glassLemonGrass: 3.75,
    glassFreshRosemary: 4.15,
    glassDriedRosemary: 5.85,
    glassCamomile: 6.05,
}

var naming = {

    // -- CUSTOMER NAMING
    grandma: "Grandma",
    ivy_sheehan: "Ivy Sheehan",
    hyun_kim: "Hyun Kim",
    sophia: "Sophia",
    summer: "Summer",
    don_blaine: "Don Blaine",
    jack_gilmore: "Jack Gilmore",
    lina_young: "Lina Young",
    sarah_suthers: "Sarah Suthers",

    // -- MATERIALS NAMING
    glassEmpty: "Empty Glass",
    glassWater: "Hot Water",
    glassIce: "Ice",
    glassIcedWater: "Cold Water",
    glassAmericano: "Hot Americano",
    glassIcedAmericano: "Iced Americano",
    glassFreshTea: "Fresh Leaf Hot Tea",
    glassOolongTea: "Semi Fermented Oolong Tea",
    glassBlackTea: "Fully Fermented Black Tea",
    glassLemonGrass: "Fresh Lemon Grass Hot Tea",
    glassFreshRosemary: "Fresh Hot Rosemary Tea",
    glassDriedRosemary: "Dried Hot Rosemary Tea",
    glassCamomile: "Camomile Tea",
    glassMishmash: "Mishmash"
}

let orderItems = []
class Mixer {
    clear() {
        opOne = undefined;
        opTwo = undefined;
        opThree = undefined;
        opFour = undefined;
        opMat = undefined;
        mixer.showResult("glassEmpty", naming["glassEmpty"])
    }
    appendMaterial(newOpMat) {
        if (opMat != undefined) {
            opMat = opMat + "," + newOpMat;
        } else {
            opMat = newOpMat;
        }
        mixer.assignMaterial(opMat)
    }
    assignMaterial(opMat) {
        opMat = opMat.split(",");
        let newOpMat = opMat.slice(0, 4)
        opOne = newOpMat[0];
        opTwo = newOpMat[1];
        opThree = newOpMat[2];
        opFour = newOpMat[3];
    }
    compute(opOne, opTwo, opThree, opFour) {
        if (opFour == undefined) {
            if (opOne == "water" && opTwo == "ice" && opThree == "coffee_beans") { computation = "glassIcedAmericano" }
            else if (opThree == undefined && opFour == undefined) {
                if (opOne == "ice" && opTwo == "ice") { computation = "glassIce" }
                else if (opOne == "water") {
                    if (opTwo == "black_tea_leaves") { computation = "glassBlackTea" }
                    if (opTwo == "ice") { computation = "glassIcedWater" }
                    if (opTwo == "camomile_leaves") { computation = "glassCamomile" }
                    if (opTwo == "oolong_leaves") { computation = "glassOolongTea" }
                    if (opTwo == "dried_rosemary") { computation = "glassDriedRosemary" }
                    if (opTwo == "fresh_rosemary") { computation = "glassFreshRosemary" }
                    if (opTwo == "lemon_grass") { computation = "glassLemonGrass" }
                    if (opTwo == "fresh_leaves") { computation = "glassFreshTea" }
                    if (opTwo == "coffee_beans") { computation = "glassAmericano" }
                    if (opTwo == "water") { computation = "glassWater" }
                } else { computation = "glassMishmash" }
            } else { computation = "glassMishmash" }
        } else { computation = "glassMishmash" }

        result = naming[computation]
        mixer.showResult(computation, result)
        mixer.sellDrink(orderItems, computation)
        mixer.updateCraftModal(computation)
    }
    showResult(computation, result) {
        resImg.src = images[computation];
        outxt.innerText = result;
    }
    sellDrink(orderItems, madeItem) {
        if (orderItems[0] == madeItem) {
            money = money + cost[madeItem];
            orderItems.shift();
            mixer.drinkSold();
        }
    }
    drinkSold() {
        opOne = undefined;
        opTwo = undefined;
        opThree = undefined;
        opFour = undefined;
        opMat = undefined;
        updateinglass.glass();
    }
    updateCraftModal(computation) {
        $(".craft-text").text(naming[computation]);
        $('.craft-img').attr('src', images[computation]);
    }
}
class myMoney {
    getStoredMoney() {
        if (getStoreMoney === null) {
            localStorage.setItem('store_money', 0);
            money = 0;
        } else {
            if (money < getStoreMoney) {
                money = getStoreMoney
            } else {
                localStorage.setItem("store_money", money)
            }
        }
    }
}

class updateInGlass {
    glass(opOne, opTwo, opThree, opFour) {
        // OPTION ONE
        if (opOne != undefined) {
            opOneView.src = images[opOne];
        } else {
            opOneView.src = images["plus"];
        }
        // OPTION TWO
        if (opTwo != undefined) {
            opTwoView.src = images[opTwo];
        } else {
            opTwoView.src = images["plus"];
        }
        // OPTION THREE
        if (opThree != undefined) {
            opThreeView.src = images[opThree];
        } else {
            opThreeView.src = images["plus"];
        }
        // OPTION FOUR
        if (opFour != undefined) {
            opFourView.src = images[opFour];
        } else {
            opFourView.src = images.plus;
        }
    }
}

class setView {
    orderItemsView() {
        var fragList = document.createDocumentFragment();
        orderItems.forEach(function (element) {
            item = naming[element]
            var p = document.createElement('p');
            p.textContent = item;
            fragList.appendChild(p);
        });
        orderList.appendChild(fragList);
    }
    updateOrderItemsView() {
        $('.order-list').empty();
        setview.orderItemsView();
    }
    updateMoneyView() {
        //-- Round up money decimals
        money = Math.round(money * 100) / 100;
        moneytxt.innerText = money;
    }
}

function empty(element) {
    element.textContent = "";
}

let mymoney = new myMoney()
const mixer = new Mixer(opOne, opTwo, opThree, opFour)
let updateinglass = new updateInGlass(opOne, opTwo, opThree, opFour)
let setview = new setView()

selectedMaterial.forEach(button => {
    button.addEventListener('click', () => {
        mixer.appendMaterial(button.getAttribute("data-material"))
        updateinglass.glass(opOne, opTwo, opThree, opFour)
    })
})

//-- CRAFT BUTTON CLICK
mixBtn.addEventListener('click', button => {
    mixer.compute(opOne, opTwo, opThree, opFour)
    empty(orderList);
    setview.orderItemsView()
    setview.updateMoneyView()
    $('#craftModal').modal('show')
})

//-- WASH BUTTON CLICK
clrBtn.addEventListener('click', button => {
    mixer.clear();
    updateinglass.glass(opOne, opTwo, opThree, opFour)
})

//-- MONEY MANAGER
let getStoreMoney = localStorage.getItem("store_money")
coinIcon.addEventListener('click', () => {
    mymoney.getStoredMoney()
    setview.updateMoneyView()
})

function checkOrders() {
    if (orderInLimit()) {
        setTimeout(() => {
            callCustomer();
        }, 10000)
    } else {
        if (shopFullAlert == (false || undefined)) {
            alert("Your shop is full please finish the orders.");
            shopFullAlert == true;
        }
        setTimeout(() => {
            checkOrders();
        }, 10000)
    }
}


function orderInLimit() {
    if (orderItems.length < 5) {
        return true
    } else {
        return false
    }
}
// -- ACCEPT ORDER BUTTON
function acceptOrder() {
    orderItems.push(drinkNow)
    $('#orderModal').modal('hide')
    setview.updateOrderItemsView()
}
acceptOrderBtn.addEventListener('click', () => {
    acceptOrder()
})

function callCustomer() {
    let cust_keys = Object.keys(customers)
    let cust_random = random_item(cust_keys)
    drinkNow = random_item_array(drinks)
    console.log(drinkNow);
    $('#cust-img').attr("src", customers[cust_random])
    $('#cust-txt').html(naming[drinkNow])
    $('#orderModal').modal('show')
    setTimeout(() => {
        checkOrders();
    }, 10000)
}


window.addEventListener("DOMContentLoaded", () => {
    setview.orderItemsView()
    mymoney.getStoredMoney()
    setview.updateMoneyView()
    //-- ORDER MODAL
    setTimeout(() => {
        checkOrders();
    }, 10000)
    setview.updateMoneyView();
})


