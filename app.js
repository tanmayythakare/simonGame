let gameseq=[];
let userseq=[];
let level=0;
let btns=["yellow","red","blue","green"]
let started=false;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        allBtns.forEach(function(btn){
            btn.removeAttribute("disabled");
        });
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");
    },250);

}
function btnUserFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);

}
    
function levelUp(){
    
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let rindex=Math.floor(Math.random()*4);
    let rcolor=btns[rindex];
    let rbtn=document.querySelector(`.${rcolor}`);

    console.log(gameseq);

    gameseq.push(rcolor);
    console.log(gameseq);
    gameFlash(rbtn);
}
function checkAnswer(idx){    
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelUp,1000);         
        }
    }
    else{
        h2.innerHTML=`Game Over,Your score is <b>${level-1}</b><br>Press Any Key to Restart`;
        startOver();
    }
}
let allBtns=document.querySelectorAll(".btn");

function btnPress(){
    let btn=this;
    btnUserFlash(btn);
    
    console.log(this);

    let userclr=btn.getAttribute("id");
    userseq.push(userclr);    

    checkAnswer(userseq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function startOver(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
    h2.innerText="Press any key to start the game";
    allBtns.forEach(function(btn){
        btn.setAttribute("disabled",true);
    });
}
