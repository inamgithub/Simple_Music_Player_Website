let songIndex = 0;
let audioElement = new Audio();
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif  = document.getElementById('gif');
let masterSongName  = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let Me Down Slowly", filePath:" 1.mp3", coverPath:"cover1.jpg"},
    {songName: "joker", filePath:"2.mp3", coverPath:"cover2.jpg"},
    {songName: "snap", filePath:"3.mp3", coverPath:"cover3.jpg"},
    {songName: "Stay", filePath:"4.mp3", coverPath:"cover4.jpg"},
    {songName: "Middle Of The Night", filePath:"5.mp3", coverPath:"cover5.jpg"},
    {songName: "Ek Tu Hai", filePath:"6.mp3", coverPath:"cover6.jpg"},
    {songName: "Keseriya", filePath:"7.mp3", coverPath:"cover3.jpg"}

]

songItems.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
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

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () =>{
    if (songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () =>{
    if (songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})