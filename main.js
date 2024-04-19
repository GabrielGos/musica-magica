song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
createCanvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF000");
    stroke("#fF000");

    if(scoreRightWristY > 0.2)
    {
    circle(rightWristY,rightWristY, 20);
if(rightWristY >0 && rightWristY <= 100)
{
    document.getElementsById("speed").innerHTML = "Velocide = 0.5x";
    song.rate(0.5);
}
  else if(rightWristY >100 && rightWristY <= 200) 
  {
    document.getElementById("speed").innerHTML = "Velocidade = 1x";
    song.rate(1);
  }

  else if(rightWristY >200 && rightWristY <= 300) 
  {
    document.getElementById("speed").innerHTML = "Velocidade = 1.5x";
    song.rate(1.5);

  }

  else if(rightWristY >300 && rightWristY <= 400) 
  {
    document.getElementById("speed").innerHTML = "Velocidade = 2x";
    song.rate(1);
  }

  else if(rightWristY >400) 
  {
    document.getElementById("speed").innerHTML = "Velocidade = 2.5x";
    song.rate(1);
  }

    }

    if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY,20);
    InNumberLeftWristY = Number(leftWristY);
    revome_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume =" + volume;
    song.setVolume(volume);
    
    }
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Inittialized')
}


function play()
{
    song.play();
    song.setVolume(1)
    song.rate(1)
}

function gotPoses(results){
    if(result.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.y;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = result[0].pose.rightWristX;
        rightWristY = result[0].pose.rightWristY;
        console.log("rightWirstX = ") + rightWristX +" rightWristY = "+ rightWristY
    }
}

