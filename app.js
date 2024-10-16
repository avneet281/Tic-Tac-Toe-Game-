let boxes= document.querySelectorAll(".box");
let player0=true;
let resetbtn = document.querySelector(".reset-btn");
let newGame= document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let result=document.querySelector(".result");

const winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(player0)
            {
               box.innerText="0"; 
               player0=false;
            }
        else{
            // document.getElementById("myP2").style.color = "blue";
            box.innerText="X";
            player0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const checkWinner=()=>{
    for (let pattern of winnerPattern) {
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val!="" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
               showWinner(pos1Val);

            }
    }
    }
};
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=((winner)=>{
   result.innerText=`Congratulation, Winner is ${winner}`;
   msgContainer.classList.remove("hide");  //used to remove the hide property and show the result
   disableBoxes();
});

const resetGame= ()=>{
    player0=true;
    enableBoxes();
    msgContainer.classList.add("hide"); //used to add the hide property and play the game and this apply in both newGame btn and reset btn 
}

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

