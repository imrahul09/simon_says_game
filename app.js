let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started ==false){
       // console.log("game is started");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq =[]; 
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    //console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250); 
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userSeq);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length ==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML= `Game over:Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}