let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let exitGameBtn= document.querySelector("#exit-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetBtn = () => {
    turn0 = true;
    enableboxs();
    msgContainer.classList.add("hide");
};

const exitGame = () => {
    disableboxs();
    msg.innerText = "👋Thanks for playing!👋";
    msgContainer.classList.remove("hide");
};

boxs.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxs = () => {
    for (let box of boxs){
        box.disabled = true;
    }
};

const enableboxs = () => {
    for (let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉🎈Congratulations, ${winner} is the Winner!🎉🎈`;
    msgContainer.classList.remove("hide");
    disableboxs();
    setTimeout(() => {
        resetBtn();
    },2000);
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
};
resetbtn.addEventListener("click", resetBtn);
exitGameBtn.addEventListener("click", exitGame);

