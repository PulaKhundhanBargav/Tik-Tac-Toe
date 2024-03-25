let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rest-btn");
let newGamebtn=document.querySelector("#new-btn");
let mesgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//let playerx,playerO
const  winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    mesgContainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener("click", ()=>{
    console.log("box was clicked");
    if(turnO){//playerO
        box.innerText="O";
        turnO=false;
    }else{//playerX
        box.innerText="X";
        turnO=true;
    }
    box.disabled= true;

    checkwinner();
   });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const showWinner = (winner) => {
     msg.innerText =`Congratulations , Winner is ${winner}`;
     mesgContainer.classList.remove("hide");
     disableBoxes();
}
const checkwinner = () =>{
    for(let pattern of winningpatterns){
       /*console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,
                    boxes[pattern[1]].innerText,
                    boxes[pattern[2]].innerText
                    );
    }*/
    let position1val=boxes[pattern[0]].innerText;
    let position2val=boxes[pattern[1]].innerText;
    let position3val=boxes[pattern[2]].innerText;
    if(position1val != "" && position2val != ""  && position3val != ""){
        if(position1val === position2val && position2val === position3val){
            console.log("winner",position1val);
            showWinner(position1val);
        }
    }
}
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);