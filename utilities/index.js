const discover=document.getElementById("dis-cover");
discover.addEventListener('click',function(){
    window.location.href="http://127.0.0.1:5500/index-old.html";
});



const color=document.getElementById("col-or");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
color.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

let complete=document.getElementsByClassName("comp-lete");
const correct=document.getElementById("co-rrect");
let task=document.getElementById("ta-sk");
let commentBox=document.getElementsByClassName("comment");
let completeCount=0;
for(let i=0;i<complete.length;i++){
    complete[i].addEventListener('click',function(){
        alert('Board updated Successfully ');
        task.innerText--;
        correct.innerText++;
        complete[i].style.display="none";
        let title=complete[i].closest(".card.bg-base-100").querySelector("h2").innerText;
        
        let time=new Date().toTimeString();
        commentBox[0].innerHTML +=` <br> 
        <br>
        ${title} completed at ${time}`;
        completeCount++;
        if(completeCount==6){
            alert("Congratulation!!! You have completed all the current task");
        }
    })
}

const clear=document.getElementById("cle-ar");
clear.addEventListener("click",function(){
    commentBox[0].innerHTML="";
});



