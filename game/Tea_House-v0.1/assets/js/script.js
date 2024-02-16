//-- View Constants
let madeItem = "glassFreshRosemary";
let opOneView = document.querySelector(".op-one")
let opTwoView = document.querySelector(".op-two")
let opThreeView = document.querySelector(".op-three")
let opFourView = document.querySelector(".op-four")
let coinIcon = document.querySelector(".coin-icon")
let resImg = document.querySelector(".res-img")
let orderList = document.querySelector(".order-list")


let moneytxt = document.querySelector(".money-text")
let outxt = document.querySelector(".output-text")
let selectedMaterial = document.querySelectorAll("[data-material]")
let mixBtn = document.querySelector("[data-mix]")
let clrBtn = document.querySelector("[data-clear]")

//-- Other Variables
let opMat, opOne, opTwo, opThree, opFour, computation, result, money = 0.0, item

var images = {
    //-- IN GLASS IMAGES LINK
    plus: "./assets/img/thick-plus-black-icon.png",
    water: "./assets/img/in_glass/water-glass.png",
    coffee_beans : "./assets/img/in_glass/coffee-beans-glass.png",
    fresh_leaves : "./assets/img/in_glass/fresh-leaves-glass.png",
    lemon_grass : "./assets/img/in_glass/lemon-grass-glass.png",
    fresh_rosemary: "./assets/img/in_glass/rosemary-fresh-glass.png",

    // -- GLASS FILL IMAGES LINK
    glassEmpty: "./assets/img/glass-empty.png",
    glassWater: "./assets/img/glass_fill/glass-water.png",
    glassCoffee: "./assets/img/glass_fill/glass-coffee.png",
    glassFreshTea: "./assets/img/glass_fill/glass-fresh-leaves-tea.png",
    glassLemonGrass: "./assets/img/glass_fill/glass-lemon-grass.png",
    glassFreshRosemary: "./assets/img/glass_fill/glass-rosemary-fresh.png",

    glassMishmash: "./assets/img/glass_fill/glass-mishmash.png"
}

var cost = {
    glassEmpty: 0,
    glassWater: 1.25,
    glassCoffee: 2.15,
    glassFreshTea: 3.55,
    glassLemonGrass: 3.75,
    glassFreshRosemary: 4.15,
}

var naming = {
    glassEmpty: "Empty Glass",
    glassWater: "Hot Water",
    glassCoffee: "Hot Coffee",
    glassFreshTea: "Fresh Leaf Hot Tea",
    glassLemonGrass: "Fresh Lemon Grass Hot Tea",
    glassFreshRosemary: "Fresh Hot Rosemary Tea"
}

let orderItems = ["glassFreshRosemary", "glassLemonGrass"]

class Mixer{
    clear(){
        opOne = undefined;
        opTwo = undefined;
        opThree = undefined;
        opFour = undefined;
        opMat = undefined;
        mixer.showResult("glassEmpty","Empty Glass")
    }
    delete(){

    }
    appendMaterial(newOpMat){
        if(opMat != undefined){
            opMat = opMat+","+newOpMat;
        }else{
            opMat = newOpMat;
        }
        mixer.assignMaterial(opMat)
    }
    assignMaterial(opMat){
        opMat = opMat.split(",");
        let newOpMat = opMat.slice(0,4)
        opOne = newOpMat[0];
        opTwo = newOpMat[1];
        opThree = newOpMat[2];
        opFour = newOpMat[3];
    }
    compute(opOne, opTwo, opThree, opFour){
        let computation
        if(opThree == undefined && opFour == undefined){
            if(opOne == "water" && opTwo == "fresh_rosemary"){
                computation = "glassFreshRosemary"
            }
            else if(opOne == "water" && opTwo == "lemon_grass"){
                computation = "glassLemonGrass"
            }
            else if(opOne == "water" && opTwo == "fresh_leaves"){
                computation = "glassFreshTea"
            }
            else if(opOne == "water" && opTwo == "water")
            {
                computation = "glassWater"
            }
            else if(opOne == "water" && opTwo == "coffee_beans")
            {
                computation = "glassCoffee"
            }else{
                computation = "glassMishmash"
            }
        }else{
            computation = "glassMishmash"
        }
        result = naming[computation]
        mixer.showResult(computation, result)
        mixer.sellMaterial(orderItems,computation);
    }

    showResult(computation, result){   
        resImg.src = images[computation];
        outxt.innerText = result;
    }

    sellMaterial(orderItems, madeItem){
        if(orderItems[0] == madeItem){
            money = money + cost[madeItem];
            orderItems.shift();
        }
    }
}
class myMoney{
    getStoredMoney(){
        if (getStoreMoney === null) {
            localStorage.setItem('store_money', 0);
            money = 0;
        } else {
            if(money < getStoreMoney){
                money = getStoreMoney
            }else{
                localStorage.setItem("store_money",money)
            }
        }
    }
}

class updateInGlass{
    glass(opOne,opTwo,opThree,opFour){
        // OPTION ONE
        if(opOne!=undefined){
                opOneView.src = images[opOne];
        }else{
            opOneView.src= images["plus"];
        }
        // OPTION TWO
        if(opTwo!=undefined){
                opTwoView.src = images[opTwo];
        }else{
            opTwoView.src= images["plus"];
        }
        // OPTION THREE
        if(opThree!=undefined){
            opThreeView.src = images[opThree];
        }else{
                opThreeView.src= images["plus"];
        }
        // OPTION FOUR
        if(opFour!=undefined){
                opFourView.src = images[opFour];
        }else{
            opFourView.src= images.plus;
        }
    }
}

class setView{
    orderItemsView(){
        var fragList = document.createDocumentFragment();
        orderItems.forEach(function (element) {
            item = naming[element]
            var p = document.createElement('p');
            p.textContent = item;
            fragList.appendChild(p);
         });
        orderList.appendChild(fragList);
    }
    updateMoneyView(){
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
let updateinglass = new updateInGlass(opOne,opTwo,opThree,opFour)
let setview = new setView()

selectedMaterial.forEach(button=>{
    button.addEventListener('click',()=>{
        mixer.appendMaterial(button.getAttribute("data-material"))
        updateinglass.glass(opOne,opTwo,opThree,opFour)
    })
})

//-- CRAFT BUTTON CLICK
mixBtn.addEventListener('click',button =>{
    mixer.compute(opOne,opTwo,opThree,opFour)
    empty(orderList);
    setview.orderItemsView()
    setview.updateMoneyView()
})

//-- WASH BUTTON CLICK
clrBtn.addEventListener('click', button=>{
    mixer.clear();
    updateinglass.glass(opOne,opTwo,opThree,opFour)
})

//-- MONEY MANAGER
let getStoreMoney = localStorage.getItem("store_money")
coinIcon.addEventListener('click',()=>{
    mymoney.getStoredMoney()
    setview.updateMoneyView()
})


window.addEventListener("DOMContentLoaded",()=>{

    setview.orderItemsView()
    mymoney.getStoredMoney()
    setview.updateMoneyView()
    //-- ORDER MODAL
    setTimeout(()=>{
        $('#orderModal').modal('show')
    },10000)
    setview.updateMoneyView();
})


