//-- View Constants
let money = 0;
let opOneView = document.querySelector(".op-one")
let opTwoView = document.querySelector(".op-two")
let opThreeView = document.querySelector(".op-three")
let opFourView = document.querySelector(".op-four")
let coinIcon = document.querySelector(".coin-icon")
let resImg = document.querySelector(".res-img")


let moneytxt = document.querySelector(".money-text")
let outxt = document.querySelector(".output-text")
let selectedMaterial = document.querySelectorAll("[data-material]")
let mixBtn = document.querySelector("[data-mix]")
let clrBtn = document.querySelector("[data-clear]")

//-- Other Variables
let opMat, opOne, opTwo, opThree, opFour, computation, result

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
                result = "Fresh Rosemary Tea"
            }
            else if(opOne == "water" && opTwo == "lemon_grass"){
                computation = "glassLemonGrass"
                result = "Fresh Lemon Grass Tea"
            }
            else if(opOne == "water" && opTwo == "fresh_leaves"){
                computation = "glassFreshTea"
                result = "Fresh Leaf Tea"
            }
            else if(opOne == "water" && opTwo == "water")
            {
                computation = "glassWater"
                result = "Water"
            }
            else if(opOne == "water" && opTwo == "coffee_beans")
            {
                computation = "glassCoffee"
                result = "Hot Coffee"
            }else{
                computation = "glassMishmash"
                result = "MishMash"
            }
        }else{
            computation = "glassMishmash"
            result = "MishMash"
        }
        mixer.showResult(computation, result)
    }
    showResult(computation, result){   
        resImg.src = images[computation];
        outxt.innerText = result;
    }
}

class setView{
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


const mixer = new Mixer(opOne, opTwo, opThree, opFour)
let setview = new setView(opOne,opTwo,opThree,opFour)
selectedMaterial.forEach(button=>{
    button.addEventListener('click',()=>{
        mixer.appendMaterial(button.getAttribute("data-material"))
        setview.glass(opOne,opTwo,opThree,opFour)
    })
})
mixBtn.addEventListener('click',button =>{
    mixer.compute(opOne,opTwo,opThree,opFour)
})
clrBtn.addEventListener('click', button=>{
    mixer.clear();
    setview.glass(opOne,opTwo,opThree,opFour)
})

//-- MONEY MANAGER
let getStoreMoney = localStorage.getItem("store_money")
coinIcon.addEventListener('click',()=>{
    if (localStorage.getItem("store_money") === null) {
        localStorage.setItem('store_money', 0);
    } else {
        if(money < getStoreMoney){
            money = getStoreMoney
        }else{
            localStorage.setItem("store_money",money)
        }
    }
    updateMoney();
})

function updateMoney(){
    moneytxt.innerText = money;
}

//-- ORDER MODAL
window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        $('#orderModal').modal('show')
    },10000)
    updateMoney();
})