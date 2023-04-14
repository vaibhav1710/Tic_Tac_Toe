let turn = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let pturn = "X"
let count=0;

const changeturn = () =>{
    count++;
    return pturn=="X"?"0":"X"
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]
  wins.forEach(e =>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!== '')){
     document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!"
     isgameover = true;
     document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "150px"
    }
  })
}
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
         if(boxtext.innerText == ''){
            boxtext.innerText=pturn;
           pturn = changeturn();
            turn.play();
            checkWin();
            if(count==9){
                document.getElementsByClassName('info')[0].innerText = "Draw";
                setTimeout(
                "resetme()",3000);
            }
            else if(!isgameover){ document.getElementsByClassName('info')[0].innerText = "Turn for "+pturn;}
         }
    })
})

resetme = () =>{
    count=0;
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
    });
    pturn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+pturn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0"
}

reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
    });
    pturn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+pturn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0"
    count=0;
})

