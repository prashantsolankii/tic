//let btn1=document.querySelector("#btn1");

// // 
// const handler3=()=>{
//     console.log("button1 was clicked-handler3");
// }
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler2");
// })
// btn1.addEventListener("click",handler3)
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler4");
// })
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler5");
// })
// btn1.removeEventListener("click",handler3);
// let div = document.querySelector("div");

// div.onmouseover=()=> {
//     console.log("you are inside div");
// }
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 
 
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
           box.innerText="O";
           turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
        
    }
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner =(winner) => {
    if(winner == 'X'){
    msg.innerText = 'Congratulations,Winner is Musfikah';
    }
    else{
        msg.innerText = 'Congratulations,Winner is Prashant';
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(pattern of winPatterns ){
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
           if(pos1Val==pos2Val && pos2Val == pos3Val){
           // console.log("winner",pos1Val);
            showWinner(pos1Val);
           }
        }
       

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
