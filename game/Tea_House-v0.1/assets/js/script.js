let resImg = document.querySelector(".res-img")
let outxt = document.querySelector(".output-text")
let opOneView = document.querySelector(".op-one")
let opTwoView = document.querySelector(".op-two")
let opThreeView = document.querySelector(".op-three")
let opFourView = document.querySelector(".op-four")
let selectedMaterial = document.querySelectorAll("[data-material]")
let mixBtn = document.querySelector("[data-mix]")
let clrBtn = document.querySelector("[data-clear]")
let opMat, opOne, opTwo, opThree, opFour

var images = {
    //-- IN GLASS IMAGES LINK
    plus: "./assets/img/thick-plus-black-icon.png",
    water: "./assets/img/in_glass/water-glass.png",
    coffee_beans : "./assets/img/in_glass/coffee-beans-glass.png",
    fresh_leaves : "./assets/img/in_glass/fresh-leaves-glass.png",
    lemon_grass : "./assets/img/in_glass/lemon-grass-glass.png",
    // -- GLASS FILL IMAGES LINK
    glassEmpty: "./assets/img/glass-empty.png",
    glassWater: "./assets/img/glass_fill/glass-water.png",
    glassCoffee: "./assets/img/glass_fill/glass-coffee.png",
    glassFreshTea: "./assets/img/glass_fill/glass-fresh-leaves-tea.png",
    glassLemonGrass: "./assets/img/glass_fill/glass-lemon-grass.png",
}
class Mixer{
    clear(){
        opOne = undefined;
        opTwo = undefined;
        opThree = undefined;
        opFour = undefined;
        opMat = undefined;
        resImg.src = images["glassEmpty"];
    }
    delete(){

    }
    appendMaterial(newOpMat){
        if(opMat != undefined){
            opMat = opMat+","+newOpMat;
        }else{
            opMat = newOpMat;
        }
        mixer.compute(opMat)
    }
    compute(opMat){
        opMat = opMat.split(",");
        var size = 3;
        let newOpMat = opMat.slice(0,4)
        opOne = newOpMat[0];
        opTwo = newOpMat[1];
        opThree = newOpMat[2];
        opFour = newOpMat[3]
    }
    showResult(opOne, opTwo, opThree, opFour ){
        let computation
        if(opThree == undefined && opFour == undefined){
            if(opOne == "water" && opTwo == "lemon_grass"){
                computation = "glassLemonGrass"
                outxt.innerText = "Fresh Lemon Grass Tea"
            }
            if(opOne == "water" && opTwo == "fresh_leaves"){
                computation = "glassFreshTea"
                outxt.innerText = "Fresh Leaf Tea"
            }
            if(opOne == "water" && opTwo == "water")
            {
                computation = "glassWater"
                outxt.innerText = "Water"
            }
            if(opOne == "water" && opTwo == "coffee_beans")
            {
                computation = "glassCoffee"
            }
        }else{
            computation = "glassMishmash"
        }
        resImg.src = images[computation];
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
    mixer.showResult(opOne,opTwo,opThree,opFour)
})
clrBtn.addEventListener('click', button=>{
    mixer.clear();
    setview.glass(opOne,opTwo,opThree,opFour)
})