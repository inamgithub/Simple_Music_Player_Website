# Spotify_Clone_project
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
         <ul>
            <li class="brand"><img src= "logo.png" alt="spotify"><span>Spotify</span> </li>
            <li>Home</li>
            <ll>About</ll>
         </ul>
    </nav>

    <div class="container">
        
        <div class="songlist">
              <h1>Best of NCS- No Copyrights</h1>
              <div class="songItemContainer">
                <div class="songItem">
                    <img src="cover1.jpg" alt="1">
                    <span class="songName"> let me down slowly</span>
                    <span class="songlistplay"> <span class="timespan"> <i class="fa-solid fa-circle-play"></i>  0:30</span></span>              
                 </div>
              
              
                <div class="songItem">
                    <img src="cover2.jpg" alt="2" style="height: 40px; border-radius: 50px;">
                    <span class="songName">Joker</span>
                    <span class="songlistplay"> <span class="timespan"> <i class="fa-solid fa-circle-play"></i>  0:30</span></span>              
                 </div>
              
              
                <div class="songItem">
                    <img src="cover3.jpg" alt="3">
                    <span class="songName">Coffin</span>
                    <span class="songlistplay"> <span class="timespan"> <i class="fa-solid fa-circle-play"></i>  0:30</span></span>              
                 </div>
              
              
                <div class="songItem">
                    <img src="cover4.jpg" alt="4">
                    <span class="songName">Stay</span>
                    <span class="songlistplay"> <span class="timespan"> <i class="fa-solid fa-circle-play"></i>  0:30</span></span>              
                 
              </div>
              
                <div class="songItem">
                    <img src="cover5.jpg" alt="5">
                    <span class="songName">Middle Of The Night</span>
                    <span class="songlistplay"> <span class="timespan"> <i class="fa-solid fa-circle-play"></i>  0:30</span></span>              
                 </div>
              
            </div>
        </div>   
        <div class="songbanner"></div>
    </div>
    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
        <div class="icons">
            <!--fontawesome icons-->
            <i class="fa-solid fa-backward"></i>
            <i class="fa-solid fa-circle-play" id = "masterPlay"></i>
            <i class="fa-solid fa-forward"></i>
            
        </div>
        <div class="songInfo">
            <img src="anim.gif" width="80px" id = "gif">
        </div>


    </div>

    <script src="https://kit.fontawesome.com/957c8f8b37.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>

</body>
</html>


