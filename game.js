let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;
let count = 0;

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
        box.classList.add("Oclass");
        box.innerText="O";
        turnO=false;
    }else{
        box.classList.add("Xclass");
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    count++;
    checkDraw(count);
    checkWinner();

    })
});

checkDraw = (count)=>{
    if(count=== 9){
        msg.innerText=`DRAW`;
        msgContainer.classList.remove("hide");
        disableBoxes();

    }
}

const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    count =0;
    turnO=true;
    for(box of boxes){
        box.classList.remove("Xclass");
        box.classList.remove("Oclass");
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        console.log(pattern[0] , pattern[1] , pattern[2]);
        if(boxes[pattern[0]].innerText !="" && boxes[pattern[1]].innerText !="" && boxes[pattern[2]].innerText !="" && boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText && boxes[pattern[0]].innerText===boxes[pattern[2]].innerText){
            console.log(boxes[pattern[0]].innerText, "won the game");
            showWinner(boxes[pattern[0]].innerText);
        }
        console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);
        console.log(" ");
    }
}

resetBtn.addEventListener("click",enableBoxes);

