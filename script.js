console.log("welcone to spotify")

let songIndex = 0;
let audioElement = new Audio('2.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif  = document.getElementById('gif');

let songs = [
    {songName: "Let Me Down Slowly", filePath:"spotify\1.mp3", coverPath:"spotify\cover1.jpg"},
    {songName: "joker", filePath:"spotify\2.mp3", coverPath:"spotify\cover2.jpg"},
    {songName: "coffine", filePath:"spotify\3.mp3", coverPath:"spotify\cover3.jpg"},
    {songName: "Stay", filePath:"spotify\4.mp3", coverPath:"spotify\cover4.jpg"},
    {songName: "Middle Of The Night", filePath:"spotify\5.mp3", coverPath:"spotify\cover5.jpg"}


]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
       }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//audioElement.play();
audioElement.addEventListener('timeupdate', ()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})