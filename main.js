let displayBox = document.querySelector(".display");

function showDisplay(event){
    const x = event.target.innerText;
    if(displayBox.innerHTML == 0){
        return displayBox.innerHTML=x;
    }
    return displayBox.innerHTML +=x;
}

function calculate(){
    let result=displayBox.innerText;
    displayBox.innerText=eval(result);
}

function allclear(){
    displayBox.innerText = 0;
}

function clear(){
    let text=displayBox.innerText;
    if(text.length == 1){
        displayBox.innerText =0;
    }else{//5*4 =>length=3 but substring(0,2) means 0,1 index and the
         //another one means (0,1) wich is only 0
        displayBox.innerText=text.substring(0 , text.length -1)
    }
}

let list=document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click",showDisplay)
})

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click",allclear);
document.querySelector(".clear").addEventListener("click",clear);